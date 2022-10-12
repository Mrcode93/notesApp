let addBtn = document.querySelector("ion-icon");
let container = document.querySelector(".container");

addBtn.onclick = () => {
    let div = document.createElement("div");
    let del = document.createElement("span");
    del.innerHTML = "x";
    div.appendChild(del);
    div.className = "card";
    del.onclick = () => {
        del.parentElement.remove();
    };
    container.appendChild(div);
    let title = document.createElement("div");
    title.className = "title";
    let paragraph = document.createElement("p");
    paragraph.innerHTML = "Title";
    title.appendChild(paragraph);
    let input = document.createElement("input");
    input.type = "text";
    input.placeholder = "write...";
    title.appendChild(input);
    div.appendChild(title);
    let description = document.createElement("div");
    description.className = "description";

    let text = document.createElement("textarea");
    text.name = "description";
    description.appendChild(text);
    div.appendChild(description);

    let btn = document.createElement("button");
    btn.innerHTML = "Submit";
    btn.type = "submit";
    div.appendChild(btn);
    let submit = document.querySelectorAll("button");
    submit.forEach((e) => {
        e.addEventListener("click", () => {
            let tit = e.previousSibling.previousSibling.lastChild.value;
            let txt = e.previousSibling.firstChild.value;
            let h1 = document.createElement("h1");
            let p = document.createElement("p");
            h1.innerHTML = tit;
            p.innerHTML = txt;
            div.removeChild(title);
            div.removeChild(description);
            div.removeChild(btn);
            div.appendChild(h1);
            div.appendChild(p);
            div.className = "note";
            addLocal(tit, txt);
        });
    });
};

function addLocal(tit, txt) {
    // console.log(tit);
    // console.log(txt);
    let obj = {
        title: `${tit}`,
        description: `${txt}`,
    };
    let objs;
    //add to localStorage
    if (localStorage.getItem("notes") === null) {
        objs = [];
    } else {
        objs = JSON.parse(localStorage.getItem("notes"));
    }
    objs.push(obj);

    localStorage.setItem("notes", JSON.stringify(objs));
}

function showNotes() {
    let note = JSON.parse(localStorage.getItem("notes"));
    for (let i = 0; i < note.length; i++) {
        let tit = note[i].title;
        let des = note[i].description;
        let div = document.createElement("div");
        let del = document.createElement("span");
        del.innerHTML = "x";
        div.appendChild(del);
        div.className = "note";
        let h1 = document.createElement("h1");
        div.appendChild(h1);
        h1.innerHTML = tit;
        let paragraph = document.createElement("p");
        div.appendChild(paragraph);
        paragraph.innerHTML = des;
        container.appendChild(div);
        del.onclick = () => {
            del.parentElement.remove();
        };
    }
}
window.addEventListener("DOMContentLoaded", showNotes);