/**
 * index.js
 * - All our useful JS goes here, awesome!
 */
var submitBtn=$('#txtsendbtn');
$('#txtsendform').submit(function(){
	submitBtn.click();
});
submitBtn.on('click',function(){
  //$('#answerpane').html($('#txtsendbox').val());
  var inputText=$('#txtsendbox').val();
  $('#answerpane').hide();
  $.ajax({
	  type: "POST",
	  url: "/add",
	  data: {userText:inputText},
	  success: function(data){
			SendMessage(data);
	  },
	  error: function(error){
		  SendMessage(error);
	  }
	  
  });
});
function SendMessage(userText){
	$('#answerpane').html(userText);
	$('#answerpane').show();
}