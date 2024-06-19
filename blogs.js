let main = document.getElementsByTagName("main");

function renderBlogIndex(json){
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

fetch('/blogs/blog-list.json')
    .then((response) => response.json())
    .then((json) => renderBlogIndex(json));

  






