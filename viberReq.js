
 
  var url = "https://anyorigin.com/go?url="+ encodeURIComponent('https://chatapi.viber.com/pa/set_webhook')  + '&callback=?';
                    
  var events = [];
  function fn(json){
    console.log(json);
  }
    
    $.ajax({
    url : url ,
    dataType : "json",
    type : 'POST',
    jsonpCallback: 'fn',
    data : {  
     "url": "https://manveer695.github.io/hello-world/viberStuff.html",
     "event_types": ["delivered", "seen", "failed", "subscribed", "unsubscribed", "conversation_started"]  
    },
    beforeSend: function(request) {
        request.setRequestHeader('X-Viber-Auth-Token', '45a53f0fcb325002-41552d1f93cd0d0f-1a8d7fa78758d158');
    },
    success : function (data) {
      console.log(data);
    },
    error : function (data, errorThrown) {
      //console.log(data);
      alert(errorThrown);
    }
});
