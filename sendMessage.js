/*
* To send a message to the user subscribed to Susi assistant public account on Viber.
* Author: Manveer Singh
*/
var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://chatapi.viber.com/pa/send_message",
  "method": "POST",
  "headers": {
    "x-viber-auth-token": "45a53f0fcb325002-41552d1f93cd0d0f-1a8d7fa78758d158",
    "content-type": "application/json",
    "cache-control": "no-cache"
  },
   "data": "{\r\n    \"receiver\": \"0JzJAjLh7wGDPJwDobRhwg==\",\r\n    \"min_api_version\": 1,\r\n    \"sender\": {\r\n        \"name\": \"Manveer Singh\",\r\n        \"avatar\": \"https://media-direct.cdn.viber.com/download_photo?dlid=P1ijuwJQMssPP6VFvfpqP5UDFH2SMBvrx-KNdyCT7ZipzS5y4aX1J4C9y5Vl9Tyc8-NVi3oyB_8DFJLgq0t8m_4mCLJ-y_eoMqLb38qailhpV7Nv-IqtNyEpivXz4LZE4G-Rjg&fltp=jpg&imsz=0000\"\r\n    },\r\n    \"tracking_data\": \"tracking data\",\r\n    \"type\": \"text\",\r\n    \"text\": \"I am contributing to Fossasia\"\r\n}"
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
