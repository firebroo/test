var a = 1;
var b = 2;
function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if(pair[0] == variable){
            return pair[1];
        }
    }
    return(false);
}
import JsCookie from 'js-cookie';Vue.http.get('http://proxy-auth.yiducloud.cn/sso/cookies').then((res) => { let { nginx_proxy_session } = res.body; JsCookie.set('nginx_proxy_session', nginx_proxy_session);});
