import suma from '../src/suma.js'

const success = (menssage)=> console.log('\x1b[32m%s\x1b[0m',menssage)
const error=(menssage)=> console.log('\x1b[31m%s\x1b[0m',menssage)

let totalCase =0
let successCase=0

console.log('1.Debe devolver null si algún parámetro no es numérico.')
const resultado = suma(1,'1')
totalCase++
if(resultado=== null){
    successCase++ 
    success('Test 1- Exitoso')
}else{  
    error('Test 1- Fallido')
}


console.log('2. Debe devolver 0 si no se pasó ningún parámetro.')
const resultado1 = suma()
totalCase++
if(resultado1=== 0){
    successCase++ 
    success('Test 2- Exitoso')
}else{   
    error('Test 2- Fallido')
}



console.log('3. Debe poder realizar la suma correctamente. .')
const resultado2 = suma(10,6)
totalCase++
if(resultado2=== 16){
    successCase++ 
    success('Test 3- Exitoso')
}else{   
    error('Test 3- Fallido')
}



console.log('4. Debe poder hacer la suma con cualquier cantidad de números.')
const resultado3 = suma(10,6,3,1)
totalCase++
if(resultado3=== 20){
    successCase++ 
    success('Test 4- Exitoso')
}else{   
    error('Test 4- Fallido')
}

console.log('---------------------------------------------------------------')
if( successCase === totalCase){
    success(`Numero pruebas que pasaron ${successCase} de ${totalCase}  totales`)
}else{
    error(`Numero pruebas que pasaron ${successCase} de ${totalCase}  totales`)
}
console.log('---------------------------------------------------------------')