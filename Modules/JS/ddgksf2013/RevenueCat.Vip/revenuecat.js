/***********************************

> ScriptName        𝐑𝐞𝐯𝐞𝐧𝐮𝐞𝐂𝐚𝐭多合一脚本[墨鱼版]
> Author            @ddgksf2013
> ForHelp           若有屏蔽广告的需求，可公众号后台回复APP名称
> WechatID          墨鱼手记
> TgChannel         https://t.me/ddgksf2021
> Contribute        https://t.me/ddgksf2013_bot
> Feedback          📮 𝐝𝐝𝐠𝐤𝐬𝐟𝟐𝟎𝟏𝟑@𝟏𝟔𝟑.𝐜𝐨𝐦 📮
> UpdateTime        2024-07-04
> Suitable          自行观看“# > ”注释内容，解锁是暂时的，购买也不是永久的[订阅、跑路]
> Attention         📣个别失效的APP请相关需求者自行降级、或寻找替代品、或购买支持
> Attention         如需引用请注明出处，谢谢合作！
> ScriptURL         https://gist.githubusercontent.com/ddgksf2013/dbb1695cd96743eef18f3fac5c6fe227/raw/revenuecat.js


# ========解锁列表======== #
https://appraven.net/collection/77299969

[rewrite_local]

# ～ RevenueCat@ddgksf2013
^https:\/\/api\.(revenuecat|rc-backup)\.com\/.+\/(receipts$|subscribers\/[^/]+$) url script-response-body https://gist.githubusercontent.com/ddgksf2013/dbb1695cd96743eef18f3fac5c6fe227/raw/revenuecat.js
^https:\/\/api\.(revenuecat|rc-backup)\.com\/.+\/(receipts|subscribers) url script-request-header https://raw.githubusercontent.com/ddgksf2013/Scripts/master/deleteHeader.js

[mitm]

hostname=api.revenuecat.com, api.rc-backup.com

***********************************/




// ========= 动态ID ========= //
const mapping = {
  'Subtracky': ['premium','premium_subtracky_lifetime'],
  'Accountit/': ['spenditPlus','DesignTech.SIA.Spendit.Plus.Lifetime'],
  'Haushaltsbuch': ['full_access','com.fabian.hasse.haushaltsbuch.upgrade.combined'],
  '%E8%BD%A6%E7%A5%A8%E7%A5%A8': ['vip+watch_vip'],
  'FinancialNote': ['category'],
  'QingLong': ['Premium'],
  'CircleTime/': ['Premium'],
  'ScreenRecordCase/': ['Premium'],
  'Chronicling/': ['Premium'],
  'Yosum/': ['Premium'],
  'Currency-Converter/': ['pro'],
  'Precious/': ['Pro'],
  'GBA/': ['xGBA.pro'],
  'mark_cup/': ['premiun'],
  'Photomator': ['pixelmator_photo_pro_access'],
  'StepUp/': ['premiun'],
  'SleepMaster/': ['premium','sm_14999_lifetime'],
  'Grain/': ['gold','lifetimeMembership'],
  'AudioPlayer': ['Pro'],
  'FoJiCam/': ['ProVersionLifeTime'],
  'pdfai_app/': ['premium'],
  'LUTCamera': ['ProVersion', 'com.uzero.funforcam.monthlysub'],
  'totowallet': ['all', 'com.ziheng.totowallet.yearly'],
  'Today%20App/': ['Premium', 'TodayApp_Lifetime'],
  'Aphrodite': ['all'],
  'timetrack.io': ['atimelogger-premium-plus'],
  'LiveWallpaper': ['Pro access'],
  'SharkSMS': ['VIP','com.lixkit.diary.permanent_68'],
  '%E7%BE%8E%E5%A6%86%E6%97%A5%E5%8E%86': ['Pro access'],
  'Aula/': ['Pro access'],
  'Project%20Delta/': ['rc_entitlement_obscura_ultra'],
  'apollo': ['all'],
  'Unfold': ['REDUCED_PRO_YEARLY','UNFOLD_PRO_YEARLY'],
  'LockFlow/': ['unlimited_access'],
  'iplayTV/': ['com.ll.btplayer.12'],
  'widget_art': ['all'],
  'OneBox': ['all'],
  'Taskbit/': ['Pro'],
  'Spark': ['premium'],
  'Medication%20List/': ['Premium'],
  'Pillow': ['premium'],
  'DecibelMeter/': ['Premium'],
  '1Blocker': ['premium'],
  'VSCO': ['membership'],
  'UTC': ['Entitlement.Pro'],
  '%E8%AC%8E%E5%BA%95%E9%BB%91%E8%86%A0': ['Entitlement.Pro'],
  '%E8%AC%8E%E5%BA%95%E6%99%82%E9%90%98': ['Entitlement.Pro'],
  'OffScreen': ['Entitlement.Pro'],
  'ScannerPro': ['plus'],
  'Duplete/': ['Pro'],
  'Ooga/': ['Ooga'],
  'WhiteCloud': ['allaccess','wc_pro_1y'],
  'HTTPBot': ['pro'],
  'audiomack': ['Premium1'],
  'server_bee': ['Pro'],
  'simple-': ['patron'],
  'streaks': ['patron'],
  'andyworks-calculator': ['patron'],
  'vibes': ['patron'],
  'CountDuck': ['premium', 'Lifetime'],
  'IPTVUltra': ['premium'],
  'Happy%3ADays': ['pro', 'happy_999_lifetime'],
  'PDF_convertor/': ['VIP', 'com.pdf.convertor.forever'],
  'ChatGPTApp': ['Advanced'],
  'APTV': ['pro'],
  'TouchRetouchBasic': ['premium'],
  'My%20Jump%20Lab': ['lifetime'],
  '%E7%9B%AE%E6%A0%87%E5%9C%B0%E5%9B%BE': ['pro'],
  'Paku': ['pro'],
  'Awesome%20Habits': ['premium'],
  'Gear': ['pro', 'com.gear.app.yearly'],
  'MoneyThings': ['Premium'],
  'Anybox': ['pro'],
  'Fileball': ['filebox_pro'],
  'Noto': ['pro'],
  'Grow': ['grow.pro', 'grow_lifetime'],
  'WidgetSmith': ['Premium'],
  'Reflix': ['com.magicgroot.reflix.entitlements','com.magicgroot.reflix.subs.lifetime'],
  'Percento': ['premium'],
  'Planny': ['premium'],
  'CPUMonitor': ['Pro'],
  'Locket': ['Gold'],
  'My%20Tim': ['Pro'],
  'Photom': ['premium', 'pixelmator_photo_pro_subscription_v1_pro_offer'],
  'mizframa': ['premium', 'mf_20_lifetime2'],
  'YzyFit/': ['pro', 'yzyfit_lft_v2'],
  'ImageX': ['imagex.pro.ios', 'imagex.pro.ios.lifetime'],
  'Fin': ['premium', 'com.circles.fin.premium.yearly'],
  'Ledger': ['Pro', 'com.lifetime.pro'],
  'One4Wall': ['lifetime', 'lifetime_key'],
  'PhotoMark/': ['Pro', 'com.photo.mark.forever'],
  'SimpleScan/': ['premium', 'com.atlantia.SimpleScan.Purchases.Lifetime'],
  'OneWidget': ['allaccess'],
  'CardPhoto': ['premium'],
  'ProCamera': ['private_lightbox_entitlement&san_fran_entitlement&pro_camera_up_entitlement&procamera_full_entitlement','com.cocologics.ProCamera.Up.Yearly'],
  'Journal_iOS/': ['PRO'],
  'LemonKeepAccounts/': ['VIP','lm_1_1month'],
  'PDF%20Viewer': ['sub.pro'],
  'PhotoRoom': ['business'],
  'Decision': ['com.nixwang.decision.entitlements.pro'],
  'Tangerine': ['Premium'],
  'PastePal': ['premium'],
  'Fiery': ['premium'],
  'Airmail': ['Airmail Premium'],
  'Stress': ['StressWatch Pro'],
  'PinPaper': ['allaccess'],
  'Echo': ['PLUS'],
  'MyThings': ['pro','xyz.jiaolong.MyThings.pro.infinity'],
  'Overdue': ['Pro'],
  'BlackBox': ['plus','app.filmnoir.appstore.purchases.lifetime'],
  'Spektr': ['premium'],
  'MusicMate': ['premium','mm_lifetime_68_premium'],
  '%E4%BA%8B%E7%BA%BF': ['pro','xyz.jiaolong.eventline.pro.lifetime'],
  'Tasks': ['Pro'],
  'Currency': ['plus'],
  'money_manager': ['premium'],
  'fastdiet': ['premium'],
  'Blurer': ['paid_access'],
  'Everlog': ['premium'],
  'reader': ['vip2','com.valo.reader.vip2.year'],
  'GetFace': ['Pro access'],
  'intervalFlow': ['All Access','wodtimer_lf_free'],
  'Period%20Calendar': ['Premium','com.lbrc.PeriodCalendar.premium.yearly'],
  'Cookie': ['allaccess','app.ft.Bookkeeping.lifetime'],
  'ScientificCalculator': ['premium','com.simpleinnovation.calculator.ai.premium.yearly.base'],
  'MOZE': ['premium'],
  '1LemonKeepAccounts/': ['vip'],
  'To%20Me/': ['Premium'],
  '%E8%A8%80%E5%A4%96%E7%AD%86%E8%A8%98/': ['Premium'],
  'alcohol.tracker': ['pro','drinklog_lifetime'],
  'DayPoem': ['Pro Lifetime'],
  'Budget%20Flow': ['full_access','com.fabian.hasse.haushaltsbuch.upgrade.combined'],
  'G%20E%20I%20S%20T': ['memorado_premium'],
  'multitimer_app': ['premium','timus_lt'],
  'Darkroom': ['co.bergen.Darkroom.entitlement.allToolsAndFilters'],
  'tiimo': ['full_access'],
  'FaceMa/': ['Pro access'],
  'Record2Text/': ['Pro access'],
  'jinduoduo_calculator': ['jinduoduoapp','mobile_vip'],
  'Focused%20Work': ['Pro'],
  'GoToSleep': ['Pro'],
  'kegel': ['kegel_pro'],
  'Ochi': ['Pro'],
  'Pomodoro': ['Plus','com.MINE.PomodoroTimer.plus.yearly'],
  'universal/': ['Premium','remotetv.yearly.07'],
  'ShellBean/': ['pro','com.ningle.shellbean.subscription.year'],
  'AI%20Art%20Generator/': ['Unlimited Access'],
  'Email%20Me': ['premium'],
  'GoodThing/': ['pro','goodhappens_basic_year'],
  'Reels%20Editor': ['Unlimited Access'],
  'com.dison.diary': ['vip'],
  'iRead': ['vip'],
  'jizhi': ['jizhi_vip'],
  'card/': ['vip'],
  'EraseIt/': ['ProVersionLifeTime'],
  'Alpenglow': ['newPro'],
  'MindBreathYoga/': ['lifetimeusa'],
  'MetadataEditor': ['unlimited_access'],
  '%E6%9F%A5%E5%A6%86%E5%A6%86': ['Pro access'],
  '%E5%85%83%E6%B0%94%E8%AE%A1%E6%97%B6': ['plus'],
  'WidgetCat': ['MiaoWidgetPro'],
  'Emphasis/': ['premium'],
  'FormScanner/': ['Pro','formscanner_lifetime'],
  'streamer/': ['Premium'],
  'NeatNook/': ['com.neatnook.pro','com.neatnook.pro.forever'],
  'Blackout/': ['premium','blackout_299_lt'],
  'Budgetify/': ['premium','budgetify_3999_lt'],
  'Dedupe/': ['Pro','com.curiouscreatorsco.Dedupe.pro.lifetime.notrial.39_99'],
  'Wozi': ['wozi_pro_2023']
};

// =========    固定部分  ========= // 
// =========  @ddgksf2021 ========= // 
var _0xodF='jsjiami.com.v7';function _0x52ea(_0x3ea8b3,_0x5559a4){var _0x3b9dd1=_0x3b9d();return _0x52ea=function(_0x52eaee,_0x3ab28b){_0x52eaee=_0x52eaee-0x167;var _0xa7cab=_0x3b9dd1[_0x52eaee];if(_0x52ea['ggTMmB']===undefined){var _0x950288=function(_0x37bf5b){var _0x78e8dd='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';var _0x192f0b='',_0x31676d='';for(var _0x400f1d=0x0,_0x110761,_0x902d8a,_0x2991a3=0x0;_0x902d8a=_0x37bf5b['charAt'](_0x2991a3++);~_0x902d8a&&(_0x110761=_0x400f1d%0x4?_0x110761*0x40+_0x902d8a:_0x902d8a,_0x400f1d++%0x4)?_0x192f0b+=String['fromCharCode'](0xff&_0x110761>>(-0x2*_0x400f1d&0x6)):0x0){_0x902d8a=_0x78e8dd['indexOf'](_0x902d8a);}for(var _0x15ba08=0x0,_0x32e6ee=_0x192f0b['length'];_0x15ba08<_0x32e6ee;_0x15ba08++){_0x31676d+='%'+('00'+_0x192f0b['charCodeAt'](_0x15ba08)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x31676d);};var _0x2a013a=function(_0x5333c4,_0x5070d0){var _0x56aa5a=[],_0x65ca10=0x0,_0x87bf3,_0x1bcb39='';_0x5333c4=_0x950288(_0x5333c4);var _0xbd10e0;for(_0xbd10e0=0x0;_0xbd10e0<0x100;_0xbd10e0++){_0x56aa5a[_0xbd10e0]=_0xbd10e0;}for(_0xbd10e0=0x0;_0xbd10e0<0x100;_0xbd10e0++){_0x65ca10=(_0x65ca10+_0x56aa5a[_0xbd10e0]+_0x5070d0['charCodeAt'](_0xbd10e0%_0x5070d0['length']))%0x100,_0x87bf3=_0x56aa5a[_0xbd10e0],_0x56aa5a[_0xbd10e0]=_0x56aa5a[_0x65ca10],_0x56aa5a[_0x65ca10]=_0x87bf3;}_0xbd10e0=0x0,_0x65ca10=0x0;for(var _0x3e48a9=0x0;_0x3e48a9<_0x5333c4['length'];_0x3e48a9++){_0xbd10e0=(_0xbd10e0+0x1)%0x100,_0x65ca10=(_0x65ca10+_0x56aa5a[_0xbd10e0])%0x100,_0x87bf3=_0x56aa5a[_0xbd10e0],_0x56aa5a[_0xbd10e0]=_0x56aa5a[_0x65ca10],_0x56aa5a[_0x65ca10]=_0x87bf3,_0x1bcb39+=String['fromCharCode'](_0x5333c4['charCodeAt'](_0x3e48a9)^_0x56aa5a[(_0x56aa5a[_0xbd10e0]+_0x56aa5a[_0x65ca10])%0x100]);}return _0x1bcb39;};_0x52ea['jOOxrV']=_0x2a013a,_0x3ea8b3=arguments,_0x52ea['ggTMmB']=!![];}var _0x46d478=_0x3b9dd1[0x0],_0x4a3bdb=_0x52eaee+_0x46d478,_0x26d14e=_0x3ea8b3[_0x4a3bdb];return!_0x26d14e?(_0x52ea['kXBdra']===undefined&&(_0x52ea['kXBdra']=!![]),_0xa7cab=_0x52ea['jOOxrV'](_0xa7cab,_0x3ab28b),_0x3ea8b3[_0x4a3bdb]=_0xa7cab):_0xa7cab=_0x26d14e,_0xa7cab;},_0x52ea(_0x3ea8b3,_0x5559a4);}function _0x3b9d(){var _0x1a81c9=(function(){return[_0xodF,'HWHjxsIjCinpaNOmQyig.ncFoem.bvI7unpGuXlY==','W7rUxZtcImo3pmkL','W5XtWOe1bdBcJ8kCWRCGiCoZW48fW4JdHSoCW5VcG8oz','WQu1zv3cPColnSkeWRivW5aAW4HeqCkcySoJW7RdRmkfWOtdHr8YWOtcLHLj','bSozWP7dQvupW4DCAG','ECoMW6WTy8k/BmkhWRFcO0OUWQG','W4WJfhOLhKlcNIBcQmkBca','WQnuWP3dHSkWyazXmCkyWO7dQ8kU','WQ0Zra','WQn7DCoqrIzkr8ozvCkTjmokW68','W7ajW5JcMmo8o1DuoSkXWPhdLa','sSkxvM/cG8oymx7dVbBdP8oytZDqWQtcPGdcR8kVCtS5oCo/W4vuWO1Z','WQ4JWPNdVCkzWPeFWQbuWQNdHmke','5OcY5zw05l625OMD5yQa5ysr5PEs5O6C772755sp5AgF6Bkh5yMr5lIL77+e6k+85yMx5zE75y+U5OUZ5yIb5lI65lMg5lQ677+C','W57dM8oXWPHEBbDPWPBdSa','xmk6vsiTESo/WPr8W4dcP04'].concat((function(){return['hCkPq1ZcJmoVW51QWPiSowHMWRFdM8kxW5RcJ8oryq','WRyOzXFcTmomjCkWWQGxWODeWO0EcCkBDCo0','WQiZtSkoD2xcK8oHntRdJCo6BmonW51sW6v4W4NcTtNdQ8kAW7ZcOSoPD3xcSG','e0yuhJrYWR8QWP4yqG','wmk6vseQFCozWPzNW5VcOeu','AKm2WQyFpW0','WQG1EH7cOmod','W53dJCkMW4tdLSoXi1W','W6GuxNDKWRDho3JcRG','W43dMCkfBa8gWPvdW5KJrSkiWRa','WQODWRhcTSkynCoAW43dTSkE','f05EwNnjWOKZ','WPVcNCkMW5SnkXTCWQddSCosnG','WPZcNSkNW6ddOW','5PoR5lYJ5OI95yQY8j+oJVgdV7lXJy+waLO2WO3cLCkqWQbljrCw44cr6isu55we5z2HW4/dQNVdL8ksnSkmWQ9SlSojoSk1c2CAW6FdK1eMW7ZcPSklW6Ld','W6PzuN58W77cSIetW6T/xCowqdNdICocWRDLrG','WRiSt8ojzW'].concat((function(){return['W6pdOLNdOMOBW4VdKCoEet10tMe','WP9XnKe3CNZcQSoDW5u','W4xcTG1GzmoVhq3dLCoY','WQLsctCWW7DTdfxcTbBcGa','gG0IWRLCW6uwWPnH','W6WMWP7cTSk/bCog','WOlcH8kzcWxcH8oSzga','WOlcGSoe','WRFcVmk/itNcQSoAtehdOGFcTG','iCofuSoiAxpdMqtcVYCGW7C','WRL3mub5qxlcRCowW5m','WQKKWOdcIqrgWOtcUrHJrW','lqBcR8koEmo6WOC','Ee7cOuLnWQlcSwG','bmkmWQxdPCoGqWZdNCkhjG','WQa1EJBcOmomoq'];}()));}()));}());_0x3b9d=function(){return _0x1a81c9;};return _0x3b9d();};var _0x31b760=_0x52ea;(function(_0x743d38,_0x1bf72e,_0x279e3b,_0x9f43dc,_0xe2a57e,_0x2b8876,_0x3d39f0){return _0x743d38=_0x743d38>>0x8,_0x2b8876='hs',_0x3d39f0='hs',function(_0x65a64c,_0x1f16db,_0x210d0c,_0x3978be,_0x357e70){var _0x5b590d=_0x52ea;_0x3978be='tfi',_0x2b8876=_0x3978be+_0x2b8876,_0x357e70='up',_0x3d39f0+=_0x357e70,_0x2b8876=_0x210d0c(_0x2b8876),_0x3d39f0=_0x210d0c(_0x3d39f0),_0x210d0c=0x0;var _0xc23658=_0x65a64c();while(!![]&&--_0x9f43dc+_0x1f16db){try{_0x3978be=-parseInt(_0x5b590d(0x17c,'DplK'))/0x1+parseInt(_0x5b590d(0x169,'CQUZ'))/0x2*(-parseInt(_0x5b590d(0x188,'LaW^'))/0x3)+parseInt(_0x5b590d(0x191,'7yWD'))/0x4+parseInt(_0x5b590d(0x178,'!FyN'))/0x5*(parseInt(_0x5b590d(0x195,'VEJ('))/0x6)+-parseInt(_0x5b590d(0x196,'7yWD'))/0x7*(-parseInt(_0x5b590d(0x183,'XJf3'))/0x8)+-parseInt(_0x5b590d(0x189,'I8D4'))/0x9+parseInt(_0x5b590d(0x18b,'aWAg'))/0xa*(parseInt(_0x5b590d(0x16d,'VEJ('))/0xb);}catch(_0x4d5ec9){_0x3978be=_0x210d0c;}finally{_0x357e70=_0xc23658[_0x2b8876]();if(_0x743d38<=_0x9f43dc)_0x210d0c?_0xe2a57e?_0x3978be=_0x357e70:_0xe2a57e=_0x357e70:_0x210d0c=_0x357e70;else{if(_0x210d0c==_0xe2a57e['replace'](/[XgnNbFyYlCuIOpxeQGWH=]/g,'')){if(_0x3978be===_0x1f16db){_0xc23658['un'+_0x2b8876](_0x357e70);break;}_0xc23658[_0x3d39f0](_0x357e70);}}}}}(_0x279e3b,_0x1bf72e,function(_0x224e4d,_0x54cf0f,_0x3dc40b,_0x3427ec,_0x4f99ea,_0x1742b5,_0xfbe07a){return _0x54cf0f='\x73\x70\x6c\x69\x74',_0x224e4d=arguments[0x0],_0x224e4d=_0x224e4d[_0x54cf0f](''),_0x3dc40b='\x72\x65\x76\x65\x72\x73\x65',_0x224e4d=_0x224e4d[_0x3dc40b]('\x76'),_0x3427ec='\x6a\x6f\x69\x6e',(0x192085,_0x224e4d[_0x3427ec](''));});}(0xc900,0x5ac5b,_0x3b9d,0xcb),_0x3b9d)&&(_0xodF=0xb35);var ua=$request['headers'][_0x31b760(0x17d,'HT[1')]||$request[_0x31b760(0x17f,'3PCZ')]['user-agent'],obj=JSON[_0x31b760(0x16f,'CQUZ')]($response['body']);obj[_0x31b760(0x177,'fyu&')]=_0x31b760(0x18f,'L*8u');var ddgksf2013={'is_sandbox':![],'ownership_type':_0x31b760(0x179,'JPYr'),'billing_issues_detected_at':null,'period_type':_0x31b760(0x168,'XJf3'),'expires_date':_0x31b760(0x184,'xFMr'),'grace_period_expires_date':null,'unsubscribe_detected_at':null,'original_purchase_date':_0x31b760(0x192,'raX*'),'purchase_date':'2022-09-08T01:04:17Z','store':'app_store'},ddgksf2021={'grace_period_expires_date':null,'purchase_date':_0x31b760(0x171,'^b@I'),'product_identifier':_0x31b760(0x194,'!sYB'),'expires_date':'2099-12-18T01:04:17Z'};const match=Object['keys'](mapping)['find'](_0x2d4787=>ua['includes'](_0x2d4787));if(match){const [key,product_id]=mapping[match];product_id?(ddgksf2021[_0x31b760(0x193,'XJf3')]=product_id,obj[_0x31b760(0x175,'^J8$')]['subscriptions'][product_id]=ddgksf2013):obj[_0x31b760(0x16a,'JYeS')]['subscriptions'][_0x31b760(0x185,'XJf3')]=ddgksf2013;obj[_0x31b760(0x174,'HT[1')][_0x31b760(0x18c,'I8D4')]={};if(key[_0x31b760(0x180,'q3!$')]('&')){let parts=key[_0x31b760(0x172,'!sYB')]('&');parts[_0x31b760(0x182,'XJf3')](_0x563180=>{var _0x2d48ba=_0x31b760;obj[_0x2d48ba(0x16c,'!FyN')]['entitlements'][_0x563180]=ddgksf2021;});}else obj[_0x31b760(0x190,'Zger')][_0x31b760(0x17b,'JPYr')][key]=ddgksf2021;}else obj[_0x31b760(0x181,'vGhG')][_0x31b760(0x16b,'Z#v]')][_0x31b760(0x18d,'mXiu')]=ddgksf2013,obj['subscriber'][_0x31b760(0x18e,'JqZu')][_0x31b760(0x17a,'ZpT*')]=ddgksf2021;console[_0x31b760(0x18a,'!sYB')](_0x31b760(0x170,'VEJ(')),$done({'body':JSON[_0x31b760(0x186,'nS%t')](obj)});var version_ = 'jsjiami.com.v7';