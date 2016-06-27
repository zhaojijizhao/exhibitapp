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
					'click #signClient':'signClient',
					'click #signVendor':'signVendor'
				},
				render:function(){
				},
				signClient:function(e){
					e.preventDefault();
					var data ={
						user:{
							name:this.$el.find("#clientName").val(),
							cell:this.$el.find("#clientCell").val(),
							psw:this.$el.find("#clientPsw").val()							
						}
					};
					$.ajax({
						url: Helper.requestUrl + "clientuser",
						type: "post",
						data: data,
						dataType:'json',
						success:function(data){
							alert("注册成功");
							location.href = "../mobile/first-login.html"
						},
						error:function(){
							alert("注册失败");
						}
					});
				},
				signVendor:function(e){
					e.preventDefault();
					var data ={
						user:{
							name:this.$el.find("#vendorName").val(),
							cell:this.$el.find("#vendorCell").val(),
							psw:this.$el.find("#vendorPsw").val()							
						}
					};
					$.ajax({
						url: Helper.requestUrl + "vendoruser",
						type: "post",
						data: data,
						dataType:'json',
						success:function(data){
							alert("注册成功");
							location.href = "../mobile/first-login.html"
						},
						error:function(){
							alert("注册失败");
						}
					});
				}
			});
			var page = new view();
			page.render();
	});
});