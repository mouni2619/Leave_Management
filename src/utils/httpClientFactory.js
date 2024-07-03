// Utils
import AuthUtils from './authUtils';

// Http Client
import HttpClient from './httpClient';

//
// Factory Implementation of HttpClient
// ----------------------------------------------------------------------------
class HttpClientFactory {
  // Properties
  httpClient = false;

  // Methods
  // --------------------------------------------------------------------------

  // Singleton Pattern --------------------------------------------------------

  // reset
  reset = () => {
    this.httpClient = false;
  };

  /**
   * Refreshes the HttpClient Instance (creates a new one) with the authToken that is read from the Local Storage.
   */
  reload = () => {
    // Auth Token
    const authToken = AuthUtils.getToken();

    // Update the HTTP Client Instance
    this.httpClient = new HttpClient(authToken);
  };

  /**
   * Get the Singleton instance of the HttpClient object. The AuthToken for this loaded via the #reload() method.
   *
   * @returns HttpClient instance
   */
  getInstance = () => {
    // Check if HttpClient object is instantiated
    if (!this.httpClient) {
      this.reload();
    }

    return this.httpClient;
  };

  // New Instance Pattern -----------------------------------------------------
  /**
   * Creates a new HttpClient instance with the passed authToken.
   *
   * @param {*} authToken User given AuthToken String
   * @returns HttpClient instance
   */
  newInstance = (authToken) => {
    // Http Client
    const httpClient = new HttpClient(authToken);
    return httpClient;
  };
}

// Create an Instance (Singleton)
const HttpInstance = new HttpClientFactory();

// Default Export
export default HttpInstance;
