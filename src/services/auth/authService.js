// App Client
import HttpClientFactory from '../../utils/httpClientFactory';

//Urls
import { AuthUrls } from '../../constants/serviceUrls';

// Constants
import { HttpContentTypes } from '../../constants/httpConstants';

// Login
async function login(username, password) {
  const bodyFormData = new FormData();
  bodyFormData.set('username', username);
  bodyFormData.set('password', password);

  const httpClient = HttpClientFactory.getInstance();
  return httpClient.post(
    AuthUrls.login,
    {},
    bodyFormData,
    HttpContentTypes.APP_FORM_URL_ENCODED,
  );
}

const AuthService = {
  login,
};

export default AuthService;
