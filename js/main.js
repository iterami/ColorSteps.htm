'use strict';

function draw_logic(){
    columns = Math.floor(canvas_properties['width'] / core_storage_data['step-x']);
    rows = Math.floor(canvas_properties['height'] / 80);

    let step_x_half = core_storage_data['step-x'] / 2;

    let row = rows;
    do{
        let row_y = canvas_properties['height'] - row * 80 - 50;

        let column = columns;
        do{
            let column_x =
              column * core_storage_data['step-x']
              + (row % 2 === 0 ? step_x_half : 0);

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
                  'x': column_x + step_x_half,
                  'y': row_y - 30,
                },
                {
                  'x': column_x + step_x_half,
                  'y': row_y + 20,
                },
                {
                  'x': column_x,
                  'y': row_y + 50,
                },
              ],
            });

            column_x =
              column * core_storage_data['step-x']
              - (row % 2 === 0 ? step_x_half : 0);

            canvas_draw_path({
              'properties': {
                'fillStyle': color_right,
              },
              'vertices': [
                {
                  'type': 'moveTo',
                  'x': column_x + step_x_half,
                  'y': row_y - 30,
                },
                {
                  'x': column_x + core_storage_data['step-x'],
                  'y': row_y,
                },
                {
                  'x': column_x + core_storage_data['step-x'],
                  'y': row_y + 50,
                },
                {
                  'x': column_x + step_x_half,
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
          'onclick': core_repo_reset,
        },
      },
      'globals': {
        'color_left': '',
        'color_right': '',
        'columns': 0,
        'rows': 0,
      },
      'info': '<input id=randomize type=button value="Randomize Colors">',
      'menu': true,
      'reset': update_colors,
      'storage': {
        'step-x': 200,
      },
      'storage-menu': '<table><tr><td><input id=step-x><td>Step X</table>',
      'title': 'ColorSteps.htm',
    });
    canvas_init();

    update_colors();
}
