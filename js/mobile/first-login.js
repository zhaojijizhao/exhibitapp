require(['../../js/public/base.js'],function(Base){
	Base.setRequirejs();
	require(['jquery','underscore','backbone','helper'],
		function($,_,Backbone,Helper){
			var view = Backbone.View.extend({
				initialize:function(){
					$("#slideout").on('click',function(){
						$(".rbnav").addClass("on");
					});
					$("#slidein").on('click',function(){
						$(".rbnav").removeClass("on");
					});
					$(".pop-first").on('click', function(event) {
						$(this).addClass('hide');
					});
					$(".pop-first .skip").on('click', function(event){
						localStorage.setItem('FIRSTTIME',true);
						location.href = './index.html';
					});
				},
				el:$("#main"),
				events:{
					'click #loginClient':'loginClient',
					'click #loginVendor':'loginVendor'
				},
				render:function(){
				},
				loginClient:function(e){
					e.preventDefault();
					var data ={
						user:{
							name:this.$el.find("#clientName").val(),
							psw:this.$el.find("#clientPsw").val()
						}
					};
					$.ajax({
						url: Helper.requestUrl + "clientlogin",
						type: "post",
						data: data,
						dataType:"json",
						success:function(data){
							alert("登录成功");
							Helper.setlogin(data[0]);
							localStorage.setItem('FIRSTTIME',true);
							location.href = "../mobile/index.html";
						},
						error:function(){
							alert("登录失败");
						}
					});
				},
				loginVendor:function(e){
					e.preventDefault();
					var data ={
						user:{
							name:this.$el.find("#vendorName").val(),
							psw:this.$el.find("#vendorPsw").val()
						}
					};
					$.ajax({
						url: Helper.requestUrl + "vendorlogin",
						type: "post",
						data: data,
						dataType:"json",
						success:function(data){
							alert("登录成功");
							Helper.setlogin(data[0]);
							localStorage.setItem('FIRSTTIME',true);
							location.href = "../mobile/index.html";
						},
						error:function(){
							alert("登录失败");
						}
					});
				}
				
			});
			var page = new view();
			page.render();
	});
});