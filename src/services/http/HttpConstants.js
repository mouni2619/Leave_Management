//
// Constants
// ----------------------------------------------------------------------------

// Http :: Method
export const MethodType = {
  // Crud
  GET: "GET",
  POST: "POST",
  PUT: "PUT",
  DELETE: "DELETE",

  // Others
  OPTIONS: "OPTIONS",
};

// Http :: Headers
export const Header = {
  // Auth
  Authorization: "Authorization",

  // Content
  Accept: "Accept",
  ContentType: "Content-Type",
};

// Http :: Content-Type
export const ContentType = {
  APP_JSON: "application/json",

  // Form
  APP_FORM_URL_ENCODED: "application/x-www-form-urlencoded",
  APP_FORM_DATA: "application/form-data",

  // Form :: Multipart
  MULTIPART_FORM_DATA: "multipart/form-data",
};
