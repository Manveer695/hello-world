
  var url = "https://chatapi.viber.com/pa/set_webhook";
                    
  var events = [];
    
    $.ajax({
    url : url ,
    dataType : "jsonp",
    type : 'POST',
    data : {  
      "url": "https://my.host.com",
      'X-Viber-Auth-Token': '45a53f0fcb325002-41552d1f93cd0d0f-1a8d7fa78758d158',
      "event_types": ["delivered", "seen", "failed", "subscribed", "unsubscribed", "conversation_started"]  
    },
    
    success : function (data) {
      //console.log(data);
    },
    error : function (data, errorThrown) {
      //console.log(data);
      alert(errorThrown);
    }
});
