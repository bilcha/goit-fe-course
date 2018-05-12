const name = document.querySelector(".user-name");
const userId = document.querySelector(".user-id");
const age = document.querySelector(".user-age");
const createBtn = document.querySelector(".create-btn");
const updateBtn = document.querySelector(".update-btn");
const delBtn = document.querySelector(".del-btn");
const consoleDiv = document.querySelector(".console");
const allUserBtn = document.querySelector(".all-user");
const apiUrl = "https://test-users-api.herokuapp.com/users/";

createBtn.addEventListener("click", createClick)
updateBtn.addEventListener("click", updateClick)
delBtn.addEventListener("click", delClick)
allUserBtn.addEventListener("click", allUserClick)

function createClick(){
  addUser(name.value, age.value)
    .then(responseJson => {
      consoleDiv.innerHTML += JSON.stringify(responseJson)+'<br>';
      userId.value =  responseJson.data._id;
  })
    .catch(err => {});
}

function updateClick(){
   updateUser(userId.value, {name: name.value, age: age.value})
    .then(responseJson => {
      consoleDiv.innerHTML += JSON.stringify(responseJson)+'<br>';
  })
    .catch(err => {});
}

function delClick(){
   removeUser(userId.value)
    .then(responseJson => {
      consoleDiv.innerHTML += JSON.stringify(responseJson)+'<br>';
  })
    .catch(err => {});
}

function allUserClick(){
     getAllUsers()
    .then(responseJson => {
      renderTd(responseJson)
  })
    .catch(err => {});
}

function getAllUsers(){
  return fetch(apiUrl)
    .then(response => {return response.json()})
} 

function getUserById(id) {
  return fetch(apiUrl+id)
    .then(response => {return response.json()})
}

function addUser(name, age){
  return fetch(apiUrl, {
    body: JSON.stringify({name: name, age: age}),
    headers: {
      'content-type': 'application/json'
    },
    method: 'POST',
  })
  .then(response => response.json()) 
} 

function removeUser(id){
return fetch(apiUrl+id, {
  method: 'DELETE'
  })
  .then(response => response.json()) 
} 

function updateUser(id, user){
    return fetch(apiUrl+id, {
    body: JSON.stringify(user),
    headers: {
      'content-type': 'application/json'
    },
    method: 'PUT',
  })
  .then(response => response.json()) 
}


function renderTd(users) {
const source = document.querySelector('#tableData').innerHTML.trim();
const compiled = _.template(source);

const result = compiled({
  data: users.data
  });
console.log(result)
const container = document.querySelector(".table");
container.innerHTML = result;
}
