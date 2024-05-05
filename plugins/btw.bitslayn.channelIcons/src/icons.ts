import { settings } from "replugged";
export const config = await settings.init("btw.bitslayn.channelIcons");
async function fetchDataAndExtract() {
  const url = "https://davart154.github.io/Themes/Icon%20Revert%202023/2023%20Icon%20Revert.css";

  try {
    // Fetch CSS file
    const response = await fetch(url);
    const cssContent = await response.text();
    
    const pattern = /\/\*(.+?)\*\/\[d\^="(.*?)"\] \{[\s\S]*?d: path\("(.*?)"\);/g;
    
    const extractedData = [];
    let match;
    while ((match = pattern.exec(cssContent)) !== null) {
      extractedData.push({ label: match[1], value: match[3] });
    }
    
    return extractedData;
  } catch (error) {
    console.error("Error fetching or parsing CSS:", error);
  }
}
let Icons;

if (config.get('icons', undefined) === undefined) {
  Icons = await fetchDataAndExtract();
  config.set('icons', Icons);
  console.log('Unfetched. Saving')
} else {
  Icons = config.get('icons');
  console.log('Fetched. using Cache')
}

export { Icons };
