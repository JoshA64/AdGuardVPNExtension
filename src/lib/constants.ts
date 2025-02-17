export const SETTINGS_IDS = {
    PROXY_ENABLED: 'proxy.enabled',
    RATE_SHOW: 'rate.show',
    PREMIUM_FEATURES_SHOW: 'premium.features.show',
    USER_SET_PROMO_SHOW: 'user.set.promo.show',
    EXCLUSIONS: 'exclusions.list',
    HANDLE_WEBRTC_ENABLED: 'webrtc.handle.enabled',
    SELECTED_DNS_SERVER: 'dns.handle.server',
    CONTEXT_MENU_ENABLED: 'context.menu.enabled',
    SELECTED_LOCATION_KEY: 'endpoints.selected.location',
    LOCATION_SELECTED_BY_USER_KEY: 'endpoints.location.selected.by.user',
    POLICY_AGREEMENT: 'policy.agreement',
    HELP_US_IMPROVE: 'help.us.improve',
    APPEARANCE_THEME: 'appearance.theme',
};

export const APPEARANCE_THEMES = {
    SYSTEM: 'SYSTEM',
    DARK: 'DARK',
    LIGHT: 'LIGHT',
};

export const APPEARANCE_THEME_DEFAULT = APPEARANCE_THEMES.SYSTEM;

export enum MessageType {
    ADD_EVENT_LISTENER = 'add.event.listener',
    NOTIFY_LISTENERS = 'notify.listeners',
    REMOVE_EVENT_LISTENER = 'remove.event.listener',

    ADD_LONG_LIVED_CONNECTION = 'add.long.lived.connection',
    AUTHENTICATE_SOCIAL = 'authenticate.social',
    AUTHENTICATE_THANKYOU_PAGE = 'authenticate.thankyou.page',
    GET_POPUP_DATA = 'get.popup.data',
    GET_OPTIONS_DATA = 'get.options.data',
    GET_VPN_FAILURE_PAGE = 'get.vpn.failure.page',
    OPEN_OPTIONS_PAGE = 'open.options.page',
    SET_SELECTED_LOCATION = 'set.selected.location',
    DEAUTHENTICATE_USER = 'deauthenticate.user',
    AUTHENTICATE_USER = 'authenticate.user',
    UPDATE_AUTH_CACHE = 'update.auth.cache',
    GET_AUTH_CACHE = 'get.auth.cache',
    CLEAR_AUTH_CACHE = 'clear.auth.cache',
    GET_CAN_CONTROL_PROXY = 'get.can.control.proxy',
    ENABLE_PROXY = 'enable.proxy',
    DISABLE_PROXY = 'disable.proxy',
    ADD_URL_TO_EXCLUSIONS = 'add.to.exclusions',
    REMOVE_EXCLUSION = 'remove.exclusion',
    DISABLE_VPN_BY_URL = 'disable.vpn.by.url',
    ENABLE_VPN_BY_URL = 'enable.vpn.by.url',
    CHECK_EMAIL = 'check.email',
    DISABLE_OTHER_EXTENSIONS = 'disable.other.extensions',
    REGISTER_USER = 'register.user',
    IS_AUTHENTICATED = 'is.authenticated',
    START_SOCIAL_AUTH = 'start.social.auth',
    CLEAR_PERMISSIONS_ERROR = 'clear.permissions.error',
    CHECK_PERMISSIONS = 'check.permissions',
    GET_EXCLUSIONS_INVERTED = 'get.exclusions.inverted',
    GET_EXCLUSIONS_DATA = 'get.exclusions.data',
    SET_EXCLUSIONS_MODE = 'set.exclusions.mode',
    TOGGLE_EXCLUSION_STATE = 'toggle.exclusion.state',
    RESET_SERVICE_DATA = 'reset.service.data',
    CLEAR_EXCLUSIONS_LIST = 'clear.exclusions.list',
    TOGGLE_SERVICES = 'toggle.services',
    GET_SETTING_VALUE = 'get.setting.value',
    SET_SETTING_VALUE = 'set.setting.value',
    GET_USERNAME = 'get.username',
    GET_SELECTED_LOCATION = 'get.selected.location',
    CHECK_IS_PREMIUM_TOKEN = 'check.is.premium.token',
    SET_NOTIFICATION_VIEWED = 'set.notification.viewed',
    OPEN_TAB = 'open.tab.action',
    REPORT_BUG = 'post.report.bug',
    SET_DESKTOP_VPN_ENABLED = 'set.desktop.vpn.enabled',
    OPEN_PREMIUM_PROMO_PAGE = 'open.premium.promo.page',
    ADD_REGULAR_EXCLUSIONS = 'add.regular.exclusions',
    ADD_SELECTIVE_EXCLUSIONS = 'add.selective.exclusions',
    SET_FLAG = 'set.flag',
    GET_GENERAL_EXCLUSIONS = 'get.general.exclusions',
    GET_SELECTIVE_EXCLUSIONS = 'get.selective.exclusions',
    OPEN_REFERRAL_OPTIONS = 'open.referral.options',
    GET_REFERRAL_DATA = 'get.referral.data',
    RESTORE_EXCLUSIONS = 'restore.exclusions',
    ADD_EXCLUSIONS_MAP = 'add.exclusions.map',
    SET_RATE_MODAL_VIEWED = 'set.rate.modal.viewed',
}

export const ERROR_STATUSES = {
    NETWORK_ERROR: 'network.error',
    INVALID_TOKEN_ERROR: 'invalid.token.error',
};

// Error text thrown when connection is canceled by user. See issue - AG-2291
export const FORCE_CANCELLED = 'Connection was cancelled by user';

export const AUTH_PROVIDERS = {
    APPLE: 'apple',
    GOOGLE: 'google',
    FACEBOOK: 'facebook',
};

export const FLAGS_FIELDS = {
    IS_NEW_USER: 'isNewUser',
    IS_SOCIAL_AUTH: 'isSocialAuth',
    SHOW_ONBOARDING: 'showOnboarding',
    SHOW_UPGRADE_SCREEN: 'showUpgradeScreen',
    SALE_SHOW: 'saleShow',
    SHOULD_SHOW_RATE_MODAL: 'shouldShowRateModal',
};

export const REFERRAL_PROGRAM = 'referral-program';
