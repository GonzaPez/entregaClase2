export function sumarTotal (array){
    let suma=0
    if (array.length > 0){
        for (let index = 0; index < array.length; index++) {
            suma=suma+array[index].precio    
         }
    }
    
    return suma
}

export function existeItem (caja, taza){
let existe = false 
caja.map((item) => item.id === taza.id ? existe = true : existe=false)
return existe
}

export function agruparItem(modelos, unidad){
    let modelo = modelos.filter((modelo) => modelo.id === unidad.id)[0]
    let nuevoItem ={...modelo, cantidad: modelo.cantidad + unidad.cantidad, precio: modelo.precio + unidad.precio} 
    let viejoArray = modelos.filter((modelo) => modelo.id !== unidad.id)
    let nuevoArray = [...viejoArray, nuevoItem]
    console.log(nuevoArray)
   
    return nuevoArray

}