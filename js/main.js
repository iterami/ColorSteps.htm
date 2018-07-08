'use strict';

function draw_logic(){
    let row = rows;
    do{
        let row_y = canvas_properties['height'] - row * 80 - 50;

        let column = columns;
        do{
            let column_x =
              column * 200
              + (row % 2 === 0 ? 100 : 0);

            canvas_draw_path({
              'properties': {
                'fillStyle': color_left,
              },
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

            column_x =
              column * 200
              - (row % 2 === 0 ? 100 : 0);

            canvas_draw_path({
              'properties': {
                'fillStyle': color_right,
              },
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
    core_repo_init({
      'events': {
        'randomize': {
          'onclick': function(){
              update_colors();
              canvas_draw();
          },
        },
      },
      'globals': {
        'color_left': '',
        'color_right': '',
        'columns': 0,
        'rows': 0,
      },
      'info': '<input id=randomize type=button value="Randomize Colors">',
      'title': 'ColorSteps.htm',
    });
    canvas_init();

    update_colors();
}

function resize_logic(){
    columns = Math.floor(canvas_properties['width'] / 200);
    rows = Math.floor(canvas_properties['height'] / 80);
}
