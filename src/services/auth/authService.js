// App Client
import HttpClientFactory from '../../utils/httpClientFactory';

//Urls
import { AuthUrls } from '../../constants/serviceUrls';

async function login(username, password) {
  const params = { username, password };

  const httpClient = HttpClientFactory.getInstance();
  return httpClient.post(AuthUrls.login, params);
}

const AuthService = {
  login,
};

export default AuthService;
