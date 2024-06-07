document.querySelector('.todo-button').addEventListener('keypress', (e) => {
    if (e.key === "Enter") {

    }
});


const input = document.querySelector('.todo-input');
const list = document.querySelector('.ul');
const button = document.querySelector('.todo-button');

button.addEventListener('click', (e) => {
        if (!(input.value)) {
            alert("input can't be empty");
        } else {
            const li = document.createElement('li');
            li.innerText = input.value;
            list.appendChild(li);

            const img = document.createElement('img');
            img.src = "images/delete.svg";
            li.appendChild(img);

            input.value = "";
            saveData();
        }
});

list.addEventListener('click', (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();

    } else if (e.target.tagName === "IMG") {
        const ele = e.target.parentElement;
        ele.remove();

        const delList = document.querySelector('.del-list');
        const trashList = document.querySelector('.ul-trash');
        trashList.append(ele);
        console.log(trashList)
        delList.appendChild(trashList);

        saveData();
        saveData1();
    }
});

function saveData() {
    localStorage.setItem("data", list.innerHTML);
}

function showData() {
    list.innerHTML = localStorage.getItem("data");
}
showData();


const ulTrash = document.querySelector('.ul-trash');
ulTrash.addEventListener('click', (e) => {
    if (e.target.tagName === "IMG") {
        e.target.parentElement.remove();
    }
});

function saveData1() {
    localStorage.setItem("data1", ulTrash.innerHTML)
}

function showData1() {
    ulTrash.innerHTML = localStorage.getItem("data1");
}
showData1();
