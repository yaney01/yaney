[rewrite_local]

^https?:\/\/.*yangjibao\.com\/(?:wxapi\/)?account|vip_info url script-response-body https://github.com/yaney01/yaney/blob/main/Scripts/yjb.js
[mitm] 

hostname = *.yangjibao.com


var body = $response.body.replace(/vip_label":false/g, 'vip_label":true')
						 .replace(/vip_expiry_date":null/g, 'vip_expiry_date":"2099-12-31"')
						 .replace(/is_pay":false/g, 'is_pay":true');
$done({ body });
