function random_hex(){
    return '#'
      + Math.floor(Math.random() * 9)
      + Math.floor(Math.random() * 9)
      + Math.floor(Math.random() * 9);
}

function resize(){
    height = window.innerHeight;
    document.getElementById('canvas').height = height;

    width = window.innerWidth;
    document.getElementById('canvas').width = width;

    document.getElementById('canvas').style.background = random_hex();

    color_left = random_hex();
    color_right = random_hex();

    canvas.clearRect(
      0,
      0,
      width,
      height
    );

    var row = Math.floor(height / 80);
    do{
        var row_y = height - row * 80 - 50;

        canvas.fillStyle = color_left;
        var column = Math.floor(width / 200);
        do{
            var column_x =
              column * 200
              + (row % 2 == 0 ? 100 : 0);

            canvas.beginPath();
            canvas.moveTo(
              column_x,
              row_y
            );
            canvas.lineTo(
              column_x + 100,
              row_y - 30
            );
            canvas.lineTo(
              column_x + 100,
              row_y + 20
            );
            canvas.lineTo(
              column_x,
              row_y + 50
            );
            canvas.closePath();
            canvas.fill();
        }while(column--);

        canvas.fillStyle = color_right;
        column = Math.floor(width / 200);
        do{
            column_x =
              column * 200
              - (row % 2 == 0 ? 100 : 0);

            canvas.beginPath();
            canvas.moveTo(
              column_x + 100,
              row_y - 30
            );
            canvas.lineTo(
              column_x + 200,
              row_y
            );
            canvas.lineTo(
              column_x + 200,
              row_y + 50
            );
            canvas.lineTo(
              column_x + 100,
              row_y + 20
            );
            canvas.closePath();
            canvas.fill();
        }while(column--);
    }while(row--);
}

var canvas = document.getElementById('canvas').getContext('2d');
var color_left = '';
var color_right = '';
var height = 0;
var width = 0;

window.onkeyup = resize;
window.onmousedown = resize;
window.onresize = resize;

resize();
