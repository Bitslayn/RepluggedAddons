import { getCurrentChannelObject } from "./helpers";
import { Icons, group1Array } from "./icons";
import { iconBuffer } from "./index";

export const command = () => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24">
      <g fill={getCurrentChannelObject()?.color ?? "var(--channel-icon)"}>
        {/* <path d={`${iconBuffer}${group1Array.find((i) => i.label === "SlashBoxIcon").value}`} fillRule="evenodd"/> */}
        <path
          d={`${iconBuffer}${Icons.find(i => i.label === "SlashBox").value}`}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
};

export const game = () => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24">
      <g fill={getCurrentChannelObject()?.color ?? "var(--channel-icon)"}>
        {/* <path d={`${iconBuffer}${group1Array.find((i) => i.label === "GameControllerIcon").value}`} fillRule="evenodd"/> */}
        <path
          d={`${iconBuffer}${Icons.find(i => i.label === "GameController").value}`}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
};

export const general = () => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24">
      <g fill={getCurrentChannelObject()?.color ?? "var(--channel-icon)"}>
        {/* <path d={`${iconBuffer}${group1Array.find((i) => i.label === "ChatIcon").value}`} fillRule="evenodd"/> */}
        <path d={`${iconBuffer}${Icons.find(i => i.label === "Chat").value}`} fillRule="evenodd" />
      </g>
    </svg>
  );
};

export const help = () => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24">
      <g fill={getCurrentChannelObject()?.color ?? "var(--channel-icon)"}>
        {/* <path d={`${iconBuffer}${group1Array.find((i) => i.label === "").value}`} fillRule="evenodd"/> */}
        <path
          d={`${iconBuffer}${Icons.find(i => i.label === "CircleQuestion").value}`}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
};

export const info = () => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24">
      <g fill={getCurrentChannelObject()?.color ?? "var(--channel-icon)"}>
        {/* <path d={`${iconBuffer}${group1Array.find((i) => i.label === "").value}`} fillRule="evenodd"/> */}
        <path
          d={`${iconBuffer}${Icons.find(i => i.label === "CircleInformation").value}`}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
};

export const intro = () => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24">
      <g fill={getCurrentChannelObject()?.color ?? "var(--channel-icon)"}>
        <path
          d={`${iconBuffer}${Icons.find(i => i.label === "HandList").value}`}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
};

export const join = () => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24">
      <g fill={getCurrentChannelObject()?.color ?? "var(--channel-icon)"}>
        <path
          d={`${iconBuffer}${Icons.find(i => i.label === "NewMember").value}`}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
};

export const links = () => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24">
      <g fill={getCurrentChannelObject()?.color ?? "var(--channel-icon)"}>
        <path d={`${iconBuffer}${Icons.find(i => i.label === "Link").value}`} fillRule="evenodd" />
      </g>
    </svg>
  );
};

export const log = () => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24">
      <g fill={getCurrentChannelObject()?.color ?? "var(--channel-icon)"}>
        <path
          d={`${iconBuffer}${Icons.find(i => i.label === "Summaries").value}`}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
};

export const media = () => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24">
      <g fill={getCurrentChannelObject()?.color ?? "var(--channel-icon)"}>
        <path d={`${iconBuffer}${Icons.find(i => i.label === "Image").value}`} fillRule="evenodd" />
      </g>
    </svg>
  );
};

export const meme = () => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24">
      <g fill={getCurrentChannelObject()?.color ?? "var(--channel-icon)"}>
        <path
          d={`${iconBuffer}${Icons.find(i => i.label === "Sticker").value}`}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
};

export const music = () => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24">
      <g fill={getCurrentChannelObject()?.color ?? "var(--channel-icon)"}>
        <path d={`${iconBuffer}${Icons.find(i => i.label === "Music").value}`} fillRule="evenodd" />
      </g>
    </svg>
  );
};

export const role = () => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24">
      <g fill={getCurrentChannelObject()?.color ?? "var(--channel-icon)"}>
        <path
          d={`${iconBuffer}${Icons.find(i => i.label === "Shield").value}`}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
};

export const rule = () => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24">
      <g fill={getCurrentChannelObject()?.color ?? "var(--channel-icon)"}>
        <path
          d={`${iconBuffer}${Icons.find(i => i.label === "BookCheck").value}`}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
};

export const star = () => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24">
      <g fill={getCurrentChannelObject()?.color ?? "var(--channel-icon)"}>
        <path
          d={`${iconBuffer}${Icons.find(i => i.label === "StarGuildList").value}`}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
};

export const voice = () => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24">
      <g fill={getCurrentChannelObject()?.color ?? "var(--channel-icon)"}>
        <path
          d={`${iconBuffer}${Icons.find(i => i.label === "Microphone").value}`}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
};

/*export const discord = () => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24">
      <g fill={getCurrentChannelObject()?.color ?? "var(--channel-icon)"}>
        <path d={`${iconBuffer}${group1Array.find((i) => i.label === "ClydeIcon").value}`} fillRule="evenodd"/>
      </g>
    </svg>
  );
};*/

export const facebook = () => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24">
      <g fill={getCurrentChannelObject()?.color ?? "var(--channel-icon)"}>
        <path
          d={`${iconBuffer}${Icons.find(i => i.label === "Facebook").value}`}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
};

export const instagram = () => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24">
      <g fill={getCurrentChannelObject()?.color ?? "var(--channel-icon)"}>
        <path
          d={`${iconBuffer}${Icons.find(i => i.label === "Instagram").value}`}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
};

export const twitter = () => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24">
      <g fill={getCurrentChannelObject()?.color ?? "var(--channel-icon)"}>
        <path
          d={`${iconBuffer}${Icons.find(i => i.label === "Twitter").value}`}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
};

export const RaccoonSVG = () => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 182.000000 156.000000"
      preserveAspectRatio="xMidYMid meet">
      <g
        transform="translate(0.000000,156.000000) scale(0.100000,-0.100000)"
        fill={getCurrentChannelObject()?.color ?? "#a19488"}
        stroke="none">
        <path
          d="M834 1452 c-17 -12 -55 -79 -89 -158 l-32 -73 -44 30 c-54 35 -59 36 -90 3 -43 -46 -53 -47 -102 -9 -24 19 -54 50 -65 70 -48 81 -87 49 -97 -79 -8 -95 6 -179 34 -199 33 -23 33 -47 0 -100 -21 -34 -29 -59 -27 -79 3 -15 3 -28 0 -28 -2 0 -31 16 -63 37 -53 32 -62 35 -85 24 -23 -10 -26 -16 -21 -46 5 -30 3 -35 -14 -35 -49 0 -34 -68 24 -110 104 -74 180 -121 194 -118 21 4 38 32 30 51 -3 8 -34 34 -69 58 -35 23 -64 43 -66 44 -1 1 0 9 4 18 5 13 26 6 124 -45 101 -53 121 -60 134 -49 32 26 20 59 -31 85 -51 26 -99 61 -73 53 121 -37 334 -72 355 -59 6 4 40 28 76 53 64 47 128 74 152 66 22 -8 61 21 112 82 34 40 55 58 65 54 8 -4 25 -7 38 -7 12 -1 22 -2 22 -2 0 -1 -38 -51 -85 -110 -47 -60 -85 -114 -85 -121 0 -16 28 -43 45 -43 8 0 27 17 42 37 15 21 53 70 85 108 71 89 128 183 128 212 0 34 -33 47 -69 28 l-30 -15 -3 38 c-3 33 -6 37 -34 40 -27 3 -39 -7 -114 -94 -70 -80 -85 -93 -91 -78 -4 11 -26 37 -49 59 -23 22 -48 53 -55 69 -9 20 -27 34 -66 50 -61 25 -62 29 -25 111 l22 50 22 -79 c25 -94 40 -109 77 -82 17 12 18 18 6 72 -16 73 -57 192 -72 210 -13 15 -28 18 -45 6z m-387 -340 c-38 -40 -49 -31 -55 44 l-5 57 46 -34 45 -34 -31 -33z m282 20 c75 -36 111 -60 141 -94 22 -26 40 -51 40 -57 0 -16 -99 -114 -147 -145 l-41 -28 -84 17 c-46 9 -116 26 -156 37 l-72 21 25 45 c14 24 25 54 25 65 0 12 33 54 82 104 46 46 83 83 84 83 1 0 47 -22 103 -48z M697 1044 c-13 -13 -7 -51 9 -65 23 -19 49 1 49 37 0 24 -5 30 -25 32 -14 2 -29 0 -33 -4z M530 1011 c-8 -17 -7 -24 10 -41 28 -28 63 -11 58 28 -4 35 -51 44 -68 13z M635 956 c-25 -18 -16 -60 14 -64 31 -5 54 23 41 48 -13 24 -35 31 -55 16z M1622 872 c-9 -16 -36 -50 -59 -76 -32 -37 -47 -47 -60 -41 -10 4 -46 9 -81 11 -99 6 -214 -33 -280 -94 l-32 -30 -14 31 c-17 43 -39 59 -73 55 -21 -2 -29 -9 -31 -27 -2 -14 3 -30 10 -35 8 -6 20 -21 26 -33 15 -27 16 -126 2 -173 -16 -53 -21 -118 -10 -125 6 -3 15 -15 20 -26 10 -17 7 -19 -29 -19 -36 0 -40 3 -51 35 -12 37 -50 56 -73 37 -7 -6 -18 -8 -24 -4 -6 4 -34 5 -62 4 -64 -5 -101 -36 -101 -85 0 -32 -3 -35 -51 -50 -67 -22 -92 -22 -62 0 13 8 23 26 23 38 0 16 8 25 25 29 19 5 25 13 25 35 0 24 -6 31 -32 41 -38 12 -80 47 -98 80 -8 16 -10 44 -6 90 6 53 4 69 -8 79 -25 21 -54 4 -66 -37 -26 -97 0 -190 69 -238 22 -16 41 -32 41 -35 0 -3 -12 -12 -26 -19 -14 -8 -48 -40 -76 -72 -104 -120 -30 -139 242 -60 66 19 80 34 80 83 0 34 2 37 38 42 20 3 44 8 54 12 12 5 18 -1 23 -27 13 -60 16 -61 155 -53 146 7 157 10 165 35 10 30 -12 58 -70 91 -55 31 -60 38 -46 73 5 14 10 16 15 8 13 -21 51 -13 73 16 19 26 98 62 137 62 10 0 24 -7 31 -16 16 -22 61 -11 68 16 3 13 13 20 31 20 49 0 131 41 191 95 l60 54 0 94 c0 79 -3 99 -19 116 -26 28 -43 26 -64 -7z m-2 -178 c-12 -14 -40 -20 -40 -8 0 3 10 20 23 37 21 31 22 31 25 9 2 -13 -2 -30 -8 -38z m-185 -17 c91 -28 112 -60 48 -71 -21 -4 -45 -9 -54 -12 -12 -3 -25 9 -43 42 -14 26 -26 48 -26 50 0 8 36 3 75 -9z m-132 -55 c22 -38 22 -38 -18 -46 -27 -5 -32 -2 -46 28 -14 30 -14 34 0 44 25 17 43 10 64 -26z m-123 -77 c0 -6 -13 -19 -30 -28 -26 -16 -30 -16 -30 -3 0 22 43 64 52 51 4 -5 8 -15 8 -20z M584 685 c-24 -37 -16 -140 15 -181 40 -54 95 -78 193 -82 87 -4 87 -4 119 27 32 32 32 32 26 114 -7 97 -12 114 -38 122 -40 13 -50 -11 -43 -102 l7 -83 -56 0 c-64 0 -102 12 -135 43 -19 18 -22 30 -21 85 1 45 -2 67 -12 73 -23 14 -38 10 -55 -16z"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
};

export const Bitslayn = () => {
  return (
    <svg
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 300.000000 300.000000"
      preserveAspectRatio="xMidYMid meet"
      width="32"
      height="32">
      <g
        xmlns="http://www.w3.org/2000/svg"
        transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
        fill="#000000"
        stroke="none">
        <path
          d="M1022 2873 c-23 -9 -70 -117 -87 -203 -9 -47 -21 -103 -27 -125 -5 -21 -14 -98 -19 -169 -4 -72 -13 -163 -20 -202 -10 -62 -9 -75 6 -104 12 -24 15 -44 10 -76 -4 -29 -3 -44 5 -44 5 0 -1 -17 -14 -37 -36 -54 -56 -118 -56 -174 0 -42 -5 -55 -34 -87 -33 -36 -116 -91 -116 -76 0 4 11 22 26 41 16 22 20 33 12 33 -8 0 -27 -20 -42 -45 -16 -25 -36 -45 -46 -45 -26 0 -79 58 -92 102 -10 34 -9 48 6 90 24 70 13 71 -19 2 -22 -46 -26 -68 -23 -108 5 -61 40 -134 85 -181 l33 -34 -52 -28 c-69 -38 -111 -110 -111 -192 0 -32 7 -70 16 -88 9 -17 26 -56 37 -87 24 -62 73 -122 91 -110 9 5 8 10 -3 18 -25 18 -30 53 -18 114 14 66 59 170 91 210 26 32 24 22 -17 -83 -21 -55 -27 -90 -30 -165 -3 -106 -9 -140 -35 -185 -21 -37 -36 -100 -21 -91 6 3 12 0 15 -6 6 -21 -13 -92 -28 -101 -8 -4 -19 -25 -25 -47 -10 -38 -11 -39 -43 -28 -71 24 -127 87 -127 144 0 22 -3 25 -10 14 -14 -23 -4 -86 20 -125 26 -42 66 -72 128 -95 44 -17 47 -21 53 -61 5 -34 3 -48 -11 -64 -59 -67 -77 -170 -39 -219 l22 -27 -31 -32 c-31 -33 -52 -68 -52 -86 0 -22 15 -10 29 21 16 37 164 186 197 198 14 6 25 22 30 45 7 28 17 40 42 51 32 13 33 13 26 -9 -4 -12 -15 -40 -25 -62 l-17 -40 4 40 4 40 -10 -38 c-10 -38 -33 -89 -80 -176 -25 -46 -20 -76 14 -76 12 0 28 32 60 125 90 255 110 299 147 320 101 58 107 60 113 44 3 -9 6 -30 6 -47 0 -29 -1 -30 -15 -11 -23 31 -17 6 10 -41 39 -65 133 -137 178 -134 7 0 -10 11 -38 25 -27 13 -41 22 -30 18 43 -12 85 -16 119 -10 35 7 95 60 139 123 13 20 31 33 43 33 25 0 38 14 69 72 12 23 27 44 33 46 5 1 15 -21 22 -50 7 -29 18 -63 26 -75 16 -25 70 -43 130 -43 l42 0 22 -61 23 -61 -32 -30 c-30 -28 -32 -33 -24 -72 4 -22 8 -71 8 -108 0 -69 8 -87 19 -45 9 33 7 96 -5 146 -9 39 -7 46 11 66 l21 23 24 -24 c31 -31 83 -32 159 -3 45 18 62 31 90 73 19 28 38 65 41 81 5 20 3 26 -3 17 -6 -10 -11 -1 -15 28 -5 36 1 55 33 119 41 81 70 157 69 181 0 18 -48 -69 -49 -88 0 -8 -15 -40 -34 -72 -19 -32 -36 -66 -39 -76 -3 -11 -5 33 -4 96 1 65 6 118 12 122 6 5 4 8 -6 8 -8 0 -30 16 -48 34 -31 32 -33 39 -28 83 3 27 18 76 32 110 l27 63 21 -26 c14 -19 27 -25 44 -21 19 4 24 1 19 -12 -3 -9 -17 -49 -31 -90 -14 -40 -25 -85 -24 -100 1 -17 8 -3 20 39 30 99 49 137 60 119 5 -8 9 -21 9 -30 0 -9 8 -23 19 -33 17 -16 20 -16 49 1 33 19 56 11 30 -10 -26 -21 -68 -83 -61 -90 13 -13 21 -7 27 23 3 19 16 37 33 47 28 16 73 75 73 95 0 6 7 20 17 30 9 10 11 18 5 18 -7 0 -11 8 -10 18 1 9 0 32 0 50 -2 28 -5 32 -21 27 -13 -4 -23 0 -30 12 -6 10 -11 12 -11 6 0 -7 -8 -13 -18 -13 -14 0 -17 7 -14 39 3 33 -1 45 -22 66 -16 16 -33 24 -42 21 -51 -20 -61 -18 -74 13 -13 31 -24 39 -35 22 -3 -6 -18 -6 -37 0 -26 7 -36 5 -53 -11 -19 -18 -23 -18 -43 -4 -27 19 -28 30 -3 43 17 9 18 8 13 -12 -5 -21 -4 -21 14 -6 10 9 24 15 29 13 6 -2 18 16 28 41 11 24 37 72 59 105 23 33 38 63 35 67 -4 3 -10 -3 -14 -13 -8 -23 -39 -51 -65 -60 -29 -9 -32 1 -11 33 46 67 73 163 72 248 l-2 60 -7 -45 c-11 -66 -24 -103 -38 -108 -16 -5 -5 49 12 60 7 5 8 8 0 8 -5 0 -16 24 -23 53 -10 36 -25 63 -50 87 -58 56 -107 149 -132 250 -7 31 -8 29 -4 -16 3 -50 49 -158 83 -197 8 -9 12 -20 8 -24 -3 -4 -27 13 -52 38 -25 24 -42 36 -38 26 6 -17 5 -18 -15 -5 -50 30 -131 255 -132 367 -1 33 -4 49 -9 40 -10 -16 -3 -164 11 -234 5 -27 20 -71 33 -98 20 -40 21 -49 9 -56 -9 -5 -13 -19 -11 -37 3 -28 5 -29 73 -35 81 -7 150 -26 167 -47 12 -14 38 -79 38 -95 0 -11 -81 2 -98 16 -12 10 -56 6 -167 -12 -42 -7 -46 -10 -27 -16 15 -5 21 -13 18 -22 -3 -8 -6 -17 -6 -19 0 -3 -4 -3 -9 0 -5 3 -14 -1 -21 -9 -10 -12 -9 -16 6 -21 11 -3 32 -11 48 -17 35 -13 193 -10 215 4 11 7 -3 8 -44 4 l-60 -7 28 26 c15 14 27 32 27 41 0 14 4 14 33 -2 17 -9 38 -16 45 -15 18 4 15 -18 -8 -55 -13 -22 -31 -35 -60 -43 -22 -6 -40 -14 -40 -19 0 -4 12 -18 27 -32 19 -17 23 -18 11 -4 -17 21 -16 21 29 33 27 8 57 25 74 43 41 44 36 26 -17 -64 -32 -56 -54 -82 -76 -91 -58 -25 -3 -31 76 -9 15 4 11 -4 -14 -36 -24 -29 -49 -46 -89 -61 -31 -11 -65 -25 -76 -32 -11 -6 -38 -21 -60 -32 -22 -12 -78 -59 -125 -104 l-85 -84 -67 4 c-47 2 -76 10 -95 24 -19 14 -58 80 -118 202 -50 101 -104 196 -122 215 -39 39 -41 47 -10 47 30 0 117 55 117 75 0 20 -7 19 -32 -5 -32 -30 -80 -35 -133 -14 -52 19 -65 37 -65 89 0 85 68 158 219 235 l93 48 47 -15 c58 -20 58 -20 35 -38 -13 -10 -32 -13 -63 -8 -27 3 -42 2 -38 -4 3 -5 -18 -17 -48 -27 -30 -9 -55 -21 -55 -26 0 -7 59 13 136 46 6 3 19 -3 29 -12 16 -17 19 -17 49 0 25 13 44 16 82 11 56 -8 78 6 72 47 -2 15 4 26 17 33 43 22 56 71 53 202 -3 107 -5 123 -20 123 -14 0 -15 -5 -7 -32 16 -56 11 -191 -8 -234 l-18 -39 -3 33 c-4 41 -18 41 -26 0 -3 -18 -16 -43 -29 -56 l-22 -24 23 7 c35 10 25 -27 -10 -39 -34 -12 -46 -2 -27 20 13 16 12 17 -8 12 -18 -5 -23 -2 -23 14 0 26 36 73 43 56 8 -25 19 1 24 60 5 50 1 69 -20 116 -29 63 -42 73 -31 24 14 -63 11 -123 -8 -165 -15 -35 -24 -43 -46 -44 l-27 -1 25 -7 c27 -7 38 -37 21 -54 -7 -7 -16 -6 -28 5 -10 8 -31 18 -47 22 l-28 7 46 31 c45 29 76 63 76 82 0 5 -9 0 -20 -11 -35 -38 -83 -69 -195 -128 -143 -75 -189 -108 -224 -164 -55 -88 -47 -172 21 -207 42 -22 20 -31 -25 -9 -35 16 -67 68 -67 108 0 13 -6 29 -12 36 -7 8 -8 11 -2 8 8 -4 14 10 18 42 3 26 17 70 31 97 30 60 32 69 4 29 -65 -96 -91 -192 -70 -257 18 -53 61 -89 115 -95 46 -6 46 -6 46 -45 0 -71 -76 -142 -178 -165 l-57 -13 53 5 c48 4 51 3 42 -14 -5 -10 -22 -21 -37 -23 -16 -3 -36 -9 -45 -13 -14 -5 -18 -2 -18 14 0 12 -6 21 -15 21 -19 0 -25 -26 -26 -123 0 -27 -4 -37 -16 -37 -10 0 -14 6 -10 20 6 25 -15 27 -34 3 -42 -53 -50 -100 -24 -149 14 -27 13 -29 -14 -40 -76 -32 -74 -33 -67 32 3 33 8 79 10 104 2 25 13 68 24 95 10 28 22 68 26 89 6 33 5 37 -7 25 -7 -8 -26 -23 -40 -34 -15 -11 -27 -25 -27 -31 0 -6 -11 -21 -25 -34 -13 -12 -22 -27 -19 -31 5 -8 -28 -114 -39 -125 -3 -3 -10 3 -16 14 -12 23 0 110 23 167 9 21 14 40 12 43 -8 7 -44 -72 -50 -113 -12 -71 -24 -62 -32 23 -4 49 -1 69 15 100 31 62 149 154 158 125 8 -22 44 -63 66 -74 16 -9 14 -3 -10 23 -18 19 -33 39 -33 46 0 7 -4 12 -10 12 -5 0 -10 11 -10 25 0 31 2 31 48 1 55 -36 81 -40 133 -18 33 14 50 30 62 55 23 47 22 72 -1 27 -52 -105 -211 -97 -229 13 -5 34 -4 37 19 37 29 0 90 38 132 82 24 25 29 40 33 96 8 110 56 194 177 309 54 51 134 122 177 156 43 34 76 63 74 65 -10 10 -187 -120 -256 -188 -45 -45 -83 -74 -93 -72 -9 2 -13 8 -10 14 3 5 -2 27 -11 48 -15 34 -16 50 -6 152 7 62 16 158 22 213 21 216 54 351 98 406 l18 23 19 -24 c10 -13 49 -56 86 -95 70 -73 87 -113 88 -197 0 -20 5 -38 11 -40 8 -3 9 -13 4 -28 -7 -24 -8 -23 -25 11 -10 19 -24 53 -30 77 -7 23 -17 42 -21 42 -10 0 -23 -144 -15 -181 3 -18 2 -28 -4 -24 -6 3 -10 2 -10 -3 0 -5 9 -12 21 -15 16 -4 19 -2 13 11 -3 9 -8 42 -10 72 -3 43 -1 49 6 30 7 -20 8 -16 4 20 l-4 45 28 -61 c25 -52 51 -81 64 -69 7 7 -4 155 -12 150 -7 -4 -22 46 -16 53 9 8 95 -83 114 -120 32 -66 29 -97 -15 -140 -52 -49 -78 -61 -116 -52 -71 15 -105 48 -110 107 -4 51 -27 -19 -27 -83 0 -39 51 -88 98 -96 48 -8 66 11 19 20 -34 7 -84 42 -74 53 3 3 24 -2 47 -11 59 -24 73 -21 175 34 76 41 102 50 142 50 38 0 56 -5 75 -23 14 -13 30 -21 37 -19 10 3 11 -5 7 -29 -5 -27 -4 -30 4 -12 9 22 10 22 39 6 16 -10 27 -22 23 -28 -3 -5 3 -2 14 7 17 15 36 18 119 19 59 1 117 -29 160 -83 87 -109 139 -148 199 -148 27 -1 29 -2 13 -11 -24 -14 -71 -5 -108 22 -16 11 -29 18 -29 14 0 -10 52 -85 60 -85 10 0 74 -97 105 -157 68 -137 51 -274 -50 -408 -35 -47 -36 -48 -6 -21 17 17 31 28 31 25 0 -3 -9 -30 -20 -61 -14 -41 -18 -70 -14 -102 7 -48 27 -86 39 -74 4 4 0 14 -9 23 -11 11 -13 22 -8 33 5 9 14 51 21 92 7 41 20 95 29 119 l16 43 15 -33 c31 -66 155 -106 200 -65 19 18 20 17 35 -19 17 -40 13 -77 -10 -96 -11 -9 -21 -5 -50 21 -39 34 -80 53 -98 46 -6 -2 -4 -5 5 -5 28 -2 98 -60 118 -98 37 -73 44 -119 27 -177 -28 -96 -90 -158 -123 -125 -8 8 -13 7 -18 -2 -5 -8 -4 -10 4 -5 26 16 22 -27 -6 -62 -33 -41 -42 -61 -48 -106 -2 -17 -6 -52 -10 -78 -6 -48 14 -118 34 -118 6 0 20 -9 32 -21 18 -18 23 -19 37 -7 9 8 35 20 57 27 22 7 50 23 63 34 l22 20 0 -24 c0 -19 -42 -98 -53 -99 -1 0 -20 -7 -42 -15 -26 -9 -32 -14 -19 -15 41 0 86 27 115 70 27 40 29 41 29 17 0 -14 -10 -35 -22 -47 -18 -17 -19 -20 -5 -20 23 0 21 -13 -5 -37 -50 -45 -97 -54 -146 -29 -31 16 -137 123 -145 146 -4 12 -6 11 -6 -3 -1 -23 124 -146 161 -159 16 -6 33 -19 39 -29 5 -10 16 -19 24 -19 20 0 75 -112 75 -152 -1 -27 -2 -30 -11 -15 -17 29 -30 19 -14 -13 24 -47 17 -56 -18 -22 -35 34 -67 108 -67 155 0 15 -7 30 -15 33 -8 4 -15 15 -15 26 0 14 -5 18 -15 15 -8 -4 -17 -2 -20 3 -3 5 -28 12 -56 16 -27 4 -52 11 -55 15 -3 5 -14 9 -25 9 -12 0 -19 5 -16 13 2 6 12 10 22 9 16 -3 17 -2 5 13 -9 11 -15 13 -20 4 -4 -6 -16 -9 -26 -7 -24 4 -31 79 -14 156 7 30 9 56 7 59 -9 9 -28 -69 -34 -143 -5 -68 -5 -72 25 -105 28 -31 37 -34 98 -39 65 -5 68 -6 87 -40 11 -19 28 -62 37 -96 24 -83 34 -99 71 -114 29 -12 31 -16 25 -52 -5 -29 -1 -52 16 -89 13 -27 27 -49 31 -49 10 0 1 33 -20 73 -13 25 -13 30 0 40 8 7 23 36 32 66 15 45 16 62 6 108 -10 52 -57 143 -73 143 -21 0 -4 18 21 23 15 3 43 18 60 33 29 24 32 32 28 68 -2 23 -9 55 -15 71 -6 17 -19 61 -28 99 -16 66 -63 140 -79 125 -3 -4 1 -14 10 -22 25 -26 46 -85 39 -112 -8 -32 -59 -75 -89 -75 -13 0 -27 -5 -30 -10 -5 -8 -11 -8 -20 0 -7 6 -19 8 -27 5 -24 -9 -41 57 -33 128 10 87 17 101 90 179 109 118 136 204 100 312 -15 43 -15 46 5 66 47 47 17 145 -70 224 -51 46 -71 39 -23 -9 36 -36 40 -61 11 -79 -21 -13 -78 5 -125 41 -37 27 -41 54 -22 142 22 103 -24 252 -106 349 l-37 42 37 0 c28 0 44 8 68 32 20 20 27 33 19 36 -6 2 -12 10 -12 18 0 18 -8 18 -26 -1 -9 -8 -23 -15 -32 -15 -13 1 -10 6 11 21 34 26 97 148 97 189 0 34 -14 38 -47 15 -12 -9 -27 -14 -34 -13 -6 2 -14 -3 -16 -9 -6 -17 7 -16 52 2 37 16 37 16 30 -7 -17 -55 -72 -154 -97 -171 -45 -33 -76 -15 -178 104 -24 27 -40 57 -40 71 0 39 34 74 87 88 26 7 74 26 107 42 32 15 60 28 63 28 2 0 -3 -12 -11 -27 -19 -37 -37 -95 -31 -101 3 -3 14 3 24 12 11 10 25 15 30 11 6 -3 11 -1 11 5 0 8 -9 10 -24 6 l-25 -6 23 56 c16 38 33 61 55 75 18 11 60 42 92 69 105 87 114 74 113 -154 -2 -195 -15 -303 -51 -396 -13 -36 -29 -81 -35 -100 -5 -19 -25 -53 -44 -76 -45 -54 -44 -78 1 -28 42 47 78 111 70 124 -3 6 -1 10 4 10 6 0 10 3 9 8 -1 4 8 36 20 72 32 95 42 184 42 383 0 184 -6 217 -40 217 -10 0 -20 5 -22 11 -2 6 -33 -14 -68 -45 -87 -76 -204 -141 -301 -167 -44 -12 -82 -25 -85 -30 -3 -5 -14 -9 -26 -9 -11 0 -33 -9 -49 -21 -27 -19 -34 -20 -80 -9 -44 11 -96 8 -134 -6 -7 -3 -28 8 -46 24 -43 37 -91 62 -121 62 -25 0 -87 54 -151 133 -21 26 -44 47 -51 47 -18 0 -156 130 -206 195 -45 59 -67 75 -88 68z m418 -441 c0 -4 -5 -13 -12 -20 -18 -18 -28 -15 -28 8 0 13 7 20 20 20 11 0 20 -4 20 -8z m338 -591 c3 -8 -4 -12 -19 -9 -17 2 -25 11 -27 27 -4 24 -3 24 19 9 13 -8 25 -20 27 -27z m-28 -226 c5 3 7 12 3 20 -3 10 1 15 12 15 12 0 15 -5 10 -20 -9 -27 38 -39 64 -16 23 21 34 10 13 -15 -17 -20 -76 -27 -87 -9 -3 5 -12 7 -20 4 -18 -7 -30 20 -19 44 7 15 8 14 11 -6 3 -12 8 -20 13 -17z m-1140 -75 c24 0 25 -3 27 -58 l3 -57 -28 32 c-15 18 -39 51 -52 74 l-23 42 24 -16 c13 -9 35 -17 49 -17z m511 -102 c11 -22 27 -58 34 -79 l14 -38 -40 2 c-26 1 -38 6 -34 15 2 6 -2 12 -9 12 -8 0 -18 -12 -23 -26 -8 -23 -15 -26 -57 -28 l-48 -2 26 21 c74 55 106 96 106 130 0 19 2 35 5 35 2 0 14 -19 26 -42z m52 -166 c36 -37 48 -109 21 -130 -18 -13 -17 -14 9 -9 34 5 37 1 48 -81 25 -173 23 -179 -29 -161 -31 11 -32 12 -32 74 0 34 -7 82 -15 106 -9 24 -14 52 -11 62 2 10 -6 30 -18 45 -27 33 -46 76 -46 102 0 30 41 25 73 -8z m-125 -8 c44 -31 62 -87 48 -154 l-7 -35 20 23 c11 13 25 21 30 17 14 -8 29 -67 37 -147 l7 -67 -29 3 c-16 2 -37 4 -46 5 -12 1 -18 9 -18 26 0 13 -9 49 -21 79 -11 31 -18 60 -14 65 3 6 -5 20 -18 33 -28 28 -71 132 -63 153 7 20 46 19 74 -1z m-125 -23 c36 -14 60 -93 53 -168 -6 -56 -5 -57 9 -28 8 17 14 36 15 43 1 45 55 -59 80 -157 12 -45 10 -49 -50 -111 -3 -3 -6 -18 -6 -35 -5 -100 -9 -133 -21 -155 -18 -34 -16 -95 4 -133 15 -29 15 -31 0 -19 -9 8 -19 24 -22 35 -4 12 -38 85 -75 162 -38 77 -75 158 -83 180 -8 22 -18 48 -22 58 -7 16 -5 17 20 5 25 -11 29 -10 51 15 13 16 24 37 24 48 0 11 5 17 10 14 18 -11 41 -77 55 -153 17 -93 29 -107 20 -22 -4 44 -18 90 -43 140 -57 119 -56 115 -26 91 55 -43 45 -19 -16 43 -82 83 -88 98 -49 131 34 28 38 29 72 16z m376 -125 c22 -35 42 -106 61 -211 6 -38 7 -39 14 -13 5 18 1 46 -13 88 -12 33 -21 63 -21 66 0 3 15 -3 33 -14 20 -12 58 -22 101 -25 l69 -5 66 55 c36 31 79 68 94 84 27 26 97 73 97 64 0 -2 -11 -20 -24 -39 -19 -29 -25 -53 -30 -133 -9 -126 -24 -192 -52 -223 -12 -14 -24 -36 -26 -50 -2 -18 -10 -26 -29 -28 -31 -4 -57 22 -41 41 17 21 23 72 13 100 -12 32 -31 36 -31 7 0 -20 0 -20 -29 1 -24 18 -37 20 -73 15 -39 -6 -46 -11 -58 -41 -10 -24 -17 -32 -25 -25 -14 12 -25 3 -25 -22 0 -10 -6 -18 -14 -18 -16 0 -65 55 -67 73 0 7 -2 39 -4 72 -4 83 -20 173 -38 216 -9 19 -14 44 -12 55 2 10 4 26 5 34 1 8 9 -8 19 -35 9 -28 27 -68 40 -89z m754 63 c6 -10 -1 -31 -23 -67 -18 -28 -37 -52 -41 -52 -4 0 -14 -12 -21 -27 -32 -67 -83 0 -59 77 26 82 110 122 144 69z m-163 -4 c6 -8 9 -23 5 -34 -10 -32 -101 -125 -114 -117 -6 4 -11 29 -11 56 0 38 6 55 26 79 28 34 73 42 94 16z m286 -40 c30 -47 -15 -128 -85 -152 -31 -11 -38 -11 -48 4 -40 53 26 172 94 173 13 0 29 -10 39 -25z m-1346 -38 c31 -24 50 -62 50 -99 0 -34 -20 -68 -41 -68 -30 0 -89 88 -89 133 0 43 45 62 80 34z m-94 -34 c0 -21 4 -47 8 -58 9 -20 9 -20 -7 0 -21 25 -22 95 -2 95 0 0 1 -17 1 -37z m1191 -77 c9 -4 27 6 44 25 l29 31 -30 -65 c-17 -35 -33 -87 -37 -115 -6 -56 -19 -65 -66 -48 -17 7 -30 21 -34 36 -9 34 14 159 34 190 l17 25 14 -37 c8 -20 21 -39 29 -42z m337 45 c34 -38 -3 -151 -49 -151 -8 0 -24 -6 -35 -12 -26 -17 -40 -2 -47 48 -4 34 0 46 32 87 40 52 70 60 99 28z m-433 -63 c-6 -29 -12 -74 -13 -100 -2 -46 -4 -48 -31 -48 -31 0 -87 -47 -87 -74 0 -8 -5 -18 -11 -22 -17 -10 -1 31 33 87 25 40 32 63 36 123 3 56 8 73 18 69 7 -2 23 2 35 11 13 8 25 14 27 12 2 -3 -1 -28 -7 -58z m-1043 -87 c30 -56 39 -81 30 -84 -9 -4 -8 -6 3 -6 10 -1 26 -27 44 -72 15 -38 26 -71 24 -73 -2 -1 -43 -8 -91 -14 -68 -10 -101 -10 -151 0 l-63 12 3 84 c3 89 24 142 73 187 19 17 64 42 81 44 3 1 24 -35 47 -78z m462 -29 c31 -23 51 -73 32 -80 -6 -2 -10 -7 -7 -12 2 -4 -4 -15 -15 -25 -21 -19 -28 -41 -10 -30 14 8 13 -28 -2 -60 -9 -19 -9 -28 0 -37 16 -16 19 -11 26 61 4 36 9 68 12 73 15 24 93 -17 120 -64 26 -45 27 -50 15 -89 -9 -30 -21 -44 -52 -60 -22 -11 -53 -19 -67 -17 -25 3 -27 7 -25 43 l2 40 -11 -33 c-7 -22 -16 -31 -25 -28 -8 3 -12 2 -8 -3 20 -33 -42 -71 -113 -71 -74 0 -102 26 -102 95 0 76 12 101 52 110 26 6 29 9 13 12 -32 8 -45 23 -45 53 0 35 19 90 38 113 34 39 124 44 172 9z m307 -6 c16 -14 20 -25 13 -35 -7 -12 -11 -12 -23 -2 -30 24 -79 32 -104 16 -25 -17 -26 -16 -17 10 9 22 63 46 89 38 11 -3 30 -15 42 -27z m-22 -63 c14 -16 28 -38 31 -50 4 -15 12 -20 30 -18 14 1 27 -2 30 -6 3 -5 -3 -10 -13 -11 -10 0 -23 -2 -29 -2 -6 -1 -18 -6 -25 -12 -17 -14 -86 -9 -105 7 -18 15 -19 105 -1 112 29 12 58 5 82 -20z m368 -8 c45 -21 87 -78 87 -117 0 -30 -9 -35 -27 -17 -14 14 -151 21 -159 8 -5 -8 9 -13 29 -10 14 2 7 -11 -18 -31 -14 -11 -25 -26 -25 -34 0 -20 17 -17 22 4 3 9 26 27 52 40 40 20 51 22 80 12 19 -6 37 -18 40 -26 9 -24 7 -85 -4 -125 -13 -45 -56 -69 -127 -69 -41 0 -54 5 -77 29 -20 21 -24 30 -14 35 7 3 3 3 -10 0 -15 -4 -30 0 -42 11 -18 16 -18 16 -13 -4 5 -19 1 -21 -46 -21 -92 0 -123 58 -82 152 23 53 47 68 113 70 46 1 54 -3 75 -28 17 -22 23 -25 23 -12 0 20 -37 58 -57 58 -7 0 -13 6 -13 14 0 13 35 64 55 79 16 12 96 2 138 -18z m-503 -30 c0 -12 -5 -11 -29 3 -19 10 -25 19 -18 24 15 9 47 -9 47 -27z m142 -125 c-8 -19 -14 -55 -14 -80 l0 -45 -10 34 c-5 19 -23 54 -39 77 -16 23 -29 44 -29 46 0 2 24 3 53 3 l54 0 -15 -35z m-612 -32 c24 -52 25 -78 4 -78 -8 0 -42 -15 -75 -32 -50 -28 -61 -39 -71 -71 -9 -32 -20 -43 -57 -60 -32 -16 -47 -31 -55 -54 -6 -18 -20 -39 -31 -47 -11 -7 -38 -30 -60 -50 -30 -28 -41 -33 -43 -21 -6 26 52 109 88 127 37 19 59 38 44 38 -5 0 -15 -5 -20 -10 -6 -6 -20 -12 -32 -15 -25 -4 -54 42 -45 74 2 10 0 22 -6 25 -6 4 -11 25 -11 47 0 22 -7 50 -15 63 -18 27 -10 85 13 93 8 4 49 1 91 -6 62 -9 90 -9 151 3 111 21 109 21 130 -26z m464 -99 c-18 -20 -69 -26 -79 -10 -3 6 10 13 30 17 19 3 38 10 41 15 3 5 10 7 15 3 6 -4 3 -14 -7 -25z m612 -64 c-7 -28 -27 -41 -85 -54 -53 -12 -64 5 -13 19 39 10 91 52 93 74 0 6 3 5 6 -2 3 -7 2 -24 -1 -37z m-682 26 c3 -4 -19 -35 -49 -68 -64 -71 -100 -82 -182 -58 -69 21 -100 47 -105 90 -2 19 -2 35 0 35 2 0 16 -9 32 -20 34 -24 104 -36 133 -22 96 45 160 61 171 43z m421 -21 c20 -22 15 -24 -47 -14 -56 10 -48 24 18 33 6 0 19 -8 29 -19z m275 -70 c-26 -63 -125 -130 -193 -130 -25 0 -57 18 -57 33 0 7 -11 36 -25 66 -14 30 -24 55 -22 57 1 2 33 -8 70 -21 37 -14 84 -25 103 -25 45 0 101 26 116 54 16 30 23 2 8 -34z m-1478 -76 c10 -20 9 -30 -5 -54 -9 -15 -17 -36 -17 -45 0 -9 -4 -13 -10 -10 -11 7 -13 77 -4 113 8 29 22 28 36 -4z"
          fillRule="evenodd"
        />
        <path
          d="M1628 1033 c-9 -10 -25 -37 -37 -60 -11 -23 -29 -47 -38 -52 -10 -6 -13 -11 -6 -11 6 0 14 4 18 10 3 5 12 7 20 4 9 -4 16 4 21 23 4 15 15 45 26 66 20 41 19 46 -4 20z"
          fillRule="evenodd"
        />
        <path
          d="M1120 690 c0 -5 16 -16 35 -24 21 -9 40 -26 47 -43 10 -24 12 -25 16 -8 3 13 -7 30 -32 52 -35 32 -66 43 -66 23z"
          fillRule="evenodd"
        />
        <path
          d="M1070 2246 c0 -7 7 -19 15 -26 9 -7 13 -21 10 -31 -8 -23 10 -25 19 -3 4 9 0 24 -9 34 -19 21 -19 27 3 33 10 3 6 5 -10 6 -18 1 -28 -4 -28 -13z"
          fillRule="evenodd"
        />
        <path
          d="M1426 1791 c-3 -22 -13 -47 -22 -55 -14 -15 -13 -16 7 -16 12 0 20 3 17 6 -4 3 0 21 8 39 16 39 18 65 5 65 -5 0 -11 -18 -15 -39z"
          fillRule="evenodd"
        />
        <path
          d="M1143 1787 c1 -16 7 -18 36 -13 28 4 46 -2 93 -30 32 -20 58 -38 58 -41 0 -3 -16 -3 -35 -1 -22 2 -34 0 -32 -6 4 -12 154 -39 174 -32 28 11 13 34 -27 40 -21 3 -50 16 -64 29 -65 61 -206 98 -203 54z"
          fillRule="evenodd"
        />
        <path
          d="M2322 1774 c-19 -19 -32 -39 -30 -44 4 -13 78 53 78 69 0 17 -12 11 -48 -25z"
          fillRule="evenodd"
        />
        <path
          d="M1760 1780 c-14 -4 -19 -8 -12 -9 8 -1 3 -14 -14 -36 -15 -20 -25 -38 -22 -40 2 -3 20 15 38 40 28 38 39 45 68 45 19 0 57 -11 86 -25 28 -14 42 -18 31 -9 -49 40 -116 53 -175 34z"
          fillRule="evenodd"
        />
        <path
          d="M1148 1728 c16 -16 15 -31 0 -22 -7 4 -2 -5 11 -19 14 -15 27 -25 29 -22 3 3 11 0 19 -6 7 -6 13 -8 13 -3 -1 11 -68 84 -77 84 -4 0 -2 -5 5 -12z"
          fillRule="evenodd"
        />
        <path
          d="M1537 1680 c40 -10 81 -24 92 -29 27 -15 36 -14 22 3 -18 21 -98 46 -145 45 -38 0 -35 -2 31 -19z"
          fillRule="evenodd"
        />
        <path
          d="M1204 1539 c-3 -6 5 -21 19 -33 27 -22 41 -62 71 -196 46 -204 73 -251 156 -264 66 -10 99 12 161 110 30 46 66 104 82 128 27 43 57 62 107 68 36 4 25 23 -13 22 -20 -1 -61 -18 -102 -42 -38 -23 -74 -42 -81 -42 -7 0 -26 11 -42 25 -17 14 -37 25 -46 25 -9 0 -16 4 -16 10 0 13 54 40 79 40 29 0 39 45 17 69 -10 11 -27 21 -39 24 -12 3 -41 10 -65 16 -75 19 -111 -28 -59 -77 52 -49 63 -79 25 -68 -13 3 -42 6 -65 6 -49 0 -86 32 -104 90 -21 66 -68 116 -85 89z m309 -60 c20 -5 37 -14 37 -18 0 -9 -74 9 -86 22 -10 10 4 9 49 -4z m3 -60 c0 -20 -30 -27 -41 -9 -9 14 0 25 22 27 12 1 19 -5 19 -18z m-46 -97 c3 -4 18 -8 34 -9 16 0 32 -7 37 -14 4 -7 15 -14 24 -15 27 -4 29 -12 11 -39 -21 -32 -45 -33 -42 -1 2 17 -1 23 -10 19 -9 -3 -14 2 -14 13 0 16 -2 17 -10 4 -7 -11 -10 -12 -10 -2 0 9 -7 11 -20 7 -13 -4 -20 -2 -20 6 0 10 -3 10 -12 1 -10 -10 -15 -7 -26 10 -8 13 -11 15 -8 6 3 -10 2 -27 -2 -39 -8 -19 -8 -19 -23 -2 -8 10 -20 31 -27 46 l-12 28 62 -6 c34 -3 65 -9 68 -13z m-113 -90 c-9 -12 -12 -11 -18 5 -4 10 -8 27 -8 38 -1 18 1 18 19 -5 14 -19 16 -28 7 -38z m267 1 c-36 -64 -44 -72 -44 -45 0 28 25 78 42 85 28 11 28 5 2 -40z m-171 -45 c-2 -4 12 -1 31 7 20 8 40 15 45 15 17 0 41 -31 41 -53 0 -26 -47 -80 -61 -72 -5 4 -9 1 -9 -4 0 -14 -41 -14 -72 -1 -40 16 -62 39 -65 68 -1 15 -4 36 -5 46 -2 13 6 24 21 32 21 11 28 10 51 -9 15 -12 26 -25 23 -29z"
          fillRule="evenodd"
        />
        <path
          d="M1376 1181 c-3 -5 1 -11 9 -15 8 -3 15 -14 15 -25 0 -17 22 -31 60 -35 24 -3 50 13 50 30 0 11 6 14 16 10 10 -4 14 -1 12 6 -8 23 -28 19 -38 -6 -16 -43 -78 -29 -94 22 -8 23 -21 29 -30 13z"
          fillRule="evenodd"
        />
        <path
          d="M981 1484 c0 -12 -10 -33 -22 -48 -27 -34 -105 -80 -124 -72 -12 4 -13 2 -2 -14 15 -25 18 -25 75 4 55 28 86 75 79 121 -2 19 -5 22 -6 9z"
          fillRule="evenodd"
        />
        <path
          d="M2271 1369 c6 -12 9 -33 6 -47 -6 -29 1 -52 14 -52 12 0 11 77 -1 101 -6 10 -15 19 -21 19 -6 0 -5 -8 2 -21z"
          fillRule="evenodd"
        />
        <path
          d="M2324 1262 c1 -49 -30 -87 -78 -98 -17 -4 -25 -9 -19 -11 7 -3 29 1 48 7 51 17 82 88 56 129 -5 8 -8 -1 -7 -27z"
          fillRule="evenodd"
        />
        <path
          d="M2050 496 c0 -3 6 -15 13 -26 10 -17 9 -22 -3 -30 -11 -7 -6 -10 21 -10 97 0 92 -66 -27 -317 -27 -58 -28 -63 -14 -63 14 0 49 39 96 106 30 43 35 58 32 95 -3 39 -4 41 -11 17 -4 -16 -9 -39 -12 -53 -3 -14 -12 -25 -20 -25 -19 0 -19 1 4 52 11 24 22 51 25 60 6 21 33 14 56 -14 9 -11 34 -21 65 -24 60 -7 81 -30 95 -106 9 -47 7 -91 -7 -140 -3 -13 2 -18 18 -18 21 0 21 3 16 55 -3 30 -2 55 3 55 12 0 45 -44 60 -80 12 -29 30 -41 30 -19 0 19 -22 53 -61 96 -22 24 -39 53 -39 65 0 39 -43 103 -70 106 -75 8 -91 14 -102 38 -6 13 -19 24 -30 24 -14 0 -18 8 -18 34 0 53 -9 66 -51 72 -21 4 -39 12 -39 19 0 7 -7 18 -15 25 -8 7 -15 10 -15 6z"
          fillRule="evenodd"
        />
        <path
          d="M1370 415 c0 -3 19 -14 43 -26 23 -12 49 -27 57 -34 29 -26 160 -95 177 -95 13 1 8 10 -21 35 -31 28 -35 35 -20 35 10 1 -5 9 -35 20 -30 11 -62 27 -73 36 -10 10 -21 15 -24 12 -3 -3 32 -30 77 -59 45 -29 77 -55 71 -57 -11 -3 -107 51 -137 78 -20 18 -115 64 -115 55z"
          fillRule="evenodd"
        />
        <path
          d="M1344 385 c23 -34 20 -52 -14 -105 -24 -38 -45 -54 -115 -90 -57 -29 -82 -47 -75 -54 7 -7 27 -3 62 12 34 14 55 19 62 12 9 -9 -3 -102 -19 -143 -12 -30 28 -19 55 15 21 27 25 46 30 122 4 70 11 99 28 126 27 43 28 91 4 113 -27 25 -37 21 -18 -8z"
          fillRule="evenodd"
        />
        <path
          d="M2201 215 c-1 -53 -8 -92 -37 -194 -6 -19 -3 -22 11 -19 35 6 58 175 35 248 -6 19 -8 10 -9 -35z"
          fillRule="evenodd"
        />
        <path
          d="M1416 243 c-8 -8 130 -73 153 -73 9 1 -6 13 -34 27 -74 38 -112 53 -119 46z"
          fillRule="evenodd"
        />
        <path
          d="M879 193 c34 -50 91 -92 145 -108 59 -18 90 -19 81 -4 -4 6 -9 8 -11 6 -10 -10 -91 15 -127 39 -22 14 -37 27 -35 29 2 2 28 -5 58 -15 30 -11 71 -19 90 -19 28 1 24 3 -25 14 -33 7 -73 18 -88 24 -16 6 -32 9 -37 6 -5 -3 -10 -2 -12 2 -2 5 -16 19 -32 33 l-30 25 23 -32z"
          fillRule="evenodd"
        />
        <path
          d="M1530 130 c-17 -5 1 -8 55 -8 68 0 74 2 40 9 -48 10 -62 9 -95 -1z"
          fillRule="evenodd"
        />
        <path
          d="M2251 104 c-5 -22 -12 -55 -16 -74 -9 -53 10 -15 25 48 14 61 6 84 -9 26z"
          fillRule="evenodd"
        />
        <path d="M280 14 l-25 -14 29 2 c16 2 31 9 34 16 5 16 -7 15 -38 -4z" fillRule="evenodd" />
      </g>
    </svg>
  );
};

export const ChannelNames = [
  { name: ["command", "bot"], icon: command, query: "SlashBox" },
  { name: ["game"], icon: game, query: "GameController" },
  { name: ["general", "talk", "chat", "off-topic", "off topic"], icon: general, query: "Chat" },
  { name: ["faq", "help", "support"], icon: help, query: "CircleQuestion" },
  { name: ["info"], icon: info, query: "CircleInformation" },
  { name: ["intro"], icon: intro, query: "HandList" },
  { name: ["join"], icon: join, query: "NewMember" },
  { name: ["resources", "links", "socials"], icon: links, query: "Link" },
  { name: ["log"], icon: log, query: "Summaries" },
  { name: ["image", "media", "art", "picture", "photo"], icon: media, query: "Image" },
  { name: ["meme"], icon: meme, query: "Sticker" },
  { name: ["music"], icon: music, query: "Music" },
  { name: ["role"], icon: role, query: "Shield" },
  { name: ["rule"], icon: rule, query: "BookCheck" },
  { name: ["star"], icon: star, query: "StarGuildList" },
  //pin
  { name: ["vc", "voice", "mute", "mic"], icon: voice, query: "Microphone" },

  { name: ["racc"], icon: RaccoonSVG, query: "undefined" },
  { name: ["bitsl"], icon: Bitslayn, query: "undefined" },
];
