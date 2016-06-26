/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

var config = {
	port: 8080,

	language: 'zh-cn',
	timeFormat: 24,
	units: 'metric',

	modules: [
	//启动提示模块
		 {
        module: 'alert',
        config: {
            // The config property is optional.
            // See 'Configuration options' for more information. 
			//welcome_message:'啦啦啦，我来了！',
			//position: 'center',
			//effect:'flip',
        }
    	},
	//时钟模块
		{
			module: 'clock',
			position: 'top_left'
		},
	//日历模块
		{
			module: 'calendar',
			header: '麻痹，还不放假！',
			position: 'top_left',
			config: {
			calendars: [
					{
						symbol: 'calendar-check-o ',
						//url: 'https://calendar.google.com/calendar/ical/zh-cn.china%23holiday%40group.v.calendar.google.com/public/basic.ics',
					url:'https://calendar.google.com/calendar/ical/zh-cn.china%23holiday%40group.v.calendar.google.com/public/basic.ics'
					},
					{
						symbol: 'birthday-cake',
						url: 'https://calendar.google.com/calendar/ical/7bobd4kej021kv7tapfhesd1tk%40group.calendar.google.com/private-27a670d15e65672aa530b91690b27f94/basic.ics',
					},
						] 
					}
		},
		//赞美模块
		{
			module: 'compliments',
			position: 'lower_third'
		},
		//当前天气模块
		/*{
			module: 'currentweather',
			position: 'top_right',
			config: {
				location: 'Xi`an/China',
				locationID: '1790630',
	            appid: 'ee1a2d2bfdbb7fd57874be327562a1a7'
			}
		},*/
		//天气预报模块
		{
		        module: 'wuforecast',
		        position: 'top_right',  // This can be any of the regions.
		        header: '今天天气不错啊！', 
		        config: {
		            // See 'Configuration options' for more information.
		            location: 'china/xian',
		            appid: '36c1ffec17586bc1' //wunderground.com API key.
		        }
    			},
		/*{
			module: 'weatherforecast',
			position: 'top_right',
			header: '天气不错啊！',
			config: {
				location: 'Xian,CN',
				locationID: '1790630',
	    		appid: 'ee1a2d2bfdbb7fd57874be327562a1a7'
			}
		},*/
		//新闻订阅模块
		{
			module: 'newsfeed',
			position: 'bottom_bar',
			config: {
				feeds: [
					{
						title: "FT中文网",
						url: "http://www.ftchinese.com/rss/news",
					},
					{
						title: "纽约时报",
						url: "http://cn.nytimes.com/rss.html",
					},	
					{
						title: "BBC",
						url: "http://www.bbc.com/zhongwen/simp/index.xml",
					},
					{
						title: "知乎",
						url: "http://www.zhihu.com/rss",
					},
					{
						title: "知乎日报",
						url: "http://feeds.feedburner.com/zhihu-daily",
					},	
					{
						title: "极客公园",
						url: "http://www.geekpark.net/rss",
					},	
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		},
		//系统温度模块
		{
			module: 'mmm-systemtemperature',
			position: 'top_center', // This can be any of the regions.
			classes: 'small dimmed', // Add your own styling. Optional.
			config: {
			    // See 'Configuration options' for more information.
			}
		},
		//空气质量模块
		{
			module: 'airquality',
			position: 'top_center', // you may choose any location
			config: {
			  location: 'xian', // the location to check the index for
			lang:'cn'
			}
		},
		//奇妙清单模块
		{
        module: 'MMM-Wunderlist',
        position: 'top_right',  // This can be any of the regions. Best results in left or right regions.
        header: '还有好多事要干啊！', // This is optional
        config: {
      

			      // See 'Configuration options' for more information.
			accessToken:'87e0e14a1bcc2c4458183025eb6982ba3487163511fb47c461ed3df5c9f3',
			clientID:'85f42b903be177f724f7'
        }
    	},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== 'undefined') {module.exports = config;}
