var studentName = [{
    "name": "Lean",
    "age": 22
},
{
    "name": "Mai",
    "age": 20
}, {
    "name": "Lan",
    "age": 23
},
{
    "name": "Yolanda",
    "age": 26
},
{
    "name": "John",
    "age": 25
},
]
function search() {
    let getName = document.getElementById("firstInput").value;
    let searchName = document.getElementById("searchName");

    for (var i = 0; i < studentName.length; i++) {
        if (studentName[i].name === getName) {
            searchName.innerHTML = "You are in the " + (i + 1) + " place";
        }

    };
}

function add() {

    let getNewName = document.getElementById("secondInput").value;
    let getNewAge = document.getElementById("thirdInput").value;
    let element = document.getElementById("addElement");

    let people = { name: getNewName, age: getNewAge };


    element.innerHTML = studentName.push(people);
    
}

function remove() {
    let removeName = document.getElementById("removeName");

    removeName.innerHTML = studentName.pop().name + " has just been removed.";
}

function displayAll() {
    // let displayAll = document.getElementById("displayAll");
    let i = 1;
    let message = '';
    studentName.forEach(function (element) {
        message = message + (element.name + " " + element.age + "<br>");
        i++;
    })
    addElement(message);
}

function displaySorted() {
    
    studentName.sort(compare);
    displayAll();

}

function random(){
    message=studentName[Math.floor(Math.random() * studentName.length)].name;
    addElement(message);
}

function newStudent(){
    
    studentName.forEach(function (element) {
        element.name = element.name.charAt(2) + element.name;   
    })
    displaySorted();
}

function compare(a,b) {
    if (a.name < b.name)
      return -1;
    if (a.name > b.name)
      return 1;
    return 0;
  }
  
  function addElement(message) {
    let newTag = document.createElement('p');
    newTag.innerHTML = message;
    let displayAll = document.getElementById('displayAll');
    displayAll.appendChild(newTag);
}