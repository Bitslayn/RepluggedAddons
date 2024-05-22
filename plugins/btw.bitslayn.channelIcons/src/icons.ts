import { settings, webpack } from "replugged";
import { IconData, Settings } from "./types";
import { classicIcons } from "./classicIcons";

export const config = await settings.init<Settings>("btw.bitslayn.channelIcons");

function fetchDataAndExtract(): IconData[] {
  //const url = "https://davart154.github.io/Themes/Icon%20Revert%202023/2023%20Icon%20Revert.css";

  const pattern = /\/\*(.+?)\*\/\[d\^="(.*?)"\] \{[\s\S]*?d: path\("(.*?)"\);/g;

  const extractedData: IconData[] = [];
  let match: RegExpExecArray | null;
  //while ((match = pattern.exec(cssContent)) !== null) {
  // eslint-disable-next-line no-cond-assign
  while ((match = pattern.exec(classicIcons)) !== null) {
    extractedData.push({ label: match[1], value: match[3] });
  }
  return extractedData;
}

config.set("icons", fetchDataAndExtract());

const Icons: IconData[] = config.get("icons");

const UpdatedIcons = webpack.getBySource("www.w3.org/2000/svg", { all: true });
const group1Array = [];
UpdatedIcons.forEach((iconObject) => {
  const iconKey = Object.keys(iconObject).find((key) => key.includes("Icon"));
  if (!iconKey) return;
  const iconValueString = iconObject[iconKey]?.toString?.();
  if (!iconValueString) return;
  const matches = [...iconValueString.matchAll(/,d:"([^"]*)"/g)];
  if (matches.length) group1Array.push({ Name: iconKey, Matches: matches });
});

export { Icons, group1Array };
