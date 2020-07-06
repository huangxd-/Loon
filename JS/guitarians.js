/*
guitarians app unlocks pro
*/

body = $response.body.replace(/\"ad_threshold\": 10/, "\"ad_threshold\": 0")
$done({body});
