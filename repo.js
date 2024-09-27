'use strict';

function load_data(){
    color_left = '#' + core_random_hex();
    color_right = '#' + core_random_hex();
    canvas_properties['clearColor'] = '#' + core_random_hex();
    canvas_draw();
}

function repo_drawlogic(){
    columns = Math.floor(canvas_properties['width'] / core_storage_data['step-x']);
    rows = Math.floor(canvas_properties['height'] / core_storage_data['step-y']);

    const step_x_half = core_storage_data['step-x'] / 2;
    const step_y = core_storage_data['step-y'] * .625;
    const step_y_bottom = step_y * .6;
    const step_y_top = step_y * .4;

    let row = rows;
    do{
        const row_x = row & 1 ? step_x_half : 0;
        const row_y = canvas_properties['height'] - row * core_storage_data['step-y'] - step_y;

        let column = columns;
        do{
            let column_x = column * core_storage_data['step-x'] + row_x;
            canvas_draw_path({
              'properties': {
                'fillStyle': color_left,
              },
              'vertices': [
                [
                  'moveTo',
                  column_x,
                  row_y,
                ],
                [
                  'lineTo',
                  column_x + step_x_half,
                  row_y - step_y_bottom,
                ],
                [
                  'lineTo',
                  column_x + step_x_half,
                  row_y + step_y_top,
                ],
                [
                  'lineTo',
                  column_x,
                  row_y + step_y,
                ],
              ],
            });

            column_x = column * core_storage_data['step-x'] - row_x;
            canvas_draw_path({
              'properties': {
                'fillStyle': color_right,
              },
              'vertices': [
                [
                  'moveTo',
                  column_x + step_x_half,
                  row_y - step_y_bottom,
                ],
                [
                  'lineTo',
                  column_x + core_storage_data['step-x'],
                  row_y,
                ],
                [
                  'lineTo',
                  column_x + core_storage_data['step-x'],
                  row_y + step_y,
                ],
                [
                  'lineTo',
                  column_x + step_x_half,
                  row_y + step_y_top,
                ],
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
      'info': '<button id=randomize type=button>Randomize Colors</button>',
      'reset': canvas_setmode,
      'storage': {
        'step-x': 200,
        'step-y': 80,
      },
      'storage-menu': '<table><tr><td><input class=mini id=step-x step=any type=number><td>Step X'
        + '<tr><td><input class=mini id=step-y step=any type=number><td>Step Y</table>',
      'title': 'ColorSteps.htm',
    });
    canvas_init({
      'interval': false,
    });
}
