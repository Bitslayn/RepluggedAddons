import { config } from "./icons";

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
  if (channelColor == "#ffffff" || channelColor == "#000000") {
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
      .channelEditorIcons > div > svg:hover {
        /* Hovered background color */
        background: ${shadeColor(channelColor, 0.15)} !important;
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

  let RR = R.toString(16).length == 1 ? `0${R.toString(16)}` : R.toString(16);
  let GG = G.toString(16).length == 1 ? `0${G.toString(16)}` : G.toString(16);
  let BB = B.toString(16).length == 1 ? `0${B.toString(16)}` : B.toString(16);

  let alpha = Math.round(transparency * 255);
  let alphaHex = alpha.toString(16).length == 1 ? `0${alpha.toString(16)}` : alpha.toString(16);

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

export function randomNumber(max): number {
  const buffer = new Uint32Array(1);
  window.crypto.getRandomValues(buffer);
  return buffer[0] % max;
}
