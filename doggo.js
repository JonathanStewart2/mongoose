'use strict';

const doggo = (place) => {
    if (typeof(place) != "number"){
        return "None"
    }
    if (place < 1 || place > 100){
        return "None"
    }
    let dogs = []
    for (let i = 1; i<=100; i++){
        if (i != place){
            if (i > 10 && i < 14){
                dogs.push(`${i}th`);
            } else{
            switch (i%10) {
                case 1:
                    dogs.push(`${i}st`);
                    break
                case 2:
                    dogs.push(`${i}nd`);
                    break
                case 3:
                    dogs.push(`${i}rd`);
                    break
                default:
                    dogs.push(`${i}th`);
                    break
            }
        }
        }
    }
    return dogs
}

module.exports = doggo;

