console.log(" iRingo: ⭕ Siri Response");const e=function(){if("undefined"!=typeof $environment&&$environment["surge-version"])return"Surge";if("undefined"!=typeof $environment&&$environment["stash-version"])return"Stash";if("undefined"!=typeof module&&module.exports)return"Node.js";if("undefined"!=typeof $task)return"Quantumult X";if("undefined"!=typeof $loon)return"Loon";if("undefined"!=typeof $rocket)return"Shadowrocket";if("undefined"!=typeof Egern)return"Egern"}();class t{static name="Lodash";static version="1.2.2";static about(){return console.log(`\n🟧 ${this.name} v${this.version}\n`)}static get(e={},t="",s=void 0){Array.isArray(t)||(t=this.toPath(t));const a=t.reduce(((e,t)=>Object(e)[t]),e);return void 0===a?s:a}static set(e={},t="",s){return Array.isArray(t)||(t=this.toPath(t)),t.slice(0,-1).reduce(((e,s,a)=>Object(e[s])===e[s]?e[s]:e[s]=/^\d+$/.test(t[a+1])?[]:{}),e)[t[t.length-1]]=s,e}static unset(e={},t=""){return Array.isArray(t)||(t=this.toPath(t)),t.reduce(((e,s,a)=>a===t.length-1?(delete e[s],!0):Object(e)[s]),e)}static toPath(e){return e.replace(/\[(\d+)\]/g,".$1").split(".").filter(Boolean)}static escape(e){const t={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};return e.replace(/[&<>"']/g,(e=>t[e]))}static unescape(e){const t={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"};return e.replace(/&amp;|&lt;|&gt;|&quot;|&#39;/g,(e=>t[e]))}}class s{static name="Storage";static version="1.1.0";static about(){return a("",`🟧 ${this.name} v${this.version}`,"")}static data=null;static dataFile="box.dat";static#e=/^@(?<key>[^.]+)(?:\.(?<path>.*))?$/;static getItem(s=new String,a=null){let i=a;if(!0===s.startsWith("@")){const{key:e,path:a}=s.match(this.#e)?.groups;s=e;let r=this.getItem(s,{});"object"!=typeof r&&(r={}),i=t.get(r,a);try{i=JSON.parse(i)}catch(e){}}else{switch(e){case"Surge":case"Loon":case"Stash":case"Egern":case"Shadowrocket":i=$persistentStore.read(s);break;case"Quantumult X":i=$prefs.valueForKey(s);break;case"Node.js":this.data=this.#t(this.dataFile),i=this.data?.[s];break;default:i=this.data?.[s]||null}try{i=JSON.parse(i)}catch(e){}}return i??a}static setItem(s=new String,a=new String){let i=!1;if("object"==typeof a)a=JSON.stringify(a);else a=String(a);if(!0===s.startsWith("@")){const{key:e,path:r}=s.match(this.#e)?.groups;s=e;let n=this.getItem(s,{});"object"!=typeof n&&(n={}),t.set(n,r,a),i=this.setItem(s,n)}else switch(e){case"Surge":case"Loon":case"Stash":case"Egern":case"Shadowrocket":i=$persistentStore.write(a,s);break;case"Quantumult X":i=$prefs.setValueForKey(a,s);break;case"Node.js":this.data=this.#t(this.dataFile),this.data[s]=a,this.#s(this.dataFile),i=!0;break;default:i=this.data?.[s]||null}return i}static removeItem(s){let a=!1;if(!0===s.startsWith("@")){const{key:e,path:i}=s.match(this.#e)?.groups;s=e;let r=this.getItem(s);"object"!=typeof r&&(r={}),keyValue=t.unset(r,i),a=this.setItem(s,r)}else switch(e){case"Surge":case"Loon":case"Stash":case"Egern":case"Shadowrocket":case"Node.js":default:a=!1;break;case"Quantumult X":a=$prefs.removeValueForKey(s)}return a}static clear(){let t=!1;switch(e){case"Surge":case"Loon":case"Stash":case"Egern":case"Shadowrocket":case"Node.js":default:t=!1;break;case"Quantumult X":t=$prefs.removeAllValues()}return t}static#t(e){if(!this.isNode())return{};{this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(e),s=this.path.resolve(process.cwd(),e),a=this.fs.existsSync(t),i=!a&&this.fs.existsSync(s);if(!a&&!i)return{};{const e=a?t:s;try{return JSON.parse(this.fs.readFileSync(e))}catch(e){return{}}}}}static#s(e=this.dataFile){if(this.isNode()){this.fs=this.fs?this.fs:require("fs"),this.path=this.path?this.path:require("path");const t=this.path.resolve(e),s=this.path.resolve(process.cwd(),e),a=this.fs.existsSync(t),i=!a&&this.fs.existsSync(s),r=JSON.stringify(this.data);a?this.fs.writeFileSync(t,r):i?this.fs.writeFileSync(s,r):this.fs.writeFileSync(t,r)}}}const a=(...e)=>console.log(e.join("\n"));var i={Siri:{Settings:{Switch:!0,CountryCode:"SG",Region:"AUTO",Domains:["web","itunes","app_store","movies","restaurants","maps"],Functions:["flightutilities","lookup","mail","messages","news","safari","siri","spotlight","visualintelligence"],Safari_Smart_History:!0},Configs:{VisualIntelligence:{enabled_domains:["pets","media","books","art","nature","landmarks"],supported_domains:["ART","BOOK","MEDIA","LANDMARK","ANIMALS","BIRDS","FOOD","SIGN_SYMBOL","AUTO_SYMBOL","DOGS","NATURE","NATURAL_LANDMARK","INSECTS","REPTILES","ALBUM","STOREFRONT","LAUNDRY_CARE_SYMBOL","CATS","OBJECT_2D","SCULPTURE","SKYLINE","MAMMALS"]},Storefront:{AE:"143481",AF:"143610",AG:"143540",AI:"143538",AL:"143575",AM:"143524",AO:"143564",AR:"143505",AT:"143445",AU:"143460",AZ:"143568",BA:"143612",BB:"143541",BD:"143490",BE:"143446",BF:"143578",BG:"143526",BH:"143559",BJ:"143576",BM:"143542",BN:"143560",BO:"143556",BR:"143503",BS:"143539",BT:"143577",BW:"143525",BY:"143565",BZ:"143555",CA:"143455",CD:"143613",CG:"143582",CH:"143459",CI:"143527",CL:"143483",CM:"143574",CN:"143465",CO:"143501",CR:"143495",CV:"143580",CY:"143557",CZ:"143489",DE:"143443",DK:"143458",DM:"143545",DO:"143508",DZ:"143563",EC:"143509",EE:"143518",EG:"143516",ES:"143454",FI:"143447",FJ:"143583",FM:"143591",FR:"143442",GA:"143614",GB:"143444",GD:"143546",GF:"143615",GH:"143573",GM:"143584",GR:"143448",GT:"143504",GW:"143585",GY:"143553",HK:"143463",HN:"143510",HR:"143494",HU:"143482",ID:"143476",IE:"143449",IL:"143491",IN:"143467",IQ:"143617",IS:"143558",IT:"143450",JM:"143511",JO:"143528",JP:"143462",KE:"143529",KG:"143586",KH:"143579",KN:"143548",KP:"143466",KR:"143466",KW:"143493",KY:"143544",KZ:"143517",TC:"143552",TD:"143581",TJ:"143603",TH:"143475",TM:"143604",TN:"143536",TO:"143608",TR:"143480",TT:"143551",TW:"143470",TZ:"143572",LA:"143587",LB:"143497",LC:"143549",LI:"143522",LK:"143486",LR:"143588",LT:"143520",LU:"143451",LV:"143519",LY:"143567",MA:"143620",MD:"143523",ME:"143619",MG:"143531",MK:"143530",ML:"143532",MM:"143570",MN:"143592",MO:"143515",MR:"143590",MS:"143547",MT:"143521",MU:"143533",MV:"143488",MW:"143589",MX:"143468",MY:"143473",MZ:"143593",NA:"143594",NE:"143534",NG:"143561",NI:"143512",NL:"143452",NO:"143457",NP:"143484",NR:"143606",NZ:"143461",OM:"143562",PA:"143485",PE:"143507",PG:"143597",PH:"143474",PK:"143477",PL:"143478",PT:"143453",PW:"143595",PY:"143513",QA:"143498",RO:"143487",RS:"143500",RU:"143469",RW:"143621",SA:"143479",SB:"143601",SC:"143599",SE:"143456",SG:"143464",SI:"143499",SK:"143496",SL:"143600",SN:"143535",SR:"143554",ST:"143598",SV:"143506",SZ:"143602",UA:"143492",UG:"143537",US:"143441",UY:"143514",UZ:"143566",VC:"143550",VE:"143502",VG:"143543",VN:"143471",VU:"143609",XK:"143624",YE:"143571",ZA:"143472",ZM:"143622",ZW:"143605"}}}};function r(e,i,r){a("☑️ Set Environment Variables","");let{Settings:n,Caches:o,Configs:c}=function(e,a,i){let r=s.getItem(e,i),n={};switch(typeof $argument){case"string":let e=Object.fromEntries($argument.split("&").map((e=>e.split("=").map((e=>e.replace(/\"/g,""))))));for(let s in e)t.set(n,s,e[s]);break;case"object":for(let e in $argument)t.set(n,e,$argument[e])}const o={Settings:i?.Default?.Settings||{},Configs:i?.Default?.Configs||{},Caches:{}};Array.isArray(a)||(a=[a]);for(let e of a)o.Settings={...o.Settings,...i?.[e]?.Settings,...n,...r?.[e]?.Settings},o.Configs={...o.Configs,...i?.[e]?.Configs},r?.[e]?.Caches&&"string"==typeof r?.[e]?.Caches&&(r[e].Caches=JSON.parse(r?.[e]?.Caches)),o.Caches={...o.Caches,...r?.[e]?.Caches};return function e(t,s){for(var a in t){var i=t[a];t[a]="object"==typeof i&&null!==i?e(i,s):s(a,i)}return t}(o.Settings,((e,t)=>("true"===t||"false"===t?t=JSON.parse(t):"string"==typeof t&&(t=t.includes(",")?t.split(",").map((e=>c(e))):c(t)),t))),o;function c(e){return e&&!isNaN(e)&&(e=parseInt(e,10)),e}}(e,i,r);switch(i){case"WeatherKit":Array.isArray(n?.AQI?.ReplaceProviders)||t.set(n,"AQI.ReplaceProviders",n?.AQI?.ReplaceProviders?[n.AQI.ReplaceProviders.toString()]:[]),n.AQI.ReplaceProviders.includes("TWC")&&n.AQI.ReplaceProviders.push("The Weather Channel"),n.AQI.ReplaceProviders.includes("QWeather")&&n.AQI.ReplaceProviders.push("和风天气"),n.AQI.ReplaceProviders.push(void 0),Array.isArray(n?.AQI?.Local?.ReplaceScales)||t.set(n,"AQI.Local.ReplaceScales",n?.AQI?.Local?.ReplaceScales?[n.AQI.Local.ReplaceScales.toString()]:[]);break;case"Siri":Array.isArray(n?.Domains)||t.set(n,"Domains",n?.Domains?[n.Domains.toString()]:[]),Array.isArray(n?.Functions)||t.set(n,"Functions",n?.Functions?[n.Functions.toString()]:[]);break;case"TV":Array.isArray(n?.Tabs)||t.set(n,"Tabs",n?.Tabs?[n.Tabs.toString()]:[])}if(a(`✅ Set Environment Variables, Settings: ${typeof n}, Settings内容: ${JSON.stringify(n)}`,""),c.Locale&&(c.Locale=new Map(c.Locale)),c.i18n)for(let e in c.i18n)c.i18n[e]=new Map(c.i18n[e]);return{Settings:n,Caches:o,Configs:c}}a("v4.0.3(4004)");const n=new class{constructor(e,t=void 0){return console.log("\n🟧 URL v2.1.2\n"),e=this.#a(e,t),this}#a(e,t=void 0){const s=/(?:(?<protocol>\w+:)\/\/(?:(?<username>[^\s:"]+)(?::(?<password>[^\s:"]+))?@)?(?<host>[^\s@/]+))?(?<pathname>\/?[^\s@?]+)?(?<search>\?[^\s?]+)?/,a=/(?<hostname>.+):(?<port>\d+)$/;if(e=e.match(s)?.groups||{},t&&(!(t=t?.match(s)?.groups||{}).protocol||!t.hostname))throw new Error(`🚨 ${name}, ${t} is not a valid URL`);if((e.protocol||t?.protocol)&&(this.protocol=e.protocol||t.protocol),(e.username||t?.username)&&(this.username=e.username||t.username),(e.password||t?.password)&&(this.password=e.password||t.password),(e.host||t?.host)&&(this.host=e.host||t.host,Object.freeze(this.host),this.hostname=this.host.match(a)?.groups.hostname??this.host,this.port=this.host.match(a)?.groups.port??""),e.pathname||t?.pathname){if(this.pathname=e.pathname||t?.pathname,this.pathname.startsWith("/")||(this.pathname="/"+this.pathname),this.paths=this.pathname.split("/").filter(Boolean),Object.freeze(this.paths),this.paths){const e=this.paths[this.paths.length-1];if(e?.includes(".")){const t=e.split(".");this.format=t[t.length-1],Object.freeze(this.format)}}}else this.pathname="";return(e.search||t?.search)&&(this.search=e.search||t.search,Object.freeze(this.search),this.search&&(this.searchParams=this.search.slice(1).split("&").map((e=>e.split("="))))),this.searchParams=new Map(this.searchParams||[]),this.harf=this.toString(),Object.freeze(this.harf),this}toString(){let e="";return this.protocol&&(e+=this.protocol+"//"),this.username&&(e+=this.username+(this.password?":"+this.password:"")+"@"),this.hostname&&(e+=this.hostname),this.port&&(e+=":"+this.port),this.pathname&&(e+=this.pathname),0!==this.searchParams.size&&(e+="?"+Array.from(this.searchParams).map((e=>e.join("="))).join("&")),e}toJSON(){return JSON.stringify({...this})}}($request.url);a(`⚠ url: ${n.toJSON()}`,"");const o=$request.method,c=n.hostname,l=n.pathname;n.pathname.split("/").filter(Boolean),a(`⚠ METHOD: ${o}, HOST: ${c}, PATH: ${l}`,"");const h=($response.headers?.["Content-Type"]??$response.headers?.["content-type"])?.split(";")?.[0];a(`⚠ FORMAT: ${h}`,""),(async()=>{const{Settings:e,Caches:s,Configs:n}=r("iRingo","Siri",i);switch(a(`⚠ Settings.Switch: ${e?.Switch}`,""),e.Switch){case!0:default:let s={};switch(h){case void 0:case"application/x-www-form-urlencoded":case"text/plain":default:case"application/x-mpegURL":case"application/x-mpegurl":case"application/vnd.apple.mpegurl":case"audio/mpegurl":case"text/xml":case"text/html":case"text/plist":case"application/xml":case"application/plist":case"application/x-plist":case"text/vtt":case"application/vtt":break;case"text/json":case"application/json":switch(s=JSON.parse($response.body??"{}"),c){case"api.smoot.apple.com":case"api.smoot.apple.cn":if("/bag"===l){s.enabled=!0,s.feedback_enabled=!0,s?.enabled_domains&&(s.enabled_domains=[...new Set([...s?.enabled_domains??[],...e.Domains])],a("🎉 领域列表",`enabled_domains: ${JSON.stringify(s.enabled_domains)}`,"")),s?.scene_aware_lookup_enabled_domains&&(s.scene_aware_lookup_enabled_domains=[...new Set([...s?.scene_aware_lookup_enabled_domains??[],...e.Domains])],a("🎉 领域列表",`scene_aware_lookup_enabled_domains: ${JSON.stringify(s.scene_aware_lookup_enabled_domains)}`,"")),s.min_query_len=3;let i=s?.overrides;i&&[...new Set([...Object.keys(i),...e.Functions])].forEach((e=>{switch(a("🎉 覆盖列表",`Function: ${e}`,""),e){case"flightutilities":t.set(i,"flightutilities.enabled",!0),t.set(i,"flightutilities.feedback_enabled",!0);break;case"lookup":t.set(i,"lookup.enabled",!0),t.set(i,"lookup.feedback_enabled",!0);break;case"mail":t.set(i,"mail.enabled",!0),t.set(i,"mail.feedback_enabled",!0);break;case"messages":t.set(i,"messages.enabled",!0),t.set(i,"messages.feedback_enabled",!0);break;case"news":t.set(i,"news.enabled",!0),t.set(i,"news.feedback_enabled",!0);break;case"safari":t.set(i,"safari.enabled",!0),t.set(i,"safari.feedback_enabled",!0),t.set(i,"safari.experiments_custom_feedback_enabled",!0);break;case"spotlight":t.set(i,"spotlight.enabled",!0),t.set(i,"spotlight.feedback_enabled",!0);break;case"visualintelligence":t.set(i,"visualintelligence.enabled",!0),t.set(i,"visualintelligence.feedback_enabled",!0),t.set(i,"visualintelligence.enabled_domains",[...new Set([...i.visualIntelligence?.enabled_domains??[],...n.VisualIntelligence.enabled_domains])]),t.set(i,"visualintelligence.supported_domains",[...new Set([...i.visualIntelligence?.supported_domains??[],...n.VisualIntelligence.supported_domains])])}})),s.safari_smart_history_enabled=!!e.Safari_Smart_History,s.smart_history_feature_feedback_enabled=!!e.Safari_Smart_History}}$response.body=JSON.stringify(s);case"application/protobuf":case"application/x-protobuf":case"application/vnd.google.protobuf":case"application/grpc":case"application/grpc+proto":case"application/octet-stream":}case!1:}})().catch((t=>function(t){switch(e){case"Surge":case"Loon":case"Stash":case"Egern":case"Shadowrocket":case"Quantumult X":default:a("","❗️执行错误!",t,"");break;case"Node.js":a("","❗️执行错误!",t.stack,"")}}(t))).finally((()=>function(s={}){switch(e){case"Surge":s.policy&&t.set(s,"headers.X-Surge-Policy",s.policy),a("",`🚩 执行结束! 🕛 ${(new Date).getTime()/1e3-$script.startTime} 秒`,""),$done(s);break;case"Loon":s.policy&&(s.node=s.policy),a("",`🚩 执行结束! 🕛 ${(new Date-$script.startTime)/1e3} 秒`,""),$done(s);break;case"Stash":s.policy&&t.set(s,"headers.X-Stash-Selected-Proxy",encodeURI(s.policy)),a("",`🚩 执行结束! 🕛 ${(new Date-$script.startTime)/1e3} 秒`,""),$done(s);break;case"Egern":case"Shadowrocket":default:a("","🚩 执行结束!",""),$done(s);break;case"Quantumult X":s.policy&&t.set(s,"opts.policy",s.policy),delete s["auto-redirect"],delete s["auto-cookie"],delete s["binary-mode"],delete s.charset,delete s.host,delete s.insecure,delete s.method,delete s.opt,delete s.path,delete s.policy,delete s["policy-descriptor"],delete s.scheme,delete s.sessionIndex,delete s.statusCode,delete s.timeout,s.body instanceof ArrayBuffer?(s.bodyBytes=s.body,delete s.body):ArrayBuffer.isView(s.body)?(s.bodyBytes=s.body.buffer.slice(s.body.byteOffset,s.body.byteLength+s.body.byteOffset),delete s.body):s.body&&delete s.bodyBytes,a("","🚩 执行结束!",""),$done(s);break;case"Node.js":a("","🚩 执行结束!",""),process.exit(1)}}($response)));
