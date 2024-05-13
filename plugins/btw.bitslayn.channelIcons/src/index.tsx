import { ComponentType, SetStateAction, useState } from "react";
import { Injector, components, util, webpack } from "replugged";
import { modal } from "replugged/common";
import "./styles.css";
import { Store } from "replugged/dist/renderer/modules/common/flux";
import { AnyFunction, ContextMenuTypes } from "replugged/types";
import {
  EditedChannelIcon,
  capitalizeWords,
  getCurrentChannelObject,
  injectChannelStyle,
  randomNumber,
  selectedIcon,
  generateInterface,
} from "./helpers";
import { Icons, config, group1Array } from "./icons";
import { TabBar } from "./TabBar";
import CustomTooltip from "./Tooltip";
import { int2hexModule, ModalsModule } from "./types";

const colorBrands: any = webpack.getByProps("colorBrand");
const ColorPicker: { CustomColorPicker: any } = await webpack.waitForProps("CustomColorPicker");
const inject: Injector = new Injector();
const {
  ContextMenu: { MenuItem },
} = components;
const { openModal } = modal;
const Modals: ModalsModule = webpack.getByProps("ConfirmModal");
export const { int2hex }: int2hexModule = webpack.getByProps("int2hex");
const { FormSwitch }: any = webpack.getByProps("FormSwitch");
const ChannelClass: { default: any } = webpack.getByProps("ChannelItemIcon");
const ChannelStore: { getChannel: AnyFunction } & Store = webpack.getByStoreName("ChannelStore");
const iconBuffer = "M 0,0 V 0 "; // Strict Icon Changes
const Header: { default: { Icon: any; Title: any } } = webpack.getBySource("toolbar:function()");

function injectSavedChannelsStyles(): void {
  const coloredChannels: any = config.get("coloredChannels", []);
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

    const [suggestedColors, setSuggestedColors] = useState<string[]>([
      "#1abc9c",
      "#2ecc71",
      "#3498db",
      "#9b59b6",
      "#e91e63",
      "#f1c40f",
      "#e67e22",
      "#e74c3c",
      "#95a5a6",
      "#607d8b",
    ]);

    // uwu
    selectedIcon(int2hex(channelColor), `${iconBuffer}${channelIcon}`);
    console.log(`${int2hex(channelColor)}, ${iconBuffer}${channelIcon}`);
    const icons = [
      {
        id: 1,
        label: "Classic Icons",
        element: () => (
          <div
            className="channelEditorIcons"
            style={{ display: "flex", flexWrap: "wrap", alignContent: "flex-start" }}>
            {Icons.map((label: any) => (
              <components.Clickable
                onClick={() => {
                  setChannelIcon(label.value);
                  injectChannelStyle(channel.id, int2hex(channelColor), label.value);
                  selectedIcon(int2hex(channelColor), `${iconBuffer}${label.value}`);
                }}>
                <CustomTooltip text={label.label}>
                  <svg
                    className={label.label}
                    viewBox="-4 -4 32 32"
                    style={{ width: "32px", height: "32px" }}>
                    <path
                      fill={int2hex(channelColor) ?? "--channel-icon"}
                      d={`${iconBuffer}${label.value}`}
                      fillRule="evenodd"
                    />
                  </svg>
                </CustomTooltip>
              </components.Clickable>
            ))}
          </div>
        ),
      },
      {
        id: 2,
        label: "Modern Icons",
        element: () => (
          <div
            className="channelEditorIcons"
            style={{ display: "flex", flexWrap: "wrap", alignContent: "flex-start" }}>
            {group1Array.map((label: any, index: number) => {
              const paths = Array.isArray(label.Matches)
                ? label.Matches.map((item: any) => item[1])
                : [label.Matches];

              return (
                <components.Clickable
                  key={index}
                  onClick={() => {
                    let fullPathString = "";
                    paths.forEach((x) => {
                      fullPathString += x;
                    });
                    setChannelIcon(fullPathString);
                    injectChannelStyle(channel.id, int2hex(channelColor), fullPathString);
                    selectedIcon(int2hex(channelColor), fullPathString);
                  }}>
                  <CustomTooltip text={label.label}>
                    <svg
                      key={index}
                      className="hghhgjgj"
                      // Are you okay are you having a stroke?
                      // yes ma'am :3
                      // ᓚᘏᗢ
                      // media.tenor.com/jPuT2agIs5YAAAPo/caseoh-cat.mp4
                      viewBox="-4 -4 32 32"
                      style={{
                        width: "32px",
                        height: "32px",
                      }}>
                      {paths.map((pathData: any, innerIndex: number) => {
                        if (pathData && pathData.length > 0) {
                          return (
                            <path
                              key={innerIndex}
                              fill={int2hex(channelColor) ?? "--channel-icon"}
                              fillRule="evenodd"
                              d={`${iconBuffer}${pathData}`}
                            />
                          );
                        } else {
                          return null;
                        }
                      })}
                    </svg>
                  </CustomTooltip>
                </components.Clickable>
              );
            })}
          </div>
        ),
      },
    ];

    const handleColorChange = (selectedColor: SetStateAction<string>): void => {
      setChannelColor(selectedColor);
      const convertedColor: string = int2hex(channelColor);
      const updatedColors: string[] = [
        convertedColor,
        ...suggestedColors.filter((color) => color !== convertedColor),
      ].slice(0, 10);
      setSuggestedColors(updatedColors);
      injectChannelStyle(channel.id, convertedColor, channelIcon);
      config.set("suggestedColors", updatedColors);
      config.set("coloredChannels", {
        ...config.get("coloredChannels", []),
        [channel.id]: { color: convertedColor, icon: channelIcon },
      });
    };

    return (
      <Modals.ConfirmModal
        confirmButtonColor={colorBrands.colorBrand}
        cancelButtonColor={colorBrands.colorRed}
        confirmText={"Okay"}
        cancelText={"Remove"}
        onCancel={() => {
          const existingStyle = document.querySelector(`[data-channel-style="${channel.id}"]`);
          if (existingStyle) {
            existingStyle.remove();
            delete config.get("coloredChannels")[channel.id]; // this was that fix
          }
        }}
        header={`Customize #${channel.name}`}
        className="channelEditor"
        {...props}>
        <div className="channelEditorHeader">
          <ChannelClass.default
            className="channelExample"
            channel={ChannelStore.getChannel(channel.id)}
          />
          <TabBar tabs={icons} />
        </div>
        <div
          className="channelEditorSidebar"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            overflow: "hidden scroll",
            maxHeight: "362px",
          }}>
          <ColorPicker.CustomColorPicker
            type={1}
            className="channelEditorColorPicker"
            value={channelColor}
            onChange={handleColorChange}
            suggestedColors={suggestedColors}
          />
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
    // the code below gives a random modern icon uwu ;3 rawr x3 *waggles tail*
    const Object = group1Array[randomNumber(Icons.length)];
    let RandomIcon: ComponentType<any>;
    // shut up.
    // eslint-disable-next-line no-undefined
    if (Object.Name !== undefined) {
      RandomIcon = webpack.getByProps(Object.Name)?.[Object?.Name];
    }
    // the code above gives a random modern icon uwu ;3 rawr x3 *waggles tail*
    return (
      <MenuItem
        id={`customize-channel-${channel.id}`}
        label="Customize Channel"
        /* the code below gives discord an icon to display */
        icon={RandomIcon}
        /* the code above gives discord an icon to display */
        action={() => openEditor(data)}
      />
    );
  });
  inject.after(Header.default, "Title", (a: any) => {
    const headerObj = a?.[0]?.children?.props?.children;
    if (headerObj && getCurrentChannelObject()?.color) {
      const ChannelObject = getCurrentChannelObject();
      headerObj[2] = <span style={{ color: ChannelObject.color }}>{headerObj[2]}</span>;
      // clearChildrenAddPath(ChannelObject.icon)
    }
  });

  inject.before(Header.default, "Icon", (a: any) => {
    const ChannelObject = getCurrentChannelObject();
    // const CurrentChannel = ChannelStore.getChannel(SelectedChannelStore.getCurrentlySelectedChannelId())
    if (a && a[0] && ChannelObject?.icon) {
      a[0].icon = () => {
        return <EditedChannelIcon channel={getCurrentChannelObject()} />;
      };
    }
  });

  inject.after(ChannelClass, "default", (a: any) => {
    const channelInstance: any = a?.[0];
    if (channelInstance && config.get("changeChannelNames", [])) {
      const channel: any = ChannelStore.getChannel(channelInstance.channel.id);
      const oldName: string = channel.name;
      if (!isChannelIdExists(channel.id)) {
        channel.name = capitalizeWords(oldName);
        changedChannelNames.push({ channelid: channel.id, oldName });
      }
    }
    if (!config.get("changeChannelNames", [])) {
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
  const Channels = Object.keys(config.get("coloredChannels"));
  Channels.forEach((channelId: string) => {
    document.querySelector(`[data-channel-style="${channelId}"]`).remove();
  });
}

export function Settings(): JSX.Element {
  const [coloredChannels, setColoredChannels] = useState<any>(config.get("coloredChannels", []));

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
        {...util.useSetting(config, "changeChannelNames", [])}
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
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "8px",
                justifyContent: "space-between",
              }}>
              <ChannelClass.default
                className="channelExample"
                channel={ChannelStore.getChannel(channelId)}
              />
              <button
                style={{
                  background: "var(--old-red)",
                  color: "var(--button-outline-danger-text)",
                  borderRadius: "5px",
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
