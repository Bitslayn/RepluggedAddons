export function injectChannelStyle(channelId, channelColor) {
  const existingStyle = document.querySelector(`[data-channel-style="${channelId}"]`);
  if (existingStyle) {
    existingStyle.remove(); // Remove existing style if found
  }

  const styleElement = document.createElement('style');
  styleElement.setAttribute('data-channel-style', channelId);
  styleElement.textContent = `
      /* CSS for channel customization */
      [data-list-item-id="channels___${channelId}"] > div > div > svg > path {
        /* Icon */
        d: path(
          "M10.81 2.86c.38-1.15 2-1.15 2.38 0l1.89 5.83h6.12c1.2 0 1.71 1.54.73 2.25l-4.95 3.6 1.9 5.82a1.25 1.25 0 0 1-1.93 1.4L12 18.16l-4.95 3.6c-.98.7-2.3-.25-1.92-1.4l1.89-5.82-4.95-3.6a1.25 1.25 0 0 1 .73-2.25h6.12l1.9-5.83Z"
        ) !important;
      }
      [data-list-item-id="channels___${channelId}"] > div > [class^="icon"] > svg {
        /* Icon color */
        color: ${channelColor} !important;
      }
      [data-list-item-id="channels___${channelId}"] > div > [class^="children"] div > svg {
        /* Misc buttons color */
        color: ${channelColor} !important;
      }
      [data-list-item-id="channels___${channelId}"] > div > [class^="children"] div > svg:hover {
        /* Hovered misc buttons color */
        color: ${channelColor} !important;
      }
      [data-list-item-id="channels___${channelId}"] > div > [class^="name"] {
        /* Name color */
        color: ${channelColor} !important;
      }
      [data-list-item-id="channels___${channelId}"]:hover {
        /* Hovered background color */
        background: ${shadeColor(channelColor, 70, 0.1)} !important;
      }
      [data-list-item-id="channels___${channelId}"]:hover > div > [class^="name"] {
        /* Hovered name color */
        color: ${channelColor} !important;
      }
      [class*="selected"] > div > div > [aria-label="starboard (text channel)"] > div > [class^="name"] {
        /* Focused name color */
        color: var(--interactive-active) !important;
      }
      [class*="selected"] [data-list-item-id="channels___${channelId}"] {
        /* Focused background color */
        background: ${shadeColor(channelColor, 70, 0.1)} !important;
      }
    `;
  document.head.appendChild(styleElement);
}

function shadeColor(color, percent, transparency) {
  var R = parseInt(color.substring(1, 3), 16);
  var G = parseInt(color.substring(3, 5), 16);
  var B = parseInt(color.substring(5, 7), 16);

  R = parseInt(R * (100 + percent) / 100);
  G = parseInt(G * (100 + percent) / 100);
  B = parseInt(B * (100 + percent) / 100);

  R = (R < 255) ? R : 255;
  G = (G < 255) ? G : 255;
  B = (B < 255) ? B : 255;

  var RR = ((R.toString(16).length == 1) ? "0" + R.toString(16) : R.toString(16));
  var GG = ((G.toString(16).length == 1) ? "0" + G.toString(16) : G.toString(16));
  var BB = ((B.toString(16).length == 1) ? "0" + B.toString(16) : B.toString(16));

  var alpha = Math.round(transparency * 255);
  var alphaHex = ((alpha.toString(16).length == 1) ? "0" + alpha.toString(16) : alpha.toString(16));

  return "#" + RR + GG + BB + alphaHex;
}
