

let obj = [
    {id:1,title:1, img:"https://www.zonkpro.ru/zonk/assets/dice/mini/1.png"},
    {id:1,title:1, img:"https://www.zonkpro.ru/zonk/assets/dice/mini/1.png"},
    // {id:2,title:2, img:"https://www.zonkpro.ru/zonk/assets/dice/mini/2.png"},
    // {id:3,title:3, img:"https://www.zonkpro.ru/zonk/assets/dice/mini/3.png"},
    // {id:4,title:4, img:"https://www.zonkpro.ru/zonk/assets/dice/mini/4.png"},
    // {id:5,title:5, img:"https://www.zonkpro.ru/zonk/assets/dice/mini/5.png"},
    // {id:6,title:6, img:"https://www.zonkpro.ru/zonk/assets/dice/mini/6.png"},
    // {id:6,title:6, img:"https://www.zonkpro.ru/zonk/assets/dice/mini/6.png"},
]

// let map = new Map([])
// for(let i=0;i<obj.length;i++){
//     if(map.has(obj[i])==true){
//         console.log('Object already exists')
//     }else{
//         console.log('There is no object, we will add')
//         map.set(obj[i])
//     }
// }

// console.log(map)

let com1 = new Map([
    [1,1],
    [2,1],
    [3,1],
    [4,1],
    [5,1],
    [6,1],
])



let com2 = new Map([
    [1,1],
    [2,1],
    [3,1],
    [4,1],
    [5,1],
    [6,1],
])

console.log(com1 == com2)