var randomNumber1;
var randomNumber2;
var groupImages1 = [];
var groupImages2 = [];
var imageCollecton = [];
do {
    foundIt = false;
    randomNumber1 = Math.floor(Math.random() * Math.floor(9));
    randomNumber2 = Math.floor(Math.random() * Math.floor(9));
    for (let imageIndex = 0; imageIndex < groupImages1.length; imageIndex++) {
        if ((randomNumber1 == groupImages1[imageIndex] || randomNumber2 == groupImages2[imageIndex]))
            foundIt = true;
    }
    if (!foundIt) {
        groupImages1.push(randomNumber1);
        groupImages2.push(randomNumber2);
    }
} while (groupImages1.length < 9 && groupImages2.length < 9);
imageCollecton = groupImages1 + ',' + groupImages2;
var cellImage = new Array(3);
for (let row = 0; row < cellImage.length; row++) {
    cellImage[row] = new Array(6);
}
//console.log('cg : ' + imageCollecton);
count = 0;
for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 6; col++) {
        cellImage[row][col] = imageCollecton[count];
        // document.getElementById('c' + row + '' + col).style =
        //     'background-image: url("./assest/' + cellImage[row][col] + '.png");';
        //console.log('cg = ' + imageCollecton[count] + ' count = ' + count);
        document.getElementById('c' + row + '' + col).style =
            'background-image: url("./assest/b.png");';
        count += 2;
        //console.log('cellImage[' + row + '][' + col + '] = ' + cellImage[row][col]);
    }
}


function flipToBack() {
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 6; col++) {
            if (!cellImageFound[row][col]) {
                document.getElementById('c' + row + '' + col).style =
                    'background-image: url("./assest/b.png");';
            }
        }
    }
}
//console.log('c : ' + groupImages1);
//console.log('c2 : ' + groupImages2);
//console.log('cellImage = ' + cellImage);

twoFliped = true;

var currentFlipedcell = [];
var lastFlipedcell = [];
var c = 0;
var c2 = 0;
cellImageFound = Array(3);
for (let row = 0; row < cellImageFound.length; row++) {
    cellImageFound[row] = Array(6);
}
for (let row = 0; row < 3; row++) {
    for (let col = 0; col < 6; col++) {
        cellImageFound[row][col] = false;
    }
}
//for (let row = 0; row < 3; row++) {
//    for (let col = 0; col < 6; col++) {
//       console.log(cellImageFound[row][col]);
//    }
//}


function d(row, col) {
    // console.log(twoFliped);
    if (twoFliped) {
        lastFlipedcell[c] = row;
        lastFlipedcell[c + 1] = col;
        c += 2;
        flipToBack();
    } else {
        currentFlipedcell[c2] = row;
        currentFlipedcell[c2 + 1] = col;
        c2 += 2;
    }
    console.log(row + ' ' + col);
    // console.log(currentFlipedcell[c2 - 2] + '' + currentFlipedcell[c2 - 1] + ' ' + lastFlipedcell[c - 2] + '' + lastFlipedcell[c - 1]);
    if (!twoFliped && cellImage[lastFlipedcell[c - 2]][lastFlipedcell[c - 1]] == cellImage[currentFlipedcell[c2 - 2]][currentFlipedcell[c2 - 1]]) {
        // cellImageFoundrow.push(lastFlipedcell[c - 2]);
        // cellImageFoundcol.push(lastFlipedcell[c - 1]);
        // cellImageFoundrow.push(currentFlipedcell[c2 - 2]);
        // cellImageFoundcol.push(currentFlipedcell[c2 - 1]);
        cellImageFound[lastFlipedcell[c - 2]][lastFlipedcell[c - 1]] = true;
        cellImageFound[currentFlipedcell[c2 - 2]][currentFlipedcell[c2 - 1]] = true;

    }
    document.getElementById('c' + row + '' + col).style =
        'background-image: url("./assest/' + cellImage[row][col] + '.png");';
    twoFliped = !twoFliped;
    won = true;
    for (let row = 0; row < 3; row++) {
        for (let col = 0; col < 6; col++) {
            if (!cellImageFound[row][col]) won = false;
        }
    }
    //console.log(cellImageFound);
    // console.log(won);
    if (won) {
        document.getElementById('main').innerHTML = '<img src="./assest/IYE.gif">'
    }
}
