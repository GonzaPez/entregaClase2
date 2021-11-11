export function sumarTotal (array){
    let suma=0
    if (array.length > 0){
        for (let index = 0; index < array.length; index++) {
            suma=suma+array[index].precio    
         }
    }
    
    return suma
}