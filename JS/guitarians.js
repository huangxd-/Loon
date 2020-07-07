/*
guitarians app unlocks pro
*/

$notification.post('title', 'subtitle', response.body)
body = $response.body.replace(/\"member_type\": 0/, "\"member_type\": 2").replace(/\"ad_threshold\": 10/, "\"ad_threshold\": 0")
$notification.post('title', 'subtitle', {body})
$done({body});
