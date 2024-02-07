function lose() {
    alert("you lose!!");
}
function count(index) {
    checked.push(index);
    row = index[0], column = index[1];
    var dx = [0, 0, 1, -1];
    var dy = [1, -1, 0, 0];
    var cnt = 0;
    for(var i=0; i<4; i++){
        if(graph[row+dx[i]][colum+dy[i]] == -1) {
            cnt++;
        }
        else if(!checkqueue.include([row, column]) && !checked.include([row, column])) {
            checkqueue.push([row, column]);
        }
    }
    graph[row][column] = cnt;
    return cnt;
}
function check(row, column, dir) {
    if(dir == -1 && graph[row][column] == -1) {
        lose();
        return;
    }
    else {
        var cnt = count(row, column);
        graph[row][column] = cnt;
        while(checkqueue.length >= 0) {
            check(checkqueue.pop(), 0);
        }
    }
}

var endgame = false;
var space = 36, bomb = 0;
var graph = [
    [-1, -1, -1, -1, -1, -1, -1, -1]
    [-1, 0, 0, 0, 0, 0, 0, -1]
    [-1, 0, 0, 0, 0, 0, 0, -1]
    [-1, 0, 0, 0, 0, 0, 0, -1]
    [-1, 0, 0, 0, 0, 0, 0, -1]
    [-1, 0, 0, 0, 0, 0, 0, -1]
    [-1, 0, 0, 0, 0, 0, 0, -1]
    [-1, -1, -1, -1, -1, -1, -1, -1]
];
var checkqueue=[];
function create() {
    while(bomb < 4) {
        var br = Math.floor(Math.random()*6);
        var bc = Math.floor(Math.random()*6);
        if(graph[br+1][bc+1] == 0) {
            bomb++;
            graph[br+1][bc+1] = -1;
        }
    }
}
while(!endgame) {
    var input=prompt("please enter row and colomn number");
    index=input.split(" ");
    row = parseInt(index[0])+1;
    column = parseInt(index[1])+1;
    check([row, column], -1);
    var output = document.getElementById("graph");
    output = `
    <div>
        <p>${graph[1]}</p>
        <p>${graph[2]}</p>
        <p>${graph[3]}</p>
        <p>${graph[4]}</p>
        <p>${graph[5]}</p>
        <p>${graph[6]}</p>
    </div>;
    `
}
