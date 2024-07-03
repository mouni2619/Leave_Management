// App Client
import HttpClientFactory from '../../utils/httpClientFactory';

//Urls
import { loginUrl } from '../../urls/api-urls/authUrls';

// Constants
import { HttpContentTypes } from '../../constants/httpConstants';

// Login
async function login(username, password) {
  const bodyFormData = new FormData();
  bodyFormData.set('username', username);
  bodyFormData.set('password', password);

  const httpClient = HttpClientFactory.getInstance();
  return httpClient.post(
    loginUrl,
    {},
    bodyFormData,
    HttpContentTypes.APP_FORM_URL_ENCODED,
  );
}

const LoginService = {
  login,
};

export default LoginService;
