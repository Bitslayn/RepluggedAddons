import { webpack } from "replugged";
import { config } from "./icons";
import type { ColoredChannel } from "./types";
import { ColorUtils, iconBuffer } from "./index";
import { channels } from "replugged/common";

const Classes = await webpack.waitForProps(["icon", "hamburger"]);

export function selectedIcon(channelColor: string, path: string): void {
  const existingStyle = document.querySelector(`[selected-icon=""]`);
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
  styleElement.setAttribute("selected-icon", "");
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
        background: ${ColorUtils.hex2rgb(channelColor, 0.3)} !important;
        border-radius: var(--radius-xs);
      }
      .channelEditorIcons > div > span > svg:hover {
        background: ${ColorUtils.hex2rgb(channelColor, 0.15)};
        border-radius: var(--radius-xs);
      }
    `;
  }
  document.head.appendChild(styleElement);
}

export function injectNamedChannelStyles(name: string, icon: string): void {
  const existingStyle = document.querySelector(`[data-channel-named-style="${name}"]`);
  if (existingStyle) {
    existingStyle.remove(); // Remove existing style if found
  }

  const styleElement = document.createElement("style");
  styleElement.setAttribute("data-channel-named-style", name);
  styleElement.textContent = `
    div:not([class*="Voice"]) > div > [aria-label*="${name}" i]:is([href^="/channels/"]) > div > div > svg > path {
    d: path(
      "${iconBuffer}${icon}"
    );
    fill-rule: evenodd;
  }`;
  document.head.appendChild(styleElement);
}

export function injectChannelPillStyle(): void {
  const existingStyle = document.querySelector(`[colored-channel-pills=""]`);
  if (existingStyle) {
    existingStyle.remove(); // Remove existing style if found
  }

  if (config.get("coloredChannelPills")) {
    const styleElement = document.createElement("style");
    styleElement.setAttribute("colored-channel-pills", "");
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
    ...config.get("coloredChannels"),
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
        color: ${ColorUtils.hex2rgb(channelColor, 0.8)} !important;
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
        background: ${ColorUtils.hex2rgb(channelColor, 0.15)} !important;
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
        background: ${ColorUtils.hex2rgb(channelColor, 0.3)} !important;
      }
    `;
  }
  document.head.appendChild(styleElement);
}

export function capitalizeWords(
  sentence: string,
  specialCases: Record<string, string>,
  lowercaseExceptions: Set<string>
): string {
  const words = sentence.split("-");
  const capitalizedWords = words.map((word, index) => {
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

export function getCurrentChannelObject(): ColoredChannel | void {
  const currentSelectedChannelId = channels.getCurrentlySelectedChannelId();
  if (!currentSelectedChannelId) return;
  // eslint-disable-next-line consistent-return
  return config.get("coloredChannels")[currentSelectedChannelId];
}

export function getChannelObject(channelId: string): ColoredChannel {
  return config.get("coloredChannels")[channelId];
}

interface EditedChannelIconProps {
  channel: ColoredChannel;
}

export const EditedChannelIcon = ({ channel }: EditedChannelIconProps) => {
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
        fill={channel.color}
        fillRule="evenodd"
        d={channel.icon}
        clipRule="evenodd"
        className=""></path>
    </svg>
  );
};
