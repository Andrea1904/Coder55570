console.log(process.argv.slice(2))

console.log( ' CWD : ' + process.cwd()) // direccion actual 

console.log( ' PID : ' + process.pid) // obtengo el id del proceso 

console.log( ' Memoria Usada : ' + process.memoryUsage.rss())