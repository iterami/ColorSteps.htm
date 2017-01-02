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

            canvas_draw_path(
              [
                {
                  'type': 'moveTo',
                  'x': column_x,
                  'y': row_y,
                },
                {
                  'x': column_x + 100,
                  'y': row_y - 30,
                },
                {
                  'x': column_x + 100,
                  'y': row_y + 20,
                },
                {
                  'x': column_x,
                  'y': row_y + 50,
                },
              ],
              {}
            );
        }while(column--);

        canvas_buffer.fillStyle = color_right;
        column = Math.floor(canvas_width / 200);
        do{
            column_x =
              column * 200
              - (row % 2 === 0 ? 100 : 0);

            canvas_draw_path(
              [
                {
                  'type': 'moveTo',
                  'x': column_x + 100,
                  'y': row_y - 30,
                },
                {
                  'x': column_x + 200,
                  'y': row_y,
                },
                {
                  'x': column_x + 200,
                  'y': row_y + 50,
                },
                {
                  'x': column_x + 100,
                  'y': row_y + 20,
                },
              ],
              {}
            );
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
    input_init({
      'keybinds': {
        'all': {
          'todo': update_colors,
        },
      },
      'mousebinds': {
        'mousedown': {
          'todo': update_colors,
        },
      },
    });

    update_colors();
};
