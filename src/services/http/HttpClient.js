import axios from "axios";

// Constants
import { ContentType, Header, MethodType } from "./HttpConstants";

//
// Private Utilities
// ----------------------------------------------------------------------------
function serializeParams(params) {
  let options = "";
  for (const key in params) {
    if (typeof params[key] !== "object" && params[key]) {
      options += `${key}=${params[key]}&`;
    } else if (typeof params[key] === "object" && params[key] && params[key].length) {
      params[key].forEach((el) => (options += `${key}=${el}&`));
    }
  }
  return options ? options.slice(0, -1) : options;
}

//
// HttpClient
// ----------------------------------------------------------------------------
class HttpClient {
  // Properties
  authToken = false;

  // Constructor
  constructor(authToken) {
    // init
    this.authToken = authToken;
  }

  // Methods :: GET
  get = async (url, params = {}, contentType = ContentType.APP_JSON) => {
    // headers
    const headers = {
      [Header.Authorization]: this.authToken ? "Bearer " + this.authToken : "",
      [Header.Accept]: ContentType.APP_JSON,
      [Header.ContentType]: contentType,
    };

    // invoke axios
    const response = await axios({
      method: MethodType.GET,
      url,
      params,
      headers,
      paramsSerializer: serializeParams,
    });

    return response.data;
  };

  // Method :: POST
  post = async (url, params = {}, data = {}, contentType = ContentType.APP_JSON) => {
    // headers
    const headers = {
      [Header.Authorization]: this.authToken ? "Bearer " + this.authToken : "",
      [Header.Accept]: ContentType.APP_JSON,
      [Header.ContentType]: contentType,
    };

    // invoke axios
    const response = await axios({
      method: MethodType.POST,
      url,
      params,
      data,
      headers,
    });

    return response.data;
  };

  // Methods :: PUT
  put = async (url, params = {}, data = {}, contentType = ContentType.APP_JSON) => {
    // headers
    const headers = {
      [Header.Authorization]: this.authToken ? "Bearer " + this.authToken : "",
      [Header.Accept]: ContentType.APP_JSON,
      [Header.ContentType]: contentType,
    };

    // invoke axios
    const response = await axios({
      method: MethodType.PUT,
      url,
      params,
      data,
      headers,
    });

    return response.data;
  };

  // Methods :: DELETE
  delete = async (url, params = {}, data = {}, contentType = ContentType.APP_JSON) => {
    // headers
    const headers = {
      [Header.Authorization]: this.authToken ? "Bearer " + this.authToken : "",
      [Header.Accept]: ContentType.APP_JSON,
      [Header.ContentType]: contentType,
    };

    // invoke axios
    const response = await axios({
      method: MethodType.DELETE,
      url,
      params,
      data,
      headers,
    });

    return response.data;
  };

  // Methods :: DOWNLOAD FILE
  downloadFile = async (url, params = {}, headers = {}, responseType = "blob") => {
    // headers
    const reqHeaders = {
      ...headers,
      [Header.Authorization]: this.authToken ? "Bearer " + this.authToken : "",
    };

    // invoke axios
    const response = await axios({
      url,
      method: MethodType.GET,
      params,
      reqHeaders,
      responseType,
    });

    return response.data;
  };
}

export default HttpClient;
