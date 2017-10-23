'use strict';

function update_colors(){
    color_left = '#' + core_random_hex();
    color_right = '#' + core_random_hex();
    document.getElementById('canvas').style.background = '#' + core_random_hex();
}
