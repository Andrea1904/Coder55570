/*const suma=(n1,n2)=> {
    if(!n1 && !n2){
        return 0
    }
    if(typeof n1 !=='number' || typeof n2 !=='number'){
        return null
    }
    return n1+n2

}*/


const suma=(...args)=> {
    if(!args.length){
        return 0
    }
    if(args.some (( number =>  typeof number !=='number'))){
        return null
    }
    return args.reduce((acc,number)=>acc + number,0)

}

export default suma