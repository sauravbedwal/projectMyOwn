const item = document.querySelector("#item");
const toDoBox = document.querySelector("#to-do-box");


const form = document.querySelector("#form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    addToDo(item.value);
    item.value = "";
});


const addToDo = (i) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `${i} <i class="fas fa-times"></i>`;

    listItem.addEventListener("click", function (event) {
        event.target.classList.toggle("done");
        // listItem.classList.toggle("done");             //differnt way as if don't want to use event in function and also instead of listItem we can use this keyword
    });

    listItem.querySelector("i").addEventListener("click", () => {
        listItem.remove();
        store();    //updating
    });

    toDoBox.appendChild(listItem);
    store();        //saving
};

const store = () => {
    const fax = document.querySelectorAll("li");
    const data = [];
    fax.forEach((elem) => {
        data.push(elem.innerText);
    });
    localStorage.setItem("list", JSON.stringify(data));
};


(() => {
    const items = JSON.parse(localStorage.getItem("list"));
    items.forEach((item) => {
        addToDo(item);
    });
})();

