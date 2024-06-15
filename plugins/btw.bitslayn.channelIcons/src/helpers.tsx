import React from "react";
import { webpack } from "replugged";
import { Store } from "replugged/dist/renderer/modules/common/flux";
import { config } from "./icons";
import { ColoredChannel, IconClass, SelectedChannel, WordConfig } from "./types";
import { iconBuffer } from "./index";

export const SelectedChannelStore: SelectedChannel & Store =
  webpack.getByStoreName("SelectedChannelStore");
const Classes: IconClass = await webpack.waitForProps(["icon", "hamburger"]);

export function selectedIcon(channelColor: string, path: string): void {
  const existingStyle = document.querySelector(`[selected-icon="owo"]`);
  if (existingStyle) {
    existingStyle.remove(); // Remove existing style if found
  }
  const splitPaths = (path: string): string[] => {
    const paths = path.replaceAll("Z", "Z~").split("~").filter(Boolean); // This works but not Regex???
    return paths.map(p => `:has(>[d*="${p}"])`);
  };
  const selectors = splitPaths(path);
  //console.log(`.channelEditorIcons > div > span > svg${selectors.join("")}`);
  const styleElement = document.createElement("style");
  styleElement.setAttribute("selected-icon", "owo");
  if (channelColor === "#ffffff" || channelColor === "#000000") {
    styleElement.textContent = `
    .channelEditorIcons > div > span > svg${selectors.join("")} {
      background: var(--bg-overlay-selected,var(--background-modifier-selected)) !important;
      border-radius: var(--radius-xs);
    }
  `;
  } else {
    styleElement.textContent = `
      .channelEditorIcons > div > span > svg${selectors.join("")} {
        background: ${shadeColor(channelColor, 0.3)} !important;
        border-radius: var(--radius-xs);
      }
      .channelEditorIcons > div > span > svg:hover {
        background: ${shadeColor(channelColor, 0.15)};
        border-radius: var(--radius-xs);
      }
    `;
  }
  document.head.appendChild(styleElement);
}

export function injectNamedChannelStyles(name: string, icon: any): void {
  const existingStyle = document.querySelector(`[data-channel-named-style="${name}"]`);
  if (existingStyle) {
    existingStyle.remove(); // Remove existing style if found
  }

  const styleElement = document.createElement("style");
  styleElement.setAttribute("data-channel-named-style", name);
  styleElement.textContent = `
  [aria-label*="${name}" i] > div > div:not([aria-label^="Voice"], [aria-label^="Stage"], [class*="Folder"]) > svg > path {
    d: path(
      "${iconBuffer}${icon}"
    );
    fill-rule: evenodd;
  }`;
  document.head.appendChild(styleElement);
}

export function injectChannelPillStyle(): void {
  const existingStyle = document.querySelector(`[colored-channel-pills="owo"]`);
  if (existingStyle) {
    existingStyle.remove(); // Remove existing style if found
  }

  if (config.get("coloredChannelPills")) {
    const styleElement = document.createElement("style");
    styleElement.setAttribute("colored-channel-pills", "owo");
    styleElement.textContent = `
  /*=====Blue Pill=====*/
  [class^="iconVisibility_"]:has([style="color: var(--text-brand);"]) > [class^="unread_"] {
    background-color: var(--text-brand);
  }
  /*=====Red Pill=====*/
  [class^="iconVisibility_"]:has([class^="mentionsBadge_"]) > [class^="unread_"] {
    background-color: var(--status-danger);
  }`;
    document.head.appendChild(styleElement);
  }
}

export function injectChannelStyle(channelId: string, channelColor: string, path: string): void {
  config.set("coloredChannels", {
    ...config.get("coloredChannels", []),
    [channelId]: { color: channelColor, icon: path },
  });
  const existingStyle = document.querySelector(`[data-channel-style="${channelId}"]`);
  if (existingStyle) {
    existingStyle.remove(); // Remove existing style if found
  }

  const styleElement = document.createElement("style");
  styleElement.setAttribute("data-channel-style", channelId);
  if (channelColor === "#ffffff" || channelColor === "#000000") {
    styleElement.textContent = `
    [data-list-item-id$="_${channelId}"] > div > div > svg > path {
    /* Icon */
      d: path(
        "${path}"
      ) !important;
      fill-rule: evenodd;
    }`;
  } else {
    styleElement.textContent = `
      /* CSS for channel customization */

      [data-list-item-id$="_${channelId}"] > div > div > svg > path {
        /* Icon */
        d: path(
          "${path}"
        ) !important;
        fill-rule: evenodd;
      }

      [data-list-item-id$="_${channelId}"] > div > [class^="icon"] > svg {
        /* Icon color */
        color: ${channelColor} !important;
      }

      [data-list-item-id$="_${channelId}"] > div > [class^="children"] div > svg {
        /* Misc buttons color */
        color: ${shadeColor(channelColor, 0.8)} !important;
      }

      [data-list-item-id$="_${channelId}"] > div > [class^="children"] div > svg > path {
        /* Misc buttons color patch */
        fill: currentColor;
      }

      [data-list-item-id$="_${channelId}"] > div > [class^="children"] div > svg:hover {
        /* Hovered misc buttons color */
        color: ${channelColor} !important;
      }

      [data-list-item-id$="_${channelId}"] > div > [class^="name"] {
        /* Name color */
        color: ${channelColor} !important;
      }

      [data-list-item-id$="_${channelId}"]:hover
      /*.channelEditorIcons > div > span > svg:hover*/ {
        /* Hovered background color */
        background: ${shadeColor(channelColor, 0.15)} !important;
        border-radius: var(--radius-xs);
      }

      [data-list-item-id$="_${channelId}"]:hover > div > [class^="name"] {
        /* Hovered name color */
        color: ${channelColor} !important;
      }

      [class*="selected"] > div > div > [data-list-item-id$="_${channelId}"] > div > [class^="name"] {
        /* Focused name color */
        color: var(--interactive-active) !important;
      }

      [class*="selected"] [data-list-item-id$="_${channelId}"] {
        /* Focused background color */
        background: ${shadeColor(channelColor, 0.3)} !important;
      }
    `;
  }
  document.head.appendChild(styleElement);
}

function shadeColor(color: string, transparency: number): string {
  let R = parseInt(color.substring(1, 3), 16);
  let G = parseInt(color.substring(3, 5), 16);
  let B = parseInt(color.substring(5, 7), 16);

  R = R < 255 ? R : 255;
  G = G < 255 ? G : 255;
  B = B < 255 ? B : 255;

  let RR = R.toString(16).length === 1 ? `0${R.toString(16)}` : R.toString(16);
  let GG = G.toString(16).length === 1 ? `0${G.toString(16)}` : G.toString(16);
  let BB = B.toString(16).length === 1 ? `0${B.toString(16)}` : B.toString(16);

  let alpha = Math.round(transparency * 255);
  let alphaHex = alpha.toString(16).length === 1 ? `0${alpha.toString(16)}` : alpha.toString(16);

  return `#${RR}${GG}${BB}${alphaHex}`;
}

export function capitalizeWords(
  sentence: string,
  specialCases: any,
  lowercaseExceptions: any
): string {
  const words: string[] = sentence.split("-");
  const capitalizedWords: string[] = words.map((word, index) => {
    if (specialCases[word]) {
      return specialCases[word];
    }

    if (word.length === 2 && (index === 0 || !lowercaseExceptions?.has(word))) {
      return word.toUpperCase();
    }

    if (index === 0 || !lowercaseExceptions?.has(word)) {
      for (let a = 0; a < word.length; a++) {
        if (/[a-zA-Z]/.test(word[a])) {
          return word.slice(0, a) + word[a].toUpperCase() + word.slice(a + 1);
        }
      }
    }

    return word.toLowerCase();
  });

  return capitalizedWords.join(" ");
}

export function randomNumber(max: number): number {
  const buffer = new Uint32Array(1);
  window.crypto.getRandomValues(buffer);
  return buffer[0] % max;
}

export function getCurrentChannelObject(): ColoredChannel {
  return config.get("coloredChannels")[SelectedChannelStore.getCurrentlySelectedChannelId()];
}

export function getChannelObject(channelId: string): ColoredChannel {
  return config.get("coloredChannels")[channelId];
}

interface EditedChannelIconProps {
  channel: ColoredChannel | undefined;
}

export const EditedChannelIcon: React.FC<EditedChannelIconProps> = ({ channel }) => {
  return (
    <svg
      x="0"
      y="0"
      className={Classes.icon}
      aria-hidden="true"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="none"
      viewBox="0 0 24 24">
      <path
        fill={channel?.color}
        fillRule="evenodd"
        d={channel?.icon}
        clipRule="evenodd"
        className=""></path>
    </svg>
  );
};

export function generateInterface<T>(
  data: T | undefined = undefined,
  maxDepth: number = 3,
  currentDepth: number = 0,
  visited = new Set<any>(),
  isTopLevel = true
): string {
  if (data === null) {
    return "";
  }

  if (visited.has(data) || currentDepth >= maxDepth) {
    return "";
  }

  visited.add(data);

  const keys = Object.keys(data || []);
  let interfaceString = "";

  keys.forEach(key => {
    if (key.includes("-")) {
      const parts = key.split("-");
      parts[1] = parts[1].charAt(0).toUpperCase() + parts[1].slice(1);
      key = parts.join("");
    }

    const value = data[key];

    let valueType: string = typeof value;

    if (valueType === "function") {
      valueType = "() => unknown";
    }

    if (value === undefined || value === null) {
      interfaceString += `  ${key}: NonNullable<unknown>;\n`;
    } else if (valueType === "object" && !Array.isArray(value)) {
      interfaceString += `  ${key}: {\n`;
      const nestedInterface = generateInterface(value, maxDepth, currentDepth + 1, visited, false);
      interfaceString += nestedInterface;
      interfaceString += "};\n";
    } else if (Array.isArray(value)) {
      interfaceString += `  ${key}: Array<{\n`;
      const nestedInterface = generateInterface(value, maxDepth, currentDepth + 1, visited, false);
      interfaceString += nestedInterface;
      interfaceString += "}>;\n";
    } else {
      interfaceString += `  ${key}: ${valueType};\n`;
    }
  });

  const proto = Object.getPrototypeOf(data || {});
  if (proto !== null && currentDepth < maxDepth) {
    interfaceString += generateInterface(proto, maxDepth, currentDepth + 1, visited, false);
  }

  if (isTopLevel) {
    interfaceString = `interface MyInterface {\n${interfaceString}`;
    interfaceString += "}";
  }

  return interfaceString;
}
