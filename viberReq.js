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
  "data": "{ \r\n\"url\": \"https://maveer695.github.io/hello-world/viberStuff.html\", \r\n\"event_types\": [\"delivered\", \"seen\", \"failed\", \"subscribed\", \"unsubscribed\", \"conversation_started\"] \r\n}"
}

$.ajax(settings).done(function (response) {
  console.log(response);
});
