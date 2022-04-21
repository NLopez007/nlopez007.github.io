//get xml sitemap
var xhr = new XMLHttpRequest();
xhr.open("GET", "sitemap.xml", true);
xhr.onload = function (e) {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      console.log(xhr.responseText);
    } else {
      console.error(xhr.statusText);
    }
  }
};
xhr.onerror = function (e) {
  console.error(xhr.statusText);
};
xhr.send(null);
var xmlDoc = xhr.responseXML;

var sitemapData = [];
xmlDoc.querySelectorAll("url").forEach(function (el) {
  let url = el.querySelector("loc").textContent;
  let lastmod = el.querySelector("lastmod").textContent;
  let post = {
    url: url,
    lastMod: lastmod
  };
  sitemapData.push(post);
});

var temp = document.getElementsByTagName("template")[0];
var item = temp.content.querySelector("a");
sitemapData.forEach(function (post) {
  let url = new URL(post.url);
  let path = url.pathname;
  if(path=="/")return;
  var a = document.importNode(item, true);
  a.href = path;
  a.innerText = path;
  document.body.appendChild(a);
});
