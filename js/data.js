'use strict';

function update_colors(){
    color_left = '#' + core_random_hex();
    color_right = '#' + core_random_hex();
    document.getElementById('canvas').style.background = '#' + core_random_hex();
}

var color_left = '';
var color_right = '';
var columns = 0;
var rows = 0;
