import { Injector, types, util, webpack } from "replugged";
import { React, channels, modal } from "replugged/common";
import {
  Button,
  Category,
  Clickable,
  ContextMenu,
  Divider,
  Flex,
  Modal,
  SwitchItem,
  Text,
  Tooltip,
} from "replugged/components";
import {
  EditedChannelIcon,
  capitalizeWords,
  getChannelObject,
  getCurrentChannelObject,
  injectChannelPillStyle,
  injectChannelStyle,
  injectNamedChannelStyles,
  randomNumber,
  selectedIcon,
} from "./helpers";
import { Icons, config, group1Array } from "./icons";
import { ChannelNames } from "./specialSVGs";
// import CustomTooltip from "./Tooltip";
import type {
  ChannelContextMenuProps,
  ChannelItemModule,
  ColorPickerModule,
  ColorUtilsModule,
  GenericIconProps,
  HeaderBarCommonModule,
  SearchBar as SearchBarComponent,
  TabBar as TabBarComponent,
} from "./types";

import { Channel } from "discord-types/general";
import "./styles.css";

const { ContextMenuTypes } = types;

const ColorPicker = await webpack.waitForProps<ColorPickerModule>("CustomColorPicker");
export const ColorUtils = await webpack.waitForProps<ColorUtilsModule>("int2hex");
const channelItemModule = await webpack.waitForProps<ChannelItemModule>("ChannelItemIcon");
const ChannelItem = channelItemModule.default;
const headerBarCommonModule = await webpack.waitForModule<HeaderBarCommonModule>(
  webpack.filters.bySource("toolbar:function()")
);
const TabBar = await webpack
  .waitForModule(webpack.filters.bySource("tabBarRef.current"))
  .then(mod => webpack.getFunctionBySource<TabBarComponent>(mod, "tabBarRef.current")!);
const SearchBar = await webpack
  .waitForModule(webpack.filters.bySource(/inputProps:\w+,hideSearchIcon/))
  .then(
    mod => webpack.getFunctionBySource<SearchBarComponent>(mod, /inputProps:\w+,hideSearchIcon/)!
  );
// const ChannelMention = webpack.getBySource(
//   /let\{className:.*,message:.*,children:.*,content:.*,onUpdate:.*,contentRef:.*}=e/
// );
// const ChannelAutocomplete = webpack.getBySource("AutocompleteRowContent");
// console.log(ChannelAutocomplete);

const inject = new Injector();

export const iconBuffer = "M 0,0 V 0 "; // Strict Icon Changes

export const specialCases = {
  css: "CSS",
  js: "JS",
  html: "HTML",
  xml: "XML",
  json: "JSON",
  sql: "SQL",
  php: "PHP",

  faq: "FAQ",
  qotd: "QOTD",
};
export const lowercaseExceptions = new Set([
  "a",
  "ad",
  "an",
  "and",
  "as",
  "at",
  "but",
  "by",
  "for",
  "in",
  "is",
  "nor",
  "of",
  "on",
  "or",
  "so",
  "the",
  "to",
  "up",
  "yet",
]);

function injectSavedChannelsStyles(): void {
  const coloredChannels = config.get("coloredChannels");
  Object.entries(coloredChannels).forEach(([channelId, { color, icon }]) => {
    injectChannelStyle(channelId, color, icon);
  });
}

enum ModalTransitionState {
  ENTERING,
  ENTERED,
  EXITING,
  EXITED,
  HIDDEN,
}

interface ModalProps {
  transitionState: ModalTransitionState;
  onClose: () => Promise<void>;
}

function openEditor(channel: Channel): void {
  selectedIcon("#000000", `${iconBuffer}${getChannelObject(channel.id)?.icon}`);

  const Editor = (props: ModalProps) => {
    const { transitionState, onClose } = props;

    const channelColorSetting = getChannelObject(channel.id);

    const [channelColor, setChannelColor] = React.useState(
      ColorUtils.hex2int(channelColorSetting?.color ?? "#000000")
    );
    const [channelIcon, setChannelIcon] = React.useState(channelColorSetting?.icon);
    const [suggestedColors, setSuggestedColors] = React.useState([
      channelColorSetting?.color || "#000000",
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
    const [selectedTab, setSelectedTab] = React.useState("legacy");
    const [searchQuery, setSearchQuery] = React.useState("");

    const filteredClassicIcons = Icons.filter(icon =>
      icon.label.toLowerCase().includes(searchQuery.toLowerCase())
    );
    const filteredModernIcons = group1Array.filter(icon =>
      icon.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleColorChange = (selectedColor: number): void => {
      const convertedColor = ColorUtils.int2hex(selectedColor);
      setChannelColor(selectedColor);
      injectChannelStyle(channel.id, convertedColor, channelIcon);
      selectedIcon(convertedColor, `${iconBuffer}${channelIcon}`);
      const updatedColors = [
        convertedColor,
        ...suggestedColors.filter(color => color !== convertedColor),
      ].slice(0, 11);
      while (updatedColors.length < 11) {
        updatedColors.splice(1, 0, convertedColor);
      }
      setSuggestedColors(updatedColors);
      config.set("suggestedColors", updatedColors);
      config.set("coloredChannels", {
        ...config.get("coloredChannels"),
        [channel.id]: { color: convertedColor, icon: channelIcon },
      });
    };

    const handleRemove = React.useCallback(() => {
      const existingStyle = document.querySelector(`[data-channel-style="${channel.id}"]`);
      if (existingStyle) {
        existingStyle.remove();
        delete config.get("coloredChannels")[channel.id]; // this was that fix
      }
      onClose();
    }, [onClose]);

    return (
      <Modal.ModalRoot transitionState={transitionState} size="medium">
        <Modal.ModalHeader separator={false}>
          <Text.H1 variant="heading-xl/semibold">{`Personalize #${channel.name}`}</Text.H1>
        </Modal.ModalHeader>
        <Modal.ModalContent className="channelEditorContent">
          <div className="channelEditorIconPicker">
            <SearchBar
              query={searchQuery}
              onChange={setSearchQuery}
              onClear={() => setSearchQuery("")}
              size={SearchBar.Sizes.MEDIUM}
              className="channelEditorSearchBar"
            />
            <TabBar
              selectedItem={selectedTab}
              type="top"
              look="brand"
              onItemSelect={id => id && setSelectedTab(id)}
              className="channelEditorTabBar">
              <TabBar.Item id="legacy" className="channelEditorTabBarItem">
                Legacy Icons
              </TabBar.Item>
              <TabBar.Item id="modern" className="channelEditorTabBarItem">
                Modern Icons
              </TabBar.Item>
            </TabBar>
            <div className="channelEditorIcons">
              {selectedTab === "legacy" &&
                filteredClassicIcons.map(label => (
                  <Clickable
                    onClick={() => {
                      setChannelIcon(label.value);
                      injectChannelStyle(channel.id, ColorUtils.int2hex(channelColor), label.value);
                      selectedIcon(ColorUtils.int2hex(channelColor), `${iconBuffer}${label.value}`);
                    }}>
                    <Tooltip text={label.label} spacing={24}>
                      <svg
                        className={label.label}
                        viewBox="-4 -4 32 32"
                        style={{ width: "32px", height: "32px" }}>
                        <path
                          fill={ColorUtils.int2hex(channelColor) ?? "--channel-icon"}
                          d={`${iconBuffer}${label.value}`}
                          fillRule="evenodd"
                        />
                      </svg>
                    </Tooltip>
                  </Clickable>
                ))}
              {selectedTab === "modern" &&
                filteredModernIcons.map((label, index) => {
                  const paths = Array.isArray(label.matches)
                    ? label.matches.map(item => item[1])
                    : [label.matches];

                  return (
                    <Clickable
                      key={index}
                      onClick={() => {
                        let fullPathString = "";
                        paths.forEach(x => {
                          fullPathString += x;
                        });
                        setChannelIcon(fullPathString);
                        injectChannelStyle(
                          channel.id,
                          ColorUtils.int2hex(channelColor),
                          fullPathString
                        );
                        selectedIcon(ColorUtils.int2hex(channelColor), fullPathString);
                      }}>
                      <Tooltip text={label.name} spacing={24}>
                        <svg
                          key={index}
                          className={label.name}
                          viewBox="-4 -4 32 32"
                          style={{
                            width: "32px",
                            height: "32px",
                          }}>
                          {paths.map((pathData, innerIndex) => {
                            if (pathData && pathData.length > 0) {
                              return (
                                <path
                                  key={innerIndex}
                                  fill={ColorUtils.int2hex(channelColor) ?? "--channel-icon"}
                                  fillRule="evenodd"
                                  d={`${iconBuffer}${pathData}`}
                                />
                              );
                            } else {
                              return null;
                            }
                          })}
                        </svg>
                      </Tooltip>
                    </Clickable>
                  );
                })}
            </div>
          </div>
          <ColorPicker.CustomColorPicker
            className="channelEditorColorPicker"
            value={channelColor}
            onChange={handleColorChange}
            suggestedColors={suggestedColors}
          />
        </Modal.ModalContent>
        <Modal.ModalFooter direction={Flex.Direction.HORIZONTAL} justify={Flex.Justify.BETWEEN}>
          <ChannelItem channel={channel} />
          <Flex direction={Flex.Direction.HORIZONTAL_REVERSE}>
            <Button onClick={() => onClose()} color={Button.Colors.BRAND}>
              Okay
            </Button>
            <Button onClick={handleRemove} color={Button.Colors.PRIMARY} look={Button.Looks.LINK}>
              Remove
            </Button>
          </Flex>
        </Modal.ModalFooter>
      </Modal.ModalRoot>
    );
  };

  modal.openModal(props => <Editor {...props} />);
}

interface ChangedChannelName {
  channelId: string;
  oldName: string;
}

const changedChannelNames: ChangedChannelName[] = [];

function isChannelIdExists(channelId: string): boolean {
  return changedChannelNames.some(entry => entry.channelId === channelId);
}

function injectNamedChannelsStyles() {
  if (config.get("presetChannelIcons")) {
    ChannelNames.forEach(channel => {
      if (channel.query !== "none") {
        channel.name.forEach(x =>
          injectNamedChannelStyles(x, Icons.find(i => i.label === channel.query)?.value)
        );
      }
    });
  } else {
    ChannelNames.forEach(channel =>
      channel.name.forEach(x => {
        if (document.querySelector(`[data-channel-named-style="${x}"]`)) {
          document.querySelector(`[data-channel-named-style="${x}"]`)?.remove();
        }
      })
    );
  }
}

export function start(): void {
  injectSavedChannelsStyles();
  injectNamedChannelsStyles();
  injectChannelPillStyle();
  if (headerBarCommonModule) {
    inject.after(headerBarCommonModule.default, "Title", ([props]) => {
      if (typeof props.children === "string") return;
      const headerObj = props.children?.props?.children;
      if (headerObj && getCurrentChannelObject()?.color) {
        const ChannelObject = getCurrentChannelObject();
        headerObj[2] = <span style={{ color: ChannelObject.color }}>{headerObj[2]}</span>;
      }
    });
    inject.before(headerBarCommonModule.default, "Icon", ([props]) => {
      const ChannelObject = getCurrentChannelObject();
      const CurrentSelectedChannelId = channels.getCurrentlySelectedChannelId();

      if (!CurrentSelectedChannelId) return;

      const CurrentChannel = channels.getChannel(CurrentSelectedChannelId);
      const CustomIcon = ChannelNames?.slice()
        .reverse()
        .find(x => x.name.some(agony => CurrentChannel?.name?.toLowerCase().includes(agony))); // CSS is rather silly with multiple styles
      //console.log(CurrentChannel?.name);
      //console.log(CustomIcon);
      //console.log(CustomIcon && CustomIcon.query !== "none" && config.get("presetChannelIcons"));
      if (props && ChannelObject?.icon) {
        props.icon = () => {
          return <EditedChannelIcon channel={ChannelObject} />;
        };
      } else if (CustomIcon && CustomIcon.icon !== "none" && config.get("presetChannelIcons")) {
        props.icon = () => {
          return <CustomIcon.icon />;
        };
      } else if (CustomIcon && CustomIcon.query !== "none" && config.get("presetChannelIcons")) {
        props.icon = () => {
          return (
            <svg
              version="1.0"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24">
              <g fill={getCurrentChannelObject()?.color ?? "var(--channel-icon)"}>
                <path
                  d={`${iconBuffer}${Icons.find(i => i.label === CustomIcon.query)?.value}`}
                  fillRule="evenodd"
                />
              </g>
            </svg>
          );
        };
      }
    });
  }
  inject.utils.addMenuItem<ChannelContextMenuProps>(ContextMenuTypes.ChannelContext, data => {
    const { channel } = data;
    // the code below gives a random modern icon uwu ;3 rawr x3 *waggles tail*
    const Object = group1Array[randomNumber(group1Array.length)];
    const iconMod = webpack.getByProps<Record<string, React.FC<GenericIconProps>>>(Object.name)!;
    const RandomIcon = iconMod[Object.name];
    // the code above gives a random modern icon uwu ;3 rawr x3 *waggles tail*
    if (channel.type !== 4) {
      return (
        <ContextMenu.MenuItem
          id={`customize-channel-context`}
          label="Personalize Channel"
          /* the code below gives discord an icon to display */
          icon={RandomIcon}
          /* the code above gives discord an icon to display */
          action={() => openEditor(channel)}
        />
      );
    }
  });
  if (channelItemModule) {
    inject.after(channelItemModule, "default", ([props]) => {
      if (config.get("changeChannelNames")) {
        const oldName = props.channel.name;
        if (!isChannelIdExists(props.channel.id)) {
          props.channel.name = capitalizeWords(oldName, specialCases, lowercaseExceptions);
          changedChannelNames.push({ channelId: props.channel.id, oldName });
        }
      } else {
        changedChannelNames.forEach(({ channelId, oldName }) => {
          const channel = channels.getChannel(channelId);
          if (channel) {
            channel.name = oldName;
            // changedChannelNames.length -= 1;
          }
        });
      }
    });
  }
}

export function getChangedChannelNames(): ChangedChannelName[] {
  return changedChannelNames;
}

export function stop(): void {
  inject.uninjectAll();
  if (config.get("coloredChannels")) {
    const Channels = Object.keys(config.get("coloredChannels"));
    Channels.forEach(channelId => {
      document.querySelector(`[data-channel-style="${channelId}"]`)?.remove();
    });
  }
  ChannelNames.forEach(channel =>
    channel.name.forEach(x => {
      if (document.querySelector(`[data-channel-named-style="${x}"]`)) {
        document.querySelector(`[data-channel-named-style="${x}"]`)?.remove();
      }
    })
  );
}

export function Settings(): React.ReactElement {
  const [coloredChannels, setColoredChannels] = React.useState(config.get("coloredChannels"));
  const presetChannelIcons = util.useSetting(config, "presetChannelIcons");
  const coloredChannelPills = util.useSetting(config, "coloredChannelPills");
  //const advancedChannelNames = config.get("advancedChannelNames");

  const removeColoredChannel = (channelId: string): void => {
    const updatedChannels = { ...coloredChannels };
    delete updatedChannels[channelId];
    setColoredChannels(updatedChannels);
    config.set("coloredChannels", updatedChannels);
    document.querySelector(`[data-channel-style="${channelId}"]`)?.remove();
  };

  return (
    <>
      <SwitchItem
        value={presetChannelIcons.value}
        onChange={value => {
          presetChannelIcons.onChange(value);
          injectNamedChannelsStyles();
        }}
        note="Apply icons to channels automatically based on their name.">
        Recommended Icons
      </SwitchItem>
      <SwitchItem
        {...util.useSetting(config, "changeChannelNames")}
        note={
          "Title every channel name in Pascal Case for a polished appearance. " +
          "𝗪𝗔𝗥𝗡𝗜𝗡𝗚 Sometimes caching will NOT work right. Refreshing always works."
        }>
        Pascal Case
      </SwitchItem>
      <SwitchItem
        value={coloredChannelPills.value}
        onChange={value => {
          coloredChannelPills.onChange(value);
          injectChannelPillStyle();
        }}
        note="Changes the color used for channel mention and new thread pills to red and blue.">
        Color Unread Indicators
      </SwitchItem>
      <Category title="Personalized Channels" note="View and modify your channel styles.">
        {Object.entries(coloredChannels).map(([channelId]) => {
          const channel = channels.getChannel(channelId);
          return (
            <>
              <div className="personalizedChannelContainer" key={channelId}>
                {channel ? <ChannelItem channel={channel} /> : <Text>{channelId}</Text>}
                <Flex direction={Flex.Direction.HORIZONTAL_REVERSE}>
                  <Button
                    onClick={() => {
                      if (channel) openEditor(channel);
                    }}>
                    Edit
                  </Button>
                  <Button
                    color={Button.Colors.RED}
                    look={Button.Looks.LINK}
                    onClick={() => removeColoredChannel(channelId)}>
                    Remove
                  </Button>
                </Flex>
              </div>
              <Divider style={{ marginBottom: "20px" }} />
            </>
          );
        })}
      </Category>
    </>
  );
}
