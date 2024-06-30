let body = document.getElementsByTagName("body");
const urlParams = new URLSearchParams(window.location.search);
const blogId = urlParams.get('id')

function renderBlogIndex(json){
    body[0].innerHTML += "<main></main>";
    let main = document.getElementsByTagName("main");
    main[0].innerHTML = "";
    json.forEach(card => {
        var title = card["title"];
        var description = card["description"];
        var date = card["date"];
        var ref = card["ref"];
        main[0].innerHTML += 
        `<div class="card">
        <strong>${title}</strong>
        <div class="date">${date}</div>
        <hr>
        <div class="description">${description}</div> 
        <div class="card-link"><a href="${ref}">Read More</a></div>
        </div>`;
    });
}

function renderBlog(md){
    body[0].innerHTML += `<div id="blog-content"></div>`;
    let blog = document.getElementById("blog-content");
    blog.innerHTML = marked.parse(md);
}

if (blogId === null) {

    fetch('/blogs/blog-list.json')
    .then((response) => response.json())
    .then((json) => renderBlogIndex(json.reverse()));

} else {
    fetch(`/blogs/${blogId}/main.md`)
    .then((response) => response.text())
    .then((md) => renderBlog(md));
}

  






