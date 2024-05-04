import { Injector, components, settings, webpack } from "replugged";
import { ContextMenuTypes } from "replugged/types";
import { React, modal } from "replugged/common";
import { Button } from "replugged/components";
import "./example.css";
import "./editor.css";
import { injectChannelStyle } from "./helpers";

const config = await settings.init("btw.bitslayn.channelicons");
const ColorPicker = await webpack.waitForProps("CustomColorPicker")
const inject = new Injector();
const {
  ContextMenu: { MenuItem },
} = components;
const { openModal } = modal;
const Modals = webpack.getByProps("ConfirmModal");
const {int2hex}: {int2hex: (int: any) => string} = webpack.getByProps("int2hex")

function openEditor(data: any, something: any) {
  const {channel} = data;
  const RenderThis = (props) => {
    const [channelData, setChannelData] = React.useState({
      channelColor: config.get(channel.id, {})?.channelColor,
      channelIcon: config.get(channel.id, {})?.channelIcon,
      channelMention: config.get(channel.id, {})?.channelMention,
    });

    const handleChange = (event) => {
      const { name, value } = event;
      setChannelData({
        ...channelData,
        [name]: value,
      });
    };

    const handleSubmit = () => {
      config.set(channel.id, channelData);
    };

    return (
      <Modals.ConfirmModal
        header={`Customize #${channel.name}`}
        className="channelEditor"
        {...props}>
        <div style={{ display: "flex" }}>
          <div style={{ display: "flex", flexWrap: "wrap", alignContent: "flex-start" }}>
            <Button onClick={() => console.log(data, something)} />
            <Button size="tiny" onClick={() => console.log("Pressed!")} />
            <Button size="tiny" onClick={() => console.log("Pressed!")} />
            <Button size="tiny" onClick={() => console.log("Pressed!")} />
            <Button size="tiny" onClick={() => console.log("Pressed!")} />
            <Button size="tiny" onClick={() => console.log("Pressed!")} />
            <Button size="tiny" onClick={() => console.log("Pressed!")} />
            <Button size="tiny" onClick={() => console.log("Pressed!")} />
            <Button size="tiny" onClick={() => console.log("Pressed!")} />
            <Button size="tiny" onClick={() => console.log("Pressed!")} />
            <Button size="tiny" onClick={() => console.log("Pressed!")} />
            <Button size="tiny" onClick={() => console.log("Pressed!")} />
          </div>
          <div>
            <ColorPicker.CustomColorPicker
              type={1}
              className="channelEditorColorPicker"
              width="220px"
              onChange={(s: any) => {injectChannelStyle(channel.id, int2hex(s))}}
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
