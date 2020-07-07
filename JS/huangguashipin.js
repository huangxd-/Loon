/*
huangguashipin app unlocks unlimited times
*/

body = $response.body.replace(/\"dailyViewNum\":\\d+/, "\"dailyViewNum\":99999")
.replace(/\"leftViewNum\":\\d+/, "\"leftViewNum\":99999")
.replace(/\"vipExpiredDate\":\"[^\"]+\"/, "\"vipExpiredDate\":\"1800000000\"")
.replace(/\"ExpiredDays\":\\d+/, "\"ExpiredDays\":999")
.replace(/\"isExpired\":\\d+/, "\"isExpired\":2")
.replace(/\"extrViewNumber\":\\d/, "\"extrViewNumber\":99999")
.replace(/\"remainPlayCnt\":\\d+/, "\"remainPlayCnt\":9999")
.replace(/startPageAd/, "startPagedA")
.replace(/ads\":/, "ads_\":")
$notification.post($request.url, $request.method, $body)
$done({body});
