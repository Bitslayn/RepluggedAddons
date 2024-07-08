import { settings, webpack } from "replugged";
import type { IconData, Settings } from "./types";

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

let Icons: IconData[];

Icons = config.get("icons", await fetchDataAndExtract());
//console.log(Icons ? "Fetched. using Cache" : "Unfetched. Saving");

interface ModernIconArray {
  Name: string;
  Matches: RegExpMatchArray[];
}
const CommonComponents = webpack.getByProps("Avatar");
const UpdatedIcons = Object.keys(CommonComponents).filter(c => c.endsWith("Icon"));
const group1Array: ModernIconArray[] = [];
UpdatedIcons.forEach(iconName => {
  const iconValueString = CommonComponents[iconName]?.toString?.();
  const matches = [...iconValueString.matchAll(/,d:"([^"]*)"/g)];
  if (matches.length) group1Array.push({ Name: iconName, Matches: matches });
});
export { group1Array, Icons };

export const blacklistIcons = [
  "ThreadLockIcon",
  "ThreadWarningIcon",
  "SettingsInfoIcon",
  "SettingsCircleIcon",
  "SlashRetryIcon",
  "StickerMinusIcon",
  "StickerPlusIcon",
  "StickerRetryIcon",
  "AppleBrandLightIcon",
  "AnnouncementsChatIcon",
  "ChannelListMagnifyingGlassIcon",
  "CalendarPlusIcon",
  "CalendarRetryIcon",
  "CalendarXIcon",
  "ChatXIcon",
  "CrunchyrollBrandLightIcon",
  "FileWarningIcon",
  "MobilePhoneSettingsIcon",
  "SuperReactionIcon",
  "StickerSmallIcon",
  "StickerWinkAltIcon",
];
