/*
xunlei app unlocks premium
*/

body = $response.body.replace(/\"isVip\":\"0\"/, "\"isVip\":\"1\"").replace(/\"isYear\":\"0\"/, "\"isYear\":\"1\"").replace(/\"payId\":\"0\"/, "\"payId\":\"5\"").replace(/\"vipLevel\":\"0\"/, "\"vipLevel\":\"9\"")
// $notification.post($request.url, $request.method, body)
$done({body});
