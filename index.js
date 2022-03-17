//get xml sitemap
var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "sitemap.xml", false);
xmlhttp.send();
var xmlDoc = xmlhttp.responseXML;

var posts = [];
xmlDoc.querySelectorAll("url").forEach(function (el) {
  let url = el.querySelector("loc").textContent;
  let lastmod = el.querySelector("lastmod").textContent;
  let post = {
    url: url,
    lastMod: lastmod
  };
  posts.push(post);
});

var temp = document.getElementsByTagName("template")[0];
var item = temp.content.querySelector("a");
console.log(item);
posts.forEach(function (post) {
  let url = new URL(post.url);
  let path = url.pathname;
  if(path=="/")return;
  var a = document.importNode(item, true);
  a.href = path;
  a.innerText = path;
  document.body.appendChild(a);
});
