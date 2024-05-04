import { Injector, components, settings, webpack } from "replugged";
import { ContextMenuTypes } from "replugged/types";
import { React, modal } from "replugged/common";
import { Button, Clickable } from "replugged/components";
import "./example.css";
import "./editor.css";

const config = await settings.init("btw.bitslayn.channelicons");
const ColorPicker = webpack.getByProps("CustomColorPicker");
const inject = new Injector();
const {
  ContextMenu: { MenuItem },
} = components;
const { openModal } = modal;
const Modals = webpack.getByProps("ConfirmModal");

function openEditor(channel: any) {
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
            <Button size="tiny" onClick={() => console.log("Pressed!")} />
          </div>
          <div>
            <ColorPicker.CustomColorPicker
              type={1}
              className="channelEditorColorPicker"
              width="220px"
            />
          </div>
        </div>
      </Modals.ConfirmModal>
    );
  };

  openModal((x) => <RenderThis {...x} />);
}

export function start() {
  inject.utils.addMenuItem(ContextMenuTypes.ChannelContext, (data) => {
    const { channel } = data;
    return (
      <MenuItem
        id={`customize-channel-${channel.id}`}
        label="Customize Channel"
        action={() => openEditor(channel)}
      />
    );
  });
}

export function stop(): void {
  inject.uninjectAll();
}
