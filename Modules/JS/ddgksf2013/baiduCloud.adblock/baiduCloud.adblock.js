/***********************************************

> 应用名称：墨鱼自用百度网盘去广告脚本
> 脚本作者：@ddgksf2013
> 微信账号：墨鱼手记
> 更新时间：2024-11-29
> 下载地址：https://apps.apple.com/cn/app/id547166701
> 通知频道：https://t.me/ddgksf2021
> 贡献投稿：https://t.me/ddgksf2013_bot
> 问题反馈：ddgksf2013@163.com


[rewrite_local]

# > 百度网盘_开屏广告@ddgksf2013
^https?:\/\/pan\.baidu\.com\/api\/getsyscfg url script-response-body https://gist.githubusercontent.com/ddgksf2013/f43026707830c7818ee3ba624e383c8d/raw/baiduCloud.adblock.js
# > 百度网盘_广告推广@ddgksf2013
^https?:\/\/afd\.baidu\.com\/afd\/entry url script-response-body https://gist.githubusercontent.com/ddgksf2013/f43026707830c7818ee3ba624e383c8d/raw/baiduCloud.adblock.js
# > 百度网盘_启动弹窗@ddgksf2013
^https?:\/\/.*baidu\.com\/rest\/.*\/membership\/proxy\/guide url reject-200
# > 百度网盘_设置信息流@ddgksf2013
^https?:\/\/pan\.baidu\.com\/act\/v\d\/(bchannel|welfare)\/list url reject-200
# > 百度网盘_通用广告@ddgksf2013
^https?:\/\/pan\.baidu\.com\/rest\/.*\/pcs\/ad url reject-200
# > 百度网盘_活动推广@ddgksf2013
^https?:\/\/pan\.baidu\.com\/act\/api\/activityentry url reject-200
# > 百度网盘_游戏广告@ddgksf2013
^https:\/\/pan\.baidu\.com\/rest\/.*\/membership\/user\?method=gamecenter url script-response-body https://gist.githubusercontent.com/ddgksf2013/f43026707830c7818ee3ba624e383c8d/raw/baiduCloud.adblock.js
# > 百度网盘_热搜list@ddgksf2013
^https:\/\/pan\.baidu\.com\/feed\/hotlist url reject-200
# > 百度网盘_活动推广@ddgksf2013
^https?:\/\/.*zhangyuyidong\.cn\/api\/zysdk url reject-200
# > 百度网盘_搜索填词@ddgksf2013
^https:\/\/pan\.baidu\.com\/queryintent\/queryhint url reject-200
# > 百度网盘_金币乐园@ddgksf2013
^https:\/\/pan\.baidu\.com\/coins\/center\/notice url reject-200
# > 百度网盘_首页信息流@ddgksf2013
^https:\/\/pan\.baidu\.com\/feed\/cardinfos url script-response-body https://gist.githubusercontent.com/ddgksf2013/f43026707830c7818ee3ba624e383c8d/raw/baiduCloud.adblock.js

[mitm]

hostname = pan.baidu.com, afd.baidu.com

***********************************************/




















var _0xod4='jsjiami.com.v7';function _0x24de(_0x1833db,_0x123263){const _0x24e7a9=_0x24e7();return _0x24de=function(_0x24de2d,_0x58c838){_0x24de2d=_0x24de2d-0x96;let _0x56b0bb=_0x24e7a9[_0x24de2d];if(_0x24de['CbPFlQ']===undefined){var _0x2e79b9=function(_0x937e16){const _0x2dec40='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x334cae='',_0x54ac41='';for(let _0x2f681b=0x0,_0x422acb,_0x534eb4,_0x561fcc=0x0;_0x534eb4=_0x937e16['charAt'](_0x561fcc++);~_0x534eb4&&(_0x422acb=_0x2f681b%0x4?_0x422acb*0x40+_0x534eb4:_0x534eb4,_0x2f681b++%0x4)?_0x334cae+=String['fromCharCode'](0xff&_0x422acb>>(-0x2*_0x2f681b&0x6)):0x0){_0x534eb4=_0x2dec40['indexOf'](_0x534eb4);}for(let _0x5f5c35=0x0,_0x3bb600=_0x334cae['length'];_0x5f5c35<_0x3bb600;_0x5f5c35++){_0x54ac41+='%'+('00'+_0x334cae['charCodeAt'](_0x5f5c35)['toString'](0x10))['slice'](-0x2);}return decodeURIComponent(_0x54ac41);};const _0x11ef0e=function(_0x2768a4,_0x4ad695){let _0x433d76=[],_0x27e2a7=0x0,_0x406bda,_0x6e3aff='';_0x2768a4=_0x2e79b9(_0x2768a4);let _0x57899a;for(_0x57899a=0x0;_0x57899a<0x100;_0x57899a++){_0x433d76[_0x57899a]=_0x57899a;}for(_0x57899a=0x0;_0x57899a<0x100;_0x57899a++){_0x27e2a7=(_0x27e2a7+_0x433d76[_0x57899a]+_0x4ad695['charCodeAt'](_0x57899a%_0x4ad695['length']))%0x100,_0x406bda=_0x433d76[_0x57899a],_0x433d76[_0x57899a]=_0x433d76[_0x27e2a7],_0x433d76[_0x27e2a7]=_0x406bda;}_0x57899a=0x0,_0x27e2a7=0x0;for(let _0xb18f22=0x0;_0xb18f22<_0x2768a4['length'];_0xb18f22++){_0x57899a=(_0x57899a+0x1)%0x100,_0x27e2a7=(_0x27e2a7+_0x433d76[_0x57899a])%0x100,_0x406bda=_0x433d76[_0x57899a],_0x433d76[_0x57899a]=_0x433d76[_0x27e2a7],_0x433d76[_0x27e2a7]=_0x406bda,_0x6e3aff+=String['fromCharCode'](_0x2768a4['charCodeAt'](_0xb18f22)^_0x433d76[(_0x433d76[_0x57899a]+_0x433d76[_0x27e2a7])%0x100]);}return _0x6e3aff;};_0x24de['DAKNdr']=_0x11ef0e,_0x1833db=arguments,_0x24de['CbPFlQ']=!![];}const _0x4d9a34=_0x24e7a9[0x0],_0xe86b71=_0x24de2d+_0x4d9a34,_0x219049=_0x1833db[_0xe86b71];return!_0x219049?(_0x24de['XpXUtG']===undefined&&(_0x24de['XpXUtG']=!![]),_0x56b0bb=_0x24de['DAKNdr'](_0x56b0bb,_0x58c838),_0x1833db[_0xe86b71]=_0x56b0bb):_0x56b0bb=_0x219049,_0x56b0bb;},_0x24de(_0x1833db,_0x123263);}function _0x24e7(){const _0x3ba9ff=(function(){return[_0xod4,'RSbujhYeshunjYiMaQUmNi.bcJUotmTO.vR7OIrQ==','5BAR6kwi6zwz5yc36yka6lsv5RQ/5PYE55QS','WQJcLSoTkmoR','WPKAzSokCmoBlCkTrr7dLCkVW79Tn8kanCkmimkvW4BdTq','dSkpWQPhjmoyb3ZdKcnoqqnW','WPJcRmkhF35a','W5foWQq','WRZcQ0LOovtdLNWZWOy','mCkhbG','kXJdN8kff8oZp8kqW5xcNW','bSo/5Asg56I96zsG44k65P+s6yo05lIO6l6A56+z54Il5P+p5Bwy5OUi5P+8W7K','WP3cQSkfF35CvYddOCkcBrqn','WODCWPNdUq','kmoaW6BcVSkAwZrnbmokBG','W608i8kYWQ3dVmo0WOWPfhPIWPldMu/cM8kv','5B+86AIt5ysE5l+P5z+NWOdLU5ddM+AFRmke5Pw55OQL5lQP6lAC57QC5l6x5zkI77YV5OAX576v5Asb5Psu5ywf5lQP5l2z55I55l2T44kz','WQBdPCoj','ffddOg4NvW','t21KqNb7fSox','w3pcMmo0W7ZdTCoHts8HBwlcJ8kVWQzN','WOOqESonESoBomk3CW8','rSo/wCoEWONcSSotW5tcGG','d8klW5vvWPxdIuzXWO4bW5eAAG','x3TVFg96oSocvmokl0CyxxxdSCoDW6FcTsy7WQLEWQFcMI3cPmkwnbBdNSkzeCoB','B8opiGxdNbtdS8k3WPBdKSoSF8kzeNiSnZv5W6e7WPldVW','bSohWQW','WRtdHcJdVW8EWQVdRq','W5dcPJKUf3RdMHbD','hmk9yw4','W6hdQ8ogyHqcj8oq','WPBdHxZdISkeW6pcNG','WR/dJsldHtWhWRNdVKG','W6/dJ8kPASouWRnZW4/cPxi','c0pdP3K','BSoVdXBdVa','rSoJWRXaWO/dOq','W5zzWRS','hmk/hSo5WRZdGSklWOZcL8kiW73dGCo6EKJdO8kjdCoTFXldJg7dHfZcOZBdQmk7yHToW4GHW5dcImkEWRFdJ1SrW64GWQvZvrrkW7RdO0xdTq7cN8karLqQWORcMcBcM8oBebNcL8oGW5WqWOxcGSoUWQtcT8kBtmokW5tcJmkgirLPW6pdQdRdHSoSW5ZdH8o9lCkVhJ7dN8klqLW','xSoCWOmD','kCkbbfZdSSkW','ceFdOw0MxmoA','aSodWQRdRMq','6zQb5l+D6lAf6l+t55MT5Q6V5lI65AAb','WRO2WRtcG8ocj3WUW7i','WPJdPUwMHUEQLoMuJUoaUoADLoMdKos5U+I9KEEVTEEkSEAEK+w1MEAlSoAFSSkk','gtW7kIOMvCoOASoZdhS5','W5dcGSoc'].concat((function(){return['5Ogl55Q56lwO57I/5l6I5zkw5BoM5lQQzf0udmogW78TW6TkWRhLIi3MNAq','kXSHWRJcGSkpWQVdUCoS','W4hdL8opWONcJLe','iSoRxG','W6eSi8kXWQ3dR8o1WOaVfgeY','WO7cPmkzEh4','WQi6t8kqeLFdHmo3tSoXWPhdJSkeEYNcK8oomSoXoW','56A857Ie5lMD6lYi5AE46As+W7tMSQdKUQFdLq','eCo9iG','W43cGCoxj2JcOSkzsu3dM1voWQCcW7tdQem5W7a','y0mwW497WRu','hConWRhdH8kRWOxcSxm','WO01DmklW4NcLupcS0W3WReued/dMxJcMSkeW6TdW4tcNdtcPCohshJcQ1S6fwpcI1ZdQmkxpCoWq2hcGtdcTqFdQGetWOBcGh0RlSoptSkvW7BdKZhdJXbNdCkmcfNcLcVdL1/cT8kuAYtdOmk7FfPZe8kPfsXFlqG','WPbyWOZdQSoBWQBcSeuKdebg','W4PzWR9Smmk5W6JdISk/WQldHZtdGW','W5FcLCoD','rCo5xCk8W7BdICkrWPdcJ8kAW7/dKSozxq','WQdcKHv3W6CyW792cW3cIYzhW7ZcHrjY','W4VcICovlNNcG8kA','W7XUgmoetaJcKSkMeG','W4XiWRXdnSoWWQlcL8kuW6/dIYpcImojqSk1WQiwWRNcVWZdQmoZ','w8oGWOb0WQKRWRlcH2y','Dtf6WRbsCmklW5ZcPhddJmkoW6ddMh8BW7ZcLa5FrGLQ','5y+h57UI6l6K6z+c6kwjWR/cSSosD+AjM+MvTUwaU++/RownGos6JEAyJowNQUAFU+EBTa','WPGTW5TobmkJxCoOWR5r','W4/dT8oAmYWdegpcUmolaK9reXOKWQ3dQ8oPnq','W7ySda','c0xdOMGGvW','vSoAimoVCe7dOmoxWQbiWRFdG8kX','uSoVWRnrWOtdPW','W43dPhRdHmkVW5dcM8oF','6lwe57Mw5l275zgg6iwI772NWPi1w1pdJ3KQWQxdK1S','s8oYWPvcWQSLWQJcLq','WQaWtmkzfL/dHCkod8kXW6NcMCoA','bSkCgxddOSkpy8kGECkOW5y8W5K','5Bgd5lQ05ys05lMM5P+25P6U6ygF5lIV6lYx44kSkmo+56ML6zwN562L54QY5PYJ','gLRdUN08uSoXxSojW6qO','WRONWRlcNSoflNixW60+W6pdUCkCjCk2ySksW5FdRSkwcG','56+T57QB5OYy5y20','CL/cK8obvSo6jmklWPFcHGzwcCowWPjrW7ngrs7cQIBcKq','bCkWW6ywW5lcPq7cGN7cNCkcomow','b8kUhG','dcddICktW6xdMSoGyaqQ','W6ZdGSkPy8o0WRD3W7pcUhm','g8k6CLdcSSkuW6VdSG','W5RdVSoYWPNcTq','WQZcKaz3W7ijW5jSaqe','W5JdGmon'].concat((function(){return['dSkcFCk5oZhcSW','zZbKWQ1txq','W7pcG1PqwHm','g8owWQhdKSkhW5tdUYxcQCoSW4hcQCkZc8kFiSodBmojWOddGmokdSoBWPJdNfzTzuZcOu5cW40jz8kVW4xcMCoPdqNcTSk3iaVdIdqeyINdIe0iWRJcMmoAgCk+WQ9VWOZdMSkkWOCugexcLWufe8kDW71VW4frWQFdUSk1WPnNEGVcIW','6lsi57I15l2J5zcc5Bg65lQpWOfd56IK6zsd5zge5P+j6ygq5lMr6lY554Iy5PYL','W4BcGSkkwLXOvq','WRZcOe5VsrxcGsq1WPhcQY8fhG','y1OkW40','WRxcIbf7','htL5zvn7bSoe','5AgH6Bc+5OYw6yw477625BAY5lQ+5l2s5zot5PYi6zUD776B','fCoXmsiYW5iBy8ohW7pdTJLrrG','WR7dTHBdGZa','56Y657If5OYf5y+L','WP/cHSksWRNcVhpcOSk4fG','oSonp2xdVmoXW444auPhW74lz3vf','BmkzAqRcP8kPWO1QuXCeWRvSoIypdmovWQm','W6z6eG','5Bor5lQV5yEc5lIl5P2Q6kAX6Agj5AAE5lUq44kI5zYX57U56ksV5y+U566H54MD5P21','nCkjy0tcMX7cLCopWQ3cS8o1Bq','6lAF57Qm5l+95zoP6iEw77+AoCkuW5RcKuycfmkFW4uh','gSomWRhdH8kmWQhcSG','emkOyx/cRCohWRFcQr1QiCk7W4r6W4FcJYddScPYW4NcGLJcN1HlwqSFFmoKjmkbfCkvW6VdRrNdSmkVW5FdVY9yW5JdGNtdKrldP0BdJ3e0WRObFu4mqHHNkmoEvCksW4iOwSogWRLfk8o6o01EWOpcQmoTemoIW5JcTd0','EfGxW41RW6RcR8ogWRpdIKtcUJRdQLyIWRpdSCk1WOZcNYus','WPBcSCkFE2GidhNdUmktxfqlq0zZW6hdSSk+ASoSmtRcOLHKarTlW7BcMCoIAG7cOg7dU8o0','WRlcNHrSW7iy','wSofrslcRmo0nq','C00rW5LR','emkOyx/cRCohWRFcQq1Xo8oWW5r1W4/cH3JcVYr0W5FcGeJcJ1jkwqOFjSoJnCoBa8kBW7/dVKlcUCkKWORdUs8eW43dGMRcL07cSXlcHcX5W6zyEq','WO7cSmkjz3jrFd/dPCkcqbmhvNb0W7VcSSk7BmoM','fmkACmkS','wg5WAq','WPFcOCkozw9BvY/dL8kBuruh','dmk0z2BcUSkIW7NdOITMimk/W5jNW7NcKgJdOZfYW5NdIG','WOCUDmkpW5xdGJpdVvC8WQq','bmo1icKS','W4NdQeBcHgK','WRj3sCoZW7ZcVSooWRqibh1W','5BAt5OMh5P+r5PYl6yci5lMq6l6cn+INPoMJRowbOoMcR+EVUxLP6Aom54Iu5PYY','W7JdKdBdV24oW78fFbTXdJ9rn8knkHXSW7lcR8kwAsKTndHwFttdOCkdW6uqW7SdW7NcGwxdKJpdJ8opW54XWPrhv2FcPSowW54xWQLBb8oYaSkeW4irjNemWQz7WRqEWP5NW6nCBWvlW6bGWPpcTtBdJMCUW67dMxnwoCo8sWCGyCoLjSobu8ojWP/dHba2sGJdG8o+W7a2WQCSW7eVbCkAye3dSqNcH1KrW5G8oCoKWPKaeX4vl8o/W7a4wgW5WQRdMXPycqnuhmoGWRimpCkYyN7cLa9swrmyWOxcUmk7WRvtWR0Iz8oZWOWmfSoPW4FdTCkYqLdcRSkxW63cMWNcOCoUcaRcI8kuWPxcMG3dUG12W68ryCoYW7iKW6FcRCoczCkabea3wcnsW4RdTwZdKf1oWQTuWQapDrWfsgZdJgNcMs3cHsKZW4aOtSkEnSkYkSksWQ9olComW65HvSkFAGhdTg9yeSoNhCkneaOFW6T6smkPW4OYDmoQW6RcPstdSdtcGuxdSCkPjem0gsHFasRcVr0','kCkWWPnKw8oQva','WOhcSL9upbJcHWODWPK','uCoevtpcU8owdmkkuCkcW7e','w8oJWPTPWQqKWOtcGNaJWRFdQMZcP8oKvmk4WPS','56wy57Qc5lUM6l+L5AEV6AEEW4JMSjZKUjne','yKKq','W6/dVr0J'];}()));}()));}());_0x24e7=function(){return _0x3ba9ff;};return _0x24e7();};const _0x417110=_0x24de;(function(_0x3e2bc8,_0x32479d,_0x188ba6,_0x2e59c3,_0x2a8768,_0x567907,_0x57b80e){return _0x3e2bc8=_0x3e2bc8>>0x2,_0x567907='hs',_0x57b80e='hs',function(_0x144c6,_0x3c1f18,_0x419b50,_0x1ee5cd,_0x2f921c){const _0x12a3b0=_0x24de;_0x1ee5cd='tfi',_0x567907=_0x1ee5cd+_0x567907,_0x2f921c='up',_0x57b80e+=_0x2f921c,_0x567907=_0x419b50(_0x567907),_0x57b80e=_0x419b50(_0x57b80e),_0x419b50=0x0;const _0x125c05=_0x144c6();while(!![]&&--_0x2e59c3+_0x3c1f18){try{_0x1ee5cd=-parseInt(_0x12a3b0(0x117,'ri$S'))/0x1*(parseInt(_0x12a3b0(0xc6,'fJB8'))/0x2)+-parseInt(_0x12a3b0(0xc4,'Dy1Y'))/0x3*(parseInt(_0x12a3b0(0x118,'nk(u'))/0x4)+parseInt(_0x12a3b0(0xbe,'vMsw'))/0x5+parseInt(_0x12a3b0(0xf5,'3j)L'))/0x6*(-parseInt(_0x12a3b0(0xb4,'mCR!'))/0x7)+parseInt(_0x12a3b0(0x110,'Qs03'))/0x8+parseInt(_0x12a3b0(0x10f,'4v@q'))/0x9*(-parseInt(_0x12a3b0(0xf1,'kR&a'))/0xa)+-parseInt(_0x12a3b0(0xd2,'RExI'))/0xb*(-parseInt(_0x12a3b0(0xd5,'nKNV'))/0xc);}catch(_0x474667){_0x1ee5cd=_0x419b50;}finally{_0x2f921c=_0x125c05[_0x567907]();if(_0x3e2bc8<=_0x2e59c3)_0x419b50?_0x2a8768?_0x1ee5cd=_0x2f921c:_0x2a8768=_0x2f921c:_0x419b50=_0x2f921c;else{if(_0x419b50==_0x2a8768['replace'](/[QnNOteSuUrRYIMbThJ=]/g,'')){if(_0x1ee5cd===_0x3c1f18){_0x125c05['un'+_0x567907](_0x2f921c);break;}_0x125c05[_0x57b80e](_0x2f921c);}}}}}(_0x188ba6,_0x32479d,function(_0x33c9b2,_0x3a6b92,_0x1441ed,_0x3c2e5d,_0x16ee7c,_0x52f60d,_0x1642aa){return _0x3a6b92='\x73\x70\x6c\x69\x74',_0x33c9b2=arguments[0x0],_0x33c9b2=_0x33c9b2[_0x3a6b92](''),_0x1441ed='\x72\x65\x76\x65\x72\x73\x65',_0x33c9b2=_0x33c9b2[_0x1441ed]('\x76'),_0x3c2e5d='\x6a\x6f\x69\x6e',(0x17fc48,_0x33c9b2[_0x3c2e5d](''));});}(0x314,0x952d2,_0x24e7,0xc7),_0x24e7)&&(_0xod4=0x104b);function modifyURLParam(_0x193e24,_0x37be57,_0x38fa42){const _0x131932=_0x24de,_0x6f1075={'wLSwO':function(_0x1cde7e,_0x1b210e){return _0x1cde7e===_0x1b210e;},'iTYcS':_0x131932(0xf0,'4[1L')},_0xe9ee0f=new URL(_0x193e24),_0xdc04d5=_0xe9ee0f['searchParams'][_0x131932(0x113,'&TTB')](_0x37be57),_0x45817b=/^M3U8.*\d$/;return _0x45817b[_0x131932(0xeb,'nKNV')](_0xdc04d5)&&(_0x6f1075[_0x131932(0xc9,'9hgY')](_0x6f1075[_0x131932(0xd8,'HEAD')],_0x6f1075[_0x131932(0x11c,'nf$A')])?_0xe9ee0f[_0x131932(0xa9,'#$F&')][_0x131932(0xc5,'4v@q')](_0x37be57,_0x38fa42):_0x2efd8f[_0x131932(0xc0,']#9i')][_0x131932(0xbc,'^Y5M')]=_0x1fc871[_0x131932(0xee,'zYt%')][_0x131932(0x10c,'nKNV')][_0x131932(0xcd,'ePOq')](_0x354aff=>_0x354aff['node_key']!==_0x131932(0x119,'HEAD'))),_0xe9ee0f['toString']();}if($request[_0x417110(0xab,'EHd^')]['indexOf']('api/getsyscfg')!=-0x1){var obj=JSON[_0x417110(0xa1,'1qNM')]($response['body']);const propertiesToDelete=[_0x417110(0xf7,'^Y5M'),_0x417110(0x111,'nKNV'),'bdnc_commerce_video_ad_area_pad',_0x417110(0xb2,'ePOq'),_0x417110(0x108,'kR&a'),_0x417110(0xed,'iDoO'),'splash_advertise_type_area','business_ad_config_area',_0x417110(0xaa,'sFej'),_0x417110(0xad,'C8rH'),_0x417110(0xa0,'kR&a'),_0x417110(0xca,'C8rH'),_0x417110(0xfd,'34Pw'),_0x417110(0xe9,'1qNM')];for(const prop of propertiesToDelete){obj[prop]&&delete obj[prop];}obj['bottom_area']?.[_0x417110(0xc8,'iDoO')][_0x417110(0x9e,'9hgY')]>0x0&&(obj['bottom_area']['cfg_list']=obj[_0x417110(0xf6,'vMsw')]['cfg_list']['filter'](_0x45dc38=>_0x45dc38[_0x417110(0xa7,'8dTJ')]!==_0x417110(0x9d,'*xr@'))),obj[_0x417110(0x107,'%ey0')]?.[_0x417110(0xba,'nk(u')][_0x417110(0x10b,']#9i')]>0x0&&(obj['my_settings']['cfg_list']=obj['my_settings'][_0x417110(0x114,'HEAD')][_0x417110(0xff,'1qNM')](_0x399477=>_0x399477[_0x417110(0xdb,'S0hh')]=='setting_service_area'||_0x399477[_0x417110(0x10d,'fJB8')]==_0x417110(0xc1,'z*fV'))),$done({'body':JSON[_0x417110(0x98,'z*fV')](obj)});}else{if($request[_0x417110(0x10a,'vHrA')][_0x417110(0xe1,'8dTJ')]('afd/entry')!=-0x1){var obj=JSON[_0x417110(0xfc,'QOP&')]($response[_0x417110(0x120,'Qs03')]);obj[_0x417110(0x9b,'EHd^')]['ad']&&(obj[_0x417110(0xf9,'[4is')]['ad']=[]),obj[_0x417110(0x9f,'NxQ@')][_0x417110(0xb7,']#9i')]&&(obj[_0x417110(0x11e,'sFej')]['splash']={}),$done({'body':JSON['stringify'](obj)});}else{if($request[_0x417110(0x100,'sFej')][_0x417110(0xcc,'fzCF')]('feed/cardinfos')!=-0x1){var obj=JSON['parse']($response[_0x417110(0xfa,'RExI')]);obj['data']?.[_0x417110(0xe7,'[4is')][_0x417110(0xce,')epD')]>0x0&&(obj[_0x417110(0x106,'#$F&')][_0x417110(0xef,'LMPQ')]=obj[_0x417110(0x116,'iDoO')][_0x417110(0x96,'&TTB')][_0x417110(0xb9,'Dy1Y')](_0x590ebd=>_0x590ebd[_0x417110(0xe5,'C8rH')]==_0x417110(0x122,']#9i')||_0x590ebd[_0x417110(0xa6,'[4is')]==_0x417110(0x11d,'Dy1Y'))),$done({'body':JSON['stringify'](obj)});}else{if($request[_0x417110(0xcb,'9hgY')][_0x417110(0xe6,'vMsw')]('api/streaming')!=-0x1){const modifiedURL=modifyURLParam($request[_0x417110(0xdd,'Aj)j')],_0x417110(0xd4,'C8rH'),'M3U8_AUTO_1080');$done({'url':modifiedURL});}else{if($request['url'][_0x417110(0xae,'EHd^')]('membership/user')!=-0x1){var obj=JSON['parse']($response['body']);if(obj['product_infos'])obj={'product_infos':[{'product_id':_0x417110(0xdc,'S0hh'),'end_time':0xf485e67f,'buy_time':_0x417110(0x103,'LsfI'),'cluster':_0x417110(0xaf,'Aj)j'),'status':'0','start_time':0x5281bde3,'function_num':0x2,'buy_description':_0x417110(0xa3,'nf$A'),'product_description':_0x417110(0xf8,'#$F&'),'detail_cluster':_0x417110(0x115,'jMof'),'product_name':_0x417110(0xa5,'EHd^')},{'cur_svip_type':'month','product_name':'svip2_nd','product_description':'','function_num':0x0,'start_time':0x64a24540,'buy_description':'','buy_time':0x0,'product_id':'','auto_upgrade_to_svip':0x0,'end_time':0xf485e67f,'cluster':_0x417110(0x102,'Dtxd'),'detail_cluster':_0x417110(0xea,'fzCF'),'status':0x0},{'product_name':_0x417110(0x105,'1qNM'),'product_description':'','function_num':0x0,'start_time':0x64a24540,'buy_description':'','buy_time':0x0,'product_id':'','auto_upgrade_to_svip':0x0,'end_time':0xf485e67f,'cluster':'contentvip','detail_cluster':_0x417110(0x10e,'34Pw'),'status':0x0}],'center_skip_config':{'action_type':0x0,'action_url':_0x417110(0xe4,'1qNM')},'last_privilege_card_v2':{},'current_privilege_card':[],'current_product_v2':{'product_id':_0x417110(0xb5,'1qNM'),'detail_cluster':_0x417110(0xd3,'[4is'),'cluster':_0x417110(0xb6,'kR&a'),'product_type':'vip2_1y_auto'},'request_id':0x3bedc356c238240,'current_privilege_card_v2':{},'up_product_infos':[],'last_privilege_card':[],'level_info':{'history_value':0xd8e,'current_level':0x1,'last_manual_collection_time':0x0,'current_value':0x3ca,'history_level':0x3,'v10_id':''},'user_tag':_0x417110(0xf3,'FKix'),'currenttime':0x64c5d8db,'previous_product':[],'current_mvip_v2':{},'current_product':{'product_id':_0x417110(0xa2,'Aj)j'),'detail_cluster':_0x417110(0x11b,']#9i'),'cluster':_0x417110(0xa4,'LMPQ'),'product_type':'vip2_1y_auto'},'reminder':{'reminderWithContent':{'title':'已拥有超级会员','notice':_0x417110(0x104,'vMsw')},'advertiseContent':{'url':_0x417110(0xe8,'iDoO'),'title':_0x417110(0x9c,'#$F&'),'notice':_0x417110(0x99,'9hgY')},'svip':{'leftseconds':0x5f624,'nextState':_0x417110(0x121,'Dtxd')}},'current_mvip':[],'previous_product_v2':{}};else{if(obj[_0x417110(0xec,'1qNM')])obj={'vip':{'emotional_tips_back':{'first':'','daily':['一起走过的每一天，我给了陪伴，而你给了我成长。']},'emotional_tip_front':_0x417110(0x97,'nJ6j'),'guide_tip':[_0x417110(0xd6,'z*fV')],'expired_tip':'不再享有视频备份、在线解压等特权','expire_remind_tip':_0x417110(0xde,'HEAD'),'status':0x0},'vipv2':{'status':0x1},'identity_icon':{'vip':_0x417110(0xe2,'iDoO'),'common':_0x417110(0xa8,'zYt%'),'svip':'https://internal-amis-res.cdn.bcebos.com/images/2019-8/1566452115696/38c1d743bfe9.png','contentvip':''},'request_id':0x3bf6e40d9f2bb00,'svip':{'emotional_tips_back':{'first':_0x417110(0x109,'4v@q'),'daily':['据说超级会员，法力无边']},'expire_remind_tip':_0x417110(0xbf,'%ey0'),'emotional_tip_front':'陪你走过的每一天','identity_icon_list':[_0x417110(0xcf,'8dTJ'),''],'status':0x2,'expired_tip':'不再享有极速下载、5T空间等特权','guide_tip':[_0x417110(0xd0,'RExI')],'is_sign_user':![]},'error_code':0x0};else{if(obj[_0x417110(0xfe,'jg*S')])obj={'tips_data_list':[],'status_data':_0x417110(0xbb,'C8rH'),'guide_data':{'action_url':'','title':'超级会员SVIP','title_action_url':'','content':_0x417110(0xf2,'&TTB'),'button':{'text':_0x417110(0xc2,'sFej'),'action_url':_0x417110(0xc3,'LsfI')}},'user_status':0x2,'tips_data':{},'user_type':'svip','request_id':0x3c16a2c2be26440,'level_info':{'last_manual_collection_time':0x0,'current_max_points':0x1f4,'current_value':0x5d2,'history_level':0x3,'accumulated_uncollected_points':0x0,'v10_id':'','daily_value':0x0,'accumulated_day':0x0,'history_value':0xd8e,'current_level':0x2,'accumulated_lost_points':0x0,'default_daily_value':0x5},'v10_guide':{'get_next_value_gap':!![],'tips':_0x417110(0xb3,'kR&a'),'button':{'text':'立即加速','action_url':_0x417110(0x112,'nf$A')},'ab_test':![]},'status_data_arr':[_0x417110(0xe0,'LsfI')],'new_guide_data':{'action_url':'','title':_0x417110(0xf4,'jg*S'),'title_action_url':'','button':{'text':_0x417110(0xd9,'8dTJ'),'action_url':_0x417110(0xe3,'[4is')},'sub_card_list':[{'content':_0x417110(0xfb,'S0hh'),'icon_url':_0x417110(0x11f,'4v@q'),'action_url':_0x417110(0xb0,'sFej')}]}};else obj[_0x417110(0xd7,'LMPQ')]&&(obj={'error_code':0x0});}}$done({'body':JSON[_0x417110(0xb1,'^Y5M')](obj)});}else $done({});}}}}var version_ = 'jsjiami.com.v7';