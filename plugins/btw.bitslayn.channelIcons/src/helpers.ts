export function injectChannelStyle(channelId, channelColor, path) {
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
          "${path}"
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
      [class*="selected"] > div > div > [data-list-item-id="channels___${channelId}"] > div > [class^="name"] {
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

export function transformString(str) {
  return str.replace(/[A-Z]/, ' $1').trim();
}
