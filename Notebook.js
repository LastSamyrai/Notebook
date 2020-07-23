let notebooks = JSON.parse(localStorage.getItem('nameList')) || [];

let surname = document.getElementById('surname');
let name = document.getElementById('name');
let tel = document.getElementById('tel'); 
let bithday = document.getElementById('bithday');
let email = document.getElementById('email');
let save = document.getElementById('save');

save.onclick = function () {
    let notebook = {
        id: new Date().getTime(),
        surname: surname.value,
        name: name.value,
        tel: tel.value,
        bithday: bithday.value,
        email: email.value
    };
    notebooks.push(notebook);

    localStorage.setItem('nameList',JSON.stringify(notebooks));
    appendName(notebook);
};

function appendName (notebook) {
    let newNotebook = document.createElement('div');
    newNotebook.classList.add('notebook-block');

    let surnameBlock = document.createElement('div');
    surnameBlock.innerText = notebook.surname;
    surnameBlock.classList.add('surname-block');

    let nameBlock = document.createElement('div');
    nameBlock.innerText = notebook.name;
    nameBlock.classList.add('name-block');

    let telBlock = document.createElement('div');
    telBlock.innerText = notebook.tel;
    telBlock.classList.add('tel-block');

    let bithdayBlock = document.createElement('div');
    bithdayBlock.innerText = notebook.bithday;
    bithdayBlock.classList.add('bithday-block');

    let emailBlock = document.createElement('div');
    emailBlock.innerText = notebook.email;
    emailBlock.classList.add('email-block');

    let deleteButton = document.createElement('button');
    deleteButton.innerText = 'delete';

    deleteButton.onclick = function () {
        newNotebook.remove();
        let indexOfBook = notebooks.indexOf(notebook);
        notebooks.splice(indexOfBook, 1);
        localStorage.setItem('nameList', JSON.stringify(notebooks));
    };

    newNotebook.appendChild(surnameBlock);
    newNotebook.appendChild(nameBlock);
    newNotebook.appendChild(telBlock);
    newNotebook.appendChild(bithdayBlock);
    newNotebook.appendChild(emailBlock);
    newNotebook.appendChild(deleteButton);

    document.getElementById('presenter').appendChild(newNotebook);
}

for (const book of notebooks) {
    appendName(book);
}