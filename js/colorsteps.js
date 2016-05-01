'use strict';

function draw_logic(){
    var color_left = random_hex();
    var color_right = random_hex();
    document.getElementById('canvas').style.background = random_hex();

    var row = Math.floor(height / 80);
    do{
        var row_y = height - row * 80 - 50;

        buffer.fillStyle = color_left;
        var column = Math.floor(width / 200);
        do{
            var column_x =
              column * 200
              + (row % 2 === 0 ? 100 : 0);

            buffer.beginPath();
            buffer.moveTo(
              column_x,
              row_y
            );
            buffer.lineTo(
              column_x + 100,
              row_y - 30
            );
            buffer.lineTo(
              column_x + 100,
              row_y + 20
            );
            buffer.lineTo(
              column_x,
              row_y + 50
            );
            buffer.closePath();
            buffer.fill();
        }while(column--);

        buffer.fillStyle = color_right;
        column = Math.floor(width / 200);
        do{
            column_x =
              column * 200
              - (row % 2 === 0 ? 100 : 0);

            buffer.beginPath();
            buffer.moveTo(
              column_x + 100,
              row_y - 30
            );
            buffer.lineTo(
              column_x + 200,
              row_y
            );
            buffer.lineTo(
              column_x + 200,
              row_y + 50
            );
            buffer.lineTo(
              column_x + 100,
              row_y + 20
            );
            buffer.closePath();
            buffer.fill();
        }while(column--);
    }while(row--);
}

function random_hex(){
    var choices = '0123456789abcdef';
    return '#'
      + choices.charAt(Math.floor(Math.random() * 16))
      + choices.charAt(Math.floor(Math.random() * 16))
      + choices.charAt(Math.floor(Math.random() * 16));
}

function resize_logic(){
    draw();
}

window.onkeyup = draw_logic;
window.onload = init_canvas;
window.onmousedown = draw_logic;
window.ontouchstart = draw_logic;
