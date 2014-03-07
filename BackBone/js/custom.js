loadActivity = function(){
	var myaccount
	
	alert("determining activity to be loaded");
	require(["myaccountmodule"],function(obj){
		myaccount = new obj.MyAccountModel();
	});
	myaccount.renderingFunction();
	
}
loadActivity()