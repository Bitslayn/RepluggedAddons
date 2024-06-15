import { settings, webpack } from "replugged";
import { IconData, Settings } from "./types";

export const config = await settings.init<Settings>("btw.bitslayn.channelIcons");

async function fetchDataAndExtract(): Promise<IconData[]> {
  const url =
    "https://raw.githubusercontent.com/Bitslayn/RepluggedPlugins/main/assets/classicIcons.ts";
  try {
    // Fetch CSS file
    const response: Response = await fetch(url);
    const cssContent: string = await response.text();

    const pattern = /\/\*(.+?)\*\/ {[\s\S]*?d: path\("(.*?)"\);\}/g;

    const extractedData: IconData[] = [];
    let match: RegExpExecArray | null;
    // eslint-disable-next-line no-cond-assign
    while ((match = pattern.exec(cssContent)) !== null) {
      extractedData.push({ label: match[1], value: match[2] });
    }

    return extractedData;
  } catch (error) {
    console.error("Error fetching or parsing CSS:", error);
  }
}

const Icons: IconData[] = config.get("icons");

config.set("icons", await fetchDataAndExtract());

const UpdatedIcons = webpack.getBySource("www.w3.org/2000/svg", { all: true });
const group1Array = [];
UpdatedIcons.forEach(iconObject => {
  const iconKey = Object.keys(iconObject).find(key => key.includes("Icon"));
  if (!iconKey) return;
  const iconValueString = iconObject[iconKey]?.toString?.();
  if (!iconValueString) return;
  const matches = [...iconValueString.matchAll(/,d:"([^"]*)"/g)];
  if (matches.length) group1Array.push({ Name: iconKey, Matches: matches });
});

export { Icons, group1Array };
