var roomTiles = [wall, floor, door, monster, fire, spikes, hole, button, teleport]; //place holders

var fireRoomOne ={
    layout: [
        [0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
        [0,1,1,1,1,1,1,1,1,4,1,1,1,1,1,1,1,1,1,3,1,1,1,1,0],
        [0,1,1,1,1,1,1,1,1,4,1,1,1,1,1,1,1,1,3,1,3,1,1,1,0],
        [0,1,1,1,1,1,1,1,1,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
        [0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
        [0,1,1,1,3,1,3,1,1,1,1,1,1,1,1,4,1,1,1,1,1,1,1,1,0],
        [0,1,1,1,1,3,1,1,1,1,1,1,1,1,1,4,1,1,1,1,1,1,1,1,0],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,1,1,1,1,1,1,1,1,0],
        [0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
        [2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,2],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
        [0,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0],
        [0,1,1,1,1,1,1,1,1,4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
        [0,1,1,1,1,1,1,1,1,4,1,1,1,1,1,1,1,1,1,3,1,1,1,1,0],
        [0,1,1,1,1,1,1,1,1,4,1,1,1,1,1,1,1,1,3,1,3,1,1,1,0],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
        [0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,0,0],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,4,1,1,1,1,1,1,1,1,0],
        [0,1,1,1,3,1,3,1,1,1,1,1,1,1,1,4,1,1,1,1,1,1,1,1,0],
        [0,1,1,1,1,3,1,1,1,1,1,1,1,1,1,4,1,1,1,1,1,1,1,1,0],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0]
    ]
};

var fireRoomTwo ={
    layout: [
        [0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
        [0,1,1,1,1,1,4,1,1,1,1,1,3,1,1,1,1,1,1,1,1,1,1,1,0],
        [0,1,1,1,1,1,4,1,1,1,1,1,1,1,1,1,1,1,4,4,1,1,1,1,0],
        [0,1,1,1,1,1,0,1,1,3,1,1,1,1,1,3,1,1,0,1,1,1,1,1,0],
        [0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0],
        [0,1,1,3,1,1,0,1,1,1,1,1,3,1,1,1,1,1,0,1,1,3,1,1,0],
        [0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0],
        [0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0],
        [2,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,2],
        [0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0],
        [0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0],
        [0,1,1,3,1,1,0,1,1,1,1,1,3,1,1,1,1,1,0,1,1,3,1,1,0],
        [0,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,0],
        [0,1,1,1,1,1,0,1,1,3,1,1,1,1,1,3,1,1,0,1,1,1,1,1,0],
        [0,1,1,1,1,4,4,1,1,1,1,1,1,1,1,1,1,1,4,1,1,1,1,1,0],
        [0,1,1,1,1,1,1,1,1,1,1,1,3,1,1,1,1,1,4,1,1,1,1,1,0],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0]
    ]
};

var spikeRoomOne ={
    layout: [
        [0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
        [0,1,1,1,1,1,1,3,1,1,1,1,1,1,1,1,1,3,1,1,1,1,1,1,0],
        [0,1,1,5,5,5,1,1,1,1,1,5,5,5,1,1,1,1,1,1,5,5,1,1,0],
        [0,1,1,5,5,5,1,1,1,5,5,5,5,5,5,5,1,1,1,5,5,5,5,1,0],
        [0,1,1,5,5,5,5,1,1,5,5,5,5,5,5,5,1,1,1,5,5,5,5,1,0],
        [0,1,1,1,1,5,5,1,1,1,1,1,1,5,5,1,1,1,5,5,5,5,5,1,0],
        [0,1,3,1,1,1,1,1,1,1,1,1,1,5,5,1,1,5,5,5,5,5,5,1,0],
        [0,1,1,1,5,5,5,5,5,5,5,1,1,1,1,1,1,5,5,5,5,5,1,1,0],
        [0,1,1,1,5,5,5,5,5,5,5,1,1,1,1,1,1,1,5,5,5,5,1,1,0],
        [0,1,1,1,5,5,5,5,5,5,5,1,1,5,5,1,1,1,1,5,5,1,1,1,0],
        [0,1,1,1,5,5,5,5,5,5,5,1,1,5,5,5,1,1,1,1,1,1,1,1,0],
        [2,1,1,1,5,5,5,5,5,5,5,1,1,1,5,5,1,1,1,1,1,1,1,1,2],
        [0,1,1,1,1,1,1,1,1,1,1,1,3,1,1,1,1,1,5,5,5,1,1,1,0],
        [0,1,1,3,1,1,1,5,5,5,1,1,1,1,1,1,1,5,5,5,5,1,1,1,0],
        [0,1,1,1,1,1,1,5,5,5,5,5,5,1,1,5,5,5,5,5,5,1,1,1,0],
        [0,1,1,5,5,1,1,5,5,5,5,5,5,1,1,5,5,5,5,1,1,1,3,1,0],
        [0,1,5,5,5,1,1,5,5,5,5,5,5,1,1,5,5,5,1,1,1,1,1,1,0],
        [0,1,5,5,1,1,1,5,5,5,1,1,1,1,1,1,1,1,1,1,5,5,1,1,0],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,1,1,5,5,1,1,0],
        [0,1,1,1,1,5,5,5,5,5,5,5,5,5,5,5,1,1,5,5,5,5,1,1,0],
        [0,1,1,3,1,5,5,5,5,5,5,5,5,5,5,5,1,1,5,5,5,5,1,1,0],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,5,5,5,5,1,1,0],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0]
    ]
};

var spikeRoomTwo ={
    layout: [
        [0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,1,1,3,1,1,1,3,1,1,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,1,1,1,1,1,5,1,1,1,1,1,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,1,1,1,1,1,5,5,5,1,1,1,1,1,0,0,0,0,0,0],
        [0,0,0,0,0,1,1,1,1,1,5,5,5,5,5,1,1,1,1,1,0,0,0,0,0],
        [0,0,0,0,1,1,3,1,1,5,5,5,5,5,5,5,1,1,3,1,1,0,0,0,0],
        [0,1,1,1,1,1,1,1,5,5,5,5,5,5,5,5,5,1,1,1,1,1,1,1,0],
        [2,1,1,1,1,1,1,5,5,5,5,5,5,5,5,5,5,5,1,1,1,1,1,1,2],
        [0,1,1,1,1,1,1,1,5,5,5,5,5,5,5,5,5,1,1,1,1,1,1,1,0],
        [0,0,0,0,1,1,3,1,1,5,5,5,5,5,5,5,1,1,3,1,1,0,0,0,0],
        [0,0,0,0,0,1,1,1,1,1,5,5,5,5,5,1,1,1,1,1,0,0,0,0,0],
        [0,0,0,0,0,0,1,1,1,1,1,5,5,5,1,1,1,1,1,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,1,1,1,1,1,5,1,1,1,1,1,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,1,1,3,1,1,1,3,1,1,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0]
    ]
};

var holeRoomOne ={
    layout: [
        [0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,6,6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
        [0,6,6,1,1,3,1,1,1,1,1,1,1,1,1,3,1,1,1,1,3,1,1,1,0],
        [0,1,6,6,1,1,1,1,3,1,1,3,1,1,1,1,1,1,1,1,1,1,1,1,0],
        [0,1,6,6,6,6,1,1,1,1,1,1,1,1,1,1,1,1,3,1,1,1,1,1,0],
        [0,1,1,1,6,6,1,1,1,3,1,1,1,3,1,1,1,1,1,1,1,3,1,1,0],
        [0,1,1,1,1,6,6,1,1,1,1,1,1,1,1,1,3,1,1,1,1,1,1,1,0],
        [0,1,3,1,1,6,6,6,6,1,1,3,1,1,1,1,1,1,1,3,1,1,1,1,0],
        [0,1,1,1,1,1,1,6,6,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
        [0,1,1,1,1,1,1,1,6,6,1,1,1,3,1,8,1,1,1,1,1,1,3,1,0],
        [0,1,1,3,1,1,1,1,6,6,6,6,1,1,1,1,1,1,3,1,1,1,1,1,0],
        [0,1,1,1,1,1,3,1,1,1,6,6,1,1,1,1,1,1,1,1,1,1,1,1,0],
        [2,1,1,1,1,1,1,1,1,1,1,6,6,1,1,1,3,1,1,1,1,1,1,1,2],
        [0,1,1,1,1,1,1,1,1,1,1,6,6,6,6,1,1,1,1,1,3,1,1,1,0],
        [0,1,1,1,3,1,1,1,1,1,1,1,1,6,6,1,1,3,1,1,1,1,1,1,0],
        [0,1,1,1,1,1,1,3,1,8,1,1,1,1,6,6,1,1,1,1,1,1,3,1,0],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,1,6,6,6,6,1,1,1,1,1,1,0],
        [0,1,3,1,1,1,1,1,1,1,1,3,1,1,1,1,6,6,1,1,3,1,1,1,0],
        [0,1,1,1,1,3,1,1,1,1,1,1,1,1,1,1,1,6,6,1,1,1,1,1,0],
        [0,1,1,1,1,1,1,1,1,3,1,1,1,1,1,1,1,6,6,6,6,1,3,1,0],
        [0,1,1,3,1,1,1,1,1,1,1,1,1,3,1,1,1,1,1,6,6,1,1,1,0],
        [0,1,1,1,1,1,1,3,1,1,1,1,1,1,1,1,1,3,1,1,6,6,1,1,0],
        [0,1,1,1,1,1,1,1,1,1,3,1,1,1,1,3,1,1,1,1,6,6,6,6,0],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,6,6,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0]
    ]
};

var holeRoomTwo ={
    layout: [
        [0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,6,6,6,6,6,6,6,6,1,1,1,1,1,1,1,6,6,6,6,6,6,6,6,0],
        [0,6,6,6,6,6,6,6,6,1,1,1,1,1,1,1,6,6,6,6,6,6,6,6,0],
        [0,6,6,6,6,6,6,6,6,1,3,1,1,1,1,1,6,6,6,6,6,6,6,6,0],
        [0,6,6,6,6,6,6,6,6,1,1,1,1,1,1,1,6,6,6,6,6,6,6,6,0],
        [0,6,6,6,6,6,6,6,6,1,1,1,1,1,1,1,6,6,6,6,6,6,6,6,0],
        [0,6,6,6,6,6,6,6,6,1,1,1,1,1,3,1,6,6,6,6,6,6,6,6,0],
        [0,6,6,6,6,6,6,6,6,1,1,1,1,1,1,1,6,6,6,6,6,6,6,6,0],
        [0,6,6,6,6,6,6,6,6,1,1,1,1,1,1,1,6,6,6,6,6,6,6,6,0],
        [0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0],
        [0,1,1,1,1,1,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,1,0],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
        [2,1,1,1,1,1,1,1,1,0,1,1,7,1,1,0,1,1,1,1,1,1,1,1,2],
        [0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
        [0,1,1,3,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,1,1,1,1,0],
        [0,1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,1,1,1,0],
        [0,6,6,6,6,6,6,6,6,1,1,1,1,1,1,1,6,6,6,6,6,6,6,6,0],
        [0,6,6,6,6,6,6,6,6,1,1,1,1,1,1,1,6,6,6,6,6,6,6,6,0],
        [0,6,6,6,6,6,6,6,6,1,3,1,1,1,1,1,6,6,6,6,6,6,6,6,0],
        [0,6,6,6,6,6,6,6,6,1,1,1,1,1,1,1,6,6,6,6,6,6,6,6,0],
        [0,6,6,6,6,6,6,6,6,1,1,1,1,1,1,1,6,6,6,6,6,6,6,6,0],
        [0,6,6,6,6,6,6,6,6,1,1,1,1,1,3,1,6,6,6,6,6,6,6,6,0],
        [0,6,6,6,6,6,6,6,6,1,1,1,1,1,1,1,6,6,6,6,6,6,6,6,0],
        [0,6,6,6,6,6,6,6,6,1,1,1,1,1,1,1,6,6,6,6,6,6,6,6,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0]
    ]
};