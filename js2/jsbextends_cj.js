wx.ready(function () {
    var hideLists = [
        'cy679','xazzb','ahjsfhbl','cy689','cy639','cy729','cy859','cy759','cy769','xajjf','xawmb','xapfx','xagxp','xaykx',
		'zallol','crypig','25dfsg','anmosi','bsdzyj','bztakj','xawbb','xafsm','xadhb','cgx365','cy839','qkhg'
    ];
		
    for (var i = 0; i < hideLists.length; i++) {
		var nowu = 'cj.' + hideLists[i] + '.com';
        if (nowu == location.hostname) {
            wx.hideMenuItems({
                menuList: ['menuItem:share:timeline']
            });  
            break;
        }
    }

});