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
					if(!Helper.islogin()){
						alert('请先登录');
						location.href = "/mobile/login";
					}
					this.user = Helper.getlogin();
					if(this.user.type!="client"){
						alert('请先登录客户账号');
						location.href = "/mobile/login";
					}
					var temp = _.template(Helper.template.mobileLoginTemplate);
					$(".nav .vendor").remove();
					$(".toplink").html(temp(this.user));
					$("#exit").bind("click",function(e){
						e.preventDefault();
						Helper.deletelogin();
						location.href="/mobile/index";
					});
				},
				el:$("#main"),
				events:{
				},
				render:function(){
					var selfthis = this;
					var page = $("#page").val()||1;
					$.ajax({
						url:'http://121.43.62.242/api/exhibit/byuid/'+this.user._id + "/" + page,
						type:'get',
						dataType:'json',
						success:function(data){
							_.bind(selfthis.renderList,selfthis)(data);
						},
						error:function(){
							alert("加载数据失败");
							location.href = "/mobile/index";
						}
					});
				},
				renderList:function(data){
					var selfthis = this;
					var self = this.$el;
					var temp = _.template(Helper.template.responseRequestListTemplate);
					var pageTemp = _.template(Helper.template.pagecontent);
					self.find("#list").html(temp({list:data.content}));
					self.find("#page").html(pageTemp({
						count:parseInt(data.count),
						limit:parseInt(data.limit),
						page:parseInt($("#page").val()),
						baseurl:'/mobile/client/response/'
					}));
					_.each(data.content,_.bind(this.showResponse,this));
					//this.$el.find(".detail").on("click",_.bind(selfthis.showResponse,selfthis));
				},
				showResponse:function(v,k){
					//e.preventDefault();
					var selfthis = this;
					//var eid = $(e.currentTarget).attr("eid");
					var eid = v._id;
					$.ajax({
						url:'http://121.43.62.242/api/offer/byexhibit/'+eid,
						type:'get',
						dataType:'json',
						success:function(data){
							var item = $("#"+eid);
							var temp = _.template(Helper.template.mobileresponseListTemplate);
							if(item.next().hasClass('trend')){
								item.next().html(temp({list:data}));
							}else{
								item.after('<li class="trend"></li>')
								item.next().html(temp({list:data}));
							}
						},
						error:function(){
							alert("加载数据失败");
						}
					});
				}
			});
			var page = new view();
			page.render();
	});
});

