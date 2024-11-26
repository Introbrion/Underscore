const canvas = document.getElementById("canvas");
const canvasContext = canvas.getContext("2d");

const pacmanFrames = document.getElementById("animation");
const ghostFrames = document.getElementById('ghosts');

let createRect = (x,y,width,height,color) => {
    canvasContext.fillstyle = color;
    canvasContect.fillRect(x,y,width,height);
};
let fps = 30;
let oneBLockSize = 20;
let wallColor = "#342DCA";
let wallSpaceWidth = oneBLockSize / 1.2
let wallOffset = (oneBLockSize - wallSpaceWidth) / 2
let wallInnerColor = "black"

let map = [
    [1,1,1,1,1 ,1,1,1,1,1 ,1,1,1,1,1 ,1,1,1,1,1, 1]
    [1,2,2,2,2 ,2,2,2,2,2 ,1,2,2,2,2 ,2,2,2,2,2, 1]
    [1,2,1,1,1 ,2,1,1,1,2 ,1,2,1,1,1 ,2,1,1,1,2, 1]
    [1,2,1,1,1 ,2,1,1,1,2 ,1,2,1,1,1 ,2,1,1,1,2, 1]
    [1,2,2,2,2 ,2,2,2,2,2 ,2,2,2,2,2 ,2,2,2,2,2, 1]
    [1,2,1,1,1 ,2,1,2,1,1 ,1,1,1,2,1 ,2,1,1,1,2, 1]
    [1,2,2,2,2 ,2,1,2,2,2 ,1,2,2,2,1 ,2,2,2,2,2, 1]
    [1,1,1,1,1 ,2,1,1,1,2 ,1,2,1,1,1 ,2,1,1,1,1, 1]
    [0,0,0,0,1 ,2,1,2,2,2 ,2,2,2,2,1 ,2,1,0,0,0, 0]
    [1,1,1,1,1 ,2,1,2,1,1 ,2,1,1,2,1 ,2,1,1,1,1, 1]
    [2,2,2,2,2 ,2,2,2,1,2 ,2,2,1,2,2 ,2,2,2,2,2, 1]
    [1,1,1,1,1 ,2,1,2,1,2 ,2,2,1,2,1 ,2,1,1,1,1, 1]
    [0,0,0,0,1 ,2,1,2,1,1 ,1,1,1,2,1 ,2,1,0,0,0, 0]
    [0,0,0,0,1 ,2,1,2,2,2 ,2,2,2,2,1 ,2,1,0,0,0, 0]
    [1,1,1,1,1 ,2,2,2,1,1 ,1,1,1,2,2 ,2,1,1,1,1, 1]
    [1,2,2,2,2 ,2,2,2,2,2 ,1,2,2,2,2 ,2,1,1,1,1, 1]
    [1,2,1,1,1 ,2,1,1,1,2 ,1,2,1,1,1 ,2,1,1,1,2, 1]
    [1,2,2,2,1 ,2,2,2,2,2 ,2,2,2,2,2 ,2,1,2,2,2, 1]
    [1,1,2,2,1 ,2,1,2,1,1 ,1,1,1,2,1 ,2,1,2,2,1, 1]
    [1,2,2,2,2 ,2,1,2,2,2 ,1,2,2,2,1 ,2,2,2,2,2, 1]
    [1,2,1,1,1 ,1,1,1,1,2 ,1,2,1,1,1 ,1,1,1,1,2, 1]
    [1,2,2,2,2 ,2,2,2,2,2 ,2,2,2,2,2 ,2,2,2,2,2, 1]
    [1,1,1,1,1 ,1,1,1,1,1 ,1,1,1,1,1 ,1,1,1,1,1, 1]
];

let gameLoop = () => {
    update ();
    draw();
};

let update = () => {

};

let draw = () => {
    createRect(0,0,canvas.width,canvas.height, "black")
    dawWalls()
};

let gameInterval = setInterval(gameLoop, 1000 / fps);

let drawWalls = () => {
    for(let i = 0; i < map.length; i++) {
        for(let j = 0; j <map[0].length; j++) {
            if(map[i][j] == 1) {
                createRect(
                    j * oneBLockSize,
                    i * oneBLockSize,
                    oneBLockSize,
                    oneBLockSize,
                    wallColor
                    );
                }
            if(j > 0 && map[i][j-1] == 1) {
                createRect(j * oneBLockSize,
                            i * oneBLockSize + wallOffset, 
                            wallSpaceWidth + wallOffset, 
                            wallSpaceWidth,
                            wallInnerColor
                        );
            }
            if(j < map[0].length - 1 && map[i][j+1] == 1) {
                createRect(
                            j * oneBLockSize + wallOffset,
                            i * oneBLockSize + wallOffset, 
                            wallSpaceWidth + wallOffset, 
                            wallSpaceWidth,
                            wallInnerColor
                )
            }
            if(i > 0 && map[i -1][j] == 1) {
                createRect(j * oneBLockSize + wallOffset,
                            i * oneBLockSize, 
                            wallSpaceWidth, 
                            wallSpaceWidth + wallOffset,
                            wallInnerColor
                        );
            }
            if(i < map.length - 1 && map[i + 1][j] == 1) {
                createRect(
                            j * oneBLockSize + wallOffset,
                            i * oneBLockSize + wallOffset, 
                            wallSpaceWidth, 
                            wallSpaceWidth + wallOffset,
                            wallInnerColor
                )
            }
        }
    }
}