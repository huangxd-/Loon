/*
quqiyingshi app unlocks vip
*/

body = $response.body.replace(/\"isVip\":\"0\"/, "\"isVip\":\"1\"").replace(/\"vipLevel\":\"0\"/, "\"vipLevel\":\"9\"")
$notification.post($request.url, $request.method, body)
$done({body});
