/**
 * Created by postepenno on 03.02.14.
 */

var Util = Class.extend({

});

Util.shuffle = function(array) { //v1.0
    var counter = array.length, temp, index;

    // While there are elements in the array
    while (counter > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * counter);

        // Decrease counter by 1
        counter--;

        // And swap the last element with it
        temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
    }

    return array;
};


