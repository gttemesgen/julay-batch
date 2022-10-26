// Selecting color input & storing it in a variable
const color = document.querySelector("#colorPicker");
let myColor = "";
const height = document.querySelector("#inputHeight");
let myHeight = 1;
const width = document.querySelector("#inputWidth");
let myWidth = 1;
const submitButton = document.querySelector("input[type=submit]");

color.addEventListener("mousemove", function (draw) {
    myColor = draw.target.value;
    // console.log(myColor);
});

// Selecting size input for both height and width
// Storing it in variables



height.addEventListener("mousemove", function (draw) {
    myHeight = draw.target.value;
    // console.log(myHeight);
});



width.addEventListener("mousemove", function (draw) {
    myWidth = draw.target.value;
    // console.log(myWidth);
});



// Making a grid utilizing makeGrid() fuction

function makeGrid() {
    const body = document.getElementsByTagName("body")[0];
    const table = document.querySelector("#pixelCanvas");
    const tableBody = document.createElement("tbody");

    // Removing the previous grid (if any)
    if (table.firstChild) {
        table.firstChild.remove();
    };

    // Making a grid using user input
    for (let i = 0; i < myHeight; i++) {
        const row = document.createElement("tr");

        for (let j = 0; j < myWidth; j++) {
            const cell = document.createElement("td");
            row.appendChild(cell);
        };

        tableBody.appendChild(row);
    };

    table.appendChild(tableBody);
    body.appendChild(table);

    // Adding an event which changes background color for individual cells
    const td = document.getElementsByTagName("td");

    for (let i = 0; i < td.length; i++) {
        td[i].onclick = function () {
            this.style.backgroundColor = myColor;
        };
    };
}

// The code below prevents the grid from disappearing upon submitting the form
const form = document.getElementById("sizePicker");
form.addEventListener("submit", function (event) {
    event.preventDefault();
});

// The final line which runs the makeGrid() function
submitButton.addEventListener("click", makeGrid, false);