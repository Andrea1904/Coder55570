process.on('beforeExit', (code) => {
    console.log('Process beforeExit event with code: ', code);
  });
  
process.on('exit',(code)=>{
    console.log('finalizando el programa', code)
})

console.log();