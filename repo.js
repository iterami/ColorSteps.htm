'use strict';

function repo_drawlogic(){
    const columns = Math.ceil(canvas_properties.width / core_storage_data.step_x);
    const rows = Math.ceil(canvas_properties.height / core_storage_data.step_y);
    const step_x_half = core_storage_data.step_x / 2;
    const step_y = core_storage_data.step_y * .625;
    const step_y_bottom = step_y * .6;
    const step_y_top = step_y * .4;

    for(let i = 0; i < rows; i++){
        const row_x = i & 1 ? step_x_half : 0;
        const row_y = canvas_properties.height - i * core_storage_data.step_y - step_y;

        for(let j = 0; j < columns; j++){
            let column_x = j * core_storage_data.step_x + row_x;
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

            column_x = j * core_storage_data.step_x - row_x;
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
        }
    }
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
