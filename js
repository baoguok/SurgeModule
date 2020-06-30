 #name=JavaScript		
 #!desc=JavaScript扩展Surge		
 #!system=ios		

  [Script]		
 http-response ^https?://api\.m\.jd\.com/client\.action\?functionId=(wareBusiness|serverConfig) requires-body=1,script-path=https://raw.githubusercontent.com/yichahucha/surge/master/jd_price.js		
 http-request ^http://.+/amdc/mobileDispatch requires-body=1,script-path=https://raw.githubusercontent.com/yichahucha/surge/master/tb_price.js
http-response ^https?://trade-acs\.m\.taobao\.com/gw/mtop\.taobao\.detail\.getdetail requires-body=1,script-path=https://raw.githubusercontent.com/yichahucha/surge/master/tb_price.js	
 # Netflix评分		
 nf_rating.js = script-path=https://raw.githubusercontent.com/yichahucha/surge/master/nf_rating.js,type=http-request,pattern=^https?://ios\.prod\.ftl\.netflix\.com/iosui/user/.+path=%5B%22videos%22%2C%\d+%22%2C%22summary%22%5D		
 nf_rating.js = requires-body=1,script-path=https://raw.githubusercontent.com/yichahucha/surge/master/nf_rating.js,type=http-response,pattern=^https?://ios\.prod\.ftl\.netflix\.com/iosui/user/.+path=%5B%22videos%22%2C%\d+%22%2C%22summary%22%5D		
 单集评分 = type=http-response,pattern=^https?://ios\.prod\.ftl\.netflix\.com/iosui/warmer/.+type=show-ath,requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/yichahucha/surge/master/nf_rating_season.js		
 # 枫之谷		
 All_pro.js = requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/honjow/MyScripts/master/JS/MapleStoryM/All_pro.js,type=http-response,pattern=^https://m-api.nexon.com/sdk/enterToy.nx		
 # > 微信公众号		
 WeChat.js = script-path=https://Choler.github.io/Surge/Script/WeChat.js,type=http-request,pattern=^https://mp\.weixin\.qq\.com/mp/getappmsgad		
 # > 网易蜗牛读书VIP (By yxiaocai and JO2EY)		
 wnyd.js = requires-body=1,script-path=https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/wnyd.js,type=http-response,pattern=^https?:\/\/p\.du\.163\.com\/gain\/readtime\/info\.json		
 # > VSCO滤镜VIP		
 vsco.js = requires-body=1,script-path=https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/vsco.js,type=http-response,pattern=^https?:\/\/vsco\.co\/api\/subscriptions\/2.1\/user-subscriptions\/		
 # 彩云天气 Vip		
 ColorWeather.js = requires-body=1,script-path=https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/ColorWeather.js,type=http-response,pattern=^https:\/\/biz\.caiyunapp\.com\/v2\/user\?app_name\=weather		
 # 扫描全能王 pro		
 CamScanner.js = requires-body=1,script-path=https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/CamScanner.js,type=http-response,pattern=^https:\/\/(api|api-cs)\.intsig\.net\/purchase\/cs\/query_property\?		
 # > XMind思维导图		
 XMind.js = requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/nzw9314/QuantumultX/master/Script/XMind.js,type=http-response,pattern=https:\/\/www\.xmind\.cn\/\_res\/devices		
 # > musixmatch		
 musixmatch.miao.js = requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/langkhach270389/Scripting/master/musixmatch.miao.js,script-update-interval=0,type=http-response,pattern=^https:\/\/apic\.musixmatch\.com\/ws\/.*\/config\.get		
 # Keep 解锁私人课程和动作库		
 Keep.js = requires-body=1,script-path=https://raw.githubusercontent.com/NobyDa/Script/master/Surge/JS/Keep.js,type=http-response,pattern=^https:\/\/api\.gotokeep\.com\/(.+\/subject|.+\/dynamic)		
 # 一言		
 Calendar.js = script-path=https://raw.githubusercontent.com/MeetaGit/MeetaRules/master/Surge/Scripting/Calendar.js,script-update-interval=0,type=cron,cronexp=0 8-20/6 * * *		

  [MITM]		
 hostname = %APPEND% trade-acs.m.taobao.com, api.m.jd.com, ios.prod.ftl.netflix.com, mp.weixin.qq.com, p.du.163.com, m-api.nexon.com,vsco.co,biz.caiyunapp.com,ap*.intsig.net,www.xmind.cn,apic.musixmatch.com,api.gotokeep.com 		