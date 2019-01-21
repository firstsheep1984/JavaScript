
function set() {
    const getName = document.getElementById("firstInput");
    getName.value = "John";
}

function clearMe() {
    const clearName = document.getElementById("firstInput");
    clearName.value = "";


}

function clearDefault() {
    const clearName = document.getElementById("firstInput");
    if (clearName.value === "John") {
        clearName.value = "";
    }
}

function changeColor() {
    const changeColor = document.getElementById("firstInput");
    changeColor.style.color = "red";


}

function sendData() {
    const xhrObj = new XMLHttpRequest();
    xhrObj.open("GET", "https://jsonplaceholder.typicode.com/posts");
    xhrObj.onload = function (e) {
        var myJson = xhrObj.response;
        var myObjectFromJson = JSON.parse(xhrObj.response);
        console.log(myObjectFromJson);
        myObjectFromJson.forEach(element => {
            let message = "";
            message = `${message} ${element.userId} ${element.id}`;

            addElement(message);

        });
    };

    xhrObj.send();

}

function sendData2() {
    $.ajax({ url: "https://jsonplaceholder.typicode.com/posts" }).done(response=> {
        console.log(response);
       
    });
}



function addElement(message) {
    let newTag = document.createElement('p');
    newTag.innerHTML = message;
    let displayAll = document.getElementById('displayAll');
    displayAll.appendChild(newTag);
}
