require(['/js/public/base.js'],function(Base){
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
					})
					if(Helper.islogin()){
						this.user = Helper.getlogin();
						var temp = _.template(Helper.template.mobileLoginTemplate);
						$(".toplink").html(temp(this.user));
						$("#exit").bind("click",function(e){
							e.preventDefault();
							Helper.deletelogin();
							location.href="/mobile/index";
						});
						if(this.user.type=="client"){
							$(".nav .vendor").remove();
						}else if(this.user.type=="vendor"){
							$(".nav .client").remove();
						}
					}else{
						$(".nav .client,.nav .vendor").remove();
					}
				},
				el:$("#main"),
				events:{
					'click #search':'search'
				},
				render:function(){
					var selfthis = this;
					var self = this.$el;
					var page = $("#page").val()||1;
					if(self.find("#search-clientname").val()||self.find("#search-projectname").val()){
						page += '/'+ (self.find("#search-clientname").val()||'nil') + '/' + 
								(self.find("#search-projectname").val()||'nil');
					}
					$.ajax({
						url:'http://121.43.62.242/api/offerhot/'+page,
						type:'get',
						dataType:'json',
						success:function(data){
							var temp = _.template(Helper.template.hotListTemplate);
							var pageTemp = _.template(Helper.template.pagecontent);
							self.find("#list").html(temp({list:data.content}));
							self.find("#page").html(pageTemp({
								count:parseInt(data.count),
								limit:parseInt(data.limit),
								page:parseInt($("#page").val()),
								baseurl:'/online/hot'
							}));
						},
						error:function(){
							alert("加载数据失败");
							location.href = "/online/index";
						}
					});
				},
				search:function(){
					location.href = '/mobile/hot/1/'+
						($("#search-clientname").val()||'nil')+'/'+
						($("#search-projectname").val()||'nil');
				}
			});
			var page = new view();
			page.render();
	});
});