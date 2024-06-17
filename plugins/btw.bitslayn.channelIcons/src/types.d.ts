import type { Channel, Guild } from "discord-types/general";
import type React from "react";

export interface ColoredChannel {
  color: string;
  icon: string;
}

export interface IconData {
  label: string;
  value: string;
}

export interface Settings {
  coloredChannels?: Record<string, ColoredChannel>;
  changeChannelNames?: boolean;
  presetChannelIcons?: boolean;
  coloredChannelPills?: boolean;
  suggestedColors?: string[];
  icons?: IconData[];
}

interface HSL {
  h: number;
  s: number;
  l: number;
}

export interface ColorUtilsModule {
  getDarkness: (color: number) => number;
  hex2int: (color: string) => number;
  hex2rgb: (color: string, alpha?: number) => string | null;
  int2hex: (color: number) => string;
  int2hsl: (
    color: number,
    desaturateUserColors?: boolean,
    saturation?: number | null,
    alpha?: number
  ) => string;
  int2hslRaw: (color: number) => HSL;
  int2rgbArray: (color: number) => number[];
  int2rgba: (color: number, alpha?: number) => string;
  isValidHex: (color: string) => boolean;
  rgb2int: (color: string) => number;
}

interface ChannelItemIconProps {
  className?: string;
  channel: Channel;
  guild?: Guild;
  locked?: boolean;
  hasActiveThreads?: boolean;
  withGuildIcon?: boolean;
}

interface ChannelItemProps {
  channel: Channel;
  name?: string;
  muted?: boolean;
  selected?: boolean;
  connected?: boolean;
  unread?: boolean;
  locked?: boolean;
  hasActiveThreads?: boolean;
  onClick?: (channel: Channel) => void;
  onMouseDown?: (event: React.MouseEvent<HTMLDivElement>, channel: Channel) => void;
  onMouseUp?: (event: React.MouseEvent<HTMLDivElement>, channel: Channel) => void;
  onContextMenu?: (event: React.MouseEvent<HTMLDivElement>, channel: Channel) => void;
  connectDragPreview?: (element?: React.ReactNode) => void;
  className?: string;
  iconClassName?: string;
  subtitle?: React.ReactNode;
  subtitleColor?: string;
  onMouseEnter?: React.MouseEventHandler<HTMLDivElement>;
  onMouseLeave?: React.MouseEventHandler<HTMLDivElement>;
  "aria-label"?: string;
  guild?: Guild;
  channelTypeOverride?: number;
  forceInteractable?: boolean;
  mentionCount?: number;
  resolvedUnreadSetting?: number;
  isFavoriteSuggestion?: boolean;
  withGuildIcon?: boolean;
  "aria-describedby"?: string;
}

export interface ChannelItemModule {
  ChannelItemIcon: React.FC<ChannelItemIconProps>;
  default: React.FC<React.PropsWithChildren<ChannelItemProps>>;
}

interface HeaderBarDividerProps {
  className?: string;
}

interface HeaderBarIconProps {
  className?: string;
  iconClassName?: string;
  selected?: boolean;
  disabled?: boolean;
  showBadge?: boolean;
  color?: string;
  foreground?: string;
  background?: string;
  icon: React.ComponentType;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  onContextMenu?: React.MouseEventHandler<HTMLDivElement>;
  tooltip?: string | null;
  tooltipColor?: string;
  tooltipPosition?: string;
  tooltipDisabled?: boolean;
  hideOnClick?: boolean;
  role?: string;
  "aria-label"?: string;
  "aria-hidden"?: boolean;
  "aria-checked"?: boolean;
  "aria-expanded"?: boolean;
  "aria-haspopup"?: boolean;
}

interface HeaderBarProps {
  className?: string;
  innerClassName?: string;
  childrenBottom?: React.ReactNode;
  toolbar?: React.ReactNode;
  onDoubleClick?: React.MouseEventHandler<HTMLDivElement>;
  "aria-label"?: string;
  "aria-labelledby"?: string;
  role?: string;
  scrollable?: boolean;
  transparent?: boolean;
}

interface HeaderBarTitleProps {
  className?: string;
  wrapperClassName?: string;
  children?: string | React.ReactElement;
  onContextMenu?: React.MouseEventHandler<HTMLDivElement>;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  id?: string;
  muted?: boolean;
  level?: number;
}

interface HeaderBarCaretProps {
  direction?: string;
}

interface HeaderBarComponents {
  Icon: React.FC<React.PropsWithChildren<HeaderBarIconProps>>;
  Title: React.FC<HeaderBarTitleProps>;
  Divider: React.FC<HeaderBarDividerProps>;
  Caret: React.FC<HeaderBarCaretProps>;
}

export interface HeaderBarModule {
  Divider: React.FC<HeaderBarDividerProps>;
  Icon: React.FC<React.PropsWithChildren<HeaderBarIconProps>>;
  default: React.FC<React.PropsWithChildren<HeaderBarProps>> & HeaderBarComponents;
}

type HeaderBarLoggedInProps = Pick<
  HeaderBarProps,
  | "className"
  | "innerClassName"
  | "toolbar"
  | "transparent"
  | "aria-label"
  | "aria-labelledby"
  | "role"
  | "scrollable"
> & {
  channelId?: string;
  channelType?: number;
  guildId?: string;
  mobileToolbar?: React.ReactNode;
  hideSearch?: boolean;
  showDivider?: boolean;
};

type HeaderBarLoggedOutProps = Pick<
  HeaderBarProps,
  "className" | "aria-label" | "aria-labelledby" | "role"
>;

type HeaderBarContainerProps = React.PropsWithChildren<HeaderBarLoggedInProps> &
  React.PropsWithChildren<HeaderBarLoggedOutProps> & {
    isAuthenticated?: boolean;
  };

export interface HeaderBarCommonModule {
  handleDoubleClick: () => Promise<void>;
  default: React.FC<HeaderBarContainerProps> & HeaderBarComponents;
}

interface ColorResponse {
  hex: () => string;
  hsl: () => string;
  int: () => number;
  spring: () => string;
}

interface Color {
  css: string;
  resolve: (theme: { theme: string; saturation: number }) => ColorResponse;
}

export type GenericIconProps = React.ComponentPropsWithoutRef<"svg"> & {
  color?: string | Color;
  colorClass?: string;
};

interface TabBarProps {
  className?: string;
  type?: "side" | "top" | "top-pill";
  style?: React.CSSProperties;
  "aria-label"?: string;
  orientation?: "horizontal" | "vertical";
  selectedItem?: string;
  onItemSelect?: (id: string | undefined) => void;
  look?: "brand" | "grey";
}

interface TabBarHeaderProps {
  className?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  "aria-expanded"?: boolean;
  "aria-controls"?: string;
}

interface TabBarItemProps {
  color?: string;
  id?: string;
  selectedItem?: string;
  itemType?: "side" | "top" | "top-pill";
  className?: string;
  disabled?: boolean;
  onContextMenu?: React.MouseEventHandler<HTMLDivElement>;
  clickableRef?: React.Ref<HTMLDivElement>;
  look?: "brand" | "grey";
  disableItemStyles?: boolean;
  "aria-label"?: string;
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  onItemSelect?: (id: string | undefined) => void;
}

interface TabBarSeparatorProps {
  style?: React.CSSProperties;
}

type TabBarPanelProps = React.ComponentPropsWithoutRef<"div">;

export type TabBar = React.ComponentClass<React.PropsWithChildren<TabBarProps>> & {
  Header: React.FC<React.PropsWithChildren<TabBarHeaderProps>>;
  Item: React.ComponentClass<React.PropsWithChildren<TabBarItemProps>>;
  Separator: React.FC<TabBarSeparatorProps>;
  Panel: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<React.PropsWithChildren<TabBarPanelProps>> & React.RefAttributes<unknown>
  >;
};

interface SearchBarProps extends Omit<React.ComponentPropsWithoutRef<"div">, "onChange"> {
  autoComplete?: boolean;
  disabled?: boolean;
  hideSearchIcon?: boolean;
  iconClassName?: string;
  inputProps?: React.ComponentPropsWithoutRef<"input">;
  isLoading?: boolean;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  onChange?: (value: string) => void;
  onClear?: React.MouseEventHandler<HTMLDivElement>;
  onFocus?: React.FocusEventHandler<HTMLInputElement>;
  onKeyDown?: React.KeyboardEventHandler<HTMLInputElement>;
  onKeyPress?: React.KeyboardEventHandler<HTMLInputElement>;
  onKeyUp?: React.KeyboardEventHandler<HTMLInputElement>;
  query?: string;
  size?: string;
}

export type SearchBar = React.ComponentClass<SearchBarProps> & {
  Sizes: Record<"SMALL" | "MEDIUM" | "LARGE", string>;
};

// eslint-disable-next-line @typescript-eslint/consistent-type-definitions
export type ChannelContextMenuProps = {
  channel: Channel;
  onSelect?: () => void;
  guild?: Guild;
  includeTopic?: boolean;
};

interface ColorPickerProps {
  className?: string;
  defaultColor?: number;
  customColor?: number;
  colors?: number[];
  value?: number;
  disabled?: boolean;
  onChange?: (color: number) => void;
  renderDefaultButton: React.FC<ColorPickerDefaultButtonProps>;
  renderCustomButton: React.FC<Omit<ColorPickerCustomButtonProps, "aria-label">>;
  colorContainerClassName?: string;
}

interface ColorPickerCustomButtonProps {
  customColor: number;
  value?: number;
  disabled?: boolean;
  "aria-label"?: string;
}

interface ColorPickerDefaultButtonProps {
  color: number;
  onChange?: (color: number) => void;
  value?: number;
  disabled?: boolean;
}

interface CustomColorPickerProps {
  value?: number;
  eagerUpdate?: boolean;
  onChange: (color: number) => void;
  onClose?: () => void;
  suggestedColors?: string[];
  middle?: React.ReactNode;
  footer?: React.ReactNode;
  showEyeDropper?: boolean;
  wrapperComponentType?: React.ComponentType;
  className?: string;
}

export interface ColorPickerModule {
  ColorPicker: React.FC<ColorPickerProps>;
  ColorPickerCustomButton: React.ComponentClass<ColorPickerCustomButtonProps>;
  ColorPickerDefaultButton: React.ComponentClass<ColorPickerDefaultButtonProps>;
  CustomColorPicker: React.MemoExoticComponent<React.FC<CustomColorPickerProps>>;
}
