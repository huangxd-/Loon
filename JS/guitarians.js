/*
guitarians app unlocks pro
*/

body = $response.body.replace(/\"member_type\": 0/, "\"member_type\": 2")
$done({body});
