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
        background: ${channelColor} !important;
      }
      [data-list-item-id="channels___${channelId}"]:hover > div > [class^="name"] {
        /* Hovered name color */
        color: ${channelColor} !important;
      }
      [class*="selected"] > div > div > [aria-label="starboard (text channel)"] > div > [class^="name"] {
        /* Focused name color */
        color: var(--interactive-active) !important;
      }
      [class*="selected"] > div > div > [aria-label="starboard (text channel)"] {
        /* Focused background color */
        background: ${channelColor} !important;
      }
    `;
  document.head.appendChild(styleElement);
}
