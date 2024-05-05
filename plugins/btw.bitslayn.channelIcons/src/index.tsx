import { Injector, components, settings, util, webpack } from "replugged";
import { React, modal } from "replugged/common";
import "./editor.css";
import { ContextMenuTypes } from "replugged/types";
import { capitalizeWords, injectChannelStyle } from "./helpers";
import { Icons } from "./icons";

const config = await settings.init("btw.bitslayn.channelIcons");
const colorBrands: any = webpack.getByProps("colorBrand");
const ColorPicker = await webpack.waitForProps("CustomColorPicker");
const inject = new Injector();
const { SearchableSelect }: { SearchableSelect: any } = webpack.getByProps("SearchableSelect");
const {
  ContextMenu: { MenuItem },
} = components;
const { openModal } = modal;
const Modals = webpack.getByProps("ConfirmModal");
const { int2hex }: { int2hex: (int: any) => string } = webpack.getByProps("int2hex");
const { FormSwitch }: any = webpack.getByProps("FormSwitch");
const ChannelClass = webpack.getByProps("ChannelItemIcon");
const ChannelStore = webpack.getByStoreName("ChannelStore");

function openEditor(data: any) {
  const RenderThis = (props) => {
    const { channel } = data;
    const [channelColor, setChannelColor] = React.useState<string>();
    const [channelIcon, setChannelIcon] = React.useState({});
    const [channelIconLabel, setChannelIconLabel] = React.useState<string>("");

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
          <SearchableSelect
            options={Icons}
            value={channelIconLabel}
            onChange={(iconPath) => {
              const Object = Icons.find((icon) => icon.value === iconPath);
              const Label = Object.name;

              setChannelIcon(iconPath);
              setChannelIconLabel(Label);
              injectChannelStyle(channel.id, int2hex(channelColor), iconPath);
            }}
          />
          <components.Divider className="channelEditorDivider" />
          {Icons.map((label) => (
            <components.Clickable onClick={() => console.log(label)}>
              <svg
                className={label.label}
                viewBox="0 0 24 24"
                style={{
                  width: "24px",
                  height: "24px",
                }}>
                <path fill="var(--channel-icon)" d={label.value} />
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
            onChange={(selectedColor: string) => {
              setChannelColor(selectedColor);
              injectChannelStyle(channel.id, int2hex(selectedColor), channelIcon);
            }}
            suggestedColors={["#dfaaa1", "#3d2921", "#c9a1df", "#a1d6df", "#b7dfa1"]}
          />
          <components.Divider className="channelEditorDivider" />
          <ChannelClass.default
            className="channelExample"
            channel={ChannelStore.getChannel(channel.id)}
          />
        </div>
      </Modals.ConfirmModal>
    );
  };

  openModal((x) => <RenderThis {...x} />);
}

const changedChannelNames = [];

function isChannelIdExists(channelId) {
  return changedChannelNames.some((entry) => entry.channelid === channelId);
}

export function start() {
  inject.utils.addMenuItem(ContextMenuTypes.ChannelContext, (data, something) => {
    const { channel } = data;
    return (
      <MenuItem
        id={`customize-channel-${channel.id}`}
        label="Customize Channel"
        action={() => openEditor(data, something)}
      />
    );
  });
  inject.after(ChannelClass, "default", (a) => {
    const channelInstance = a?.[0];
    if (channelInstance && config.get("changeChannelNames", false)) {
      const channel = ChannelStore.getChannel(channelInstance.channel.id);
      const oldName = channel.name;
      if (!isChannelIdExists(channel.id)) {
        channel.name = capitalizeWords(oldName);
        changedChannelNames.push({ channelid: channel.id, oldName });
      }
    }
    if (!config.get("changeChannelNames", false)) {
      changedChannelNames.forEach(({ channelid, oldName }) => {
        const channel = ChannelStore.getChannel(channelid);
        if (channel) {
          channel.name = oldName;
          changedChannelNames.length -= 1;
        }
      });
    }
  });
}

export function getChangedChannelNames() {
  return changedChannelNames;
}

export function stop(): void {
  inject.uninjectAll();
}

export function Settings() {
  return (
    <FormSwitch
      {...util.useSetting(config, "changeChannelNames", false)}
      note={"Pascal Case every channel name. Make it look nice"}>
      {" "}
      Pascal Case{" "}
    </FormSwitch>
  );
}
