import { Injector, components, settings, webpack } from "replugged";
import { ContextMenuTypes } from "replugged/types";
import { React, modal } from "replugged/common";
import { Button } from "replugged/components";
import "./example.css";
import "./editor.css";
import { injectChannelStyle } from "./helpers";
import { Icons } from "./icons";
const config = await settings.init("btw.bitslayn.channelicons");
const ColorPicker = await webpack.waitForProps("CustomColorPicker")
const inject = new Injector();
const {SearchableSelect}: {SearchableSelect: any} = webpack.getByProps("SearchableSelect")
const {
  ContextMenu: { MenuItem },
} = components;
const { openModal } = modal;
const Modals = webpack.getByProps("ConfirmModal");
const {int2hex}: {int2hex: (int: any) => string} = webpack.getByProps("int2hex")
const {FormSwitch}: any = webpack.getByProps("FormSwitch")

function openEditor(data: any, something: any) {
  const { channel } = data;
  const RenderThis = (props) => {
    const { channel } = data;
    const [channelColor, setChannelColor] = React.useState<string>();
    const [channelIcon, setChannelIcon] = React.useState({});
    const [channelIconLabel, setChannelIconLabel] = React.useState<string>("");

    return (
      <Modals.ConfirmModal
        header={`Customize #${channel.name}`}
        className="channelEditor"
        {...props}
      >
        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignContent: "flex-start",
            }}
          >
          </div>
          <div>
            <SearchableSelect
              options={Icons}
              value={channelIconLabel}
              onChange={(iconPath) => {
                const Object = Icons.find(icon => icon.value === iconPath);
                const Label = Object.name;

                setChannelIcon(iconPath);
                setChannelIconLabel(Label);
                injectChannelStyle(channel.id, int2hex(channelColor), iconPath);
              }}
            />
            <ColorPicker.CustomColorPicker
              type={1}
              className="channelEditorColorPicker"
              value={channelColor}
              onChange={(selectedColor: string) => {
                setChannelColor(selectedColor);
                injectChannelStyle(channel.id, int2hex(selectedColor), channelIcon);
              }}
            />
          </div>
        </div>
      </Modals.ConfirmModal>
    );
  };


  openModal((x) => <RenderThis {...x} />);
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
  }


export function stop(): void {
  inject.uninjectAll();
}
