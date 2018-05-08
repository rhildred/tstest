enum Direction {
    North,
    East,
    South,
    West
};
 
var dir: Direction = Direction.South;
 
function getDirection() {
    switch (dir) {
        case Direction.North: console.log('North Direction');
            break;
        case Direction.East: console.log('East Direction');
            break;
        case Direction.South: console.log('South Direction');
            break;
        case Direction.West: console.log('West Direction');
            break;
 
    }
}
 
getDirection(); //print South Direction in console
