/*
guitarians app unlocks pro
*/

#body = $response.body.replace(/\"ad_threshold\": 10/, "\"ad_threshold\": 0")
#$done({body});

var obj = JSON.parse($response.body); 
obj['result']['member_type'] = 2; 
obj['ad_threshold'] = 0; 
obj['result']['user_profile']['member_type'] = 2; 
obj['user_profile']['member_type'] = 2; 
$done({body: JSON.stringify(obj)});
