function operacionCompleja(){
    let result= 0
    for(let i =0 ; i<= 5e9 ; i++ ){
        result+=i
    }
    return result
}

process.on('message',(data)=>{
     console.log( 'Estoy estoy escuchando el proceso' + data)
     const result = operacionCompleja()
     console.log('operacion' +result)
     process.send(result)
})