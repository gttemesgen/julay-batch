var height, width, color;

// var height = document.querySelector('#inputHeight').value;
// var width = document.querySelector('#inputWidth').value;
// var color = document.getElementById('colorPicker').value;


document.querySelector('#sizePicker').addEventListener("submit", function (event) {
    event.preventDefault();
    height = document.querySelector('#inputHeight').value;
    width = document.querySelector('#inputWidth').value;
    makeGrid(height, width);
})
/**
 * @parm desc create a grid of squares
 * @param $width - the numbers of squares representing of the grid width
 * @param $height - the number of squares representing of the grid length
 */
function makeGrid(a, b) {
    document.getElementById('pixelCanvas').innerHTML = "";
    for (let i = 1; i <= a; i++) {
        let row = document.createElement("tr");
        document.getElementById('pixelCanvas').appendChild(row);
        for (let j = 1; j <= b; j++) {
            let cell = document.createElement("td");

            cell.addEventListener("click", function addColor() {
                color = document.getElementById('colorPicker').value;
                if ($(this).attr('style')) {
                    $(this).removeAttr('style')
                } else {
                    $(this).attr('style', 'background-color:' + color)
                }
            })
            row.appendChild(cell);
        }
    }

}