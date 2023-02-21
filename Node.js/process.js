// console.log(process);

// console.log(process.env);

//[node, process.js, 6, 7]
//[0   , 1         , 2, 3]   
// console.log(process.argv);

for (let i = 2; i < process.argv.length ; i++){
    console.log(process.argv[i]);
}

console.log(process.memoryUsage());

