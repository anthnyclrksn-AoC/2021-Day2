let fs = require('fs');

//Part 1
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

//Part 2
try{
    let data = fs.readFileSync('./src/currentPosition.txt', 'utf8');
    let splitData = data.split('\n');
    let depth = 0;
    let distance = 0;
    let aim = 0
    for(let i = 0; i < splitData.length; i++) {
        let instruction = splitData[i].split(' ');
        if(instruction[0] === 'forward') {
            distance = distance + Number(instruction[1]);
            depth = depth + (Number(instruction[1])*Number(aim))
        } if(instruction[0] === 'back') {
            distance = distance - Number(instruction[1])
        } if(instruction[0] === 'up') {
            aim = aim - Number(instruction[1]);
            //depth = depth - Number(instruction[1])
        } if(instruction[0] === 'down') {
            aim = aim + Number(instruction[1]);
            //depth = depth + Number(instruction[1])
        };
    };
    console.log(Number(depth)*Number(distance));
} catch (error) {
    console.log(`Error: ${error.stack}.`);
};