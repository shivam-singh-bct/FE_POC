
const id = sessionStorage.getItem("id");
const blogData = data[id - 1];
const container = document.getElementsByClassName('container')[0];
const date = new Date(blogData.date).toDateString();

container.innerHTML = `<div class="main"> <div class="blog-header"> <div class="blog-title"></div> <div class="blog-category-container"> <div id="category">Category : </div> <div class="blog-category"></div></div> <div id="flex-container"> <div class="blog-author-date-container"> <div class="blog-author"> </div> <div class="published-date"></div> </div> <div class="published-by"> <span id="sp-1">Published By : </span> <span id="sp-2"></span> </div> </div> </div> <div class="blog-content"> <p></p> </div>`;


const setDate = function () {
    const publishedDate = document.getElementsByClassName('published-date')[0];
    var newDate;
    function insert(str, index, value) {
        return str.substr(0, index) + value + str.substr(index);
    }
    for (let i = 0; ; i++) {
        if (date[i] == ' ') {
            newDate = date.substring(i);
            break;
        }
    }
    newDate = insert(newDate, newDate.length - 5, ",");
    publishedDate.innerText = newDate;
}


const setData = function () {
    const titleContainer = document.getElementsByClassName('blog-title')[0];
    const authorContainer = document.getElementsByClassName('blog-author')[0];
    const contentContainer = document.getElementsByClassName('blog-content')[0];
    const publisher = document.getElementById('sp-2');
    const category = document.getElementsByClassName('blog-category')[0];

    titleContainer.innerText = blogData['mini-blog-title'];
    authorContainer.innerText = '- ' + blogData['mini-blog-author'];
    contentContainer.innerText = blogData['content'];
    publisher.innerText = blogData['mini-blog-footer'];
    category.innerText = blogData['category'];
}

setData();
setDate();

window.onbeforeunload = function (event) {
    if (event && event.type == "beforeunload") {
        localStorage.clear();
        sessionStorage.clear();
    }
};