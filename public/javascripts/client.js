let modal;
let name;
let lastname;
let email;
let age;
let form;
let id;

window.onload = function () {
  modal = document.getElementById('myModal');
  name = document.getElementById('name');
  lastname = document.getElementById('lastname');
  email = document.getElementById('email');
  age = document.getElementById('age');
  form = document.getElementById('myForm');
  id = document.getElementById('id');
};

const addUser = function () {
  modal.style.display = 'block';
  name.value = '';
  lastname.value = '';
  email.value = '';
  age.value = '';
};
const editUser = function (user) {
  modal.style.display = 'block';
  form.action = '/users?_method=PUT';
  name.value = user.name;
  lastname.value = user.lastname;
  email.value = user.email;
  age.value = user.age;
  id.value = user.id;
};


const hideModal = function () {
  modal.style.display = 'none';
  console.log('Hello');
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
