//get xml sitemap
var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "https://nlopez007.github.io/sitemap.xml", false);
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

//create posts from html template
var postsHTML = "";
posts.forEach(function (post) {
  var template = document.querySelector("#post-template").innerHTML;
  var html = template.replace("{{url}}", post.url);
  postsHTML += html;
});
