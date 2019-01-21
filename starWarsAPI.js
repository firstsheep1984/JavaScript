function getCharacter() {
    $.ajax({ url: "https://swapi.co/api/people/" }).done(response => {
        console.log(response);
        let keyword = response["results"];
        keyword.forEach(element => {
            let message = "";
            message = `${message} name: ${element["name"]},<br/>height: ${element["height"]},<br/>mass: ${element["mass"]} `;
            addElement(message);

        });


    });
}
var counter = 1;
function getCharacter2() {
    let myurl = "https://swapi.co/api/people/" + counter;
    counter++;
    $.ajax({ url: myurl }).done(response => {
        console.log(response);

        let message = "";
        message = `${message} name: ${response["name"]},<br/>height: ${response["height"]},<br/>mass: ${response["mass"]} `;
        addElement(message);

    }).fail(myError);

}

function myError() {
    console.error("error");
}

function addElement(message) {
    let newTag = document.createElement('p');
    newTag.innerHTML = message;
    let displayAll = document.getElementById('displayAll');
    displayAll.appendChild(newTag);
}