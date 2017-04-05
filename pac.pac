function regExpMatch(url, pattern) {    try { return new RegExp(pattern).test(url); } catch(ex) { return false; }    }
    function FindProxyForURL(url, host) {
    if (shExpMatch(url, "*://*.xiami.com/*") || shExpMatch(url, "*://xiami.com/*")) return 'PROXY 61.237.131.59:80';
    if (shExpMatch(url, "*://*.xiami.net/*") || shExpMatch(url, "*://xiami.net/*")) return 'PROXY 61.237.131.59:80';
    if (shExpMatch(url, "*://*xiami*") || shExpMatch(url, "*://*xiami*")) return 'PROXY 61.237.131.59:80';
    if (shExpMatch(url, "*://*.163.*/*") || shExpMatch(url, "*://163.*/*")) return 'PROXY 61.237.131.59:80';
    if (shExpMatch(url, "*://*.youku.com/*") || shExpMatch(url, "*://youku.com/*")) return 'PROXY 61.237.131.59:80';
    if (shExpMatch(url, "*://*.tudou.com/*") || shExpMatch(url, "*://tudou.com/*")) return 'PROXY 61.237.131.59:80';
    if (shExpMatch(url, "*://*.bilibili.com/*") || shExpMatch(url, "*://bilibili.com/*")) return 'PROXY 61.237.131.59:80';
    if (shExpMatch(url, "*://*.126.net/*") || shExpMatch(url, "*://*.*126.net/*")) return 'PROXY 61.237.131.59:80';
    if (shExpMatch(url, "*://*.netease.com:443/*") || shExpMatch(url, "*://*.netease.com/*")) return 'PROXY 61.237.131.59:80';
    if (shExpMatch(url, "*://*.proxy-list.org/*") || shExpMatch(url, "*://proxyproxy.org/*")) return 'PROXY 61.237.131.59:80';
    if (shExpMatch(url, "*://*gtimg.cn/*") || shExpMatch(url, "*://gtimg.cn/*")) return 'PROXY 61.237.131.59:80';
    if (shExpMatch(url, "*://*qqmusic.qq.com/*") || shExpMatch(url, "*://qqmusic.qq.com/*")) return 'PROXY 61.237.131.59:80';
    if (shExpMatch(url, "*://*pingma.qq.com/*") || shExpMatch(url, "*://pingma.qq.com/*")) return 'PROXY 61.237.131.59:80';
    if (shExpMatch(url, "*://*pingfore.qq.com:443/*") || shExpMatch(url, "*://pingfore.qq.com:443/*")) return 'PROXY 61.237.131.59:80';
    if (shExpMatch(url, "*://*douban.fm/*") || shExpMatch(url, "*://douban.fm/*")) return 'PROXY 61.237.131.59:80';
    return 'DIRECT';
}
