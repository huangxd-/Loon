/*
chordify app unlocks premium
Surge4.0:
http-response https:\/\/chordify\.net\/api\/v1\/users\/me requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/huangxd-/Loon/master/JS/chordify.js
QX 1.0.0:
^https:\/\/chordify\.net\/api\/v1\/users\/me url script-response-body https://raw.githubusercontent.com/huangxd-/Loon/master/JS/chordify.js
Surge & QX Mitm = chordify.net
*/

body = $response.body.replace(/\"member_type\":free/, "\"member_type\":premium")
$done({body});
