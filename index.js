
let trackRobot = function (N, E, S, W) {

    let arr = [0, 0];

    return function () {

        if (N === undefined) {
            N = 0;
        }
        if (E === undefined) {
            E = 0;
        }
        if (S === undefined) {
            S = 0;
        }
        if (W === undefined) {
            W = 0;
        }

        arr[0] = E - W;
        arr[1] = N - S;

        // arr[0] = 
        // if (position == 'North') {
        // }

        // else if(position == 'East'){

        // }
        return arr;
    }

}


var output = (trackRobot()());
var output1 = (trackRobot(20, 30, 10, 40)());
var output2 = (trackRobot(-10, 20, 10)());
var output3 = (trackRobot(20, 30, 10, 40)([0, 0], 'North'))

console.log(output);
console.log(output1);
console.log(output2);
console.log(output3);



