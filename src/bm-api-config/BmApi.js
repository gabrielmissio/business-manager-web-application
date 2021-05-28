import axios from 'axios';
import { Auth } from 'aws-amplify'

function getToken() {
    return Auth.currentSession()
      .then(session => session)
      .catch(err => console.log(err));
  }

  getToken().then(userToken => console.log(userToken));

const bmApi = axios.create({
    baseURL: 'https://ovxslxadt5.execute-api.us-east-1.amazonaws.com/dev/',
    headers: { 
        'accept': 'application/json', 
        'authorization': 'Bearer eyJraWQiOiJtVkpiNml5SzF3NWtcL1wvaVk0YjI3S1ZRam5JQzg3bHVaUExxSVwvQ3BOQmZjPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiI2ZTg2N2JlNy1hNTAxLTQxOWQtOGZlNi01YjA1Y2EyNjM2NjMiLCJldmVudF9pZCI6IjExYzFlZjk0LWJjZTQtNGIwOS1hNDQ4LWVmNWE5ZGNiM2ViZSIsInRva2VuX3VzZSI6ImFjY2VzcyIsInNjb3BlIjoiYXdzLmNvZ25pdG8uc2lnbmluLnVzZXIuYWRtaW4iLCJhdXRoX3RpbWUiOjE2MjIyMDg2NzQsImlzcyI6Imh0dHBzOlwvXC9jb2duaXRvLWlkcC51cy1lYXN0LTEuYW1hem9uYXdzLmNvbVwvdXMtZWFzdC0xX0dZZXlrdDNVcCIsImV4cCI6MTYyMjIxMjI3NCwiaWF0IjoxNjIyMjA4Njc0LCJqdGkiOiJmZmM5NDg0OS1lOTI1LTQ3NmUtODcwZS1hNWZjZGUxYjUwNjAiLCJjbGllbnRfaWQiOiIxb3U3bTg0MDIwbmZsZzUzMDVoczdlaDBsbSIsInVzZXJuYW1lIjoiZ21pc3NpbyJ9.ghO_GEvNjdg2cGkBvCsFIDsJfQXeFnwSu8SGqbT5mFcjZP2A5_HZOzAdZgyM4eSj4CO0YL0pMbQLGMx9MxBFp-NHLWwi4p4Yb5gFx15RkHNRlCguTS9c15RU87jGwsqyX8sb3ehZAvlbwojMqtwby13AtQiEyruThZbVts5C5EBr_J4jpNh1lveHZ_vYA44BtWN9K8kvrYyMPdBWVL1EcX36NQIvMWhl3Xu18j4zu560F_8o8x7PtOGfGDeNGNXvrfQWS9nmM8HFrPUQKRQ5tlf0RNDN5EubTIPrfMoB6zNapLbG-8s8Kz4842jgStpT6EGVJGl8jbBY5OfHYNXb8Q', 
        'measurement-time': '156000', 
        'pagination': 'False', 
        'status': 'all', 
        'hospital-id': '47', 
        'Content-Type': 'application/json'
    },
});

export default bmApi;