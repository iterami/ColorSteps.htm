'use strict';

function draw_logic(){
    var row = rows;
    do{
        var row_y = canvas_height - row * 80 - 50;

        canvas_buffer.fillStyle = color_left;
        var column = columns;
        do{
            var column_x =
              column * 200
              + (row % 2 === 0 ? 100 : 0);

            canvas_draw_path({
              'vertices': [
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
            });
        }while(column--);

        canvas_buffer.fillStyle = color_right;
        column = columns;
        do{
            column_x =
              column * 200
              - (row % 2 === 0 ? 100 : 0);

            canvas_draw_path({
              'vertices': [
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
            });
        }while(column--);
    }while(row--);
}

function repo_init(){
    core_events_bind({
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
    canvas_init();

    update_colors();
}

function resize_logic(){
    columns = Math.floor(canvas_width / 200);
    rows = Math.floor(canvas_height / 80);
}

function update_colors(){
    color_left = '#' + core_random_hex();
    color_right = '#' + core_random_hex();
    document.getElementById('canvas').style.background = '#' + core_random_hex();
}

var color_left = '';
var color_right = '';
var columns = 0;
var rows = 0;
