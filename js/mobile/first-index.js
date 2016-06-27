require(['../../js/public/base.js'],function(Base){
	Base.setRequirejs();
	require(['jquery','underscore','backbone','helper'],
		function($,_,Backbone,Helper){
			var view = Backbone.View.extend({
				initialize:function(){
					$("#slideout").on('click',function(){
						$("#t2").removeClass('hide');
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
				},
				render:function(){
				}
			});
			var page = new view();
			page.render();
	});
});