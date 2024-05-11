import React from "react";
import { webpack } from "replugged";
import { Store } from "replugged/dist/renderer/modules/common/flux";
import { config } from "./icons";

interface ColoredChannel {
  color: string;
  icon: string;
}

interface IconClass {
  icon: string;
}

interface SelectedChannel {
  getCurrentlySelectedChannelId: () => string;
}

export const SelectedChannelStore: SelectedChannel & Store =
  webpack.getByStoreName("SelectedChannelStore");
const Classes: IconClass = webpack.getByProps(["icon", "hamburger"]);

export function selectedIcon(channelColor: string, path: string): void {
  const existingStyle = document.querySelector(`[selected-icon="owo"]`);
  if (existingStyle) {
    existingStyle.remove(); // Remove existing style if found
  }
  const styleElement = document.createElement("style");
  styleElement.setAttribute("selected-icon", "owo");
  if (channelColor === "#ffffff" || channelColor === "#000000") {
    styleElement.textContent = `
    .channelEditorIcons div > span > svg:has([d="${path}"]) {
      background: var(--bg-overlay-selected,var(--background-modifier-selected)) !important;
      border-radius: var(--radius-xs);
    }
  `;
  } else {
    styleElement.textContent = `
      .channelEditorIcons div > span > svg:has([d="${path}"]) {
        background: ${shadeColor(channelColor, 0.3)} !important;
        border-radius: var(--radius-xs);
      }
    `;
  }
  document.head.appendChild(styleElement);
}

export function injectChannelStyle(channelId: string, channelColor: string, path: string): void {
  config.set("coloredChannels", {
    ...config.get("coloredChannels", {}),
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
    }`;
  } else {
    styleElement.textContent = `
      /* CSS for channel customization */

      [data-list-item-id$="_${channelId}"] > div > div > svg > path {
        /* Icon */
        d: path(
          "${path}"
        ) !important;
      }

      [data-list-item-id$="_${channelId}"] > div > [class^="icon"] > svg {
        /* Icon color */
        color: ${channelColor} !important;
      }

      [data-list-item-id$="_${channelId}"] > div > [class^="children"] div > svg {
        /* Misc buttons color */
        color: ${shadeColor(channelColor, 0.8)} !important;
      }

      [data-list-item-id$="_${channelId}"] > div > [class^="children"] div > svg:hover {
        /* Hovered misc buttons color */
        color: ${channelColor} !important;
      }

      [data-list-item-id$="_${channelId}"] > div > [class^="name"] {
        /* Name color */
        color: ${channelColor} !important;
      }

      [data-list-item-id$="_${channelId}"]:hover,
      .channelEditorIcons > div > svg:hover,
      .channelEditorIcons > div > span > svg:hover {
        /* Hovered background color */
        background: ${shadeColor(channelColor, 0.15)};
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

export function capitalizeWords(sentence: string): string {
  const words: string[] = sentence.split("-");
  const capitalizedWords: string[] = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1),
  );
  console.log(capitalizedWords);
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
