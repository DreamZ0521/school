$(function() {
	/*
	layui.use('form', function(){
		var form = layui.form;
        form.on('submit(login)', function(data){
			// alert(888)
            layer.msg(JSON.stringify(data.field),function(){
				location.href='index.html'
			});
			return false;
		
		});
    });
	*/
   
   $("#loginBtn").click(function(){
	   
	   //获取用户名和密码框的内容
	   var username = $("#username").val();
	   var password = $("#password").val();
	   var flag = true;
	   if(username==""){
		   $("#username").css("borderColor","red");
		   flag = false;
	   }
	   if(password==""){
		   $("#password").css("borderColor","red");
		   flag = false;
	   }
	   
	   if(flag==true){
		   location.href = "index.html";
	   }
   });
   
})