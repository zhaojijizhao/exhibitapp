require(['../../../../js/public/base.js'],function(Base){
	Base.setRequirejs(1);
	require(['jquery','underscore','backbone','helper','pingpp'],
		function($,_,Backbone,Helper,ping){
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
						location.href = "../../../mobile/login.html";
					}
					this.user = Helper.getlogin();
					if(this.user.type!="client"){
						alert('请先登录客户账号');
						location.href = "../../../mobile/login.html";
					}
					var temp = _.template(Helper.template.mobileLoginTemplate);
					$(".nav .vendor").remove();
					$(".toplink").html(temp(this.user));
					$("#exit").on("click",function(e){
						e.preventDefault();
						Helper.deletelogin();
						location.href="../../../mobile/index.html";
					});
				},
				el:$("#main"),
				events:{
					// 'click #confirm':'save'
				},
				render:function(){
					var self = this;
					var detail= {};
					$.ajax({
						url: Helper.requestUrl + "offer/" + Helper.searchParam().id,
						type: "get",
						dataType:"json",
						success:function(data){
							detail = data;
							$("#main").html(_.template($("#maintpl").html())({detail:data}));
							$("#city,.city").html(_.template($('#citytpl').html())({city:Helper.city,detail:detail}));
							self.bindEvent(detail);
						},
						error:function(){
							alert("获取详情失败");
						}
					});

				},
				save:function(e){
					e.preventDefault();
					var selfthis = this;
					var self = this.$el;
					$.ajax({
						url: Helper.requestUrl + "offer/confirm/"+$(e.target).attr('oid'),
						type: "post",
						data: {},
						dataType:"json",
						success:function(data){
							selfthis.data = data;
							alert("确认报价成功");
							location.href = "../../../mobile/index.html";
						},
						error:function(){
							alert("确认报价失败");
						}
					});
				},
				bindEvent:function(detail){
					document.addEventListener('pingpp_one_ready',function(){
			            $(document).on('click','#confirm',function(event){
			                pingpp_one.init({
			                    app_id:'app_1234567890',                     //该应用在 Ping++ 的应用 ID
			                    order_no:detail._id,                     //订单在商户系统中的订单号
			                    amount:detail.total,                                   //订单价格，单位：人民币 分
			                    // 壹收款页面上需要展示的渠道，数组，数组顺序即页面展示出的渠道的顺序
			                    // upmp_wap 渠道在微信内部无法使用，若用户未安装银联手机支付控件，则无法调起支付
			                    channel:['wx_pub'],
			                    charge_url:Helper.requestUrl + "offer/confirm/"+detail._id,  //商户服务端创建订单的 url
			                    charge_param:{},                      //(可选，用户自定义参数，若存在自定义参数则壹收款会通过 POST 方法透传给 charge_url)
			                    open_id:'',                      //(可选，使用微信公众号支付时必须传入)
			                    debug:false                                   //(可选，debug 模式下会将 charge_url 的返回结果透传回来)
			                },function(res){
			 
			                    //debug 模式下获取 charge_url 的返回结果
			                    if(res.debug&&res.chargeUrlOutput){
			                        console.log(res.chargeUrlOutput);
			                    }

			                    if(!res.status){
			                        //处理错误
			                        alert(res.msg);
			                    }
			                    else{
			 
			                        //debug 模式下调用 charge_url 后会暂停，可以调用 pingpp_one.resume 方法继续执行
			                        if(res.debug&&!res.wxSuccess){
			                            if(confirm('当前为 debug 模式，是否继续支付？')){
			                                pingpp_one.resume();
			                            }
			                        }
			                        //若微信公众号渠道需要使用壹收款的支付成功页面，则在这里进行成功回调，
			                        //调用 pingpp_one.success 方法，你也可以自己定义回调函数
			                        //其他渠道的处理方法请见第 2 节
			                        else pingpp_one.success(function(res){
			                            if(!res.status){
			                                alert(res.msg);
			                            }
			                        },function(){
			                            //这里处理支付成功页面点击“继续购物”按钮触发的方法，
			                            //例如：若你需要点击“继续购物”按钮跳转到你的购买页，
			                            //则在该方法内写入 window.location.href = "你的购买页面 url"
			 
			                            window.location.href='../../index.html';//示例
			                        });
			                    }
			                });
			            });
			        });
				}
			});
			var page = new view();
			page.render();
	});
});

