import axios from "axios";

// Constants
import { HttpContentTypes, HttpHeaders, HttpMethods } from "../../constants/HttpConstants";

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
  get = async (url, params = {}, contentType = HttpContentTypes.APP_JSON) => {
    // headers
    const headers = {
      [HttpHeaders.Authorization]: this.authToken ? "Bearer " + this.authToken : "",
      [HttpHeaders.Accept]: HttpContentTypes.APP_JSON,
      [HttpHeaders.ContentType]: contentType,
    };

    // invoke axios
    const response = await axios({
      method: HttpMethods.GET,
      url,
      params,
      headers,
      paramsSerializer: serializeParams,
    });

    return response.data;
  };

  // Method :: POST
  post = async (url, params = {}, data = {}, contentType = HttpContentTypes.APP_JSON) => {
    // headers
    const headers = {
      [HttpHeaders.Authorization]: this.authToken ? "Bearer " + this.authToken : "",
      [HttpHeaders.Accept]: HttpContentTypes.APP_JSON,
      [HttpHeaders.ContentType]: contentType,
    };

    // invoke axios
    const response = await axios({
      method: HttpMethods.POST,
      url,
      params,
      data,
      headers,
    });

    return response.data;
  };

  // Methods :: PUT
  put = async (url, params = {}, data = {}, contentType = HttpContentTypes.APP_JSON) => {
    // headers
    const headers = {
      [HttpHeaders.Authorization]: this.authToken ? "Bearer " + this.authToken : "",
      [HttpHeaders.Accept]: HttpContentTypes.APP_JSON,
      [HttpHeaders.ContentType]: contentType,
    };

    // invoke axios
    const response = await axios({
      method: HttpMethods.PUT,
      url,
      params,
      data,
      headers,
    });

    return response.data;
  };

  // Methods :: DELETE
  delete = async (url, params = {}, data = {}, contentType = HttpContentTypes.APP_JSON) => {
    // headers
    const headers = {
      [HttpHeaders.Authorization]: this.authToken ? "Bearer " + this.authToken : "",
      [HttpHeaders.Accept]: HttpContentTypes.APP_JSON,
      [HttpHeaders.ContentType]: contentType,
    };

    // invoke axios
    const response = await axios({
      method: HttpMethods.DELETE,
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
      [HttpHeaders.Authorization]: this.authToken ? "Bearer " + this.authToken : "",
    };

    // invoke axios
    const response = await axios({
      url,
      method: HttpMethods.GET,
      params,
      reqHeaders,
      responseType,
    });

    return response.data;
  };
}

/**
 * Default export
 */
export default HttpClient;
