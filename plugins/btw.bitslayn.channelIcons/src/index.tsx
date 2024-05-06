import { SetStateAction, useState } from "react";
import { Injector, components, util, webpack } from "replugged";
import { React, modal } from "replugged/common";
import "./editor.css";
import { Store } from "replugged/dist/renderer/modules/common/flux";
import { AnyFunction, ContextMenuTypes } from "replugged/types";
import { capitalizeWords, injectChannelStyle } from "./helpers";
import { Icons, config } from "./icons";

const colorBrands: any = webpack.getByProps("colorBrand");
const ColorPicker: { CustomColorPicker: any } = await webpack.waitForProps("CustomColorPicker");
const inject: Injector = new Injector();
const { SearchableSelect }: { SearchableSelect: any } = webpack.getByProps("SearchableSelect");
const {
  ContextMenu: { MenuItem },
} = components;
const { openModal } = modal;
const Modals: { ConfirmModal: any } = webpack.getByProps("ConfirmModal");
export const { int2hex }: { int2hex: (int: any) => string } = webpack.getByProps("int2hex");
const { FormSwitch }: any = webpack.getByProps("FormSwitch");
const ChannelClass: { default: any } = webpack.getByProps("ChannelItemIcon");
const ChannelStore: { getChannel: AnyFunction } & Store = webpack.getByStoreName("ChannelStore");

function injectSavedChannelsStyles(): void {
  const coloredChannels: any = config.get("coloredChannels", {});
  Object.entries(coloredChannels).forEach(
    ([channelId, { color, icon }]: [string, { color: string; icon: string }]) => {
      injectChannelStyle(channelId, color, icon);
    },
  );
}

function openEditor(data: any): void {
  const RenderThis: React.FC<any> = (props) => {
    const { channel } = data;
    const [channelColor, setChannelColor] = useState<string>();
    const [channelIcon, setChannelIcon] = useState<string>();
    const [channelIconLabel, setChannelIconLabel] = useState<string>("");

    const [suggestedColors, setSuggestedColors] = useState<string[]>([
      "#dfaaa1",
      "#3d2921",
      "#c9a1df",
      "#a1d6df",
      "#b7dfa1",
    ]);
    const handleColorChange = (selectedColor: SetStateAction<string>): void => {
      setChannelColor(selectedColor);
      const convertedColor: string = int2hex(selectedColor);
      const updatedColors: string[] = [
        convertedColor,
        ...suggestedColors.filter((color) => color !== convertedColor),
      ].slice(0, 8);
      setSuggestedColors(updatedColors);
      injectChannelStyle(channel.id, convertedColor, channelIcon);
      config.set("suggestedColors", updatedColors);
      config.set("coloredChannels", {
        ...config.get("coloredChannels", {}),
        [channel.id]: { color: convertedColor, icon: channelIcon },
      });
    };

    return (
      <Modals.ConfirmModal
        confirmButtonColor={colorBrands.colorBrand}
        confirmText="Okay"
        header={`Customize #${channel.name}`}
        className="channelEditor"
        {...props}>
        <div
          className="channelEditorIcons"
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignContent: "flex-start",
            gap: "8px",
          }}>
          <ChannelClass.default
            className="channelExample"
            channel={ChannelStore.getChannel(channel.id)}
          />
          <SearchableSelect
            options={Icons}
            value={channelIconLabel}
            onChange={(iconPath: string) => {
              const Object: any = Icons.find((icon: any) => icon.value === iconPath);
              const Label: string = Object.name;

              setChannelIcon(iconPath);
              setChannelIconLabel(Label);
              injectChannelStyle(channel.id, int2hex(channelColor), channelIcon);
            }}
          />
          <components.Divider className="channelEditorDivider" />
          {Icons.map((label: any) => (
            <components.Clickable
              onClick={() => {
                console.log(int2hex(channelColor));
                setChannelIconLabel(label.value);
                injectChannelStyle(channel.id, int2hex(channelColor), label.value);
              }}>
              <svg
                className={label.label}
                viewBox="0 0 24 24"
                style={{
                  width: "24px",
                  height: "24px",
                }}>
                <path fill={int2hex(channelColor)} d={label.value} />
              </svg>
            </components.Clickable>
          ))}
        </div>

        <div
          className="channelEditorSidebar"
          style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          <ColorPicker.CustomColorPicker
            type={1}
            className="channelEditorColorPicker"
            value={channelColor}
            onChange={handleColorChange}
            suggestedColors={suggestedColors}
          />
          <components.Divider className="channelEditorDivider" />
        </div>
      </Modals.ConfirmModal>
    );
  };

  openModal((x: any) => <RenderThis {...x} />);
}

const changedChannelNames: any[] = [];

function isChannelIdExists(channelId: string): boolean {
  return changedChannelNames.some((entry: any) => entry.channelid === channelId);
}

export function start(): void {
  injectSavedChannelsStyles();
  inject.utils.addMenuItem(ContextMenuTypes.ChannelContext, (data: any) => {
    const { channel } = data;
    return (
      <MenuItem
        id={`customize-channel-${channel.id}`}
        label="Customize Channel"
        action={() => openEditor(data)}
      />
    );
  });
  inject.after(ChannelClass, "default", (a: any) => {
    const channelInstance: any = a?.[0];
    if (channelInstance && config.get("changeChannelNames", false)) {
      const channel: any = ChannelStore.getChannel(channelInstance.channel.id);
      const oldName: string = channel.name;
      if (!isChannelIdExists(channel.id)) {
        channel.name = capitalizeWords(oldName);
        changedChannelNames.push({ channelid: channel.id, oldName });
      }
    }
    if (!config.get("changeChannelNames", false)) {
      changedChannelNames.forEach(
        ({ channelid, oldName }: { channelid: string; oldName: string }) => {
          const channel: any = ChannelStore.getChannel(channelid);
          if (channel) {
            channel.name = oldName;
            // changedChannelNames.length -= 1;
          }
        },
      );
    }
  });
}

export function getChangedChannelNames(): any[] {
  return changedChannelNames;
}

export function stop(): void {
  inject.uninjectAll();
}

export function Settings(): JSX.Element {
  const [coloredChannels, setColoredChannels] = useState<any>(config.get("coloredChannels", {}));

  const removeColoredChannel = (channelId: string): void => {
    const updatedChannels: any = { ...coloredChannels };
    delete updatedChannels[channelId];
    setColoredChannels(updatedChannels);
    config.set("coloredChannels", updatedChannels);
    document.querySelector(`[data-channel-style="${channelId}"]`).remove();
  };

  return (
    <div>
      <FormSwitch
        {...util.useSetting(config, "changeChannelNames", false)}
        note={
          "Title every channel name in Pascal Case for a polished appearance. " +
          "𝗪𝗔𝗥𝗡𝗜𝗡𝗚 Sometimes caching will NOT work right. Refreshing always works."
        }>
        Pascal Case
      </FormSwitch>

      <div>
        {Object.entries(coloredChannels).map(
          ([channelId]: [string, { color: string; icon: string }]) => (
            <div
              key={channelId}
              style={{ display: "flex", alignItems: "center", marginBottom: "8px" }}>
              <ChannelClass.default
                className="channelExample"
                channel={ChannelStore.getChannel(channelId)}
              />
              <button
                style={{
                  background: "red",
                  color: "white",
                  borderRadius: "5px",
                  position: "absolute",
                  right: "0",
                }}
                onClick={() => removeColoredChannel(channelId)}>
                Remove
              </button>
            </div>
          ),
        )}
      </div>
    </div>
  );
}
