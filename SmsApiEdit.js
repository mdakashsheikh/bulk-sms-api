require('dotenv').config();

const API_KEY = process.env.API_KEY;

const send_sms = async (number, text) => {
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

    const response = await fetch("http://bulksmsbd.net/api/smsapi", requestOptions)
    const data = await response.json()
    return data;
}

module.exports = {
    send_sms
}