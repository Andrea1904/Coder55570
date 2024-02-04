import cluster from 'cluster'
import { cpus } from 'os';
import http from 'http'

//console.log( cluster.isPrimary)
//console.log(`Primary ${process.pid} is running`);

const numCpus = cpus().length
//console.log('La cantidada de CPU es : '+ numCpus)

if(cluster.isPrimary){
    console.log(`Primary ${process.pid} is created`);

    for(let i=1 ; i<=numCpus ; i++){
        //console.log(i)
        cluster.fork()
    }
    
}
else{
    cluster.on()
    console.log('No soy un proceso principal no puedo crear hijos')
    console.log(`Worker ${process.pid} is created`);

     // Workers can share any TCP connection
  // In this case it is an HTTP server
    http.createServer((req, res) => {
    res.writeHead(200);
    res.end('hello world\n');
  }).listen(8000);


}

