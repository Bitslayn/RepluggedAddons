export interface int2hexModule {
  getDarkness: () => never;
  hex2int: () => never;
  hex2rgb: () => never;
  int2hex: (channelColor: string) => never;
  int2hsl: () => never;
  int2hslRaw: () => never;
  int2rgbArray: () => never;
  int2rgba: () => never;
  isValidHex: () => never;
  rgb2int: () => never;
}

export interface ModalsModule {
  AccessibilityAnnouncer: {
    announce: () => never;
    clearAnnouncements: () => never;
  };
  AccessibilityPreferencesContext: {
    $$typeof: symbol;
    _currentValue: {
      reducedMotion: {
        enabled: boolean;
        rawValue: string;
      };
      prefersCrossfades: boolean;
      forcedColors: {
        enabled: boolean;
        rawValue: string;
      };
      alwaysShowLinkDecorations: boolean;
    };
    _currentValue2: NonNullable<unknown>;
    _threadCount: number;
    Provider: {
      $$typeof: symbol;
      _context: NonNullable<unknown>;
    };
    Consumer: NonNullable<unknown>;
    _defaultValue: NonNullable<unknown>;
    _globalName: NonNullable<unknown>;
  };
  AdvancedScroller: {
    $$typeof: symbol;
    render: () => never;
  };
  AdvancedScrollerAuto: {
    $$typeof: symbol;
    render: () => never;
  };
  AdvancedScrollerNone: {
    $$typeof: symbol;
    render: () => never;
  };
  AdvancedScrollerThin: NonNullable<unknown>;
  Anchor: () => never;
  AnimatedAvatar: {
    $$typeof: symbol;
    type: () => never;
    compare: NonNullable<unknown>;
  };
  AnimatedDots: {
    $$typeof: symbol;
    type: () => never;
    compare: NonNullable<unknown>;
  };
  AnimatedStatus: () => never;
  Avatar: () => never;
  AvatarSizeSpecs: {
    SIZE_16: {
      size: number;
      status: number;
      stroke: number;
      offset: number;
    };
    SIZE_20: {
      size: number;
      status: number;
      stroke: number;
      offset: number;
    };
    SIZE_24: {
      size: number;
      status: number;
      stroke: number;
      offset: number;
    };
    SIZE_32: {
      size: number;
      status: number;
      stroke: number;
      offset: number;
    };
    SIZE_40: {
      size: number;
      status: number;
      stroke: number;
      offset: number;
    };
    SIZE_48: {
      size: number;
      status: number;
      stroke: number;
      offset: number;
    };
    SIZE_56: {
      size: number;
      status: number;
      stroke: number;
      offset: number;
    };
    SIZE_80: {
      size: number;
      status: number;
      stroke: number;
      offset: number;
    };
    SIZE_120: {
      size: number;
      status: number;
      stroke: number;
      offset: number;
    };
    SIZE_152: {
      size: number;
      status: number;
      stroke: number;
      offset: number;
    };
    DEPRECATED_SIZE_30: {
      size: number;
      status: number;
      stroke: number;
      offset: number;
    };
    DEPRECATED_SIZE_60: {
      size: number;
      status: number;
      stroke: number;
      offset: number;
    };
    DEPRECATED_SIZE_100: {
      size: number;
      status: number;
      stroke: number;
      offset: number;
    };
  };
  AvatarSizes: {
    SIZE_16: string;
    SIZE_20: string;
    SIZE_24: string;
    SIZE_32: string;
    SIZE_40: string;
    SIZE_48: string;
    SIZE_56: string;
    SIZE_80: string;
    SIZE_120: string;
    SIZE_152: string;
    DEPRECATED_SIZE_30: string;
    DEPRECATED_SIZE_60: string;
    DEPRECATED_SIZE_100: string;
  };
  BasePopout: () => never;
  BlobMask: () => never;
  BlockInteractions: () => never;
  BlockInteractionsContext: {
    $$typeof: symbol;
    _currentValue: boolean;
    _currentValue2: boolean;
    _threadCount: number;
    Provider: {
      $$typeof: symbol;
      _context: NonNullable<unknown>;
    };
    Consumer: NonNullable<unknown>;
    _defaultValue: NonNullable<unknown>;
    _globalName: NonNullable<unknown>;
  };
  Button: () => never;
  ButtonBorderColors: {
    BRAND: string;
    RED: string;
    GREEN: string;
    YELLOW: string;
    PRIMARY: string;
    LINK: string;
    WHITE: string;
    BLACK: undefined;
    TRANSPARENT: string;
    BRAND_NEW: string;
  };
  ButtonColors: {
    BRAND: string;
    RED: string;
    GREEN: string;
    YELLOW: string;
    PRIMARY: string;
    LINK: string;
    WHITE: string;
    TRANSPARENT: string;
    BRAND_NEW: string;
    CUSTOM: string;
  };
  ButtonHovers: {
    DEFAULT: string;
    BRAND: string;
    RED: string;
    GREEN: string;
    YELLOW: string;
    PRIMARY: string;
    LINK: string;
    WHITE: string;
    BLACK: undefined;
    TRANSPARENT: string;
  };
  ButtonLink: () => never;
  ButtonLooks: {
    FILLED: string;
    INVERTED: string;
    OUTLINED: string;
    LINK: string;
    BLANK: string;
  };
  ButtonSizes: {
    NONE: string;
    TINY: string;
    SMALL: string;
    MEDIUM: string;
    LARGE: string;
    XLARGE: string;
    MIN: string;
    MAX: string;
    ICON: string;
  };
  Card: () => never;
  CardTypes: {
    PRIMARY: string;
    DANGER: string;
    WARNING: string;
    SUCCESS: string;
    BRAND: string;
    CUSTOM: string;
  };
  Checkbox: () => never;
  Clickable: () => never;
  ClickableContainer: () => never;
  Collapsible: () => never;
  Combobox: () => never;
  ComboboxItem: () => never;
  ComboboxPopout: () => never;
  ConfirmModal: () => never;
  DEFAULT_MODAL_CONTEXT: string;
  DateInput: () => never;
  DeclarativeConfirmModal: () => never;
  Dialog: {
    $$typeof: symbol;
    render: () => never;
  };
  DisableCustomTheme: () => never;
  DnDKeyboardHelpBar: () => never;
  DnDProvider: () => never;
  Dots: {
    $$typeof: symbol;
    type: {
      $$typeof: symbol;
      render: () => never;
    };
    compare: NonNullable<unknown>;
  };
  FocusBlock: () => never;
  FocusJumpSection: () => never;
  FocusLock: () => never;
  FocusRing: () => never;
  FocusRingManager: {
    init: () => never;
  };
  FocusRingScope: () => never;
  FormContext: {
    $$typeof: symbol;
    _currentValue: {
      titleId: undefined;
      errorId: undefined;
      error: undefined;
    };
    _currentValue2: NonNullable<unknown>;
    _threadCount: number;
    Provider: {
      $$typeof: symbol;
      _context: NonNullable<unknown>;
    };
    Consumer: NonNullable<unknown>;
    _defaultValue: NonNullable<unknown>;
    _globalName: NonNullable<unknown>;
  };
  FormContextProvider: () => never;
  FormDivider: () => never;
  FormErrorBlock: {
    $$typeof: symbol;
    render: () => never;
  };
  FormErrorBlockColors: {
    RED: string;
    BACKGROUND_TERTIARY: string;
    BACKGROUND_ACCENT: string;
  };
  FormItem: {
    $$typeof: symbol;
    render: () => never;
  };
  FormLabel: () => never;
  FormNotice: () => never;
  FormNoticeImagePositions: {
    LEFT: string;
    RIGHT: string;
  };
  FormNoticeTypes: NonNullable<unknown>;
  FormSection: {
    $$typeof: symbol;
    render: () => never;
  };
  FormSwitch: () => never;
  FormText: () => never;
  FormTextTypes: {
    DEFAULT: string;
    INPUT_PLACEHOLDER: string;
    DESCRIPTION: string;
    LABEL_BOLD: string;
    LABEL_SELECTED: string;
    LABEL_DESCRIPTOR: string;
    ERROR: string;
    SUCCESS: string;
  };
  FormTitle: () => never;
  FormTitleTags: {
    H1: string;
    H2: string;
    H3: string;
    H4: string;
    H5: string;
    LABEL: string;
    LEGEND: string;
  };
  H: () => never;
  Heading: {
    $$typeof: symbol;
    render: () => never;
  };
  HeadingLevel: () => never;
  HiddenVisually: () => never;
  InputError: () => never;
  Interactive: () => never;
  KeyCombo: () => never;
  LOW_SATURATION_THRESHOLD: number;
  Layer: () => never;
  LayerClassName: string;
  LayerContainer: () => never;
  LayerProvider: () => never;
  LazyPopout: () => never;
  List: {
    $$typeof: symbol;
    render: () => never;
  };
  ListAuto: {
    $$typeof: symbol;
    render: () => never;
  };
  ListComputer: () => never;
  ListNone: {
    $$typeof: symbol;
    render: () => never;
  };
  ListThin: NonNullable<unknown>;
  LoadingPopout: () => never;
  MasonryList: {
    $$typeof: symbol;
    render: () => never;
  };
  MasonryListAuto: {
    $$typeof: symbol;
    render: () => never;
  };
  MasonryListComputer: () => never;
  MasonryListScrollerProps: undefined;
  MasonryListScrollerRef: undefined;
  MasonryListThin: NonNullable<unknown>;
  Menu: () => never;
  MenuCheckboxItem: () => never;
  MenuControlItem: () => never;
  MenuCustomItemRenderProps: undefined;
  MenuGroup: () => never;
  MenuImageUploadControl: {
    $$typeof: symbol;
    render: () => never;
  };
  MenuInteractiveCompositeControl: {
    $$typeof: symbol;
    render: () => never;
  };
  MenuItem: () => never;
  MenuRadioItem: () => never;
  MenuSearchControl: {
    $$typeof: symbol;
    render: () => never;
  };
  MenuSeparator: () => never;
  MenuSliderControl: {
    $$typeof: symbol;
    render: () => never;
  };
  MenuSpinner: () => never;
  Modal: () => never;
  ModalCloseButton: () => never;
  ModalContent: () => never;
  ModalFooter: () => never;
  ModalHeader: () => never;
  ModalListContent: () => never;
  ModalRoot: () => never;
  ModalSize: {
    SMALL: string;
    MEDIUM: string;
    LARGE: string;
    DYNAMIC: string;
  };
  ModalTransitionState: {
    0: string;
    1: string;
    2: string;
    3: string;
    4: string;
    ENTERING: number;
    ENTERED: number;
    EXITING: number;
    EXITED: number;
    HIDDEN: number;
  };
  Modals: () => never;
  NameWithRole: () => never;
  NameWithRoleAnchor: () => never;
  POPOUT_MODAL_CONTEXT: string;
  PRETTY_KEYS: {
    mod: () => never;
    alt: () => never;
    up: () => never;
    down: () => never;
    left: () => never;
    right: () => never;
    pageup: () => never;
    pagedown: () => never;
    anyCharacter: undefined;
    plus: () => never;
    return: () => never;
  };
  Paginator: () => never;
  PinToBottomScrollerAuto: {
    $$typeof: symbol;
    render: () => never;
  };
  Popout: () => never;
  PopoutCSSAnimator: () => never;
  PopoutList: () => never;
  Progress: () => never;
  ProgressCircle: () => never;
  RadioGroup: () => never;
  RedesignIconContextProvider: () => never;
  ReferencePositionLayer: () => never;
  RenderItem: undefined;
  RenderSection: undefined;
  RoleCircle: () => never;
  RoleDot: () => never;
  RootThemeContextProvider: () => never;
  Scroller: {
    $$typeof: symbol;
    render: () => never;
  };
  ScrollerAuto: {
    $$typeof: symbol;
    render: () => never;
  };
  ScrollerNone: {
    $$typeof: symbol;
    render: () => never;
  };
  ScrollerThin: NonNullable<unknown>;
  SearchableSelect: {
    $$typeof: symbol;
    render: () => never;
  };
  SearchableSelectRef: undefined;
  SegmentedControl: () => never;
  Select: () => never;
  SelectLooks: {
    0: string;
    1: string;
    FILLED: number;
    CUSTOM: number;
  };
  Sequencer: () => never;
  Shakeable: () => never;
  Shaker: () => never;
  SingleSelect: () => never;
  Slide: () => never;
  Slider: () => never;
  Slides: () => never;
  Spinner: () => never;
  SpinnerTypes: {
    WANDERING_CUBES: string;
    CHASING_DOTS: string;
    PULSING_ELLIPSIS: string;
    SPINNING_CIRCLE: string;
    SPINNING_CIRCLE_SIMPLE: string;
    LOW_MOTION: string;
  };
  StackedProgress: () => never;
  Status: () => never;
  StatusTypes: {
    ONLINE: string;
    OFFLINE: string;
    IDLE: string;
    DND: string;
    INVISIBLE: string;
    STREAMING: string;
  };
  Switch: () => never;
  TabBar: () => never;
  Table: () => never;
  TableBody: () => never;
  TableCell: () => never;
  TableColumn: () => never;
  TableHeader: () => never;
  TableRow: () => never;
  Text: {
    $$typeof: symbol;
    render: () => never;
  };
  TextArea: () => never;
  TextAreaAutosize: () => never;
  TextInput: () => never;
  TextInputProps: undefined;
  ThemeContextProvider: () => never;
  TimeInput: () => never;
  Toast: {
    $$typeof: symbol;
    type: () => never;
    compare: NonNullable<unknown>;
  };
  ToastContainer: () => never;
  ToastPosition: {
    0: string;
    1: string;
    TOP: number;
    BOTTOM: number;
  };
  ToastType: {
    0: string;
    1: string;
    2: string;
    3: string;
    4: string;
    MESSAGE: number;
    SUCCESS: number;
    FAILURE: number;
    CUSTOM: number;
    CLIP: number;
  };
  Tooltip: () => never;
  TooltipColors: {
    PRIMARY: string;
    NESTED: string;
    BLACK: string;
    GREY: string;
    BRAND: string;
    GREEN: string;
    YELLOW: string;
    RED: string;
    CUSTOM: string;
    PREMIUM: string;
  };
  TooltipContainer: () => never;
  TooltipLayer: () => never;
  TransitionGroup: () => never;
  TransitionStates: {
    0: string;
    1: string;
    2: string;
    MOUNTED: number;
    ENTERED: number;
    YEETED: number;
  };
  UseThemeContext: () => never;
  closeAllModals: () => never;
  closeModal: () => never;
  createAdvancedScroller: () => never;
  createLayer: () => never;
  createListScroller: () => never;
  createManagedReactiveScroller: () => never;
  createMasonryListScroller: () => never;
  createScroller: () => never;
  createToast: () => never;
  getAvatarSize: () => never;
  getAvatarSpecs: () => never;
  getButtonStyle: () => never;
  getInteractingModalContext: () => never;
  getParentLayerContainer: () => never;
  getStatusBackdropColor: () => never;
  getStatusBackdropOpacity: () => never;
  getStatusMask: () => never;
  hasAnyModalOpen: () => never;
  hasAnyModalOpenSelector: () => never;
  hasModalOpen: () => never;
  hasModalOpenSelector: () => never;
  isInDndMode: () => never;
  isListItemRow: () => never;
  modalContextFromAppContext: () => never;
  multiSelect: () => never;
  openModal: () => never;
  openModalLazy: () => never;
  popToast: () => never;
  referencePortalAwareContains: () => never;
  showToast: () => never;
  singleSelect: () => never;
  toggleDndMode: () => never;
  toggleSelect: () => never;
  tokens: {
    themes: {
      DARK: string;
      LIGHT: string;
      MIDNIGHT: string;
      DARKER: string;
    };
    modules: {
      chat: {
        RESIZE_HANDLE_WIDTH: number;
      };
    };
    colors: {
      ACTION_SHEET_GRADIENT_BG: {
        css: string;
        resolve: () => never;
      };
      ACTIVITY_CARD_BACKGROUND: {
        css: string;
        resolve: () => never;
      };
      ACTIVITY_CARD_ICON_OVERLAY: {
        css: string;
        resolve: () => never;
      };
      ALERT_BG: {
        css: string;
        resolve: () => never;
      };
      ANDROID_NAVIGATION_BAR_BACKGROUND: {
        css: string;
        resolve: () => never;
      };
      ANDROID_NAVIGATION_SCRIM_BACKGROUND: {
        css: string;
        resolve: () => never;
      };
      ANDROID_RIPPLE: {
        css: string;
        resolve: () => never;
      };
      BACKGROUND_ACCENT: {
        css: string;
        resolve: () => never;
      };
      BACKGROUND_FLOATING: {
        css: string;
        resolve: () => never;
      };
      BACKGROUND_MENTIONED: {
        css: string;
        resolve: () => never;
      };
      BACKGROUND_MENTIONED_HOVER: {
        css: string;
        resolve: () => never;
      };
      BACKGROUND_MESSAGE_AUTOMOD: {
        css: string;
        resolve: () => never;
      };
      BACKGROUND_MESSAGE_AUTOMOD_HOVER: {
        css: string;
        resolve: () => never;
      };
      BACKGROUND_MESSAGE_HIGHLIGHT: {
        css: string;
        resolve: () => never;
      };
      BACKGROUND_MESSAGE_HIGHLIGHT_HOVER: {
        css: string;
        resolve: () => never;
      };
      BACKGROUND_MESSAGE_HOVER: {
        css: string;
        resolve: () => never;
      };
      BACKGROUND_MOBILE_PRIMARY: {
        css: string;
        resolve: () => never;
      };
      BACKGROUND_MOBILE_SECONDARY: {
        css: string;
        resolve: () => never;
      };
      BACKGROUND_MODIFIER_ACCENT: {
        css: string;
        resolve: () => never;
      };
      BACKGROUND_MODIFIER_ACCENT_2: {
        css: string;
        resolve: () => never;
      };
      BACKGROUND_MODIFIER_ACTIVE: {
        css: string;
        resolve: () => never;
      };
      BACKGROUND_MODIFIER_HOVER: {
        css: string;
        resolve: () => never;
      };
      BACKGROUND_MODIFIER_SELECTED: {
        css: string;
        resolve: () => never;
      };
      BACKGROUND_NESTED_FLOATING: {
        css: string;
        resolve: () => never;
      };
      BACKGROUND_PRIMARY: {
        css: string;
        resolve: () => never;
      };
      BACKGROUND_SECONDARY: {
        css: string;
        resolve: () => never;
      };
      BACKGROUND_SECONDARY_ALT: {
        css: string;
        resolve: () => never;
      };
      BACKGROUND_TERTIARY: {
        css: string;
        resolve: () => never;
      };
      BG_BACKDROP: {
        css: string;
        resolve: () => never;
      };
      BG_BACKDROP_NO_OPACITY: {
        css: string;
        resolve: () => never;
      };
      BG_BASE_PRIMARY: {
        css: string;
        resolve: () => never;
      };
      BG_BASE_SECONDARY: {
        css: string;
        resolve: () => never;
      };
      BG_BASE_TERTIARY: {
        css: string;
        resolve: () => never;
      };
      BG_BRAND: {
        css: string;
        resolve: () => never;
      };
      BG_MOD_FAINT: {
        css: string;
        resolve: () => never;
      };
      BG_MOD_STRONG: {
        css: string;
        resolve: () => never;
      };
      BG_MOD_SUBTLE: {
        css: string;
        resolve: () => never;
      };
      BG_SURFACE_OVERLAY: {
        css: string;
        resolve: () => never;
      };
      BG_SURFACE_OVERLAY_TMP: {
        css: string;
        resolve: () => never;
      };
      BG_SURFACE_RAISED: {
        css: string;
        resolve: () => never;
      };
      BLACK: {
        css: string;
        resolve: () => never;
      };
      BLUR_FALLBACK: {
        css: string;
        resolve: () => never;
      };
      BLUR_FALLBACK_PRESSED: {
        css: string;
        resolve: () => never;
      };
      BORDER_FAINT: {
        css: string;
        resolve: () => never;
      };
      BORDER_STRONG: {
        css: string;
        resolve: () => never;
      };
      BORDER_SUBTLE: {
        css: string;
        resolve: () => never;
      };
      BUG_REPORTER_MODAL_SUBMITTING_BACKGROUND: {
        css: string;
        resolve: () => never;
      };
      BUTTON_CREATOR_REVENUE_BACKGROUND: {
        css: string;
        resolve: () => never;
      };
      BUTTON_DANGER_BACKGROUND: {
        css: string;
        resolve: () => never;
      };
      BUTTON_DANGER_BACKGROUND_ACTIVE: {
        css: string;
        resolve: () => never;
      };
      BUTTON_DANGER_BACKGROUND_DISABLED: {
        css: string;
        resolve: () => never;
      };
      BUTTON_DANGER_BACKGROUND_HOVER: {
        css: string;
        resolve: () => never;
      };
      BUTTON_OUTLINE_BRAND_BACKGROUND: {
        css: string;
        resolve: () => never;
      };
      BUTTON_OUTLINE_BRAND_BACKGROUND_ACTIVE: {
        css: string;
        resolve: () => never;
      };
      BUTTON_OUTLINE_BRAND_BACKGROUND_HOVER: {
        css: string;
        resolve: () => never;
      };
      BUTTON_OUTLINE_BRAND_BORDER: {
        css: string;
        resolve: () => never;
      };
      BUTTON_OUTLINE_BRAND_BORDER_ACTIVE: {
        css: string;
        resolve: () => never;
      };
      BUTTON_OUTLINE_BRAND_BORDER_HOVER: {
        css: string;
        resolve: () => never;
      };
      BUTTON_OUTLINE_BRAND_TEXT: {
        css: string;
        resolve: () => never;
      };
      BUTTON_OUTLINE_BRAND_TEXT_ACTIVE: {
        css: string;
        resolve: () => never;
      };
      BUTTON_OUTLINE_BRAND_TEXT_HOVER: {
        css: string;
        resolve: () => never;
      };
      BUTTON_OUTLINE_DANGER_BACKGROUND: {
        css: string;
        resolve: () => never;
      };
      BUTTON_OUTLINE_DANGER_BACKGROUND_ACTIVE: {
        css: string;
        resolve: () => never;
      };
      BUTTON_OUTLINE_DANGER_BACKGROUND_HOVER: {
        css: string;
        resolve: () => never;
      };
      BUTTON_OUTLINE_DANGER_BORDER: {
        css: string;
        resolve: () => never;
      };
      BUTTON_OUTLINE_DANGER_BORDER_ACTIVE: {
        css: string;
        resolve: () => never;
      };
      BUTTON_OUTLINE_DANGER_BORDER_HOVER: {
        css: string;
        resolve: () => never;
      };
      BUTTON_OUTLINE_DANGER_TEXT: {
        css: string;
        resolve: () => never;
      };
      BUTTON_OUTLINE_DANGER_TEXT_ACTIVE: {
        css: string;
        resolve: () => never;
      };
      BUTTON_OUTLINE_DANGER_TEXT_HOVER: {
        css: string;
        resolve: () => never;
      };
      BUTTON_OUTLINE_POSITIVE_BACKGROUND: {
        css: string;
        resolve: () => never;
      };
      BUTTON_OUTLINE_POSITIVE_BACKGROUND_ACTIVE: {
        css: string;
        resolve: () => never;
      };
      BUTTON_OUTLINE_POSITIVE_BACKGROUND_HOVER: {
        css: string;
        resolve: () => never;
      };
      BUTTON_OUTLINE_POSITIVE_BORDER: {
        css: string;
        resolve: () => never;
      };
      BUTTON_OUTLINE_POSITIVE_BORDER_ACTIVE: {
        css: string;
        resolve: () => never;
      };
      BUTTON_OUTLINE_POSITIVE_BORDER_HOVER: {
        css: string;
        resolve: () => never;
      };
      BUTTON_OUTLINE_POSITIVE_TEXT: {
        css: string;
        resolve: () => never;
      };
      BUTTON_OUTLINE_POSITIVE_TEXT_ACTIVE: {
        css: string;
        resolve: () => never;
      };
      BUTTON_OUTLINE_POSITIVE_TEXT_HOVER: {
        css: string;
        resolve: () => never;
      };
      BUTTON_OUTLINE_PRIMARY_BACKGROUND: {
        css: string;
        resolve: () => never;
      };
      BUTTON_OUTLINE_PRIMARY_BACKGROUND_ACTIVE: {
        css: string;
        resolve: () => never;
      };
      BUTTON_OUTLINE_PRIMARY_BACKGROUND_HOVER: {
        css: string;
        resolve: () => never;
      };
      BUTTON_OUTLINE_PRIMARY_BORDER: {
        css: string;
        resolve: () => never;
      };
      BUTTON_OUTLINE_PRIMARY_BORDER_ACTIVE: {
        css: string;
        resolve: () => never;
      };
      BUTTON_OUTLINE_PRIMARY_BORDER_HOVER: {
        css: string;
        resolve: () => never;
      };
      BUTTON_OUTLINE_PRIMARY_TEXT: {
        css: string;
        resolve: () => never;
      };
      BUTTON_OUTLINE_PRIMARY_TEXT_ACTIVE: {
        css: string;
        resolve: () => never;
      };
      BUTTON_OUTLINE_PRIMARY_TEXT_HOVER: {
        css: string;
        resolve: () => never;
      };
      BUTTON_POSITIVE_BACKGROUND: {
        css: string;
        resolve: () => never;
      };
      BUTTON_POSITIVE_BACKGROUND_ACTIVE: {
        css: string;
        resolve: () => never;
      };
      BUTTON_POSITIVE_BACKGROUND_DISABLED: {
        css: string;
        resolve: () => never;
      };
      BUTTON_POSITIVE_BACKGROUND_HOVER: {
        css: string;
        resolve: () => never;
      };
      BUTTON_SECONDARY_BACKGROUND: {
        css: string;
        resolve: () => never;
      };
      BUTTON_SECONDARY_BACKGROUND_ACTIVE: {
        css: string;
        resolve: () => never;
      };
      BUTTON_SECONDARY_BACKGROUND_DISABLED: {
        css: string;
        resolve: () => never;
      };
      BUTTON_SECONDARY_BACKGROUND_HOVER: {
        css: string;
        resolve: () => never;
      };
      CARD_GRADIENT_BG: {
        css: string;
        resolve: () => never;
      };
      CARD_GRADIENT_PRESSED_BG: {
        css: string;
        resolve: () => never;
      };
      CARD_PRIMARY_BG: {
        css: string;
        resolve: () => never;
      };
      CARD_PRIMARY_PRESSED_BG: {
        css: string;
        resolve: () => never;
      };
      CARD_SECONDARY_BG: {
        css: string;
        resolve: () => never;
      };
      CARD_SECONDARY_PRESSED_BG: {
        css: string;
        resolve: () => never;
      };
      CHANNEL_ICON: {
        css: string;
        resolve: () => never;
      };
      CHANNEL_TEXT_AREA_PLACEHOLDER: {
        css: string;
        resolve: () => never;
      };
      CHANNELS_DEFAULT: {
        css: string;
        resolve: () => never;
      };
      CHANNELTEXTAREA_BACKGROUND: {
        css: string;
        resolve: () => never;
      };
      CHAT_BACKGROUND: {
        css: string;
        resolve: () => never;
      };
      CHAT_BANNER_BG: {
        css: string;
        resolve: () => never;
      };
      CHAT_BORDER: {
        css: string;
        resolve: () => never;
      };
      CHAT_INPUT_CONTAINER_BACKGROUND: {
        css: string;
        resolve: () => never;
      };
      CHAT_SWIPE_TO_REPLY_BACKGROUND: {
        css: string;
        resolve: () => never;
      };
      CHAT_SWIPE_TO_REPLY_GRADIENT_BACKGROUND: {
        css: string;
        resolve: () => never;
      };
      COACHMARK_BG: {
        css: string;
        resolve: () => never;
      };
      CONTENT_INVENTORY_MEDIA_SEEKBAR_CONTAINER: {
        css: string;
        resolve: () => never;
      };
      CONTENT_INVENTORY_OVERLAY_TEXT_PRIMARY: {
        css: string;
        resolve: () => never;
      };
      CONTENT_INVENTORY_OVERLAY_TEXT_SECONDARY: {
        css: string;
        resolve: () => never;
      };
      CONTENT_INVENTORY_OVERLAY_UI_MOD: {
        css: string;
        resolve: () => never;
      };
      CONTENT_INVENTORY_OVERLAY_UI_MOD_BG: {
        css: string;
        resolve: () => never;
      };
      CONTEXT_MENU_BACKDROP_BACKGROUND: {
        css: string;
        resolve: () => never;
      };
      CONTROL_BRAND_FOREGROUND: {
        css: string;
        resolve: () => never;
      };
      CONTROL_BRAND_FOREGROUND_NEW: {
        css: string;
        resolve: () => never;
      };
      CREATOR_REVENUE_ICON_GRADIENT_END: {
        css: string;
        resolve: () => never;
      };
      CREATOR_REVENUE_ICON_GRADIENT_START: {
        css: string;
        resolve: () => never;
      };
      CREATOR_REVENUE_INFO_BOX_BACKGROUND: {
        css: string;
        resolve: () => never;
      };
      CREATOR_REVENUE_INFO_BOX_BORDER: {
        css: string;
        resolve: () => never;
      };
      CREATOR_REVENUE_LOCKED_CHANNEL_ICON: {
        css: string;
        resolve: () => never;
      };
      CREATOR_REVENUE_PROGRESS_BAR: {
        css: string;
        resolve: () => never;
      };
      DEPRECATED_CARD_BG: {
        css: string;
        resolve: () => never;
      };
      DEPRECATED_CARD_EDITABLE_BG: {
        css: string;
        resolve: () => never;
      };
      DEPRECATED_QUICKSWITCHER_INPUT_BACKGROUND: {
        css: string;
        resolve: () => never;
      };
      DEPRECATED_QUICKSWITCHER_INPUT_PLACEHOLDER: {
        css: string;
        resolve: () => never;
      };
      DEPRECATED_STORE_BG: {
        css: string;
        resolve: () => never;
      };
      DEPRECATED_TEXT_INPUT_BG: {
        css: string;
        resolve: () => never;
      };
      DEPRECATED_TEXT_INPUT_BORDER: {
        css: string;
        resolve: () => never;
      };
      DEPRECATED_TEXT_INPUT_BORDER_DISABLED: {
        css: string;
        resolve: () => never;
      };
      DEPRECATED_TEXT_INPUT_BORDER_HOVER: {
        css: string;
        resolve: () => never;
      };
      DEPRECATED_TEXT_INPUT_PREFIX: {
        css: string;
        resolve: () => never;
      };
      DISPLAY_BANNER_OVERFLOW_BACKGROUND: {
        css: string;
        resolve: () => never;
      };
      DIVIDER_STRONG: {
        css: string;
        resolve: () => never;
      };
      DIVIDER_SUBTLE: {
        css: string;
        resolve: () => never;
      };
      EMBED_BACKGROUND: {
        css: string;
        resolve: () => never;
      };
      EMBED_BACKGROUND_ALTERNATE: {
        css: string;
        resolve: () => never;
      };
      EMBED_TITLE: {
        css: string;
        resolve: () => never;
      };
      EXPRESSION_PICKER_BG: {
        css: string;
        resolve: () => never;
      };
      FOCUS_PRIMARY: {
        css: string;
        resolve: () => never;
      };
      FORUM_POST_EXTRA_MEDIA_COUNT_CONTAINER_BACKGROUND: {
        css: string;
        resolve: () => never;
      };
      FORUM_POST_TAG_BACKGROUND: {
        css: string;
        resolve: () => never;
      };
      GUILD_ICON_INACTIVE_BG: {
        css: string;
        resolve: () => never;
      };
      GUILD_ICON_INACTIVE_NESTED_BG: {
        css: string;
        resolve: () => never;
      };
      GUILD_NOTIFICATIONS_BOTTOM_SHEET_PILL_BACKGROUND: {
        css: string;
        resolve: () => never;
      };
      HALO_POSITIVE: {
        css: string;
        resolve: () => never;
      };
      HEADER_MUTED: {
        css: string;
        resolve: () => never;
      };
      HEADER_PRIMARY: {
        css: string;
        resolve: () => never;
      };
      HEADER_SECONDARY: {
        css: string;
        resolve: () => never;
      };
      HOME_BACKGROUND: {
        css: string;
        resolve: () => never;
      };
      HOME_CARD_RESTING_BORDER: {
        css: string;
        resolve: () => never;
      };
      ICON_MUTED: {
        css: string;
        resolve: () => never;
      };
      ICON_PRIMARY: {
        css: string;
        resolve: () => never;
      };
      ICON_SECONDARY: {
        css: string;
        resolve: () => never;
      };
      ICON_TRANSPARENT: {
        css: string;
        resolve: () => never;
      };
      INFO_BOX_BACKGROUND: {
        css: string;
        resolve: () => never;
      };
      INFO_DANGER_BACKGROUND: {
        css: string;
        resolve: () => never;
      };
      INFO_DANGER_FOREGROUND: {
        css: string;
        resolve: () => never;
      };
      INFO_DANGER_TEXT: {
        css: string;
        resolve: () => never;
      };
      INFO_HELP_BACKGROUND: {
        css: string;
        resolve: () => never;
      };
      INFO_HELP_FOREGROUND: {
        css: string;
        resolve: () => never;
      };
      INFO_HELP_TEXT: {
        css: string;
        resolve: () => never;
      };
      INFO_POSITIVE_BACKGROUND: {
        css: string;
        resolve: () => never;
      };
      INFO_POSITIVE_FOREGROUND: {
        css: string;
        resolve: () => never;
      };
      INFO_POSITIVE_TEXT: {
        css: string;
        resolve: () => never;
      };
      INFO_WARNING_BACKGROUND: {
        css: string;
        resolve: () => never;
      };
      INFO_WARNING_FOREGROUND: {
        css: string;
        resolve: () => never;
      };
      INFO_WARNING_TEXT: {
        css: string;
        resolve: () => never;
      };
      INPUT_BACKGROUND: {
        css: string;
        resolve: () => never;
      };
      INPUT_FOCUSED_BORDER: {
        css: string;
        resolve: () => never;
      };
      INPUT_PLACEHOLDER_TEXT: {
        css: string;
        resolve: () => never;
      };
      INTERACTIVE_ACTIVE: {
        css: string;
        resolve: () => never;
      };
      INTERACTIVE_HOVER: {
        css: string;
        resolve: () => never;
      };
      INTERACTIVE_MUTED: {
        css: string;
        resolve: () => never;
      };
      INTERACTIVE_NORMAL: {
        css: string;
        resolve: () => never;
      };
      LEGACY_ANDROID_BLUR_OVERLAY_DEFAULT: {
        css: string;
        resolve: () => never;
      };
      LEGACY_ANDROID_BLUR_OVERLAY_ULTRA_THIN: {
        css: string;
        resolve: () => never;
      };
      LEGACY_BLUR_FALLBACK_DEFAULT: {
        css: string;
        resolve: () => never;
      };
      LEGACY_BLUR_FALLBACK_ULTRA_THIN: {
        css: string;
        resolve: () => never;
      };
      LIVE_STAGE_TILE_BORDER: {
        css: string;
        resolve: () => never;
      };
      LOGO_PRIMARY: {
        css: string;
        resolve: () => never;
      };
      MENTION_BACKGROUND: {
        css: string;
        resolve: () => never;
      };
      MENTION_FOREGROUND: {
        css: string;
        resolve: () => never;
      };
      MODAL_BACKGROUND: {
        css: string;
        resolve: () => never;
      };
      MODAL_FOOTER_BACKGROUND: {
        css: string;
        resolve: () => never;
      };
      NAVIGATOR_HEADER_TINT: {
        css: string;
        resolve: () => never;
      };
      PANEL_BG: {
        css: string;
        resolve: () => never;
      };
      POLLS_NORMAL_FILL_HOVER: {
        css: string;
        resolve: () => never;
      };
      POLLS_NORMAL_IMAGE_BACKGROUND: {
        css: string;
        resolve: () => never;
      };
      POLLS_VICTOR_FILL: {
        css: string;
        resolve: () => never;
      };
      POLLS_VOTED_FILL: {
        css: string;
        resolve: () => never;
      };
      PROFILE_GRADIENT_CARD_BACKGROUND: {
        css: string;
        resolve: () => never;
      };
      PROFILE_GRADIENT_MESSAGE_INPUT_BORDER: {
        css: string;
        resolve: () => never;
      };
      PROFILE_GRADIENT_NOTE_BACKGROUND: {
        css: string;
        resolve: () => never;
      };
      PROFILE_GRADIENT_OVERLAY: {
        css: string;
        resolve: () => never;
      };
      PROFILE_GRADIENT_OVERLAY_SYNCED_WITH_USER_THEME: {
        css: string;
        resolve: () => never;
      };
      PROFILE_GRADIENT_PROFILE_BODY_BACKGROUND_HOVER: {
        css: string;
        resolve: () => never;
      };
      PROFILE_GRADIENT_ROLE_PILL_BACKGROUND: {
        css: string;
        resolve: () => never;
      };
      PROFILE_GRADIENT_ROLE_PILL_BORDER: {
        css: string;
        resolve: () => never;
      };
      PROFILE_GRADIENT_SECTION_BOX: {
        css: string;
        resolve: () => never;
      };
      REDESIGN_ACTIVITY_CARD_BACKGROUND: {
        css: string;
        resolve: () => never;
      };
      REDESIGN_ACTIVITY_CARD_BACKGROUND_PRESSED: {
        css: string;
        resolve: () => never;
      };
      REDESIGN_ACTIVITY_CARD_BADGE_ICON: {
        css: string;
        resolve: () => never;
      };
      REDESIGN_ACTIVITY_CARD_BORDER: {
        css: string;
        resolve: () => never;
      };
      REDESIGN_ACTIVITY_CARD_OVERFLOW_BACKGROUND: {
        css: string;
        resolve: () => never;
      };
      REDESIGN_BUTTON_ACTIVE_BACKGROUND: {
        css: string;
        resolve: () => never;
      };
      REDESIGN_BUTTON_ACTIVE_PRESSED_BACKGROUND: {
        css: string;
        resolve: () => never;
      };
      REDESIGN_BUTTON_ACTIVE_TEXT: {
        css: string;
        resolve: () => never;
      };
      REDESIGN_BUTTON_DANGER_BACKGROUND: {
        css: string;
        resolve: () => never;
      };
      REDESIGN_BUTTON_DANGER_PRESSED_BACKGROUND: {
        css: string;
        resolve: () => never;
      };
      REDESIGN_BUTTON_DANGER_TEXT: {
        css: string;
        resolve: () => never;
      };
      REDESIGN_BUTTON_DESTRUCTIVE_BACKGROUND: {
        css: string;
        resolve: () => never;
      };
      REDESIGN_BUTTON_DESTRUCTIVE_PRESSED_BACKGROUND: {
        css: string;
        resolve: () => never;
      };
      REDESIGN_BUTTON_DESTRUCTIVE_TEXT: {
        css: string;
        resolve: () => never;
      };
      REDESIGN_BUTTON_OVERLAY_ALPHA_BACKGROUND: {
        css: string;
        resolve: () => never;
      };
      REDESIGN_BUTTON_OVERLAY_ALPHA_PRESSED_BACKGROUND: {
        css: string;
        resolve: () => never;
      };
      REDESIGN_BUTTON_OVERLAY_ALPHA_TEXT: {
        css: string;
        resolve: () => never;
      };
      REDESIGN_BUTTON_OVERLAY_BACKGROUND: {
        css: string;
        resolve: () => never;
      };
      REDESIGN_BUTTON_OVERLAY_PRESSED_BACKGROUND: {
        css: string;
        resolve: () => never;
      };
      REDESIGN_BUTTON_OVERLAY_TEXT: {
        css: string;
        resolve: () => never;
      };
      REDESIGN_BUTTON_POSITIVE_BACKGROUND: {
        css: string;
        resolve: () => never;
      };
      REDESIGN_BUTTON_POSITIVE_PRESSED_BACKGROUND: {
        css: string;
        resolve: () => never;
      };
      REDESIGN_BUTTON_POSITIVE_TEXT: {
        css: string;
        resolve: () => never;
      };
      REDESIGN_BUTTON_PRIMARY_ALT_BACKGROUND: {
        css: string;
        resolve: () => never;
      };
      REDESIGN_BUTTON_PRIMARY_ALT_BORDER: {
        css: string;
        resolve: () => never;
      };
      REDESIGN_BUTTON_PRIMARY_ALT_ON_BLURPLE_BACKGROUND: {
        css: string;
        resolve: () => never;
      };
      REDESIGN_BUTTON_PRIMARY_ALT_ON_BLURPLE_BORDER: {
        css: string;
        resolve: () => never;
      };
      REDESIGN_BUTTON_PRIMARY_ALT_ON_BLURPLE_PRESSED_BACKGROUND: {
        css: string;
        resolve: () => never;
      };
      REDESIGN_BUTTON_PRIMARY_ALT_ON_BLURPLE_PRESSED_BORDER: {
        css: string;
        resolve: () => never;
      };
      REDESIGN_BUTTON_PRIMARY_ALT_ON_BLURPLE_TEXT: {
        css: string;
        resolve: () => never;
      };
      REDESIGN_BUTTON_PRIMARY_ALT_PRESSED_BACKGROUND: {
        css: string;
        resolve: () => never;
      };
      REDESIGN_BUTTON_PRIMARY_ALT_PRESSED_BORDER: {
        css: string;
        resolve: () => never;
      };
      REDESIGN_BUTTON_PRIMARY_ALT_PRESSED_TEXT: {
        css: string;
        resolve: () => never;
      };
      REDESIGN_BUTTON_PRIMARY_ALT_TEXT: {
        css: string;
        resolve: () => never;
      };
      REDESIGN_BUTTON_PRIMARY_BACKGROUND: {
        css: string;
        resolve: () => never;
      };
      REDESIGN_BUTTON_PRIMARY_ON_BLURPLE_PRESSED_TEXT: {
        css: string;
        resolve: () => never;
      };
      REDESIGN_BUTTON_PRIMARY_OVERLAY_BACKGROUND: {
        css: string;
        resolve: () => never;
      };
      REDESIGN_BUTTON_PRIMARY_OVERLAY_PRESSED_BACKGROUND: {
        css: string;
        resolve: () => never;
      };
      REDESIGN_BUTTON_PRIMARY_OVERLAY_TEXT: {
        css: string;
        resolve: () => never;
      };
      REDESIGN_BUTTON_PRIMARY_PRESSED_BACKGROUND: {
        css: string;
        resolve: () => never;
      };
      REDESIGN_BUTTON_PRIMARY_TEXT: {
        css: string;
        resolve: () => never;
      };
      REDESIGN_BUTTON_SECONDARY_BACKGROUND: {
        css: string;
        resolve: () => never;
      };
      REDESIGN_BUTTON_SECONDARY_BORDER: {
        css: string;
        resolve: () => never;
      };
      REDESIGN_BUTTON_SECONDARY_OVERLAY_BACKGROUND: {
        css: string;
        resolve: () => never;
      };
      REDESIGN_BUTTON_SECONDARY_OVERLAY_PRESSED_BACKGROUND: {
        css: string;
        resolve: () => never;
      };
      REDESIGN_BUTTON_SECONDARY_OVERLAY_TEXT: {
        css: string;
        resolve: () => never;
      };
      REDESIGN_BUTTON_SECONDARY_PRESSED_BACKGROUND: {
        css: string;
        resolve: () => never;
      };
      REDESIGN_BUTTON_SECONDARY_PRESSED_BORDER: {
        css: string;
        resolve: () => never;
      };
      REDESIGN_BUTTON_SECONDARY_TEXT: {
        css: string;
        resolve: () => never;
      };
      REDESIGN_BUTTON_SELECTED_BACKGROUND: {
        css: string;
        resolve: () => never;
      };
      REDESIGN_BUTTON_SELECTED_PRESSED_BACKGROUND: {
        css: string;
        resolve: () => never;
      };
      REDESIGN_BUTTON_SELECTED_TEXT: {
        css: string;
        resolve: () => never;
      };
      REDESIGN_BUTTON_TERTIARY_BACKGROUND: {
        css: string;
        resolve: () => never;
      };
      REDESIGN_BUTTON_TERTIARY_PRESSED_BACKGROUND: {
        css: string;
        resolve: () => never;
      };
      REDESIGN_BUTTON_TERTIARY_PRESSED_TEXT: {
        css: string;
        resolve: () => never;
      };
      REDESIGN_BUTTON_TERTIARY_TEXT: {
        css: string;
        resolve: () => never;
      };
      REDESIGN_CHANNEL_CATEGORY_NAME_TEXT: {
        css: string;
        resolve: () => never;
      };
      REDESIGN_CHANNEL_MESSAGE_PREVIEW_TEXT: {
        css: string;
        resolve: () => never;
      };
      REDESIGN_CHANNEL_NAME_MUTED_TEXT: {
        css: string;
        resolve: () => never;
      };
      REDESIGN_CHANNEL_NAME_TEXT: {
        css: string;
        resolve: () => never;
      };
      REDESIGN_CHAT_INPUT_BACKGROUND: {
        css: string;
        resolve: () => never;
      };
      REDESIGN_IMAGE_BUTTON_PRESSED_BACKGROUND: {
        css: string;
        resolve: () => never;
      };
      REDESIGN_INPUT_CONTROL_ACTIVE_BG: {
        css: string;
        resolve: () => never;
      };
      REDESIGN_INPUT_CONTROL_SELECTED: {
        css: string;
        resolve: () => never;
      };
      REDESIGN_ONLY_BACKGROUND_ACTIVE: {
        css: string;
        resolve: () => never;
      };
      REDESIGN_ONLY_BACKGROUND_DEFAULT: {
        css: string;
        resolve: () => never;
      };
      REDESIGN_ONLY_BACKGROUND_OVERLAY: {
        css: string;
        resolve: () => never;
      };
      REDESIGN_ONLY_BACKGROUND_RAISED: {
        css: string;
        resolve: () => never;
      };
      REDESIGN_ONLY_BACKGROUND_SUNKEN: {
        css: string;
        resolve: () => never;
      };
      SCROLLBAR_AUTO_SCROLLBAR_COLOR_THUMB: {
        css: string;
        resolve: () => never;
      };
      SCROLLBAR_AUTO_SCROLLBAR_COLOR_TRACK: {
        css: string;
        resolve: () => never;
      };
      SCROLLBAR_AUTO_THUMB: {
        css: string;
        resolve: () => never;
      };
      SCROLLBAR_AUTO_TRACK: {
        css: string;
        resolve: () => never;
      };
      SCROLLBAR_THIN_THUMB: {
        css: string;
        resolve: () => never;
      };
      SCROLLBAR_THIN_TRACK: {
        css: string;
        resolve: () => never;
      };
      SPOILER_HIDDEN_BACKGROUND: {
        css: string;
        resolve: () => never;
      };
      SPOILER_REVEALED_BACKGROUND: {
        css: string;
        resolve: () => never;
      };
      STATUS_DANGER: {
        css: string;
        resolve: () => never;
      };
      STATUS_DANGER_BACKGROUND: {
        css: string;
        resolve: () => never;
      };
      STATUS_DANGER_TEXT: {
        css: string;
        resolve: () => never;
      };
      STATUS_DND: {
        css: string;
        resolve: () => never;
      };
      STATUS_IDLE: {
        css: string;
        resolve: () => never;
      };
      STATUS_OFFLINE: {
        css: string;
        resolve: () => never;
      };
      STATUS_ONLINE: {
        css: string;
        resolve: () => never;
      };
      STATUS_POSITIVE: {
        css: string;
        resolve: () => never;
      };
      STATUS_POSITIVE_BACKGROUND: {
        css: string;
        resolve: () => never;
      };
      STATUS_POSITIVE_TEXT: {
        css: string;
        resolve: () => never;
      };
      STATUS_SPEAKING: {
        css: string;
        resolve: () => never;
      };
      STATUS_WARNING: {
        css: string;
        resolve: () => never;
      };
      STATUS_WARNING_BACKGROUND: {
        css: string;
        resolve: () => never;
      };
      STATUS_WARNING_TEXT: {
        css: string;
        resolve: () => never;
      };
      TEXT_BRAND: {
        css: string;
        resolve: () => never;
      };
      TEXT_DANGER: {
        css: string;
        resolve: () => never;
      };
      TEXT_LINK: {
        css: string;
        resolve: () => never;
      };
      TEXT_LINK_LOW_SATURATION: {
        css: string;
        resolve: () => never;
      };
      TEXT_LOW_CONTRAST: {
        css: string;
        resolve: () => never;
      };
      TEXT_MESSAGE_PREVIEW_LOW_SAT: {
        css: string;
        resolve: () => never;
      };
      TEXT_MUTED: {
        css: string;
        resolve: () => never;
      };
      TEXT_MUTED_ON_DEFAULT: {
        css: string;
        resolve: () => never;
      };
      TEXT_NORMAL: {
        css: string;
        resolve: () => never;
      };
      TEXT_POSITIVE: {
        css: string;
        resolve: () => never;
      };
      TEXT_PRIMARY: {
        css: string;
        resolve: () => never;
      };
      TEXT_SECONDARY: {
        css: string;
        resolve: () => never;
      };
      TEXT_WARNING: {
        css: string;
        resolve: () => never;
      };
      TEXTBOX_MARKDOWN_SYNTAX: {
        css: string;
        resolve: () => never;
      };
      THEME_LOCKED_BLUR_FALLBACK: {
        css: string;
        resolve: () => never;
      };
      THREAD_CHANNEL_SPINE: {
        css: string;
        resolve: () => never;
      };
      TOAST_BG: {
        css: string;
        resolve: () => never;
      };
      TYPING_INDICATOR_BG: {
        css: string;
        resolve: () => never;
      };
      USER_PROFILE_HEADER_OVERFLOW_BACKGROUND: {
        css: string;
        resolve: () => never;
      };
      VOICE_VIDEO_VIDEO_TILE_BACKGROUND: {
        css: string;
        resolve: () => never;
      };
      VOICE_VIDEO_VIDEO_TILE_BLUR_FALLBACK: {
        css: string;
        resolve: () => never;
      };
      WHITE: {
        css: string;
        resolve: () => never;
      };
      YOU_BAR_BG: {
        css: string;
        resolve: () => never;
      };
    };
    unsafe_rawColors: {
      APPLICATION_SUBSCRIPTION_END: {
        css: string;
        resolve: () => never;
      };
      APPLICATION_SUBSCRIPTION_START: {
        css: string;
        resolve: () => never;
      };
      BATTLENET: {
        css: string;
        resolve: () => never;
      };
      BG_GRADIENT_AURORA_1: {
        css: string;
        resolve: () => never;
      };
      BG_GRADIENT_AURORA_2: {
        css: string;
        resolve: () => never;
      };
      BG_GRADIENT_AURORA_3: {
        css: string;
        resolve: () => never;
      };
      BG_GRADIENT_AURORA_4: {
        css: string;
        resolve: () => never;
      };
      BG_GRADIENT_AURORA_5: {
        css: string;
        resolve: () => never;
      };
      BG_GRADIENT_BLURPLE_TWILIGHT_1: {
        css: string;
        resolve: () => never;
      };
      BG_GRADIENT_BLURPLE_TWILIGHT_2: {
        css: string;
        resolve: () => never;
      };
      BG_GRADIENT_CHROMA_GLOW_1: {
        css: string;
        resolve: () => never;
      };
      BG_GRADIENT_CHROMA_GLOW_2: {
        css: string;
        resolve: () => never;
      };
      BG_GRADIENT_CHROMA_GLOW_3: {
        css: string;
        resolve: () => never;
      };
      BG_GRADIENT_CHROMA_GLOW_4: {
        css: string;
        resolve: () => never;
      };
      BG_GRADIENT_CHROMA_GLOW_5: {
        css: string;
        resolve: () => never;
      };
      BG_GRADIENT_CITRUS_SHERBERT_1: {
        css: string;
        resolve: () => never;
      };
      BG_GRADIENT_CITRUS_SHERBERT_2: {
        css: string;
        resolve: () => never;
      };
      BG_GRADIENT_COTTON_CANDY_1: {
        css: string;
        resolve: () => never;
      };
      BG_GRADIENT_COTTON_CANDY_2: {
        css: string;
        resolve: () => never;
      };
      BG_GRADIENT_CRIMSON_MOON_1: {
        css: string;
        resolve: () => never;
      };
      BG_GRADIENT_CRIMSON_MOON_2: {
        css: string;
        resolve: () => never;
      };
      BG_GRADIENT_DESERT_KHAKI_1: {
        css: string;
        resolve: () => never;
      };
      BG_GRADIENT_DESERT_KHAKI_2: {
        css: string;
        resolve: () => never;
      };
      BG_GRADIENT_DESERT_KHAKI_3: {
        css: string;
        resolve: () => never;
      };
      BG_GRADIENT_DUSK_1: {
        css: string;
        resolve: () => never;
      };
      BG_GRADIENT_DUSK_2: {
        css: string;
        resolve: () => never;
      };
      BG_GRADIENT_EASTER_EGG_1: {
        css: string;
        resolve: () => never;
      };
      BG_GRADIENT_EASTER_EGG_2: {
        css: string;
        resolve: () => never;
      };
      BG_GRADIENT_FOREST_1: {
        css: string;
        resolve: () => never;
      };
      BG_GRADIENT_FOREST_2: {
        css: string;
        resolve: () => never;
      };
      BG_GRADIENT_FOREST_3: {
        css: string;
        resolve: () => never;
      };
      BG_GRADIENT_FOREST_4: {
        css: string;
        resolve: () => never;
      };
      BG_GRADIENT_FOREST_5: {
        css: string;
        resolve: () => never;
      };
      BG_GRADIENT_HANAMI_1: {
        css: string;
        resolve: () => never;
      };
      BG_GRADIENT_HANAMI_2: {
        css: string;
        resolve: () => never;
      };
      BG_GRADIENT_HANAMI_3: {
        css: string;
        resolve: () => never;
      };
      BG_GRADIENT_LOFI_VIBES_1: {
        css: string;
        resolve: () => never;
      };
      BG_GRADIENT_LOFI_VIBES_2: {
        css: string;
        resolve: () => never;
      };
      BG_GRADIENT_LOFI_VIBES_3: {
        css: string;
        resolve: () => never;
      };
      BG_GRADIENT_LOFI_VIBES_4: {
        css: string;
        resolve: () => never;
      };
      BG_GRADIENT_MARS_1: {
        css: string;
        resolve: () => never;
      };
      BG_GRADIENT_MARS_2: {
        css: string;
        resolve: () => never;
      };
      BG_GRADIENT_MIDNIGHT_BLURPLE_1: {
        css: string;
        resolve: () => never;
      };
      BG_GRADIENT_MIDNIGHT_BLURPLE_2: {
        css: string;
        resolve: () => never;
      };
      BG_GRADIENT_MINT_APPLE_1: {
        css: string;
        resolve: () => never;
      };
      BG_GRADIENT_MINT_APPLE_2: {
        css: string;
        resolve: () => never;
      };
      BG_GRADIENT_MINT_APPLE_3: {
        css: string;
        resolve: () => never;
      };
      BG_GRADIENT_NEON_NIGHTS_1: {
        css: string;
        resolve: () => never;
      };
      BG_GRADIENT_NEON_NIGHTS_2: {
        css: string;
        resolve: () => never;
      };
      BG_GRADIENT_NEON_NIGHTS_3: {
        css: string;
        resolve: () => never;
      };
      BG_GRADIENT_RETRO_RAINCLOUD_1: {
        css: string;
        resolve: () => never;
      };
      BG_GRADIENT_RETRO_RAINCLOUD_2: {
        css: string;
        resolve: () => never;
      };
      BG_GRADIENT_RETRO_STORM_1: {
        css: string;
        resolve: () => never;
      };
      BG_GRADIENT_RETRO_STORM_2: {
        css: string;
        resolve: () => never;
      };
      BG_GRADIENT_SEPIA_1: {
        css: string;
        resolve: () => never;
      };
      BG_GRADIENT_SEPIA_2: {
        css: string;
        resolve: () => never;
      };
      BG_GRADIENT_STRAWBERRY_LEMONADE_1: {
        css: string;
        resolve: () => never;
      };
      BG_GRADIENT_STRAWBERRY_LEMONADE_2: {
        css: string;
        resolve: () => never;
      };
      BG_GRADIENT_STRAWBERRY_LEMONADE_3: {
        css: string;
        resolve: () => never;
      };
      BG_GRADIENT_SUNRISE_1: {
        css: string;
        resolve: () => never;
      };
      BG_GRADIENT_SUNRISE_2: {
        css: string;
        resolve: () => never;
      };
      BG_GRADIENT_SUNRISE_3: {
        css: string;
        resolve: () => never;
      };
      BG_GRADIENT_SUNSET_1: {
        css: string;
        resolve: () => never;
      };
      BG_GRADIENT_SUNSET_2: {
        css: string;
        resolve: () => never;
      };
      BG_GRADIENT_UNDER_THE_SEA_1: {
        css: string;
        resolve: () => never;
      };
      BG_GRADIENT_UNDER_THE_SEA_2: {
        css: string;
        resolve: () => never;
      };
      BG_GRADIENT_UNDER_THE_SEA_3: {
        css: string;
        resolve: () => never;
      };
      BLACK_100: {
        css: string;
        resolve: () => never;
      };
      BLACK_130: {
        css: string;
        resolve: () => never;
      };
      BLACK_160: {
        css: string;
        resolve: () => never;
      };
      BLACK_200: {
        css: string;
        resolve: () => never;
      };
      BLACK_230: {
        css: string;
        resolve: () => never;
      };
      BLACK_260: {
        css: string;
        resolve: () => never;
      };
      BLACK_300: {
        css: string;
        resolve: () => never;
      };
      BLACK_330: {
        css: string;
        resolve: () => never;
      };
      BLACK_345: {
        css: string;
        resolve: () => never;
      };
      BLACK_360: {
        css: string;
        resolve: () => never;
      };
      BLACK_400: {
        css: string;
        resolve: () => never;
      };
      BLACK_430: {
        css: string;
        resolve: () => never;
      };
      BLACK_460: {
        css: string;
        resolve: () => never;
      };
      BLACK_500: {
        css: string;
        resolve: () => never;
      };
      BLACK_530: {
        css: string;
        resolve: () => never;
      };
      BLACK_560: {
        css: string;
        resolve: () => never;
      };
      BLACK_600: {
        css: string;
        resolve: () => never;
      };
      BLACK_630: {
        css: string;
        resolve: () => never;
      };
      BLACK_660: {
        css: string;
        resolve: () => never;
      };
      BLACK_700: {
        css: string;
        resolve: () => never;
      };
      BLACK_730: {
        css: string;
        resolve: () => never;
      };
      BLACK_760: {
        css: string;
        resolve: () => never;
      };
      BLACK_800: {
        css: string;
        resolve: () => never;
      };
      BLACK_830: {
        css: string;
        resolve: () => never;
      };
      BLACK_860: {
        css: string;
        resolve: () => never;
      };
      BLACK_900: {
        css: string;
        resolve: () => never;
      };
      BLUE_100: {
        css: string;
        resolve: () => never;
      };
      BLUE_130: {
        css: string;
        resolve: () => never;
      };
      BLUE_160: {
        css: string;
        resolve: () => never;
      };
      BLUE_200: {
        css: string;
        resolve: () => never;
      };
      BLUE_230: {
        css: string;
        resolve: () => never;
      };
      BLUE_260: {
        css: string;
        resolve: () => never;
      };
      BLUE_300: {
        css: string;
        resolve: () => never;
      };
      BLUE_330: {
        css: string;
        resolve: () => never;
      };
      BLUE_345: {
        css: string;
        resolve: () => never;
      };
      BLUE_360: {
        css: string;
        resolve: () => never;
      };
      BLUE_400: {
        css: string;
        resolve: () => never;
      };
      BLUE_430: {
        css: string;
        resolve: () => never;
      };
      BLUE_460: {
        css: string;
        resolve: () => never;
      };
      BLUE_500: {
        css: string;
        resolve: () => never;
      };
      BLUE_530: {
        css: string;
        resolve: () => never;
      };
      BLUE_560: {
        css: string;
        resolve: () => never;
      };
      BLUE_600: {
        css: string;
        resolve: () => never;
      };
      BLUE_630: {
        css: string;
        resolve: () => never;
      };
      BLUE_660: {
        css: string;
        resolve: () => never;
      };
      BLUE_700: {
        css: string;
        resolve: () => never;
      };
      BLUE_730: {
        css: string;
        resolve: () => never;
      };
      BLUE_760: {
        css: string;
        resolve: () => never;
      };
      BLUE_800: {
        css: string;
        resolve: () => never;
      };
      BLUE_830: {
        css: string;
        resolve: () => never;
      };
      BLUE_860: {
        css: string;
        resolve: () => never;
      };
      BLUE_900: {
        css: string;
        resolve: () => never;
      };
      BRAND_100: {
        css: string;
        resolve: () => never;
      };
      BRAND_130: {
        css: string;
        resolve: () => never;
      };
      BRAND_160: {
        css: string;
        resolve: () => never;
      };
      BRAND_200: {
        css: string;
        resolve: () => never;
      };
      BRAND_230: {
        css: string;
        resolve: () => never;
      };
      BRAND_260: {
        css: string;
        resolve: () => never;
      };
      BRAND_300: {
        css: string;
        resolve: () => never;
      };
      BRAND_330: {
        css: string;
        resolve: () => never;
      };
      BRAND_345: {
        css: string;
        resolve: () => never;
      };
      BRAND_360: {
        css: string;
        resolve: () => never;
      };
      BRAND_400: {
        css: string;
        resolve: () => never;
      };
      BRAND_430: {
        css: string;
        resolve: () => never;
      };
      BRAND_460: {
        css: string;
        resolve: () => never;
      };
      BRAND_500: {
        css: string;
        resolve: () => never;
      };
      BRAND_530: {
        css: string;
        resolve: () => never;
      };
      BRAND_560: {
        css: string;
        resolve: () => never;
      };
      BRAND_600: {
        css: string;
        resolve: () => never;
      };
      BRAND_630: {
        css: string;
        resolve: () => never;
      };
      BRAND_660: {
        css: string;
        resolve: () => never;
      };
      BRAND_700: {
        css: string;
        resolve: () => never;
      };
      BRAND_730: {
        css: string;
        resolve: () => never;
      };
      BRAND_760: {
        css: string;
        resolve: () => never;
      };
      BRAND_800: {
        css: string;
        resolve: () => never;
      };
      BRAND_830: {
        css: string;
        resolve: () => never;
      };
      BRAND_860: {
        css: string;
        resolve: () => never;
      };
      BRAND_900: {
        css: string;
        resolve: () => never;
      };
      BUNGIE: {
        css: string;
        resolve: () => never;
      };
      CRUNCHYROLL: {
        css: string;
        resolve: () => never;
      };
      DISCORD_8TH_BDAY_BLUE: {
        css: string;
        resolve: () => never;
      };
      DISCORD_8TH_BDAY_DARK_BLUE: {
        css: string;
        resolve: () => never;
      };
      DISCORD_8TH_BDAY_GREEN: {
        css: string;
        resolve: () => never;
      };
      DISCORD_8TH_BDAY_LIGHT_BLUE: {
        css: string;
        resolve: () => never;
      };
      DISCORD_8TH_BDAY_PINK: {
        css: string;
        resolve: () => never;
      };
      DISCORD_8TH_BDAY_PURPLE: {
        css: string;
        resolve: () => never;
      };
      DISCORD_8TH_BDAY_YELLOW: {
        css: string;
        resolve: () => never;
      };
      EBAY: {
        css: string;
        resolve: () => never;
      };
      EPIC_GAMES: {
        css: string;
        resolve: () => never;
      };
      FACEBOOK: {
        css: string;
        resolve: () => never;
      };
      GITHUB: {
        css: string;
        resolve: () => never;
      };
      GOLD: {
        css: string;
        resolve: () => never;
      };
      GREEN_100: {
        css: string;
        resolve: () => never;
      };
      GREEN_130: {
        css: string;
        resolve: () => never;
      };
      GREEN_160: {
        css: string;
        resolve: () => never;
      };
      GREEN_200: {
        css: string;
        resolve: () => never;
      };
      GREEN_230: {
        css: string;
        resolve: () => never;
      };
      GREEN_260: {
        css: string;
        resolve: () => never;
      };
      GREEN_300: {
        css: string;
        resolve: () => never;
      };
      GREEN_330: {
        css: string;
        resolve: () => never;
      };
      GREEN_345: {
        css: string;
        resolve: () => never;
      };
      GREEN_360: {
        css: string;
        resolve: () => never;
      };
      GREEN_400: {
        css: string;
        resolve: () => never;
      };
      GREEN_430: {
        css: string;
        resolve: () => never;
      };
      GREEN_460: {
        css: string;
        resolve: () => never;
      };
      GREEN_500: {
        css: string;
        resolve: () => never;
      };
      GREEN_530: {
        css: string;
        resolve: () => never;
      };
      GREEN_560: {
        css: string;
        resolve: () => never;
      };
      GREEN_600: {
        css: string;
        resolve: () => never;
      };
      GREEN_630: {
        css: string;
        resolve: () => never;
      };
      GREEN_660: {
        css: string;
        resolve: () => never;
      };
      GREEN_700: {
        css: string;
        resolve: () => never;
      };
      GREEN_730: {
        css: string;
        resolve: () => never;
      };
      GREEN_760: {
        css: string;
        resolve: () => never;
      };
      GREEN_800: {
        css: string;
        resolve: () => never;
      };
      GREEN_830: {
        css: string;
        resolve: () => never;
      };
      GREEN_860: {
        css: string;
        resolve: () => never;
      };
      GREEN_900: {
        css: string;
        resolve: () => never;
      };
      GUILD_BOOSTING_BLUE: {
        css: string;
        resolve: () => never;
      };
      GUILD_BOOSTING_BLUE_FOR_GRADIENTS: {
        css: string;
        resolve: () => never;
      };
      GUILD_BOOSTING_PINK: {
        css: string;
        resolve: () => never;
      };
      GUILD_BOOSTING_PURPLE: {
        css: string;
        resolve: () => never;
      };
      GUILD_BOOSTING_PURPLE_FOR_GRADIENTS: {
        css: string;
        resolve: () => never;
      };
      HYPESQUAD_HOUSE_1: {
        css: string;
        resolve: () => never;
      };
      HYPESQUAD_HOUSE_2: {
        css: string;
        resolve: () => never;
      };
      HYPESQUAD_HOUSE_3: {
        css: string;
        resolve: () => never;
      };
      INPUT_PLACEHOLDER_TEXT_DARK: {
        css: string;
        resolve: () => never;
      };
      LOL: {
        css: string;
        resolve: () => never;
      };
      ORANGE_100: {
        css: string;
        resolve: () => never;
      };
      ORANGE_130: {
        css: string;
        resolve: () => never;
      };
      ORANGE_160: {
        css: string;
        resolve: () => never;
      };
      ORANGE_200: {
        css: string;
        resolve: () => never;
      };
      ORANGE_230: {
        css: string;
        resolve: () => never;
      };
      ORANGE_260: {
        css: string;
        resolve: () => never;
      };
      ORANGE_300: {
        css: string;
        resolve: () => never;
      };
      ORANGE_330: {
        css: string;
        resolve: () => never;
      };
      ORANGE_345: {
        css: string;
        resolve: () => never;
      };
      ORANGE_360: {
        css: string;
        resolve: () => never;
      };
      ORANGE_400: {
        css: string;
        resolve: () => never;
      };
      ORANGE_430: {
        css: string;
        resolve: () => never;
      };
      ORANGE_460: {
        css: string;
        resolve: () => never;
      };
      ORANGE_500: {
        css: string;
        resolve: () => never;
      };
      ORANGE_530: {
        css: string;
        resolve: () => never;
      };
      ORANGE_560: {
        css: string;
        resolve: () => never;
      };
      ORANGE_600: {
        css: string;
        resolve: () => never;
      };
      ORANGE_630: {
        css: string;
        resolve: () => never;
      };
      ORANGE_660: {
        css: string;
        resolve: () => never;
      };
      ORANGE_700: {
        css: string;
        resolve: () => never;
      };
      ORANGE_730: {
        css: string;
        resolve: () => never;
      };
      ORANGE_760: {
        css: string;
        resolve: () => never;
      };
      ORANGE_800: {
        css: string;
        resolve: () => never;
      };
      ORANGE_830: {
        css: string;
        resolve: () => never;
      };
      ORANGE_860: {
        css: string;
        resolve: () => never;
      };
      ORANGE_900: {
        css: string;
        resolve: () => never;
      };
      PARTNER: {
        css: string;
        resolve: () => never;
      };
      PAYPAL: {
        css: string;
        resolve: () => never;
      };
      PLAYSTATION: {
        css: string;
        resolve: () => never;
      };
      PLUM_23_ALPHA: {
        css: string;
        resolve: () => never;
      };
      PLUM_0: {
        css: string;
        resolve: () => never;
      };
      PLUM_1: {
        css: string;
        resolve: () => never;
      };
      PLUM_10: {
        css: string;
        resolve: () => never;
      };
      PLUM_11: {
        css: string;
        resolve: () => never;
      };
      PLUM_12: {
        css: string;
        resolve: () => never;
      };
      PLUM_13: {
        css: string;
        resolve: () => never;
      };
      PLUM_14: {
        css: string;
        resolve: () => never;
      };
      PLUM_15: {
        css: string;
        resolve: () => never;
      };
      PLUM_16: {
        css: string;
        resolve: () => never;
      };
      PLUM_17: {
        css: string;
        resolve: () => never;
      };
      PLUM_18: {
        css: string;
        resolve: () => never;
      };
      PLUM_19: {
        css: string;
        resolve: () => never;
      };
      PLUM_2: {
        css: string;
        resolve: () => never;
      };
      PLUM_20: {
        css: string;
        resolve: () => never;
      };
      PLUM_21: {
        css: string;
        resolve: () => never;
      };
      PLUM_22: {
        css: string;
        resolve: () => never;
      };
      PLUM_23: {
        css: string;
        resolve: () => never;
      };
      PLUM_24: {
        css: string;
        resolve: () => never;
      };
      PLUM_25: {
        css: string;
        resolve: () => never;
      };
      PLUM_26: {
        css: string;
        resolve: () => never;
      };
      PLUM_3: {
        css: string;
        resolve: () => never;
      };
      PLUM_4: {
        css: string;
        resolve: () => never;
      };
      PLUM_5: {
        css: string;
        resolve: () => never;
      };
      PLUM_6: {
        css: string;
        resolve: () => never;
      };
      PLUM_7: {
        css: string;
        resolve: () => never;
      };
      PLUM_8: {
        css: string;
        resolve: () => never;
      };
      PLUM_9: {
        css: string;
        resolve: () => never;
      };
      PREMIUM_PERK_BLUE: {
        css: string;
        resolve: () => never;
      };
      PREMIUM_PERK_BLUE_ALT: {
        css: string;
        resolve: () => never;
      };
      PREMIUM_PERK_DARK_BLUE: {
        css: string;
        resolve: () => never;
      };
      PREMIUM_PERK_GOLD: {
        css: string;
        resolve: () => never;
      };
      PREMIUM_PERK_GREEN: {
        css: string;
        resolve: () => never;
      };
      PREMIUM_PERK_LIGHT_BLUE: {
        css: string;
        resolve: () => never;
      };
      PREMIUM_PERK_ORANGE: {
        css: string;
        resolve: () => never;
      };
      PREMIUM_PERK_PINK: {
        css: string;
        resolve: () => never;
      };
      PREMIUM_PERK_PURPLE: {
        css: string;
        resolve: () => never;
      };
      PREMIUM_PERK_YELLOW: {
        css: string;
        resolve: () => never;
      };
      PREMIUM_TIER_0_BLUE: {
        css: string;
        resolve: () => never;
      };
      PREMIUM_TIER_0_BLUE_FOR_GRADIENTS: {
        css: string;
        resolve: () => never;
      };
      PREMIUM_TIER_0_BLUE_FOR_GRADIENTS_2: {
        css: string;
        resolve: () => never;
      };
      PREMIUM_TIER_0_HEADER_GRADIENT_1: {
        css: string;
        resolve: () => never;
      };
      PREMIUM_TIER_0_HEADER_GRADIENT_2: {
        css: string;
        resolve: () => never;
      };
      PREMIUM_TIER_0_HEADER_GRADIENT_3: {
        css: string;
        resolve: () => never;
      };
      PREMIUM_TIER_0_HEADER_GRADIENT_4: {
        css: string;
        resolve: () => never;
      };
      PREMIUM_TIER_0_HEADER_GRADIENT_5: {
        css: string;
        resolve: () => never;
      };
      PREMIUM_TIER_0_PURPLE: {
        css: string;
        resolve: () => never;
      };
      PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS: {
        css: string;
        resolve: () => never;
      };
      PREMIUM_TIER_1_BLUE: {
        css: string;
        resolve: () => never;
      };
      PREMIUM_TIER_1_BLUE_FOR_GRADIENTS: {
        css: string;
        resolve: () => never;
      };
      PREMIUM_TIER_1_DARK_BLUE_FOR_GRADIENTS: {
        css: string;
        resolve: () => never;
      };
      PREMIUM_TIER_1_PURPLE: {
        css: string;
        resolve: () => never;
      };
      PREMIUM_TIER_2_PINK: {
        css: string;
        resolve: () => never;
      };
      PREMIUM_TIER_2_PINK_FOR_GRADIENTS: {
        css: string;
        resolve: () => never;
      };
      PREMIUM_TIER_2_PINK_FOR_GRADIENTS_2: {
        css: string;
        resolve: () => never;
      };
      PREMIUM_TIER_2_PURPLE: {
        css: string;
        resolve: () => never;
      };
      PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS: {
        css: string;
        resolve: () => never;
      };
      PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2: {
        css: string;
        resolve: () => never;
      };
      PRIMARY_100: {
        css: string;
        resolve: () => never;
      };
      PRIMARY_130: {
        css: string;
        resolve: () => never;
      };
      PRIMARY_160: {
        css: string;
        resolve: () => never;
      };
      PRIMARY_200: {
        css: string;
        resolve: () => never;
      };
      PRIMARY_230: {
        css: string;
        resolve: () => never;
      };
      PRIMARY_260: {
        css: string;
        resolve: () => never;
      };
      PRIMARY_300: {
        css: string;
        resolve: () => never;
      };
      PRIMARY_330: {
        css: string;
        resolve: () => never;
      };
      PRIMARY_345: {
        css: string;
        resolve: () => never;
      };
      PRIMARY_360: {
        css: string;
        resolve: () => never;
      };
      PRIMARY_400: {
        css: string;
        resolve: () => never;
      };
      PRIMARY_430: {
        css: string;
        resolve: () => never;
      };
      PRIMARY_460: {
        css: string;
        resolve: () => never;
      };
      PRIMARY_500: {
        css: string;
        resolve: () => never;
      };
      PRIMARY_530: {
        css: string;
        resolve: () => never;
      };
      PRIMARY_560: {
        css: string;
        resolve: () => never;
      };
      PRIMARY_600: {
        css: string;
        resolve: () => never;
      };
      PRIMARY_630: {
        css: string;
        resolve: () => never;
      };
      PRIMARY_645: {
        css: string;
        resolve: () => never;
      };
      PRIMARY_660: {
        css: string;
        resolve: () => never;
      };
      PRIMARY_700: {
        css: string;
        resolve: () => never;
      };
      PRIMARY_730: {
        css: string;
        resolve: () => never;
      };
      PRIMARY_760: {
        css: string;
        resolve: () => never;
      };
      PRIMARY_800: {
        css: string;
        resolve: () => never;
      };
      PRIMARY_830: {
        css: string;
        resolve: () => never;
      };
      PRIMARY_860: {
        css: string;
        resolve: () => never;
      };
      PRIMARY_900: {
        css: string;
        resolve: () => never;
      };
      RED_100: {
        css: string;
        resolve: () => never;
      };
      RED_130: {
        css: string;
        resolve: () => never;
      };
      RED_160: {
        css: string;
        resolve: () => never;
      };
      RED_200: {
        css: string;
        resolve: () => never;
      };
      RED_230: {
        css: string;
        resolve: () => never;
      };
      RED_260: {
        css: string;
        resolve: () => never;
      };
      RED_300: {
        css: string;
        resolve: () => never;
      };
      RED_330: {
        css: string;
        resolve: () => never;
      };
      RED_345: {
        css: string;
        resolve: () => never;
      };
      RED_360: {
        css: string;
        resolve: () => never;
      };
      RED_400: {
        css: string;
        resolve: () => never;
      };
      RED_430: {
        css: string;
        resolve: () => never;
      };
      RED_460: {
        css: string;
        resolve: () => never;
      };
      RED_500: {
        css: string;
        resolve: () => never;
      };
      RED_530: {
        css: string;
        resolve: () => never;
      };
      RED_560: {
        css: string;
        resolve: () => never;
      };
      RED_600: {
        css: string;
        resolve: () => never;
      };
      RED_630: {
        css: string;
        resolve: () => never;
      };
      RED_660: {
        css: string;
        resolve: () => never;
      };
      RED_700: {
        css: string;
        resolve: () => never;
      };
      RED_730: {
        css: string;
        resolve: () => never;
      };
      RED_760: {
        css: string;
        resolve: () => never;
      };
      RED_800: {
        css: string;
        resolve: () => never;
      };
      RED_830: {
        css: string;
        resolve: () => never;
      };
      RED_860: {
        css: string;
        resolve: () => never;
      };
      RED_900: {
        css: string;
        resolve: () => never;
      };
      REDDIT: {
        css: string;
        resolve: () => never;
      };
      RIOT_GAMES: {
        css: string;
        resolve: () => never;
      };
      ROLE_BLUE: {
        css: string;
        resolve: () => never;
      };
      ROLE_BROWN: {
        css: string;
        resolve: () => never;
      };
      ROLE_BURGUNDY: {
        css: string;
        resolve: () => never;
      };
      ROLE_DARK_BLUE: {
        css: string;
        resolve: () => never;
      };
      ROLE_DARK_GREY: {
        css: string;
        resolve: () => never;
      };
      ROLE_DARK_PURPLE: {
        css: string;
        resolve: () => never;
      };
      ROLE_DARK_TEAL: {
        css: string;
        resolve: () => never;
      };
      ROLE_DEFAULT: {
        css: string;
        resolve: () => never;
      };
      ROLE_GREEN: {
        css: string;
        resolve: () => never;
      };
      ROLE_GREY: {
        css: string;
        resolve: () => never;
      };
      ROLE_LIGHT_BLUE: {
        css: string;
        resolve: () => never;
      };
      ROLE_LIGHT_GREEN: {
        css: string;
        resolve: () => never;
      };
      ROLE_LIGHT_GREY: {
        css: string;
        resolve: () => never;
      };
      ROLE_MAGENTA: {
        css: string;
        resolve: () => never;
      };
      ROLE_ORANGE: {
        css: string;
        resolve: () => never;
      };
      ROLE_PURPLE: {
        css: string;
        resolve: () => never;
      };
      ROLE_SALMON: {
        css: string;
        resolve: () => never;
      };
      ROLE_SKY_BLUE: {
        css: string;
        resolve: () => never;
      };
      ROLE_TAN: {
        css: string;
        resolve: () => never;
      };
      ROLE_TEAL: {
        css: string;
        resolve: () => never;
      };
      ROLE_TERRACOTTA: {
        css: string;
        resolve: () => never;
      };
      ROLE_YELLOW: {
        css: string;
        resolve: () => never;
      };
      SAMSUNG: {
        css: string;
        resolve: () => never;
      };
      SKYPE: {
        css: string;
        resolve: () => never;
      };
      SPOTIFY: {
        css: string;
        resolve: () => never;
      };
      STEAM: {
        css: string;
        resolve: () => never;
      };
      TEAL_100: {
        css: string;
        resolve: () => never;
      };
      TEAL_130: {
        css: string;
        resolve: () => never;
      };
      TEAL_160: {
        css: string;
        resolve: () => never;
      };
      TEAL_200: {
        css: string;
        resolve: () => never;
      };
      TEAL_230: {
        css: string;
        resolve: () => never;
      };
      TEAL_260: {
        css: string;
        resolve: () => never;
      };
      TEAL_300: {
        css: string;
        resolve: () => never;
      };
      TEAL_330: {
        css: string;
        resolve: () => never;
      };
      TEAL_345: {
        css: string;
        resolve: () => never;
      };
      TEAL_360: {
        css: string;
        resolve: () => never;
      };
      TEAL_400: {
        css: string;
        resolve: () => never;
      };
      TEAL_430: {
        css: string;
        resolve: () => never;
      };
      TEAL_460: {
        css: string;
        resolve: () => never;
      };
      TEAL_500: {
        css: string;
        resolve: () => never;
      };
      TEAL_530: {
        css: string;
        resolve: () => never;
      };
      TEAL_560: {
        css: string;
        resolve: () => never;
      };
      TEAL_600: {
        css: string;
        resolve: () => never;
      };
      TEAL_630: {
        css: string;
        resolve: () => never;
      };
      TEAL_660: {
        css: string;
        resolve: () => never;
      };
      TEAL_700: {
        css: string;
        resolve: () => never;
      };
      TEAL_730: {
        css: string;
        resolve: () => never;
      };
      TEAL_760: {
        css: string;
        resolve: () => never;
      };
      TEAL_800: {
        css: string;
        resolve: () => never;
      };
      TEAL_830: {
        css: string;
        resolve: () => never;
      };
      TEAL_860: {
        css: string;
        resolve: () => never;
      };
      TEAL_900: {
        css: string;
        resolve: () => never;
      };
      TRANSPARENT: {
        css: string;
        resolve: () => never;
      };
      TWITCH: {
        css: string;
        resolve: () => never;
      };
      TWITTER: {
        css: string;
        resolve: () => never;
      };
      WHITE_100: {
        css: string;
        resolve: () => never;
      };
      WHITE_130: {
        css: string;
        resolve: () => never;
      };
      WHITE_160: {
        css: string;
        resolve: () => never;
      };
      WHITE_200: {
        css: string;
        resolve: () => never;
      };
      WHITE_230: {
        css: string;
        resolve: () => never;
      };
      WHITE_260: {
        css: string;
        resolve: () => never;
      };
      WHITE_300: {
        css: string;
        resolve: () => never;
      };
      WHITE_330: {
        css: string;
        resolve: () => never;
      };
      WHITE_345: {
        css: string;
        resolve: () => never;
      };
      WHITE_360: {
        css: string;
        resolve: () => never;
      };
      WHITE_400: {
        css: string;
        resolve: () => never;
      };
      WHITE_430: {
        css: string;
        resolve: () => never;
      };
      WHITE_460: {
        css: string;
        resolve: () => never;
      };
      WHITE_500: {
        css: string;
        resolve: () => never;
      };
      WHITE_530: {
        css: string;
        resolve: () => never;
      };
      WHITE_560: {
        css: string;
        resolve: () => never;
      };
      WHITE_600: {
        css: string;
        resolve: () => never;
      };
      WHITE_630: {
        css: string;
        resolve: () => never;
      };
      WHITE_660: {
        css: string;
        resolve: () => never;
      };
      WHITE_700: {
        css: string;
        resolve: () => never;
      };
      WHITE_730: {
        css: string;
        resolve: () => never;
      };
      WHITE_760: {
        css: string;
        resolve: () => never;
      };
      WHITE_800: {
        css: string;
        resolve: () => never;
      };
      WHITE_830: {
        css: string;
        resolve: () => never;
      };
      WHITE_860: {
        css: string;
        resolve: () => never;
      };
      WHITE_900: {
        css: string;
        resolve: () => never;
      };
      XBOX: {
        css: string;
        resolve: () => never;
      };
      YELLOW_100: {
        css: string;
        resolve: () => never;
      };
      YELLOW_130: {
        css: string;
        resolve: () => never;
      };
      YELLOW_160: {
        css: string;
        resolve: () => never;
      };
      YELLOW_200: {
        css: string;
        resolve: () => never;
      };
      YELLOW_230: {
        css: string;
        resolve: () => never;
      };
      YELLOW_260: {
        css: string;
        resolve: () => never;
      };
      YELLOW_300: {
        css: string;
        resolve: () => never;
      };
      YELLOW_330: {
        css: string;
        resolve: () => never;
      };
      YELLOW_345: {
        css: string;
        resolve: () => never;
      };
      YELLOW_360: {
        css: string;
        resolve: () => never;
      };
      YELLOW_400: {
        css: string;
        resolve: () => never;
      };
      YELLOW_430: {
        css: string;
        resolve: () => never;
      };
      YELLOW_460: {
        css: string;
        resolve: () => never;
      };
      YELLOW_500: {
        css: string;
        resolve: () => never;
      };
      YELLOW_530: {
        css: string;
        resolve: () => never;
      };
      YELLOW_560: {
        css: string;
        resolve: () => never;
      };
      YELLOW_600: {
        css: string;
        resolve: () => never;
      };
      YELLOW_630: {
        css: string;
        resolve: () => never;
      };
      YELLOW_660: {
        css: string;
        resolve: () => never;
      };
      YELLOW_700: {
        css: string;
        resolve: () => never;
      };
      YELLOW_730: {
        css: string;
        resolve: () => never;
      };
      YELLOW_760: {
        css: string;
        resolve: () => never;
      };
      YELLOW_800: {
        css: string;
        resolve: () => never;
      };
      YELLOW_830: {
        css: string;
        resolve: () => never;
      };
      YELLOW_860: {
        css: string;
        resolve: () => never;
      };
      YELLOW_900: {
        css: string;
        resolve: () => never;
      };
      YOUTUBE: {
        css: string;
        resolve: () => never;
      };
    };
    shadows: {
      SHADOW_BORDER: {
        css: string;
        resolve: () => never;
      };
      SHADOW_BUTTON_OVERLAY: {
        css: string;
        resolve: () => never;
      };
      SHADOW_HIGH: {
        css: string;
        resolve: () => never;
      };
      SHADOW_LEDGE: {
        css: string;
        resolve: () => never;
      };
      SHADOW_LOW: {
        css: string;
        resolve: () => never;
      };
      SHADOW_LOW_ACTIVE: {
        css: string;
        resolve: () => never;
      };
      SHADOW_LOW_HOVER: {
        css: string;
        resolve: () => never;
      };
      SHADOW_MEDIUM: {
        css: string;
        resolve: () => never;
      };
      SHADOW_MOBILE_NAVIGATOR_X: {
        css: string;
        resolve: () => never;
      };
      SHADOW_TOP_HIGH: {
        css: string;
        resolve: () => never;
      };
      SHADOW_TOP_LEDGE: {
        css: string;
        resolve: () => never;
      };
      SHADOW_TOP_LOW: {
        css: string;
        resolve: () => never;
      };
    };
    radii: {
      none: number;
      xs: number;
      sm: number;
      md: number;
      lg: number;
      xl: number;
      xxl: number;
      round: number;
    };
    spacing: {
      PX_4: string;
      PX_8: string;
      PX_12: string;
      PX_16: string;
      PX_24: string;
      PX_32: string;
      PX_40: string;
      PX_48: string;
      PX_56: string;
      PX_64: string;
      PX_72: string;
      PX_80: string;
      PX_96: string;
    };
  };
  updateModal: () => never;
  useDndMode: () => never;
  useDndStore: () => never;
  useFocusBlock: () => never;
  useFocusJumpSection: () => never;
  useFocusJumpSectionManager: () => never;
  useFocusLock: () => never;
  useFormContext: () => never;
  useModalContext: () => never;
  useModalsStore: () => never;
  useMultiSelect: () => never;
  useMultiSelectState: () => never;
  usePrivateHeadingLevel: () => never;
  useRadioGroup: () => never;
  useRadioItem: () => never;
  useRedesignIconContext: () => never;
  useResizeObserverSubscription: () => never;
  useSingleSelect: () => never;
  useSingleSelectState: () => never;
  useStatusFillColor: () => never;
  useThemeContext: () => never;
  useToastStore: () => never;
  useToken: () => never;
  useVariableSelect: () => never;
}
