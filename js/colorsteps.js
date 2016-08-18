'use strict';

function draw_logic(){
    var row = Math.floor(canvas_height / 80);
    do{
        var row_y = canvas_height - row * 80 - 50;

        canvas_buffer.fillStyle = color_left;
        var column = Math.floor(canvas_width / 200);
        do{
            var column_x =
              column * 200
              + (row % 2 === 0 ? 100 : 0);

            canvas_buffer.beginPath();
            canvas_buffer.moveTo(
              column_x,
              row_y
            );
            canvas_buffer.lineTo(
              column_x + 100,
              row_y - 30
            );
            canvas_buffer.lineTo(
              column_x + 100,
              row_y + 20
            );
            canvas_buffer.lineTo(
              column_x,
              row_y + 50
            );
            canvas_buffer.closePath();
            canvas_buffer.fill();
        }while(column--);

        canvas_buffer.fillStyle = color_right;
        column = Math.floor(canvas_width / 200);
        do{
            column_x =
              column * 200
              - (row % 2 === 0 ? 100 : 0);

            canvas_buffer.beginPath();
            canvas_buffer.moveTo(
              column_x + 100,
              row_y - 30
            );
            canvas_buffer.lineTo(
              column_x + 200,
              row_y
            );
            canvas_buffer.lineTo(
              column_x + 200,
              row_y + 50
            );
            canvas_buffer.lineTo(
              column_x + 100,
              row_y + 20
            );
            canvas_buffer.closePath();
            canvas_buffer.fill();
        }while(column--);
    }while(row--);
}

function update_colors(){
    color_left = random_hex();
    color_right = random_hex();
    document.getElementById('canvas').style.background = random_hex();
}

var color_left = '';
var color_right = '';

window.onload = function(e){
    canvas_init();
    input_init(
      {
        'all': {
          'todo': update_colors,
        },
      },
      {
        'mousedown': {
          'todo': update_colors,
        },
      }
    );

    update_colors();
};
