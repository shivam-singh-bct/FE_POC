const title = document.forms["form"]["title"];
const author = document.forms["form"]["author"];
const content = document.forms["form"]["content"];
const publisher = document.forms["form"]["publisher"];
const category = document.forms["form"]["category"];

const validate = function () {

    if (title.value == "") {
        window.alert("Please enter the title.");
        title.focus();
        return false;
    }

    if (author.value == "" || String(author.value).split(' ').length < 1) {
        window.alert("Please enter your name.");
        author.focus();
        return false;
    }

    if (content.value == "" || String(content.value).split(' ').length < 5) {
        window.alert("Content needs atleast 5 words.");
        content.focus();
        return false;
    }

    if (category.value == "" || String(category.value).split(' ').length < 1) {
        window.alert("Please enter the category.");
        category.focus();
        return false;
    }

    if (publisher.value == "" || String(publisher.value).split(' ').length < 1) {
        window.alert("Please enter the publisher's name.");
        publisher.focus();
        return false;
    }

    return true;
}

document.getElementById('create-btn').addEventListener("click", function () {
    if (validate()) {
        const date = new Date();
        const id = data.length + 1;
        const formData = {
            "id": id.toString(),
            "mini-blog-title": String(title.value),
            "mini-blog-author": String(author.value),
            "content": String(content.value),
            "mini-blog-footer": String(category.value),
            "date": date.toString()
        }

        data.push(formData);
        alert("Congrats, your blog has been submitted! Check your email for confirmation.");
        document.forms["form"].reset();
    }
});
