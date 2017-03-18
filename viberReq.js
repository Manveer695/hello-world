
 var url = "https://chatapi.viber.com/pa/set_webhook?callback=?";
                    
  var events = [];
  function fn(json){
    console.log(json);
  }
    
    $.ajax({
    url : url ,
    dataType : "jsonp",
    type : 'POST',
    jsonpCallback: 'fn',
    headers: {
    	'X-Viber-Auth-Token': '45a53f0fcb325002-41552d1f93cd0d0f-1a8d7fa78758d158'
    },
    data : {  
    "url": "https://my.host.com",
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
