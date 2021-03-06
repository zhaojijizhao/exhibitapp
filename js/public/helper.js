define(['jquery','underscore','backbone'],
	function($,_,Backbone){
		var city = [
				{
					label:"热门城市",
					cities:[
						{
							id:5,
							name:"北京"
						},
						{
							id:183,
							name:"上海（沪）"
						},
						{
							id:184,
							name:"深圳（广东）"
						},
						{
							id:26,
							name:"重庆"
						},
						{
							id:210,
							name:"天津"
						}
					]
				},
				{
					label:"A",
					cities:[
						{
							id:1,
							name:"鞍山（辽宁）"
						},
						{
							id:2,
							name:"安阳（河南）"
						},
						{
							id:3,
							name:"安顺（贵州）"
						},
						{
							id:4,
							name:"安庆（安徽）"
						}
					]
				},
				{
					label:"B",
					cities:[
						{
							id:5,
							name:"北京"
						},
						{
							id:6,
							name:"蚌埠（安徽）"
						},
						{
							id:7,
							name:"包头（内蒙古）"
						},
						{
							id:8,
							name:"保定（河北）"
						},
						{
							id:9,
							name:"宝鸡（陕西）"
						},
						{
							id:10,
							name:"白银（甘肃）"
						},
						{
							id:11,
							name:"白云鄂博(内蒙古)"
						},
						{
							id:12,
							name:"巴彦淖尔（内蒙古）"
						},
						{
							id:13,
							name:"北戴河（河北）"
						},
						{
							id:14,
							name:"博鳌（海南）"
						},
						{
							id:15,
							name:"承德（河北）"
						},
						{
							id:16,
							name:"本溪（辽宁）"
						},
						{
							id:17,
							name:"阜新（辽宁）"
						},
						{
							id:18,
							name:"白山（吉林）"
						},
						{
							id:19,
							name:"白城（吉林）"
						},
						{
							id:20,
							name:"亳州（安徽）"
						},
						{
							id:21,
							name:"滨州（山东）"
						},
						{
							id:22,
							name:"北海（广西）"
						},
						{
							id:23,
							name:"百色（广西）"
						},
						{
							id:24,
							name:"巴中（四川）"
						},
						{
							id:25,
							name:"宝山（云南）"
						}
					]
				},
				{
					label:"C",
					cities:[
						{
							id:26,
							name:"重庆"
						},
						{
							id:27,
							name:"成都（四川）"
						},
						{
							id:28,
							name:"长沙（湖南）"
						},
						{
							id:29,
							name:"长春（吉林）"
						},
						{
							id:30,
							name:"承德（河北）"
						},
						{
							id:31,
							name:"常州（江苏）"
						},
						{
							id:32,
							name:"池州（安徽）"
						},
						{
							id:33,
							name:"沧州（河北）"
						},
						{
							id:34,
							name:"赤峰（内蒙古）"
						},
						{
							id:35,
							name:"滁州（安徽）"
						},
						{
							id:36,
							name:"巢湖（安徽）"
						},
						{
							id:37,
							name:"常德（湖南）"
						},
						{
							id:38,
							name:"郴州（湖南）"
						},
						{
							id:39,
							name:"潮州"
						},
						{
							id:40,
							name:"（广东）"
						},
						{
							id:41,
							name:"崇左（广西）"
						},
						{
							id:42,
							name:"德阳（四川）"
						}
					]
				},
				{
					label:"D",
					cities:[
						{
							id:43,
							name:"大连（辽宁）"
						},
						{
							id:44,
							name:"大庆(黑龙江)"
						},
						{
							id:45,
							name:"大同"
						},
						{
							id:46,
							name:"（山西）丹东（辽宁）"
						},
						{
							id:47,
							name:"大冶（湖北）"
						},
						{
							id:48,
							name:"东营（山东）"
						},
						{
							id:49,
							name:"登封（山东）"
						},
						{
							id:50,
							name:"大理（云南）"
						},
						{
							id:51,
							name:"德州（山东）"
						},
						{
							id:52,
							name:"东莞（广东）"
						},
						{
							id:53,
							name:"达州（四川）"
						},
						{
							id:54,
							name:"定西（甘肃）"
						},
						{
							id:55,
							name:"大石桥（辽宁、镁矿）"
						}
					]
				},
				{
					label:"E",
					cities:[
						{
							id:56,
							name:"鄂尔多斯（内蒙古）"
						}, 
						{
							id:57,
							name:"鄂州（湖北）"
						}
					]
				},
				{
					label:"F",
					cities:[
						{
							id:58,
							name:"佛山（广东）"
						},
						{
							id:59,
							name:"福州（福建）"
						},
						{
							id:60,
							name:"抚顺（辽宁）"
						},
						{
							id:61,
							name:"阜阳（安徽）"
						},
						{
							id:62,
							name:"抚州（江西）"
						},
						{
							id:63,
							name:"防城港（广西）"
						}
					]
				},
				{
					label:"G",
					cities:[
						{
							id:64,
							name:"广州（广东）"
						},
						{
							id:65,
							name:"贵阳(贵州)"
						},
						{
							id:66,
							name:"桂林（广西）"
						},
						{
							id:67,
							name:"赣州（江西）"
						},
						{
							id:68,
							name:"贵港（广西）"
						},
						{
							id:69,
							name:"广元（四川）"
						},
						{
							id:70,
							name:"广安（四川）"
						},
						{
							id:71,
							name:"杭州（浙江）"
						},
						{
							id:72,
							name:"固原（宁夏）"
						},
						{
							id:73,
							name:"哈尔滨(黑龙江)"
						}
					]
				},
				{
					label:"H",
					cities:[
						{
							id:74,
							name:"呼和浩特（内蒙古）"
						},
						{
							id:75,
							name:"合肥（安徽）"
						},
						{
							id:76,
							name:"海口（海南）"
						},
						{
							id:77,
							name:"邯郸（河北）"
						},
						{
							id:78,
							name:"湖州（浙江）"
						},
						{
							id:79,
							name:"黄山(安徽)"
						},
						{
							id:80,
							name:"黄石（湖北）"
						},
						{
							id:81,
							name:"黄冈（湖北）"
						},
						{
							id:82,
							name:"衡阳（湖南）"
						},
						{
							id:83,
							name:"汉中（陕西）"
						},
						{
							id:84,
							name:"菏泽（山东）"
						},
						{
							id:85,
							name:"衡水（河北）"
						},
						{
							id:86,
							name:"呼伦贝尔（内蒙古）"
						},
						{
							id:87,
							name:"葫芦岛（辽宁）"
						},
						{
							id:88,
							name:"淮南（安徽）"
						},
						{
							id:89,
							name:"淮北（安徽）"
						},
						{
							id:90,
							name:"鹤壁（河南）"
						},
						{
							id:91,
							name:"淮安（江苏）"
						},
						{
							id:92,
							name:"怀化（湖南）"
						},
						{
							id:93,
							name:"惠州（广东）"
						},
						{
							id:94,
							name:"河源（广东）"
						},
						{
							id:95,
							name:"贺州（广西）"
						},
						{
							id:96,
							name:"河池（广西）"
						},
						{
							id:97,
							name:"鹤岗(黑龙江)"
						},
						{
							id:98,
							name:"黑河(黑龙江)"
						}
					]
				},
				{
					label:"J",
					cities:[
						{
							id:99,
							name:"济南（山东）"
						},
						{
							id:100,
							name:"吉林（吉林）"
						},
						{
							id:101,
							name:"九江（江西）"
						},
						{
							id:102,
							name:"景德镇（江西）"
						},
						{
							id:103,
							name:"金昌（甘肃）"
						},
						{
							id:104,
							name:"揭阳（广东）"
						},
						{
							id:105,
							name:"吉安（江西）"
						},
						{
							id:106,
							name:"锦州（辽宁）"
						},
						{
							id:107,
							name:"鸡西(黑龙江)"
						},
						{
							id:108,
							name:"佳木斯(黑龙江)"
						},
						{
							id:109,
							name:"金华（浙江）"
						},
						{
							id:110,
							name:"济宁（山东）"
						},
						{
							id:111,
							name:"焦作（河南）"
						},
						{
							id:112,
							name:"荆州（湖北）"
						},
						{
							id:113,
							name:"荆门（湖北）"
						},
						{
							id:114,
							name:"娄底（湖南）"
						},
						{
							id:115,
							name:"江门（广东）"
						},
						{
							id:116,
							name:"酒泉（甘肃）"
						},
						{
							id:117,
							name:"嘉峪关（甘肃）"
						},
						{
							id:118,
							name:"嘉兴（浙江）"
						}
					]
				},
				{
					label:"K",
					cities:[
						{
							id:119,
							name:"昆明（云南）"
						},
						{
							id:120,
							name:"开封（河南）"
						},
						{
							id:121,
							name:"克拉玛依（新疆）"
						}
					]
				},
				{
					label:"L",
					cities:[
						{
							id:122,
							name:"兰州（甘肃）"
						},
						{
							id:123,
							name:"拉萨（西藏）"
						},
						{
							id:124,
							name:"洛阳（河南）"
						},
						{
							id:125,
							name:"柳州（广西）"
						},
						{
							id:126,
							name:"乐山（四川）"
						},
						{
							id:127,
							name:"临沧（云南）"
						},
						{
							id:128,
							name:"陇南（甘肃）"
						},
						{
							id:129,
							name:"丽江（云南）"
						},
						{
							id:130,
							name:"乐山（四川）"
						},
						{
							id:131,
							name:"连云港（江苏）"
						},
						{
							id:132,
							name:"廊坊（河北）"
						},
						{
							id:133,
							name:"辽阳（辽宁）"
						},
						{
							id:134,
							name:"辽源（吉林）"
						},
						{
							id:135,
							name:"泸州（四川）"
						},
						{
							id:136,
							name:"漯河（河南）"
						},
						{
							id:137,
							name:"来宾（广西）"
						}
					]
				},
				{
					label:"M",
					cities:[
						{
							id:138,
							name:"绵阳（四川）"
						},
						{
							id:139,
							name:"牡丹江(黑龙江)"
						},
						{
							id:140,
							name:"丽水（浙江）"
						},
						{
							id:141,
							name:"马鞍山（安徽）"
						},
						{
							id:142,
							name:"六安（安徽）"
						},
						{
							id:143,
							name:"龙岩（福建）"
						},
						{
							id:144,
							name:"莱芜（山东）"
						},
						{
							id:145,
							name:"临沂（山东）"
						},
						{
							id:146,
							name:"聊城（山东）"
						},
						{
							id:147,
							name:"茂名（广东）"
						},
						{
							id:148,
							name:"梅州（广东）"
						},
						{
							id:149,
							name:"眉山（四川）"
						}
					]
				},
				{
					label:"N",
					cities:[
						{
							id:150,
							name:"南京（江苏）"
						},
						{
							id:151,
							name:"宁波（浙江）"
						},
						{
							id:152,
							name:"南通（江苏）"
						},
						{
							id:153,
							name:"南昌（江西）"
						},
						{
							id:154,
							name:"南平（福建）"
						},
						{
							id:155,
							name:"南阳（河南）"
						},
						{
							id:156,
							name:"宁德（福建）"
						},
						{
							id:157,
							name:"南宁（广西）"
						},
						{
							id:158,
							name:"内江（四川）"
						},
						{
							id:159,
							name:"南充（四川）"
						}
					]
				},
				{
					label:"P",
					cities:[
						{
							id:160,
							name:"莆田（福建）"
						},
						{
							id:161,
							name:"萍乡（江西）"
						},
						{
							id:162,
							name:"盘锦（辽宁）"
						},
						{
							id:163,
							name:"攀枝花（四川）"
						},
						{
							id:164,
							name:"平顶山（河南）"
						},
						{
							id:165,
							name:"平遥（山西）"
						},
						{
							id:166,
							name:"平凉（甘肃）"
						},
						{
							id:167,
							name:"濮阳（河南）"
						},
						{
							id:168,
							name:"许昌（河南）"
						},
						{
							id:169,
							name:"普洱（云南）"
						}
					]
				},
				{
					label:"Q",
					cities:[
						{
							id:170,
							name:"青岛（山东）"
						},
						{
							id:171,
							name:"泉州（福建）"
						},
						{
							id:172,
							name:"齐齐哈尔(黑龙江)"
						},
						{
							id:173,
							name:"秦皇岛（河北）"
						},
						{
							id:174,
							name:"曲阜（山东）"
						},
						{
							id:175,
							name:"七台河(黑龙江)"
						},
						{
							id:176,
							name:"秦州（江苏）"
						},
						{
							id:177,
							name:"衢州（浙江）"
						},
						{
							id:178,
							name:"曲靖（云南）"
						},
						{
							id:179,
							name:"庆阳（甘肃）"
						}
					]
				},
				{
					label:"R",
					cities:[
						{
							id:180,
							name:"日照（山东）"
						},
						{
							id:181,
							name:"清远（广东）"
						},
						{
							id:182,
							name:"钦州（广西）"
						}
					]
				},
				{
					label:"S",
					cities:[
						{
							id:183,
							name:"上海（沪）"
						},
						{
							id:184,
							name:"深圳（广东）"
						},
						{
							id:186,
							name:"苏州（江苏）"
						},
						{
							id:187,
							name:"沈阳（辽宁）"
						},
						{
							id:188,
							name:"石家庄(河北)"
						},
						{
							id:189,
							name:"汕头（广东）"
						},
						{
							id:190,
							name:"三亚（海南）"
						},
						{
							id:191,
							name:"绍兴（浙江）"
						},
						{
							id:192,
							name:"十堰（湖北）"
						},
						{
							id:193,
							name:"上饶（江西）"
						},
						{
							id:194,
							name:"四平（吉林）"
						},
						{
							id:195,
							name:"松原（吉林）"
						},
						{
							id:196,
							name:"来宾（广西）"
						},
						{
							id:197,
							name:"宿迁（江苏）"
						},
						{
							id:198,
							name:"宿州（安徽）"
						},
						{
							id:199,
							name:"三明（福建）"
						},
						{
							id:200,
							name:"三门峡（河南）"
						},
						{
							id:201,
							name:"商丘（河南）"
						},
						{
							id:202,
							name:"随州（湖北）"
						},
						{
							id:203,
							name:"邵阳（湖南）"
						},
						{
							id:204,
							name:"韶关（广东）"
						},
						{
							id:205,
							name:"汕尾（广东）"
						},
						{
							id:206,
							name:"遂宁（四川）"
						},
						{
							id:207,
							name:"石嘴山（甘肃）"
						},
						{
							id:208,
							name:"双鸭山(黑龙江)"
						},
						{
							id:209,
							name:"绥化(黑龙江)"
						}
					]
				},
				{
					label:"T",
					cities:[
						{
							id:210,
							name:"天津"
						},
						{
							id:211,
							name:"唐山（河北）"
						},
						{
							id:212,
							name:"太原（山西）"
						},
						{
							id:213,
							name:"泰安（山东）"
						},
						{
							id:214,
							name:"泰州（江苏）"
						},
						{
							id:215,
							name:"铁岭（辽宁）"
						},
						{
							id:216,
							name:"通辽（内蒙古）"
						},
						{
							id:217,
							name:"通化（吉林）"
						},
						{
							id:218,
							name:"台州（浙江）"
						},
						{
							id:219,
							name:"铜陵（安徽）"
						},
						{
							id:220,
							name:"天水（甘肃）"
						}
					]
				},
				{
					label:"W",
					cities:[
						{
							id:221,
							name:"武汉（湖北）"
						},
						{
							id:222,
							name:"无锡（江苏）"
						},
						{
							id:223,
							name:"乌鲁木齐（新疆）"
						},
						{
							id:224,
							name:"潍坊（山东）"
						},
						{
							id:225,
							name:"芜湖（安徽）"
						},
						{
							id:226,
							name:"武夷山（福建）"
						},
						{
							id:227,
							name:"渭南（陕西）"
						},
						{
							id:228,
							name:"乌海（内蒙古）"
						},
						{
							id:229,
							name:"乌兰察布（内蒙古）"
						},
						{
							id:230,
							name:"温州（浙江）"
						},
						{
							id:231,
							name:"威海（山东）"
						},
						{
							id:232,
							name:"梧州（广西）"
						},
						{
							id:233,
							name:"武威（甘肃）"
						},
						{
							id:234,
							name:"吴忠（甘肃）"
						}
					]
				},
				{
					label:"X",
					cities:[
						{
							id:235,
							name:"西安（陕西）"
						},
						{
							id:236,
							name:"厦门（福建）"
						},
						{
							id:237,
							name:"西宁（青海）"
						},
						{
							id:238,
							name:"襄樊（湖北）"
						},
						{
							id:239,
							name:"咸阳（陕西）"
						},
						{
							id:240,
							name:"湘潭（湖南）"
						},
						{
							id:241,
							name:"忻州（山西）"
						},
						{
							id:242,
							name:"徐州（江苏）"
						},
						{
							id:243,
							name:"信阳（河南）"
						},
						{
							id:244,
							name:"邢台（河北）"
						},
						{
							id:245,
							name:"宣城（安徽）"
						},
						{
							id:246,
							name:"新余（江西）"
						},
						{
							id:247,
							name:"新乡（河南）"
						},
						{
							id:248,
							name:"孝感（湖北）"
						},
						{
							id:249,
							name:"咸宁（湖北）"
						}
					]
				},
				{
					label:"Y",
					cities:[
						{
							id:250,
							name:"烟台（山东）"
						},
						{
							id:251,
							name:"银川（宁夏）"
						},
						{
							id:252,
							name:"扬州（江苏）"
						},
						{
							id:253,
							name:"宜昌（湖北）"
						},
						{
							id:254,
							name:"岳阳（湖南）"
						},
						{
							id:255,
							name:"延安（陕西）"
						},
						{
							id:256,
							name:"营口（辽宁）"
						},
						{
							id:257,
							name:"延吉（吉林）"
						},
						{
							id:258,
							name:"伊春(黑龙江)"
						},
						{
							id:259,
							name:"盐城（江苏）"
						},
						{
							id:260,
							name:"鹰潭（江西）"
						},
						{
							id:261,
							name:"宜春（江西）"
						},
						{
							id:262,
							name:"益阳（湖南）"
						},
						{
							id:263,
							name:"永州（湖南）"
						},
						{
							id:264,
							name:"阳江（广东）"
						},
						{
							id:265,
							name:"云浮（广东）"
						},
						{
							id:266,
							name:"玉林（广西）"
						},
						{
							id:267,
							name:"宜宾（四川）"
						},
						{
							id:268,
							name:"雅安（四川）"
						},
						{
							id:269,
							name:"玉溪（云南）"
						}
					]
				},
				{
					label:"Z",
					cities:[
						{
							id:270,
							name:"郑州（河南）"
						},
						{
							id:271,
							name:"珠海（广东）"
						},
						{
							id:272,
							name:"漳州（福建）"
						},
						{
							id:273,
							name:"株洲（湖南）"
						},
						{
							id:274,
							name:"肇庆（广东）"
						},
						{
							id:275,
							name:"自贡（四川）"
						},
						{
							id:276,
							name:"舟山（浙江）"
						},
						{
							id:277,
							name:"张家界（湖南）"
						},
						{
							id:278,
							name:"遵义（贵州）"
						},
						{
							id:279,
							name:"湛江（广东）"
						},
						{
							id:280,
							name:"张家口（河北）"
						},
						{
							id:281,
							name:"张家界（湖南）"
						},
						{
							id:282,
							name:"阳（辽宁）"
						},
						{
							id:283,
							name:"镇江（江苏）"
						},
						{
							id:284,
							name:"淄博（山东）"
						},
						{
							id:285,
							name:"枣庄（山东）"
						},
						{
							id:286,
							name:"中山（广东）"
						},
						{
							id:287,
							name:"资阳（四川）"
						},
						{
							id:288,
							name:"周口（河南）"
						},
						{
							id:289,
							name:"驻马店（河南）"
						},
						{
							id:290,
							name:"昭通（云南）"
						},
						{
							id:291,
							name:"张掖（甘肃）"
						},
						{
							id:292,
							name:"中卫（甘肃）"
						}
					]
				}
			];
		var helper={
			requestUrl:"http://121.43.62.242:3000/api/",
			city: city,
			searchParam:function(){
				var search = location.search.split('?',2)[1];
				var result = {};
				if(search){
					var arr = search.split('&');
					for(var i = 0; i < arr.length; i++){
						result[arr[i].split('=')[0]] = arr[i].split('=')[1];
					}
				}
				return result;
			},
			islogin:function(){
				return !!localStorage.getItem("exhibitUser")
			},
			setlogin:function(data){
				localStorage.setItem("exhibitUser",JSON.stringify(data));
			},
			getlogin:function(){
				return JSON.parse(localStorage.getItem("exhibitUser"));
			},
			deletelogin:function(){
				localStorage.removeItem("exhibitUser");
			},
			setrefer:function(str){
				localStorage.setItem("exhibitRefer",str);
			},
			getrefer:function(){
				return localStorage.getItem("exhibitRefer");
			},
			template:{
				userTemplate:'<ul class="user-list">\
									<li>\
										<span class="fl w50">所有人</span>\
										<span class="f1">&nbsp;</span>\
										<span class="fr w80 tc"><button class="send">发送所有人</button></span>\
									</li>\
									<% _.each(user,function(v,k){%>\
										<li>\
											<span class="fl w50"><%=v.name%></span>\
											<span class="f1"><%=v.cell%></span>\
											<span class="fr w80 tc"><button class="send" uid=<%=v._id%>>发送</button></span>\
										</li>\
									<%});%>\
								</ul>',
				requestListTemplate:'<ul class="request-list">\
									<% _.each(list,function(v,k){%>\
										<li>\
											<span class="fl w50"><%=v.info.cname%></span>\
											<span class="f1"><%=v.info.name%></span>\
											<span class="fr w80 tc"><a class="detail" href="/client/request/detail.html?id=<%=v._id%>">查看详情</a></span>\
										</li>\
									<%});%>\
								</ul>',
				onlinerequestListTemplate:'<ul class="request-list">\
									<% _.each(list,function(v,k){%>\
										<li>\
											<span class="fl w50"><%=v.info.cname%></span>\
											<span class="f1"><%=v.info.name%></span>\
											<%if(v.state==2){%>\
												<span class="f1 red">已确认</span>\
												<span class="fr w80 tc"><a class="orange" href="/online/result.html?id=<%=v.offer_id%>">查看报表</a></span>\
											<%}%>\
											<span class="fr w80 tc"><a class="detail" href="/online/client/request/detail.html?id=<%=v._id%>">查看详情</a></span>\
										</li>\
									<%});%>\
								</ul>',
				mobilerequestListTemplate:'<ul class="request-list">\
									<% _.each(list,function(v,k){%>\
										<li>\
											<span class="fl w50"><%=v.info.cname%></span>\
											<span class="f1"><%=v.info.name%></span>\
											<%if(v.state==2){%>\
												<span class="f1 red">已确认</span>\
												<span class="fr w80 tc"><a class="orange" href="../../../mobile/result.html?id=<%=v.offer_id%>">查看报表</a></span>\
											<%}%>\
											<span class="fr w80 tc"><a class="detail" href="../../../mobile/client/request/detail.html?id=<%=v._id%>">查看详情</a></span>\
										</li>\
									<%});%>\
								</ul>',
				materialListTemplate:'<ul class="request-list">\
									<% _.each(list,function(v,k){%>\
										<li>\
											<span class="fl w50"><%=v.info.cname%></span>\
											<span class="f1"><%=v.info.name%></span>\
											<span class="fr w80 tc"><a class="detail" href="/client/material/detail.html?id=<%=v._id%>">添加物料</a></span>\
										</li>\
									<%});%>\
								</ul>',
				requestVendorListTemplate:'<ul class="request-list">\
									<% _.each(list,function(v,k){%>\
										<li>\
											<span class="fl w50"><%=v.info.cname%></span>\
											<span class="f1"><%=v.info.name%></span>\
											<span class="fr w80 tc"><a class="detail" href="/vendor/request/detail.html?id=<%=v._id%>">查看详情</a></span>\
										</li>\
									<%});%>\
								</ul>',
				onlinerequestVendorListTemplate:'<ul class="request-list">\
									<% _.each(list,function(v,k){%>\
										<li>\
											<span class="fl w50"><%=v.info.cname%></span>\
											<span class="f1"><%=v.info.name%></span>\
											<span class="fr w80 tc"><a class="detail" href="/online/vendor/request/detail.html?<%=v._id%>">查看详情</a></span>\
										</li>\
									<%});%>\
								</ul>',
				mobilerequestVendorListTemplate:'<ul class="request-list">\
									<% _.each(list,function(v,k){%>\
										<li>\
											<span class="fl w50"><%=v.info.cname%></span>\
											<span class="f1"><%=v.info.name%></span>\
											<span class="fr w80 tc"><a class="detail" href="../../../mobile/vendor/request/detail.html?id=<%=v._id%>">查看详情</a></span>\
										</li>\
									<%});%>\
								</ul>',
				responseRequestListTemplate:'<ul class="request-list">\
									<% _.each(list,function(v,k){%>\
										<li id="<%=v._id%>">\
											<span class="fl w50"><%=v.info.cname%></span>\
											<span class="f1"><%=v.info.name%></span>\
											<!--<span class="fr w80 tc"><a class="detail" eid="<%=v._id%>">点击展开</a></span>-->\
										</li>\
									<%});%>\
								</ul>',
				responseListTemplate:'<li class="trend"><ul class="response-list">\
									<% _.each(list,function(v,k){%>\
										<li>\
											<span class="fl w50"><%=v.info.cname%></span>\
											<span class="f1"><%=v.info.name%></span>\
											<span class="f1">报价：<%=v.total%>元</span>\
											<span class="fr w80 tc"><a class="response" href="/client/response/detail.html?id=<%=v._id%>" >查看详情</a></span>\
										</li>\
									<%});%>\
								</li></ul>',
				onlineresponseListTemplate:'<ul class="response-list">\
									<%if(list.length>0){%>\
										<% _.each(list,function(v,k){%>\
											<li>\
												<span class="f1 w50"><%=v.uname%></span>\
												<span class="f1">报价得分：90分</span>\
												<span class="f1">服务满意度：90分</span>\
												<span class="f1">报价：<span class="red"><%=v.total%></span>元</span>\
												<span class="fr w80 tc"><a class="response" target="blank" href="/online/client/response/detail.html?id=<%=v._id%>" >查看详情</a></span>\
											</li>\
										<%});%>\
									<%}else{%>\
										<li>目前暂无报价</li>\
									<%}%>\
								</ul>',
				mobileresponseListTemplate:'<ul class="response-list">\
									<%if(list.length>0){%>\
										<% _.each(list,function(v,k){%>\
											<li>\
												<span class="f1 w50"><%=v.uname%></span>\
												<span class="f1">报价得分<br/>90分</span>\
												<span class="f1">服务满意度<br/>90分</span>\
												<span class="f1">报价<br/><span class="red"><%=v.total%></span>元</span>\
												<span class="fr w80 tc"><a class="response" href="../../../mobile/client/response/detail.html?id=<%=v._id%>" >查看详情</a></span>\
											</li>\
										<%});%>\
									<%}else{%>\
										<li>目前暂无报价</li>\
									<%}%>\
								</ul>',
				hotListTemplate:'<ul class="response-list">\
									<%if(list.length>0){%>\
										<% _.each(list,function(v,k){%>\
											<li>\
												<span class="fl w50"><%=v.info.cname%></span>\
												<span class="f1"><%=v.info.name%></span>\
												<span class="f1">报价：<%=v.total%>元</span>\
											</li>\
										<%});%>\
									<%}else{%>\
										<li>目前暂无报价</li>\
									<%}%>\
								</ul>',
				onlineresponseVendorListTemplate:'<ul class="response-list">\
									<%if(list.length>0){%>\
										<% _.each(list,function(v,k){%>\
											<li>\
												<span class="fl w50"><%=v.info.cname%></span>\
												<span class="f1"><%=v.info.name%></span>\
												<span class="f1">报价：<%=v.total%>元</span>\
												<%if(v.state==2){%>\
													<span class="f1 red">已确认</span>\
													<span class="fr w80 tc"><a class="orange" href="/online/result.html?id=<%=v._id%>">查看报表</a></span>\
												<%}%>\
												<span class="fr w80 tc"><a class="response" href="/online/vendor/response/detail.html?id=<%=v._id%>" >查看详情</a></span>\
											</li>\
										<%});%>\
									<%}else{%>\
										<li>目前暂无报价</li>\
									<%}%>\
								</ul>',
				mobileresponseVendorListTemplate:'<ul class="response-list">\
									<%if(list.length>0){%>\
										<% _.each(list,function(v,k){%>\
											<li>\
												<span class="fl w50"><%=v.info.cname%></span>\
												<span class="f1"><%=v.info.name%></span>\
												<span class="f1">报价：<%=v.total%>元</span>\
												<%if(v.state==2){%>\
													<span class="f1 red">已确认</span>\
													<span class="fr w80 tc"><a class="orange" href="../../../mobile/result.html?id=<%=v._id%>">查看报表</a></span>\
												<%}%>\
												<span class="fr w80 tc"><a class="response" href="../../../mobile/vendor/response/detail.html?id=<%=v._id%>" >查看详情</a></span>\
											</li>\
										<%});%>\
									<%}else{%>\
										<li>目前暂无报价</li>\
									<%}%>\
								</ul>',
				onlineLoginTemplate:'<ul class="toplink fr">\
									<li>欢迎您:<%=name%>&nbsp;<%=cell%></li>\
									<li><a id="exit" href="#">退出</a></li>\
									<li><a href="/online/collect.html">收藏我们</a></li>\
								</ul>',
				mobileLoginTemplate:'\
									<li><%=name%></li>\
									<li><%=cell%></li>\
									<li><a id="exit" href="#">退出</a></li>\
									<li><a href="../../../mobile/collect.html">收藏我们</a></li>',
				pagecontent:'<%var max = Math.ceil(count/limit);%>\
							<div class="pagelist">\
								<a <%if(page>1){%>href="<%=baseurl%>?page=<%=(page-1)%>"<%}%> class="<%if(page==1){%>off<%}%>" >上一页</a>\
								<%if(page>4){%>...<%}%>\
								<% _.each(_.range(-3,4),function(v,k){\
									if(page+v>0 && page+v<=max){%>\
									<a href="<%=baseurl%>?page=<%=(page+v)%>" class="<%if(v==0){%>on<%}%>" ><%=(page+v)%></a>\
								<%}});%>\
								<%if(max-page>3){%>...<%}%>\
								<a <%if(page<max){%>href="<%=baseurl%>?page=<%=(page+1)%>"<%}%> class="<%if(page==max){%>off<%}%>" >下一页</a>\
							</div>'
			}
		};
	return helper;
});