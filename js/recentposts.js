function parseRecentPosts(xml, postCount, maxContentLength) {
  var xmlDoc = xml.responseXML;
  var retArr = [];
  for (var i = 0; i < postCount; i++) {
    var postTitle = xmlDoc.getElementsByTagName("item")[i].
      getElementsByTagName("title")[0].childNodes[0].nodeValue;
    var postUrl = xmlDoc.getElementsByTagName("item")[i].
      getElementsByTagName("link")[0].childNodes[0].nodeValue;
    var postContent = jQuery(xmlDoc.getElementsByTagName("item")[i].
      getElementsByTagName("description")[0].childNodes[0].nodeValue).text().
      slice(0, maxContentLength) + ' ...';
    retArr[i] = {
      title: postTitle,
      url: postUrl,
      content: postContent
    };
  }
  return retArr;
}

function getRecentPosts(xmlAddress, postCount, maxContentLength, callback) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (xhttp.readyState === 4 && xhttp.status === 200) {
      var result = parseRecentPosts(xhttp, postCount, maxContentLength);
      callback(result);
    }
  };

  xhttp.open("GET", xmlAddress, true);
  xhttp.send();
}
