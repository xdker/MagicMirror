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
		{
			module: 'alert', 
		},
		{
			module: 'clock',
			position: 'top_left'
		},
		{
			module: 'calendar',
			header: '麻痹，还不放假！',
			position: 'top_left',
			config: {
				calendars: [
					{
						symbol: 'calendar-check-o ',
						url: 'http://cdn.dker.org/My.ics'
					}
				]
			}
		},
		{
			module: 'compliments',
			position: 'lower_third'
		},
		{
			module: 'currentweather',
			position: 'top_right',
			config: {
				location: 'Xi`an/China',
	            appid: 'ee1a2d2bfdbb7fd57874be327562a1a7'
			}
		},
		{
			module: 'weatherforecast',
			position: 'top_right',
			header: '天气不错啊！',
			config: {
			location: 'Xian,CN',
	            		appid: 'ee1a2d2bfdbb7fd57874be327562a1a7'
			}
		},
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
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== 'undefined') {module.exports = config;}
