
const addElement = function (obj) {
    let main = document.getElementsByClassName('main')[0];
    let element = document.createElement('div');
    element.className = "mini-blog-box-outer-div";
    let hiddenElement = document.createElement("input");
    let form = document.createElement("form");
    form.className = "form";
    hiddenElement.setAttribute("type", "hidden");
    hiddenElement.setAttribute("name", "id");
    hiddenElement.setAttribute("value", obj["id"]);
    element.innerHTML = `<div class="mini-blog-box"><div class="mini-blog-box-container"><div class="mini-blog-header"><div class="mini-blog-title"></div><div class="mini-blog-author"></div></div><div class="mini-blog-footer"><p></p></div></div></div>`;
    for (let prop in obj) {
        if (prop != "id" && prop != "category" && prop != "content" && prop != "date") {
            if (prop == "mini-blog-author") {
                element.getElementsByClassName(prop)[0].innerText = "- " + obj[prop]
            }
            else {
                element.getElementsByClassName(prop)[0].innerText = obj[prop];
            }
        }
    }
    element.appendChild(form);
    form.appendChild(hiddenElement);
    main.appendChild(element);
}

for (let i of data) {
    addElement(i);
}

const miniBlogBoxes = document.getElementsByClassName('mini-blog-box-outer-div');
for (let i of miniBlogBoxes) {
    i.addEventListener('click', function () {
        sessionStorage.setItem("id", i.getElementsByTagName('input')[0].value.toString());
    });
}
