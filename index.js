const fs = require('fs')
    readline = require('readline');

console.time('time');
const matrix = [];
const testArray = [66 ,63 ,44 ,78 ,74];
let result = [0,0,0,0,0,0];
const rd = readline.createInterface({
    input: fs.createReadStream('10m.txt')
});
    
rd.on('line', (line) => {
     matrix.push(Buffer.from(toInt(line.split(' ')).sort()));

});


rd.on('close', ()=>{
    console.time('time');

    let x = matrix.length;
    let hit = 0;
    let length = testArray.length;
    while(x--){
        hit=0;
        let y = matrix[x].length;
        while(y--){        
            for(let i = 0; i< length; i++) {
                if(testArray[i] == matrix[x][y]) {
                        hit++;
                        break;
                }
            }
        }
        result[hit]++;
    }    

    console.timeEnd('time');
    console.log(result);
});
const toInt  = (array) =>{
     return array.map((number) =>{
        return number*1;
    }); 
}