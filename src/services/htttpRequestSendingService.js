import axios from 'axios';

export function sendGetRequest(url, processResponse, processError) {
    axios({
        method: 'get',
        url: url
    })
    .then(response => {
        processResponse(response);
    })
    .catch(error => {
        processError(error);
    });
}