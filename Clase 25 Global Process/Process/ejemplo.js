const  color1 = (data)=> console.log('\x1b[36m',data);
const  color2 = (data)=> console.log('\x1b[33m%s\x1b[0m',data);

process.on('exit',(code)=>{
    switch(code) {
        case 0:
             color1('Termino Satisfactoriamente')
             break;
        case -4:
            color2('Termino con errores')
            break
        default:{
            break
        }
    }
})

const listNumbers = (...numbers)=>{
    if( numbers.some((number)=>typeof number!=='number')){
        console.log( 'Invalid Param')
        console.log(numbers.map((number)=> typeof number))
        process.exit(-4)
    }else{
        console.log(numbers)
    }
}

listNumbers(1,2,3,'3')