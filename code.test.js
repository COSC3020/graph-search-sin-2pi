const fs = require('fs');
const jsc = require('jsverify');
eval(fs.readFileSync('code.js')+'');


const graph1 = [
    [1, 2],     
    [3],        
    [4],        
    [5],        
    [6],        
    [7],        
    [],         
    [],         
];

const graph2 = [
    [2, 3, 1],  
    [4],        
    [5],        
    [6],        
    [7],        
    [],         
    [],         
    []          
];

const graph3 = [
    [1, 2, 3],  
    [4, 5],     
    [6],        
    [7],        
    [],         
    [],         
    [],         
    []          
];

function arraysEqual(arr1, arr2) {
    return JSON.stringify(arr1) === JSON.stringify(arr2);
}

const tests = [
    { 
        func: depthFirstSearch, 
        graph: graph1, 
        start: 0,
        target: 7,
        result: [0, 1, 3, 5, 7], 
        name: 'Test 1'
    },
    { 
        func: depthFirstSearch, 
        graph: graph2, 
        start: 0,
        target: 7,
        result: [0, 1, 4, 7], 
        name: 'Test 2'
    },
    { 
        func: depthFirstSearch, 
        graph: graph3, 
        start: 0,
        target: 7,
        result: [0, 3, 7], 
        name: 'Test 3'
    },
    {
        func: depthFirstSearch,
        graph: graph1,
        start: 0,
        target: 6,
        result: [0, 2, 4, 6],
        name: 'Test 4'
    }
];

tests.forEach(test => {
    const output = test.func(test.graph, test.start, test.target);
    if (arraysEqual(output, test.result)) {
        console.log(`${test.name} successful`);
    } else {
        console.error(`${test.name} failed: ${output} != ${test.result}`);
    }
});
