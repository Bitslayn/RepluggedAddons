import { settings, webpack } from "replugged";

interface IconData {
  label: string;
  value: string;
}

export const config = await settings.init("btw.bitslayn.channelIcons");

async function fetchDataAndExtract(): Promise<IconData[]> {
  const url = "https://davart154.github.io/Themes/Icon%20Revert%202023/2023%20Icon%20Revert.css";

  try {
    // Fetch CSS file
    const response: Response = await fetch(url);
    const cssContent: string = await response.text();

    const pattern = /\/\*(.+?)\*\/\[d\^="(.*?)"\] \{[\s\S]*?d: path\("(.*?)"\);/g;

    const extractedData: IconData[] = [];
    let match: RegExpExecArray | null;
    // eslint-disable-next-line no-cond-assign
    while ((match = pattern.exec(cssContent)) !== null) {
      extractedData.push({ label: match[1], value: match[3] });
    }

    return extractedData;
  } catch (error) {
    console.error("Error fetching or parsing CSS:", error);
  }
}

let Icons: IconData[];

// eslint-disable-next-line no-undefined
if (config.get("icons", undefined) === undefined) {
  Icons = await fetchDataAndExtract();
  config.set("icons", Icons);
  console.log("Unfetched. Saving");
} else {
  Icons = config.get("icons");
  console.log("Fetched. using Cache");
}

const UpdatedIcons = webpack.getBySource("www.w3.org/2000/svg", { all: true });
const group1Array = [];

UpdatedIcons.forEach((icon) => {
  const toStringResult = Object.values(icon)?.[0]?.toString?.();
  const regex = /d:"([^"]*)"/g;

  let matches = toStringResult?.matchAll?.(regex);

  if (matches) {
    matches = Array.from(matches);
    group1Array.push(matches);
  }
});

export { Icons, group1Array };
