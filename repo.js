'use strict';

function repo_drawlogic(){
    columns = Math.floor(canvas_properties.width / core_storage_data.step_x);
    rows = Math.floor(canvas_properties.height / core_storage_data.step_y);

    const step_x_half = core_storage_data.step_x / 2;
    const step_y = core_storage_data.step_y * .625;
    const step_y_bottom = step_y * .6;
    const step_y_top = step_y * .4;

    let row = rows;
    do{
        const row_x = row & 1 ? step_x_half : 0;
        const row_y = canvas_properties.height - row * core_storage_data.step_y - step_y;

        let column = columns;
        do{
            let column_x = column * core_storage_data.step_x + row_x;
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

            column_x = column * core_storage_data.step_x - row_x;
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
                  column_x + core_storage_data.step_x,
                  row_y,
                ],
                [
                  'lineTo',
                  column_x + core_storage_data.step_x,
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
          'onclick': repo_load,
        },
      },
      'globals': {
        'color_left': '',
        'color_right': '',
        'columns': 0,
        'rows': 0,
      },
      'info': '<button class=medium id=randomize type=button>Randomize Colors</button>',
      'storage': {
        'step_x': 200,
        'step_y': 80,
      },
      'storage_menu': '<table><tr><td><input class=mini id=step_x step=any type=number><td>Step X'
        + '<tr><td><input class=mini id=step_y step=any type=number><td>Step Y</table>',
      'title': 'ColorSteps.htm',
    });
    canvas_init({
      'interval': false,
    });
}

function repo_load(){
    color_left = '#' + core_random_hex();
    color_right = '#' + core_random_hex();
    canvas_properties.clearColor = '#' + core_random_hex();
    canvas_draw();
}
