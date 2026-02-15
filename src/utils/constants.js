export const constants = {
  EMAIL_IS_REQUIRED: "Email is required!",
  ENTER_VALID_EMAIL: "Please enter a valid email",
  PASSWORD_IS_REQUIRED: "Password is required!",
  CONFIRM_PASSWORD_IS_REQUIRED: "Confirm password is required!",
  CONFIRM_PASSWORD_NOT_MATCHED: "Password and confirm password does not match!",
  AGREEMENT_ERROR: "Please agree to our terms and conditions!",
  ARE_YOU_SURE_TO_SAVE: "Are you sure you want to save",
  ARE_YOU_SURE_CHANGE_THE_DATA_OF_USER:
    "Are you sure you want to change the data of user",
};

export const regexConstants = {
  VALID_EMAIL_REGEX: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
};
const env = process.env.REACT_APP_ENVIRONMENT;
// const env = "uat";
const baseUrls = {
  DEV_API_BASE_URL: process.env.REACT_APP_DEV_API_BASE_URL,
  UAT_API_BASE_URL: process.env.REACT_APP_UAT_API_BASE_URL,
  PROD_API_BASE_URL: process.env.REACT_APP_PROD_API_BASE_URL,
  DEV_SOCKET_BASE_URL: process.env.REACT_APP_DEV_SOCKET_BASE_URL,
  UAT_SOCKET_BASE_URL: process.env.REACT_APP_UAT_SOCKET_BASE_URL,
  PROD_SOCKET_BASE_URL: process.env.REACT_APP_PROD_SOCKET_BASE_URL,
  DEV_MYDKSCORE_BASE_URL: process.env.REACT_APP_DEV_MYDKSCORE_BASE_URL,
  UAT_MYDKSCORE_BASE_URL: process.env.REACT_APP_UAT_MYDKSCORE_BASE_URL,
  PROD_MYDKSCORE_BASE_URL: process.env.REACT_APP_PROD_MYDKSCORE_BASE_URL,
  DEV_DKSCORE_BASE_URL: process.env.REACT_APP_DEV_DKSCORE_BASE_URL,
  UAT_DKSCORE_BASE_URL: process.env.REACT_APP_UAT_DKSCORE_BASE_URL,
  PROD_DKSCORE_BASE_URL: process.env.REACT_APP_PROD_DKSCORE_BASE_URL,
};

const mydkscoreBaseUrl =
  env === "dev"
    ? baseUrls?.DEV_MYDKSCORE_BASE_URL
    : env === "uat"
    ? baseUrls?.UAT_MYDKSCORE_BASE_URL
    : baseUrls?.PROD_MYDKSCORE_BASE_URL;

const dkscoreBaseUrl =
  env === "dev"
    ? baseUrls?.DEV_DKSCORE_BASE_URL
    : env === "uat"
    ? baseUrls?.UAT_DKSCORE_BASE_URL
    : baseUrls?.PROD_DKSCORE_BASE_URL;

const websiteBaseUrl =
  env === "dev"
    ? baseUrls?.DEV_API_BASE_URL
    : env === "uat"
    ? baseUrls?.UAT_API_BASE_URL
    : baseUrls?.PROD_API_BASE_URL;

const socketBaseUrl =
  env === "dev"
    ? baseUrls?.DEV_SOCKET_BASE_URL
    : env === "uat"
    ? baseUrls?.UAT_SOCKET_BASE_URL
    : baseUrls?.PROD_SOCKET_BASE_URL;

const apiBaseUrl =
  env === "dev"
    ? process.env.REACT_APP_DEV_API_BASE_URL
    : // : process.env.REACT_APP_ENVIRONMENT === "uat"
    env === "uat"
    ? process.env.REACT_APP_UAT_API_BASE_URL
    : process.env.REACT_APP_PROD_API_BASE_URL;

export const supportSlug =
  env === "dev"
    ? 'dkscore-support-41095'
    : env === "uat"
    ? 'dkscore-support-40995'
    : 'dkscore-support-40995';
export const supportName =
  env === "dev"
    ? 'DKSCORE SUPPORT'
    : env === "uat"
    ? 'DKSCORE Support'
    : 'DKSCORE Support';

export const config = {
  env: env,
  agoraAppKey: process.env.REACT_APP_AGORA_APP_KEY,
  MYDKSCORE_BASE_URL: mydkscoreBaseUrl,
  DKSCORE_BASE_URL: dkscoreBaseUrl,
  BASE_URL: websiteBaseUrl,
  SOCKET_BASE_URL: socketBaseUrl,
  OLD_AMAZON_IMAGE_URL: "https://dkscore.s3.ap-southeast-1.amazonaws.com/",
  ARE_YOU_SURE_CHANGE_THE_STATUS_OF_PLAN:
    "Are you sure you want to change the status of plan",
  AMAZON_IMAGE_URL: process.env.REACT_APP_AMAZON_IMAGE_URL,
  ARE_YOU_SURE_YOU_WANT_TO_DISCARD_VIDEO:
    "Are you sure, you want to discard video create?",
  ARE_YOU_SURE_YOU_WANT_TO_DISCARD_WEBINAR:
    "Are you sure, you want to discard webinar create?",
  AMAZON_ASSET_PUBLIC_URL: process.env.REACT_APP_AMAZON_ASSETS_URL,
  ENVIRONMENT: process.env.REACT_APP_ENVIRONMENT,
  GOOGLE_CLIENT_ID_CALENDER: process.env.REACT_APP_GOOGLE_CLIENT_ID_CALENDAR,
  API_BASE_URL: apiBaseUrl,
  WEBSITE_URL:
    // process.env.REACT_APP_ENVIRONMENT === "uat"
    env === "uat"
      ? process.env.REACT_APP_UAT_DKSCORE_BASE_URL
      : // : process.env.REACT_APP_ENVIRONMENT === "dev"
      env === "dev"
      ? process.env.REACT_APP_DEV_DKSCORE_BASE_URL
      : // : process.env.REACT_APP_ENVIRONMENT === "prodIp"
      env === "prodIp"
      ? process.env.REACT_APP_PRODUCTION_IP
      : process.env.REACT_APP_PROD_DKSCORE_BASE_URL,
  DEV_API_BASE_URL: process.env.REACT_APP_DEV_API_BASE_URL,
  UAT_API_BASE_URL: process.env.REACT_APP_UAT_API_BASE_URL,
  PROD_API_BASE_URL: process.env.REACT_APP_PROD_API_BASE_URL,
  DEV_SOCKET_BASE_URL: process.env.REACT_APP_DEV_SOCKET_BASE_URL,
  UAT_SOCKET_BASE_URL: process.env.REACT_APP_UAT_SOCKET_BASE_URL,
  PROD_SOCKET_BASE_URL: process.env.REACT_APP_PROD_SOCKET_BASE_URL,
  DEV_MYDKSCORE_BASE_URL: process.env.REACT_APP_DEV_MYDKSCORE_BASE_URL,
  UAT_MYDKSCORE_BASE_URL: process.env.REACT_APP_UAT_MYDKSCORE_BASE_URL,
  PROD_MYDKSCORE_BASE_URL: process.env.REACT_APP_PROD_MYDKSCORE_BASE_URL,
  DEV_DKSCORE_BASE_URL: process.env.REACT_APP_DEV_DKSCORE_BASE_URL,
  UAT_DKSCORE_BASE_URL: process.env.REACT_APP_UAT_DKSCORE_BASE_URL,
  PROD_DKSCORE_BASE_URL: process.env.REACT_APP_PROD_DKSCORE_BASE_URL,
  LOGIN_JWT_SECRET_KEY: process.env.REACT_APP_LOGIN_JWT_SECRET_KEY,
  RECAPTCHA_KEY: process.env.REACT_APP_RECAPTCHA_KEY,
  TINY_API_KEY: process.env.REACT_APP_TINY_API_KEY,
  YOUTUBE_EXTRACT_THUMB_KEY: process.env.REACT_APP_YOUTUBE_EXTRACT_THUMB_KEY,
  AGORA_APP_ID: process.env.REACT_APP_AGORA_APP_ID,
  OTP_NOT_MATCHED: "Opt is not matching. Please fill correct Otp",

  DEFAULT_AWARD_IMAGE:
    "https://dkscore.s3.ap-southeast-1.amazonaws.com/src-assets/images/avatars/awarddef.jpg",
  DEFAULT_BOOK_IMAGE:
    "https://dkscore.s3.ap-southeast-1.amazonaws.com/src-assets/images/avatars/bookdefault.jpg",
  DEFAULT_ARTICLE_IMAGE:
    "https://dkscore.s3.ap-southeast-1.amazonaws.com/src-assets/images/avatars/articledefaultimg.jpg",
  DEFAULT_PUBLICATION_ARTICLE_MEDIUM_IMAGE:
    "https://dkscore.s3.ap-southeast-1.amazonaws.com/src-assets/images/avatars/userdefault2.jpg",
  DEFAULT_FORGET_PASSWORD_IMAGE:
    "https://dkscore.s3.ap-southeast-1.amazonaws.com/src-assets/images/circlecurve3.png",

  ASTRO_GUEST: `https://dkscore.s3.ap-southeast-1.amazonaws.com/dkscoreweb/astroguest.jpg`,
  USER_DEFAULT_IMAGE:
    "https://dkscore.b-cdn.net/src-assets/images/avatars/userdefault.jpg",
  SUPPORT_TEAM_PROFILE:
    "https://dkscore.b-cdn.net/avatar/dkscore-support-dkscore_1758027121596.png",
  USER_VISITED_PAGE_DETAILS: "user_visited_page_details",
  REFERRAL_CODE: "referrral_code",
  //  ************** FCM CREDENTIALS **************

  FCM_API_KEY: process.env.REACT_APP_FCM_API_KEY,
  FCM_AUTH_DOMAIN: process.env.REACT_APP_FCM_AUTH_DOMAIN,
  FCM_PROJECT_ID: process.env.REACT_APP_FCM_PROJECT_ID,
  FCM_STORAGE_BUCKET: process.env.REACT_APP_FCM_STORAGE_BUCKET,
  FCM_MESSAGEING_SENDER_ID: process.env.REACT_APP_FCM_MESSAGEING_SENDER_ID,
  FCM_APP_ID: process.env.REACT_APP_FCM_APP_ID,
  FCM_MEASUREMENT_ID: process.env.REACT_APP_FCM_MEASUREMENT_ID,
  FCM_VAP_ID_KEY: process.env.REACT_APP_FCM_VAP_ID_KEY,

  //   *********************** PAYMENT GATEWAY KEYS *************************

  STRIPE_TEST_PUBLIC_KEY: process.env.REACT_APP_STRIPE_TEST_PUBLIC_KEY,
  STRIPE_LIVE_PUBLIC_KEY: process.env.REACT_APP_STRIPE_LIVE_PUBLIC_KEY,
  RAZORPAY_KEY:
    env === "dev"
      ? process.env.REACT_APP_RAZORPAY_TEST_KEY
      : process.env.REACT_APP_RAZORPAY_LIVE_KEY,

  //  ************** image-media urls **************

  OLD_AMAZON_ASSET_URL:
    "https://dkscore.s3.ap-southeast-1.amazonaws.com/src-assets/publicimages/",
  AMAZON_ASSETS_URL: "https://dkscore.b-cdn.net/src-assets/images/",
  PUBLIC_ASSET_URL: "https://dkscore.b-cdn.net/src-assets/publicimages/",
  USER_IMAGE_URL: "https://dkscore.b-cdn.net/",
  MEDIA_UPDATED_SUCCESSFULLY: "Media update successfully",
  USER_ADDED_SUCCESSFULLY: "User added successfully",
  USER_UPDATE_SUCCESSFULLY: "User updated successfully",
  MEDIA_DELETE_SUCCESSFULLY: "Media deleted successfully",
  FAILED_TO_UPDATE_MEDIA: "Failed to update media",
  SAVED_SUCCESSFULL: "Changes saved successfully",

  //  ************** UPDATE SUB COUNT FIELD NAME **************
  UPDATE_KUNDALI_COUNT: "kundali_count",
  UPDATE_ARTICLE_WRITE_COUNT: "article_write_count",
  UPDATE_AI_SEARCH_COUNT: "ai_search",
  UPDATE_RESEARCH_COUNT: "research_count",
  UPDATE_ARTICLE_READ_COUNT: "article_read_count",
  UPDATE_TRANSIT_COUNT: "transit_search_count",
  UPDATE_MEDIA_COUNT: "media_count",
  UPDATE_MILAN_COUNT: "kundali_milan_count",
  UPDATE_MIGRATE_COUNT: "migrate_count",
  //  ************** POPUP HEADING **************
  ARE_YOU_SURE_TO_SAVE_WEBINAR: "Are you sure, you want to save webinar?",
  ARE_YOU_SURE: "Are you sure, you want to save changes?",
  ARE_YOU_SURE_TO_PLAN_CANCEL: "Are you sure, you want to cancel subscription?",
  DELETE_AWARD_CONFIRMATION: "Are you sure, you want to delete this award?",
  DELETE_BOOK_CONFIRMATION: "Are you sure, you want to delete this book?",
  DELETE_REVIEW_CONFIRMATION: "Are you sure, you want to delete this review?",
  IMAGE_REMOVE_CONFIRMATION: "Are you sure, you want to remove this image?",
  DELETE_ARTICLE_CONFIRMATION: "Are you sure, you want to delete this article?",
  CREATE_ARTICLE_FROM_YT: "Are you sure, you want to create article?",
  ARE_YOU_SURE_UPGRADE: "Are you sure, you want to upgrade your subscription?",
  ARE_YOU_SURE_DOWNGRADE:
    "Are you sure, you want to downgrade your subscription?",
  DATA_SAVED_SUCESSFULLY: "Data saved successfully",
  YOUR_APPOINTMENT_RESCHDULED_SUCCESSFULLY:
    "Your Appointment Reschduled Successfully",
  ARE_YOU_SURE_CHANGE_THE_STATUS_OF_USER:
    "Are you sure you want to change the status of user",
  ARE_YOU_SURE_TO_USER_SPFA:
    "Are you sure, you want to send profile for approval?",

  //  ************** TOAST MESSAGE **************
  NEW_RULE_CREATED_SUCESSFULLY: "New Rule Created Successfully",
  RULE_UPDATED_SUCESSFULLY: "Rule Updated Successfully",
  RULE_DELETED_SUCESSFULLY: "Rule Deleted Successfully",
  GROUP_ACCESS_UPDATED_SUCCESSFULLY: "Group Access Updated Successfully",
  PLAN_CANCEL: "Your plan canceled successfully",
  PLAN_UPGRADE: "Your plan upgraded successfully",
  COMMENT_DELETED: "Comment Deleted !",
  COMMENT_ADDED: "Comment added successfully",
  SOMETHING_WENT_WRONG: "Something went wrong",
  SOMETHING_WENT_WRONG_UPLOAD_IMAGE:
    "Something went wrong while uploading image",
  USER_STATUS_UPDATE_SUCESSFULLY: "User status updated sucessfully",
  SUBSCRIPTION_EXPIRED: "Your subscription is expired",
  NO_ARTICLE_READ_COUNT_LEFT: "You have no article read count credit left",
  NO_RESEARCH_COUNT_LEFT: "You have no research count credit left",
  NO_ARTICLE_WRITE_COUNT_LEFT: "You have no article write count credit left",
  NO_KUNDALI_MIGRATE_COUNT_LEFT: "You have no migrate count credit left",
  NO_KUNDALI_MILAN_COUNT_LEFT: "You have no kundali milan count credit left",
  NO_KUNDALI_COUNT_LEFT: "You have no kundali count credit left",
  NO_MEDIA_COUNT_LEFT: "You have no media count credit left",
  NO_TRANSIT_COUNT_LEFT: "You have no transit search count credit left",
  USER_DELETED_SUCCESS: "User deleted successfully",
  REVIEW_ADDED: "Review added successfully",
  AWARD_ADDED: "Award added successfully",
  AWARD_UPDATED: "Award updated successfully",
  BOOK_ADDED: "Book added successfully",
  BOOK_UPDATED: "Book updated successfully",
  EVENT_ADDED: "Event added successfully",
  EVENT_DELETED: "Event deleted successfully",
  PLEASE_ADD_NEW_TAGS: "Please add new tags",
  TAG_ADDED_SUCCESSFULLY: "Tag added successfully in list",
  TAG_DELETED_SUCESSFULLY: "Tag Deleted Successfully",
  REFER_SENT_SUCCESS: "Your invite sent Successfully",
  EVENT_UPDATED: "Event updated successfully",
  NOTE_ADDED: "Note added successfully",
  NOTE_UPDATED: "Note updated successfully",
  NOTE_DELETED: "Note deleted successfully",
  REVIEW_UPDATED: "Review updated successfully",
  YOU_STARTED_FOLLOWING: "You started following",
  YOU_UNFOLLOWED: "You Unfollowed",
  BOOKMARK_REMOVED: "Bookmark Removed!",
  BOOKMARK: "Article bookmarked",
  CUST_INFO_DETAILS: "Cust_Info_Details",
  PDF_RESEND_SUCCESSFULLY: "Pdf resend successfully",
  MATCH_MAKING_ANALYSIS_DELETED_SUCCESSFULLY:
    "Match making analysis deleted successfully",
  ARE_YOU_SURE_YOU_WANT_TO_DELETE_THIS_ANALYSIS_DATA:
    "Are you sure, you want to delete this analysis data?",
  ARE_YOU_SURE_TO_DELETE: "Are you sure, you want to delete this entry?",
  ARE_YOU_SURE_DELETE_EVENT: "Are you sure, you want to delete this event?",
  ARE_YOU_SURE_DELETE_MEDIA: "are you sure, you want to delete this media",
  ARE_YOU_SURE_TO_DELETE_USER: "Are you sure, you want to delete user?",
  ARE_YOU_SURE_DELETE_COMMENT: "Are you sure, you want to delete this comment?",
  ARE_YOU_SURE_DELETE_WEBINAR: "Are you sure, you want to delete this webinar?",
  USER_LOGIN_DETAILS: "User_Login_Details",
  KUNDALI_MILAN_COUNT: "kundali_milan_count",

  PAYMENT_SUCCESSFUL: `Payment successful`,
  TAG_SENT_SUCCESSFULL: "Tag send for approval successfully",
  PUBLICATION_SENT_SUCCESSFULL: "Publication send for approval successfully",
  ASTRO_AI_SEARCH: "astro_ai_search",
  AI_SEARCH_COUNT: "ai_search",
  PLEASE_ENTER_VALID_SEARCH: "Please enter valid search",
  PLEASE_ENTER_TERM_TO_SEARCH: "Please enter term to search",
  NOT_PERMISSION_THIS_SCREEN: "You have no permission to this screen.",
  ARTICLE_DELETED: "Article deleted successfully",
  ARTICLE_SAVED: "Article saved successfully",
  ARTICLE_UPDATED: "Article updated successfully",
  CUST_SEARCH_DETAILS: "Cust_Search_Details",
  CUST_SEARCH_DETAILS_PDF: "Cust_Search_Details_pdf",
  SUBSCRIPTION_STATUS_UPDATED_SUCCESFULLY:
    "Subscription status updated successfully",
  SUBSCRIPTION_UPDATED_SUCCESFULLY: "Subscription updated successfully",
  NEW_SUBSCRIPTION_PLAN_ADDED_SUCCESFULLY:
    "New subscription plan added successfully",
  YOU_HAVE_NO_AISEARCH_COUNT_CREDIT_LEFT:
    "You have no ai search count credit left",
  CONTENT_COPIED: "Content copied",
  SEL_SEARCH_CUSTOMER: "sel_search_customer",
  GPS_LOCATION_INFO: "Gps_Location_Info",
  CUST_SIGNS: "cust_signs",
  // **************************   DASHA DETAILS API FIELDS   ***********************
  VIMSOTRI_DATA: "01-Vimshotri Dasha",
  JAMINI_DATA: "02-Jamini Dasha",
  YOGINI_DATA: "03-Yogini Dasha",
  PATYANI_DATA: "04-Patyani Dasha",
  MUDDA_DATA: "05-Mudda Dasha",
  PERSONAL_INFO_PAGE: "personal_info",
  SKILL_EXPERTISE_PAGE: "skill_expertise",
  FEE_DETAILS_PAGE: "fee_details",
  BANK_DETAILS_PAGE: "bank_details",
  POLICY_PAGE: "policy",
  GREENTITLE: "Fortunate Times",
  AMBERTITLE: "Proceed with Caution",
  REDTITLE: "Challenging Times",
  EDIT_RULE_ID: "Edit_Rule",
  RULE_DATA: "Rule_Data",
  // **************************   PREFRENCES DATA   ***********************

  TYPE_INAPP_APPOINTMENT: "Appointment",
  TYPE_INAPP_JYOTISH_MEDIUM: "Jyotish Medium",
  TYPE_INAPP_BIRTHDAYS: "Birthdays",
  TYPE_INAPP_TRANSIT_MOVEMENT: "Transits Movements",
  TYPE_INAPP_TIMINGS_TODAY: "Timings for Today",
  TYPE_INAPP_BRAHMA_MUHURTA_TODAY: "Brahma Muhurat",
  TYPE_INAPP_ABHIJIT_MUHURTA_TODAY: "Abhijit Muhurat",
  TYPE_INAPP_RAHUKAAL_TODAY: "Rahukaal",
  TYPE_INAPP_HORA: "Hora",
  TYPE_INAPP_SOLAR_ECLIPSE: "Solar Eclipse",
  TYPE_INAPP_LUNAR_ECLIPSE: "Lunar Eclipse",
  TYPE_INAPP_FESTIVALS: "Festivals",
  TYPE_INAPP_FULLMOON: "full mooon",
  TYPE_INAPP_NEWMOON: "new moon",
  TYPE_INAPP_SUNRISE_SUNSET: "sunrise sunset",
  TYPE_PRIVATE_NOTIFICATIONS: "private notifications",
  TYPE_PUBLIC_NOTIFICATIONS: "public notifications",
  TYPE_PRIVATE_NOTIFICATIONS_COUNT: "private notifications count",
  TYPE_PUBLIC_NOTIFICATIONS_COUNT: "public notifications count",

  BIRTHDAY_DATA: "Birthday_data",
  PREFERENCE_DATA: "preference_data",
  HEADER_DKSCORE_SUBSCRIPTION: "DKScore Subscription",
  HEADER_APPOINTMENT: "Appointment",
  HEADER_JYOTISH_MEDIUM: "Jyotish Medium",
  HEADER_BIRTHDAYS: "Birthdays",
  HEADER_PAYMENTS: "Payments",
  HEADER_TRANSIT_MOVEMENT: "Transits Movements",
  HEADER_TIMINGS_TODAY: "Timings for Today",
  HEADER_BRAHMA_MUHURTA_TODAY: "Brahma Muhurat",
  HEADER_ABHIJIT_MUHURTA_TODAY: "Abhijit Muhurat",
  HEADER_RAHUKAAL_TODAY: "Rahukaal",
  HEADER_MEDIA_CENTER: "Media Center",
  HEADER_FESTIVALS: "Festivals",

  CDN_UPDATE_PREFERENCES: "Update Preferences",
  CDN_VIEW_TIMELINE: "View timeline",
  CDN_PLAY_MANTRA: "Play Mantra",
  CDN_SCHEDULED_CALL: "Scheduled a Call",
  CDN_CHANGE_SCHEDULED: "Change Scheduled",
  CDN_VIEW_APPOINTMENT: "View Appointment",
  CDN_VIEW_IMPACTED_PROFILES: "View Impacted Profiles",
  CDN_VIEW_TRANSITS: "View Transits",
  CDN_VIEW_MOON_TRANSIT: "View Moon Transits",
  CDN_VIEW_ALL: "View All",
  CDN_PLAY_NOW: "Play Now",
  CDN_UPGRADE_NOW: "Upgrade Now",
  CDN_READ_NOW: "Read Now",
  CDN_JOIN_CALL: "Join Call",
  CDN_BIRTHDAYS_WISHES: "Send Wishes",
  CDN_VIEW_PROFILE: "View Profile",
  CDN_VIEW_VIDEO: "View Video",
  CDN_VIEW_FESTIVAL: "View Festival",

  NOTIFICATION_TYPE_PROFILE: "View Profile",
  NOTIFICATION_TYPE_PREFERENCES: "Preferences",
  NOTIFICATION_TYPE_APPOINTMENTS: "Appointments",
  NOTIFICATION_TYPE_APPOINTMENT: "appointment",
  NOTIFICATION_TYPE_AUDIO: "Audio",
  NOTIFICATION_TYPE_VIDEO: "Video",
  NOTIFICATION_TYPE_SUBSCRIPTION_EXPIRE: "Subscription Expiry",
  NOTIFICATION_TYPE_YOTUBEVIDEO: "Youtube",
  NOTIFICATION_TYPE_FESTIVAL: "Festival",
  NOTIFICATION_TYPE_FOLLOWER: "Follower",
  NOTIFICATION_TYPE_TRANSIT: "Transits Movements",
  NOTIFICATION_TYPE_MOON_TRANSIT: "Moon Transit",
  NOTIFICATION_TYPE_BIRTHDAYS: "Birthdays",
  NOTIFICATION_TYPE_BIRTHDAY: "Birthday",
  NOTIFICATION_TYPE_ARTICLE: "Article",
  NOTIFICATION_TYPE_PASSWORD_CHANGE: "PasswordChange",
  NOTIFICATION_TYPE_ARTICLE_COMMENT: "ArticleComment",
  NOTIFICATION_TYPE_ARTICLE_LIKE: "ArticleLike",
  NOTIFICATION_TYPE_AUDIO_COMMENT: "AudioComment",
  NOTIFICATION_TYPE_VIDEO_COMMENT: "VideoComment",
  NOTIFICATION_TYPE_VIDEO_LIKE: "VideoLike",
  NOTIFICATION_TYPE_AUDIO_LIKE: "AudioLike",
  NOTIFICATION_TYPE_PUBLICATION: "Publication",
  NOTIFICATION_TYPE_YOUTUBE_LIKE: "YoutubeLike",
  NOTIFICATION_TYPE_YOUTUBE_COMMENT: "YoutubeComment",
  NOTIFICATION_TYPE_YOUTUBE_ARTICLE_ERROR: "ArticleError",
  NOTIFICATION_TYPE_CHANDRASHTAMA_DAYS: "Chandrashtama Days",
  NOTIFICATION_TYPE_USER: "User",
  NOTIFICATION_TYPE_REFER: "ReferralReward",
  NOTIFICATION_TYPE_FEEDBACK_REPLY: "FeedbackReply",
  NOTIFICATION_TYPE_YOUTUBE: "Youtube",
  ARE_YOU_SURE_CHANGE_THE_DATA_OF_USER:
    "Are you sure you want to change the data of user",

  LOGIN_TIME: "login_time",

  //  **************   statistical result  *************

  TYPE_LAGAN: "lagan",
  TYPE_PLANETHOUSE: "planethouse",
  TYPE_LAGANNAK: "lagannak",
  TYPE_PLANETNAK: "planetnak",
  TYPE_PLANET_POS: "planetpos",
  TYPE_LORD_POS: "lordpos",
  TYPE_PLANET_KARAK: "planetkarak",
  TYPE_LORD_SIGN: "lordsign",
  TYPE_LORD_NAK: "lordnak",
  TYPE_JAMINI_SIGN: "jaminisign",
  TYPE_JAMINI_NAK: "jamininak",
  TYPE_JAMINI_POS: "jaminipos",
  TYPE_JAMINI_PLANET: "jaminiplanet",
  TYPE_LAGAN_STRENGTH: "laganstrength",
  TYPE_LAGAN_NAK_STRENGTH: "lagannakstrength",
  TYPE_PLANET_STRENGTH: "planetstrength",
  TYPE_PLANET_NAK_STRENGTH: "planetnakstrength",
  TYPE_JAMINI_STRENGTH: "jaministrength",
  TYPE_JAMINI_NAK_STRENGTH: "jamininakstrength",
  TYPE_PLANET_DIGNITY: "planetdignity",
  TYPE_KARAK_DIGNITY: "karakdignity",

  //  **************   SCREEN ID  DON'T CHANGE THEM THEY ARE ALSO USING AS SCREEN_TYPE IN APPLICATION  *************

  Availability: "Availability",
  BankDetails: "BankDetails",
  AstrologerConsultationfee: "AstrologerConsultationfee",

  Personal: "Personal",
  AstrologerAgreement: "AstrologerAgreement",
  Preference: "Preference",
  UpcomingAppointment: "UpcomingAppointment",

  Skills: "Skills",
  AspectTable: "AspectTable",
  Article: "Article",

  BookAppointment: "BookAppointment",
  AstroConsole: "AstroConsole",
  AstroEarning: "AstroEarning",
  DKSCOREEarning: "DKSCOREEarning",
  CustomerAppointment: "CustomerAppointment",
  CurrentTransit: "CurrentTransit",
  CustomerDashboard: "CustomerDashboard",
  RuleList: "RuleList",

  ArticleDetails: "ArticleDetails",
  Horoscope: "Horoscope",
  AISearch: "AstroAISearch",
  TransitCalender: "TransitCalender",
  MoonCalender: "MoonCalender",
  NakshatraDetails: "NakshatraDetails",

  MuhratCalender: "MuhratCalender",
  DayCalender: "DayCalender",
  Chat: "Chat",
  ChatSupport: "ChatSupport",
  MyPrediction: "MyPrediction",
  // MoonCalender: "MoonCalender",
  Notifications: "Notifications",

  HousePlanetDetails: "HousePlanetDetails",
  Planet: "Planet",
  PlanetDetail: "PlanetDetail",
  PlanetContent: "PlanetContent",
  PLANET_DATA: "planet_data",
  PLANET_USER_DETAILS: "Planet_User_Details",

  TodayRead: "TodayRead",
  CustomerList: "CustomerList",
  AstroDataBank: "AstroDataBank",
  Dashboard: "Dashboard",
  Player: "Player",
  Recorder: "Recorder",

  Videos: "Videos",
  UploadAward: "UploadAward",
  MediaCenter: "MediaCenter",

  RunRules: "RunRules",
  RuleEngine: "RuleEngine",
  AdvancedAstroSearch: "AdvancedAstroSearch",

  EditVideos: "EditVideos",
  AwardList: "AwardList",
  AstrologerList: "AstrologerList",
  OnboardedCustomers: "OnboardedCustomers",
  UserList: "UserList",
  CustomerViewProfile: "CustomerViewProfile",
  Settings: "Settings",
  AddProfile: "AddProfile",
  AddUser: "AddUser",
  EditSubscription: "EditSubscription",
  Subscription: "Subcription",
  VideoRecord: "VideoRecord",
  AudioRecord: "AudioRecord",
  GroupAccess: "GroupAccess",
  EditTerms: "EditTerms",
  AddTag: "AddTag",
  MigrateCustomers: "MigrateCustomers",

  InputSkill: "InputSkill",

  EditProfile: "EditProfile",
  PersonalDetails: "PersonalDetails",
  EnterpriseAstro:"EnterpriseAstro",
  PDFviewer: "PDFviewer",
  OperationDashboard: "OperationDashboard",
  MundaneEffect: "MundaneEffect",
  ReferAFriend: "ReferAFriend",
  AstroStatistics: "AstroStatistics",
  SocialMedia: "SocialMedia",
  Numerology: "Numerology",
  ReportedAstrologers: "ReportedAstrologers",
  MundaneEvents: "MundaneEvents",
  AstroAnalytics: "AstroAnalytics",
  AstroChat: "AstroChat",
  ChaWithCustomer: "ChaWithCustomer",
  FAQ: "FAQ",
  ArticleMedium: "ArticleMedium",
  Comments: "Comments",
  MatchMaking: "MatchMaking",
  Webinar: "Webinar",
  CreateWebinar: "CreateWebinar",
  ImpactedProfile: "ImpactedProfile",
  QRYMaint: "QRYMaint",
  Eclipse: "Eclipse",
  Features: "Features",
  Festivals: "Festivals",
  Feedback: "Feedback",
  Notification: "Notification",
  AdminAppointment: "AdminAppointment",
  VIDEO_DETAILS_DATA_ITEM: "vedio_details_data_item",
  AUDIO_DETAILS_DATA_ITEM: "audio_details_data_item",
  DATA_UPDATED_SUCESSFULLY: "Your Data updated sucessfully",
  ARE_YOU_SURE_CANCEL_MEMBERSHIP: "Are you sure you want to cancel membership",
  PASSWORD_UPDATED_SUCCESFULLY: "Your password updated successfully",
  REPHRASE_CONTENT: "Please Rephrase first. ",

  //*****************************  PLANET CONTENT SUMMERIZE  *********************************

  CONTENT1: "CONTENT1",
  CONTENT2: "CONTENT2",
  CONTENT3: "CONTENT3",
  SUMMARY1LONG: "SUMMARY1LONG",
  SUMMARY1SHORT: "SUMMARY1SHORT",
  SUMMARY1VSHORT: "SUMMARY1VSHORT",
  SUMMARY2LONG: "SUMMARY2LONG",
  SUMMARY2SHORT: "SUMMARY2SHORT",
  SUMMARY2VSHORT: "SUMMARY2VSHORT",
  SUMMARY3LONG: "SUMMARY3LONG",
  SUMMARY3SHORT: "SUMMARY3SHORT",
  SUMMARY3VSHORT: "SUMMARY3VSHORT",

  // **************************   API STATUS MESSAGE   ***********************
  API_STATUS_SUCCESS: "success",
  API_STATUS_FAILURE: "fail",

  POLICY_DATA_TERMS: "policy_data_terms",
  POLICY_DATA_NDA: "policy_data_nda",
  POLICY_DATA_POLICY: "policy_data_policy",
  POLICY_DATA_PRICING: "policy_data_pricing",
  POLICY_DATA_CANCELLATION: "policy_data_cancellation",
  POLICY_DATA_TERMINATION: "policy_data_termination",
  POLICY_DATA_AGREEMENT: "policy_data_agreement",
  POLICY_DATA_POLICY_HTML: "policy_data_policy_html",
  ///////////today forecast///////////////////////

  GREENTITLE: "Fortunate Times",
  AMBERTITLE: "Proceed with Caution",
  REDTITLE: "Challenging Times",
  GREENDESC:
    "Today is an auspicious and favorable day according to Vedic astrology. Your efforts and decisions are likely to bring positive outcomes. Embrace opportunities and move forward with confidence, the universe is supporting you.",
  AMBERDESC:
    "Today's planetary positions indicate that it may be a day of mixed results. Proceed with caution and be mindful of the decisions you make. Stay positive and trust in the journey, success will follow.",
  REDDESC:
    "Today, astrological indications suggest that it may be a challenging day ahead. It's recommended to exercise caution and avoid making any important decisions or engaging in arguments. Focus on maintaining inner peace and balance.",

  ///////////social media url///////////////////////

  insta: "https://www.instagram.com/dkscoreai/",
  fb: "https://www.facebook.com/dkscoreai/",
  linkedin: "https://www.linkedin.com/company/dkscore/?viewAsMember=true",
  twitter: "https://x.com/i/flow/login?redirect_after_login=%2FDKSCOREAI",

  ALL: "All",
  PENDING: "Pending",
  APPROVED: "Approved",
  REJECTED: "Rejected",
  SUBMITTED: "Submitted",
  NEW: "New",
};

export const navigateUserAfterLogin = {
  1: "/customerdashboard",
  2: "/astrodashboard",
  3: "/customerdashboard",
  5: "/operationdashboard",
  8: "/customerdashboard",
};

export const screenIds = {
  AstroAISearch: "AAS04700",
  Availability: "AAA00700",
  BankDetails: "APB00400",
  AstrologerConsultationfee: "APF00300",
  // AstrologerConsultationfee: "APF00300" ,
  Personal: "APP00100",
  AstrologerAgreement: "APP00500",
  Preference: "APP00600",
  Skills: "APS00200",
  AspectTable: "CMA01700",
  Article: "CMA01800",

  BookAppointment: "CMB01000",
  AstroConsole: "AAC01000",
  AstroEarning: "AAR01000",
  DKSCOREEarning: "DKE01000",
  CustomerAppointment: "CMA02800",
  CurrentTransit: "CMC01200",
  CustomerDashboard: "CMD01100",

  ArticleDetails: "CMD01900",
  Horoscope: "CMH00701",
  NakshatraDetails: "CMN01400",

  HousePlanetDetails: "CMP01300",
  Planet: "CMP01500",
  PlanetDetail: "CMP01600",

  TodayRead: "CMT02000",
  CustomerList: "CML00900",
  AstroDataBank: "ADB05400",
  Dashboard: "APD00800",

  AwardList: "AAL03900",
  UploadAward: "AUA03600",
  MediaCenter: "AUV03700",
  Videos: "CMV02200",

  AstrologerList: "AAL04000",
  OnboardedCustomers: "OCL01000",
  UserList: "AUL04100",
  AddProfile: "AAP04200",

  GroupAccess: "AGA04300",
  EditTerms: "AET04400",
  EditVideos: "AEV03800",

  AddTag: "AAT04500",
  MigrateCustomers: "AFU04600",
  PlanetContent: "APC04700",

  Player: "AVP04800",
  Recorder: "AAR04900",
  RuleEngine: "ARL05000",

  RunRules: "ARR05100",
  Subcription: "ASM05200",
  AdvancedAstroSearch: "AAS05300",

  TransitCalender: "ATC05400",
  MuhratCalender: "CMC05500",
  DayCalender: "CDC05600",
  // Chat: "CAC05700", //DA sir told to remove
  AstroChat: "AAC04800",
  ChaWithCustomer: "ACC01000",
  MyPrediction: "CMP05800",
  ChatSupport: "ACS01000",
  MoonCalender: "CMC05900",
  Notifications: "CNS06000",

  UpcomingAppointment: "CMU03000",
  Festivals: "ADF05700",
  Features: "ADF05600",
  Eclipse: "ADE05500",

  QRYMaint: "AQM06300",
  ArticleMedium: "AAM06400",
  FAQ: "AFQ06200",
  OperationDashboard: "AOD06000",

  MundaneEffect: "AME06100",
  PDFviewer: "CPV06100",
  Notification: "ADN05900",
  Feedback: "ADF05800",
  ReferAFriend: "ARF04700",
  Comments: "AAC04900",
  MatchMaking: "AMM01000",
  Numerology: "ANR01000",
  ReportedAstrologers: "ARA01000",
  Webinar: "AWN01000",
  CreateWebinar: "ACW01000",
  ImpactedProfile: "AIP01000",
  AstroAnalytics: "AAN01000",
  AstroStatistics: "AST01000",
  SocialMedia: "ASM01000",
  MundaneEvents: "AME01000",
  AdminAppointment: "AAA01000",
  EnterpriseAstro:"EAA00100",
};

export const appointmentStatus = {
  created: "100",
};
