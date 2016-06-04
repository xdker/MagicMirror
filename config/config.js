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
						title: "北京时间",
						url: "http://www.ftchinese.com/rss/news",
						url: "http://www.geekpark.net/rss",
						url: "http://cn.nytimes.com/rss.html",
					}
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		},
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== 'undefined') {module.exports = config;}
