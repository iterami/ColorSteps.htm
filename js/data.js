'use strict';

function update_colors(){
    color_left = '#' + core_random_hex();
    color_right = '#' + core_random_hex();
    canvas_properties['clearColor'] = '#' + core_random_hex();

    core_storage_save();
    canvas_draw();
}
