let fs = require('fs');

try {
    let data = fs.readFileSync('./src/currentPosition.txt', 'utf8');
    let splitData = data.split('\n');
    let depth = 0;
    let distance = 0;
    for(let i = 0; i < splitData.length; i++) {
        let instruction = splitData[i].split(' ');
        if(instruction[0] === 'forward') {
            distance = distance + Number(instruction[1])
        } if(instruction[0] === 'back') {
            distance = distance - Number(instruction[1])
        } if(instruction[0] === 'up') {
            depth = depth - Number(instruction[1])
        } if(instruction[0] === 'down') {
            depth = depth + Number(instruction[1])
        };
    };
    console.log(Number(depth)*Number(distance))
} catch (error) {
    console.log(`Error: ${error.stack}`);
};
