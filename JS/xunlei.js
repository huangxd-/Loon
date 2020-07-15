/*
xunlei app unlocks premium
*/

body = $response.body.replace(/\"isVip\":\"0\"/, "\"isVip\":\"1\"").replace(/\"isYear\":\"0\"/, "\"isYear\":\"1\"").replace(/\"payId\":\"0\"/, "\"payId\":\"5\"").replace(/\"vipLevel\":\"0\"/, "\"vipLevel\":\"9\"")
$done({body});
