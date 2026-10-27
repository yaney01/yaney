[rewrite_local]
  
^https?:\/\/bzpp3\.iwzbz\.com\/api\/.*\/user\/getvipinfo url script-response-body https://raw.githubusercontent.com/yaney01/yaney/refs/heads/main/Surge/wzbz.js


[mitm] 

hostname=bzpp3.iwzbz.com

***********************************/

var ddgksf2013={
  "code" : -1,
  "data" : {
    "expires" : "2099-01-01 00:00:00",
    "apistr" : "bzapi3",
    "wxno3" : "momo97097",
    "vipLevel" : 3,
    "session" : "",
    "wxno2" : "wzwh0307",
    "wxno4" : "Zhulu50213,zhen202197,zhulu6020",
    "wxno" : "wen2021827"
  },
  "message" : "",
  "validateKey" : "",
  "isSuccess" : true
};
$done({body:JSON.stringify(ddgksf2013)});