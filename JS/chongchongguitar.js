/*
chognchong guitar app unlocks pro
*/
body = $response.body.replace(/\"is_vip\":\"0\"/, "\"is_vip\":\"1\"").replace(/\"expire_date\":\"\"/, "\"expire_date\":\"2030-11-11\"").replace(/\"has_buy\":\"0\"/, "\"has_buy\":\"1\"")
// $notification.post($request.url, $request.method, body)
$done({body});
