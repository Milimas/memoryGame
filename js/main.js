var rowsNumber;
var colsNumber;
// $('document').ready(onLoadGame(5, 4));
<<<<<<< HEAD
=======

>>>>>>> cc9677cddba97e79f2fb6fe57116948eb4112b9b
var randomNumber1 = 0;
var randomNumber2 = 0;
var groupImages1 = [];
var groupImages2 = [];
var imageCollecton = [];

<<<<<<< HEAD
var images = [];
for (let imageNumber = 0; imageNumber < (rowsNumber * colsNumber) / 2; imageNumber++) {
    image = new Image();
    image.src = './assets/' + imageNumber + '.png';
    images[imageNumber] = image.src;
    document.write('<img id="h' + imageNumber + '" src="' + image.src + '"></img>');
    document.getElementById('h' + imageNumber).style.display = 'none';
}

=======
>>>>>>> cc9677cddba97e79f2fb6fe57116948eb4112b9b
function onLoadGame(onLoadRows, onLoadCols) {
    rowsNumber = onLoadRows;
    colsNumber = onLoadCols;
}

do {
    foundIt = false;
    randomNumber1 = Math.floor(Math.random() * Math.floor((rowsNumber * colsNumber) / 2));
    randomNumber2 = Math.floor(Math.random() * Math.floor((rowsNumber * colsNumber) / 2));
    for (let imageIndex = 0; imageIndex < groupImages1.length; imageIndex++) {
        if ((randomNumber1 == groupImages1[imageIndex] || randomNumber2 == groupImages2[imageIndex]))
            foundIt = true;
    }
    if (!foundIt) {
        groupImages1.push(randomNumber1);
        groupImages2.push(randomNumber2);
    }
} while (groupImages1.length < (rowsNumber * colsNumber) / 2 && groupImages2.length < (rowsNumber * colsNumber) / 2);
imageCollecton = groupImages1.concat(groupImages2);
var cellImage = new Array(rowsNumber);
for (let row = 0; row < cellImage.length; row++) {
    cellImage[row] = new Array(colsNumber);
}

count = 0;
for (let row = 0; row < rowsNumber; row++) {
    for (let col = 0; col < colsNumber; col++) {
        cellImage[row][col] = imageCollecton[count];
        // document.getElementById('c' + row + '' + col).style =
        //     'background-image: url("./assets/' + cellImage[row][col] + '.png");';
        //console.log('cg = ' + imageCollecton[count] + ' count = ' + count);
        document.getElementById('c' + row + '' + col).style =
            'background-image: url("./assets/b.png");';
        count += 1;
        //console.log('cellImage[' + row + '][' + col + '] = ' + cellImage[row][col]);
    }
}


function flipToBack() {
    for (let row = 0; row < rowsNumber; row++) {
        for (let col = 0; col < colsNumber; col++) {
            if (!cellImageFound[row][col]) {
                document.getElementById('c' + row + '' + col).style =
                    'background-image: url("./assets/b.png");';
            }
        }
    }
}
//console.log('c : ' + groupImages1);
//console.log('c2 : ' + groupImages2);
//console.log('cellImage = ' + cellImage);


var currentFlipedcell = [];
var lastFlipedcell = [];
var countFliped1 = 0;
var countFliped2 = 0;
var cellImageFound = Array(rowsNumber);
for (let row = 0; row < cellImageFound.length; row++) {
    cellImageFound[row] = Array(colsNumber);
}
for (let row = 0; row < rowsNumber; row++) {
    for (let col = 0; col < colsNumber; col++) {
        cellImageFound[row][col] = false;
    }
}
//for (let row = 0; row < 3; row++) {
//    for (let col = 0; col < 6; col++) {
//       console.log(cellImageFound[row][col]);
//    }
//}

var twoFliped = true;

function d(row, col) {
    // console.log(twoFliped);
    if (twoFliped) {
        lastFlipedcell[countFliped1] = row;
        lastFlipedcell[countFliped1 + 1] = col;
        countFliped1 += 1;
        flipToBack();
    } else {
        currentFlipedcell[countFliped2] = row;
        currentFlipedcell[countFliped2 + 1] = col;
        countFliped2 += 1;
    }
    console.log(row + ' ' + col);
    // console.log(currentFlipedcell[c2 - 1] + '' + currentFlipedcell[c2 ] + ' ' + lastFlipedcell[c - 1] + '' + lastFlipedcell[c ]);
    if (!twoFliped && cellImage[lastFlipedcell[countFliped1 - 1]][lastFlipedcell[countFliped1]] == cellImage[currentFlipedcell[countFliped2 - 1]][currentFlipedcell[countFliped2]] &&
        (lastFlipedcell[countFliped1 - 1] != currentFlipedcell[countFliped2 - 1] || lastFlipedcell[countFliped1] != currentFlipedcell[countFliped2])) {
        cellImageFound[lastFlipedcell[countFliped1 - 1]][lastFlipedcell[countFliped1]] = true;
        cellImageFound[currentFlipedcell[countFliped2 - 1]][currentFlipedcell[countFliped2]] = true;

    }
    document.getElementById('c' + row + '' + col).style =
        'background-image: url("./assets/' + cellImage[row][col] + '.png");';
    twoFliped = !twoFliped;
    won = true;
    for (let row = 0; row < rowsNumber; row++) {
        for (let col = 0; col < colsNumber; col++) {
            if (!cellImageFound[row][col]) won = false;
        }
    }
    console.log(cellImage[row][col]);
    console.log('cg : ' + imageCollecton);
    //console.log(cellImageFound);
    // console.log(won);
    if (won) {
        // document.getElementById('main').innerHTML = '<div style="background-image: url(' + '\'./assets/IYE.gif\'' + ')"><h1>Congratulations</h1></div>';
        color = ["red", "blue", "yellow", "white", "green", "greenyellow", "orange", "gainsboro", "silver", "gold"];
        document.getElementById('main').style = 'text-align:center;height:300px;width:600px;background-image: url(\'./assets/IYE.gif\');';
        document.getElementById('main').classList = 'container';
        document.getElementById('main').innerHTML = '<br><br><br><br><br><br><br><br><h1 class="justify-content-md-center" id="congrats">Congratulations</h1>';
        setInterval(() => {
            document.getElementById('congrats').style = 'text-align: center;color: ' + color[Math.floor(Math.random() * (rowsNumber * colsNumber) / 2)] + ';'
        }, 250);
        document.getElementById('main').innerHTML += '<button id="playAgain" class="btn btn-success justify-content-md-center" type="button" onclick="location.reload();">play again</button>';
    }
}