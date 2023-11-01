require('dotenv').config();

const API_KEY = process.env.API_KEY;

const send_sms = (number, text) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "api_key": API_KEY,
        "senderid": "8809617613432",
        "number": number,
        "message": text,
    })

    console.log(raw, 'raw')

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch("http://bulksmsbd.net/api/smsapi", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
}

module.exports = {
    send_sms
}