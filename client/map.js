(function () {
        var setting = {"height":427,"width":1920,"zoom":13,"queryString":"Cluj-Napoca, Romania","place_id":"ChIJiwtskR8MSUcRixQfMxxgvAs","satellite":false,"centerCoord":[46.78344202432406,23.61651244999996],"cid":"0xbbc601c331f148b","id":"map-9cd199b9cc5410cd3b1ad21cab2e54d3","embed_id":"7529"};
        var d = document;
        var s = d.createElement('script');
        s.src = 'https://1map.com/js/script-for-user.js?embed_id=7529';
        s.async = true;
        s.onload = function (e) {
          window.OneMap.initMap(setting)
        };
        var to = d.getElementsByTagName('script')[0];
        to.parentNode.insertBefore(s, to);
})();