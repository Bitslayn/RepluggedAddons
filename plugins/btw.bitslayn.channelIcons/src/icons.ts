import type React from "react";
import { settings, webpack } from "replugged";
import type { GenericIconProps, IconData, Settings } from "./types";

const defaultSettings = {
  coloredChannels: {},
  changeChannelNames: true,
  presetChannelIcons: true,
  coloredChannelPills: true,
  suggestedColors: [],
  icons: [],
} satisfies Partial<Settings>;

export const config = await settings.init<Settings, keyof typeof defaultSettings>(
  "btw.bitslayn.channelIcons",
  defaultSettings
);

async function fetchDataAndExtract(): Promise<IconData[] | undefined> {
  const url =
    "https://raw.githubusercontent.com/Bitslayn/RepluggedPlugins/main/assets/classicIcons.ts";
  try {
    // Fetch CSS file
    const response = await fetch(url);
    const cssContent = await response.text();

    const pattern = /\/\*(.+?)\*\/ {[\s\S]*?d: path\("(.*?)"\);\}/g;

    const extractedData = [];
    let match;
    // eslint-disable-next-line no-cond-assign
    while ((match = pattern.exec(cssContent)) !== null) {
      extractedData.push({ label: match[1], value: match[2] });
    }

    return extractedData;
  } catch (error) {
    console.error("Error fetching or parsing CSS:", error);
  }
}

const Icons = config.get("icons");

config.set("icons", await fetchDataAndExtract());

interface ModernIconArray {
  name: string;
  matches: RegExpMatchArray[];
}

const UpdatedIcons = webpack.getBySource<Record<string, React.FC<GenericIconProps>>>(
  "www.w3.org/2000/svg",
  { all: true }
);
const group1Array: ModernIconArray[] = [];

UpdatedIcons.forEach(iconObject => {
  const iconKey = Object.keys(iconObject).find(key => key.includes("Icon"));
  if (!iconKey) return;
  const iconValueString = iconObject[iconKey]?.toString?.();
  if (!iconValueString) return;
  const matches = [...iconValueString.matchAll(/,d:"([^"]*)"/g)];
  if (matches.length) group1Array.push({ name: iconKey, matches });
});

export { group1Array, Icons };
