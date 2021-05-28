import axios from 'axios';
import { Auth } from 'aws-amplify'

function getToken() {
    return Auth.currentSession()
      .then(session => session)
      .catch(err => console.log(err));
  }

  getToken().then(userToken => console.log(userToken));

const bmApi = axios.create({
    baseURL: 'https://ovxslxadt5.execute-api.us-east-1.amazonaws.com/dev/'
});

export default bmApi;