var inputStr = "R1, L4, L5, L5, R2, R2, L1, L1, R2, L3, R4, R3, R2, L4, L2, R5, L1, R5, L5, L2, L3, L1, R1, R4, R5, L3, R2, L4, L5, R1, R2, L3, R3, L3, L1, L2, R5, R4, R5, L5, R1, L190, L3, L3, R3, R4, R47, L3, R5, R79, R5, R3, R1, L4, L3, L2, R194, L2, R1, L2, L2, R4, L5, L5, R1, R1, L1, L3, L2, R5, L3, L3, R4, R1, R5, L4, R3, R1, L1, L2, R4, R1, L2, R4, R4, L5, R3, L5, L3, R1, R1, L3, L1, L1, L3, L4, L1, L2, R1, L5, L3, R2, L5, L3, R5, R3, L4, L2, R2, R4, R4, L4, R5, L1, L3, R3, R4, R4, L5, R4, R2, L3, R4, R2, R1, R2, L4, L2, R2, L5, L5, L3, R5, L5, L1, R4, L1, R1, L1, R4, L5, L3, R4, R1, L3, R4, R1, L3, L1, R1, R2, L4, L2, R1, L5, L4, L5";
// var inputStr = 'R2, L3';
// var inputStr = 'R2, R2, R2';
// var inputStr = 'R5, L5, R5, R3';

function noTaxi1(input) {
  var dirList = input.split(', ');
  var x = 0;
  var y = 0;
  var dir = 0;
  dirList.forEach(function(ele) {
    var relDir = ele[0];
    var dist = parseInt(ele.slice(1));
    if(relDir === 'R') {
      dir = (dir + 1 + 4) % 4;
    } else if (relDir === 'L') {
      dir = (dir - 1 + 4) % 4;
    } else {
      console.error('wrong input');
    }
    if(dir === 0) {
      y += dist;
    } else if (dir === 1) {
      x += dist;
    } else if (dir === 2) {
      y -= dist;
    } else if (dir === 3) {
      x -= dist;
    }
  });
  return Math.abs(x) + Math.abs(y);
}

console.log(noTaxi1(inputStr));
