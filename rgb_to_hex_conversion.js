/*The rgb function is incomplete. Complete it so that passing in RGB decimal 
values will result in a hexadecimal representation being returned. 
Valid decimal values for RGB are 0 - 255. Any values that fall out of that 
range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand 
with 3 will not work here.

The following are examples of expected output values:

rgb(255, 255, 255) // returns FFFFFF
rgb(255, 255, 300) // returns FFFFFF
rgb(0,0,0) // returns 000000
rgb(148, 0, 211) // returns 9400D3
*/

function rgb(r, g, b) {

    r = Math.max(0, Math.min(r, 255));
    g = Math.max(0, Math.min(g, 255));
    b = Math.max(0, Math.min(b, 255));

    var hexChars = "0123456789ABCDEF";
    var hex_r = "";
    var hex_g = "";
    var hex_b = "";

    while (r > 0) {
        var remainder = r % 16;
        hex_r = hexChars.charAt(remainder) + hex_r;
        r = Math.floor(r / 16);
    }
    if (hex_r.length === 0) {
        hex_r = "00";
    } else if (hex_r.length === 1) {
        hex_r = "0" + hex_r;
    }

    while (g > 0) {
        var remainder = g % 16;
        hex_g = hexChars.charAt(remainder) + hex_g;
        g = Math.floor(g / 16);
    }
    if (hex_g.length === 0) {
        hex_g = "00";
    } else if (hex_g.length === 1) {
        hex_g = "0" + hex_g;
    }

    while (b > 0) {
        var remainder = b % 16;
        hex_b = hexChars.charAt(remainder) + hex_b;
        b = Math.floor(b / 16);
    }
    if (hex_b.length === 0) {
        hex_b = "00";
    } else if (hex_b.length === 1) {
        hex_b = "0" + hex_b;
    }


    return hex_r + hex_g + hex_b;


}



