

// let obj = [
//     {id:1,title:1, img:"https://www.zonkpro.ru/zonk/assets/dice/mini/1.png"},
//     {id:1,title:1, img:"https://www.zonkpro.ru/zonk/assets/dice/mini/1.png"},
//     // {id:2,title:2, img:"https://www.zonkpro.ru/zonk/assets/dice/mini/2.png"},
//     // {id:3,title:3, img:"https://www.zonkpro.ru/zonk/assets/dice/mini/3.png"},
//     // {id:4,title:4, img:"https://www.zonkpro.ru/zonk/assets/dice/mini/4.png"},
//     // {id:5,title:5, img:"https://www.zonkpro.ru/zonk/assets/dice/mini/5.png"},
//     // {id:6,title:6, img:"https://www.zonkpro.ru/zonk/assets/dice/mini/6.png"},
//     // {id:6,title:6, img:"https://www.zonkpro.ru/zonk/assets/dice/mini/6.png"},
// ]

// // let map = new Map([])
// // for(let i=0;i<obj.length;i++){
// //     if(map.has(obj[i])==true){
// //         console.log('Object already exists')
// //     }else{
// //         console.log('There is no object, we will add')
// //         map.set(obj[i])
// //     }
// // }

// // console.log(map)

// let com1 = new Map([
//     [1,1],
//     [2,1],
//     [3,1],
//     [4,1],
//     [5,1],
//     [6,1],
// ])

// let com2 = new Map([
//     [1,1],
//     [2,1],
//     [3,1],
//     [4,1],
//     [5,1],
//     [6,1],
// ])

// console.log(com1 === com2)


// let obj = {
//     name:'I'
// }
// let obj2 = {
//     name: 'I'
// }

// console.log(JSON.stringify(obj) == JSON.stringify(obj2) )



        // else{
        //     //КУБИКИ ЕДИНИЧКИ
        //     if(z[0] == 1 && z[1] >= 1 && z[1] !== 3){
        //         console.log('Единичка весит 100')
        //         setdebcount(debcount+=100 *  z[1])
        //         // document.getElementById(z[0]).classList.add('active') 
        //     }
        //     if(z[0] == 1 && z[1] == 3){
        //         console.log('Единичка весит 1000')
        //         setdebcount(debcount+=1000)
        //     }
        //     //КУБИКИ ДВОЙКИ
        //     if(z[0] == 2 && z[1] == 3){
        //         console.log('Двойка весит 200')
        //         setdebcount(debcount+=200)
        //     }
        //     //КУБИК ТРОЙКА
        //     if(z[0] == 3 && z[1] == 3 && z[1]){
        //         console.log('Тройка весит 300')
        //         setdebcount(debcount+=300)
        //     }
        //     //КУБИК ЧЕТВЕРКА
        //     if(z[0] == 4 && z[1] == 3){
        //         console.log('Четверка весит 400')
        //         setdebcount(debcount+=400)
        //     }
        //     //КУБИК ПЯТЕРКА
        //     if(z[0] == 5 && z[1] == 3){
        //         console.log('Пятерка весит 500')
        //         setdebcount(debcount+=500)
        //     }
        //     if(z[0] == 6 && z[1] == 3){
        //         console.log('Шестерка весит 600')
        //         setdebcount(debcount+=600)
        //     }
        //     //КУБИК 2
        //     if(z[0] == 2 && z[1] >= 1 && z[1] !== 3){
        //         console.log('Двойка весит весит 50')
        //         setdebcount(debcount+=50 * z[1])
        //     }
        // }




//         let com1 = new Map([
//             [1,1],
//             [2,1],
//             [3,1],
//             [4,1],
//             [5,1],
//             [6,1]
//         ])
//         let map = new Map([
//             [1,1],
//             [2,1],
//             [3,1],
//             [4,1],
//             [5,1],
//             [6,1]
//         ])

        
//         let com11 = Object.fromEntries(com1)
//         let map11 = Object.fromEntries(map)

// console.log(JSON.stringify(com11) == JSON.stringify(map11))          
        
// console.log(JSON.stringify(map) == JSON.stringify(com1)  )

    //ПРОВЕРЯЕМ КОМБИНАЦИЮ НА КУБИКИ ОТ 1-6
    
    //map- кубики которые выпали
    //com1 - комбинацию 1-6
    //Приводим map к обьекту
    // let obj_map = Object.fromEntries(map)
    // let obj_com1  = Object.fromEntries(com1)
    // if(JSON.stringify(obj_map) === JSON.stringify(obj_com1)){
    //     console.log('СТРИТ')
    // }
    // else{
    //     for(let z of map){
    //             //КУБИКИ ЕДИНИЧКИ
    //             if(z[0] == 1 && z[1] >= 1 && z[1] !== 3){
    //                 console.log('Единичка весит 100')
    //                 setdebcount(debcount+=100 *  z[1])
    //                 // document.getElementById(z[0]).classList.add('active') 
    //             }
    //             if(z[0] == 1 && z[1] == 3){
    //                 console.log('Единичка весит 1000')
    //                 setdebcount(debcount+=1000)
    //             }
    //             //КУБИКИ ДВОЙКИ
    //             if(z[0] == 2 && z[1] == 3){
    //                 console.log('Двойка весит 200')
    //                 setdebcount(debcount+=200)
    //             }
    //             //КУБИК ТРОЙКА
    //             if(z[0] == 3 && z[1] == 3 && z[1]){
    //                 console.log('Тройка весит 300')
    //                 setdebcount(debcount+=300)
    //             }
    //             //КУБИК ЧЕТВЕРКА
    //             if(z[0] == 4 && z[1] == 3){
    //                 console.log('Четверка весит 400')
    //                 setdebcount(debcount+=400)
    //             }
    //             //КУБИК ПЯТЕРКА
    //             if(z[0] == 5 && z[1] == 3){
    //                 console.log('Пятерка весит 500')
    //                 setdebcount(debcount+=500)
    //             }
    //             if(z[0] == 6 && z[1] == 3){
    //                 console.log('Шестерка весит 600')
    //                 setdebcount(debcount+=600)
    //             }
    //             //КУБИК 2
    //             if(z[0] == 2 && z[1] >= 1 && z[1] !== 3){
    //                 console.log('Двойка весит весит 50')
    //                 setdebcount(debcount+=50 * z[1])
    //             }
    //         }
    // }

    // function podsv(){
    //     for(let z of map){
    //                     //КУБИКИ ЕДИНИЧКИ
    //                     if(z[0] == 1 && z[1] >= 1 && z[1] !== 3){
    //                         // console.log('Еденичку можно подсветить')
    //                         useEffect(()=>{
    //                             console.log(document.getElementById('test'))
    //                         },[])
    //                     }
    //                     if(z[0] == 1 && z[1] == 3){
    //                         console.log('Три единички можно подсветить')
    //                     }
    //                     //КУБИКИ ДВОЙКИ
    //                     if(z[0] == 2 && z[1] == 3){
    //                         console.log('Двойку можно подсветить')
    //                     }
    //                     //КУБИК ТРОЙКА
    //                     if(z[0] == 3 && z[1] == 3 && z[1]){
    //                         console.log('Тройи можно подсветить')
    //                     }
    //                     //КУБИК ЧЕТВЕРКА
    //                     if(z[0] == 4 && z[1] == 3){
    //                         console.log(' весит 400')
    //                     }
    //                     //КУБИК ПЯТЕРКА
    //                     if(z[0] == 5 && z[1] == 3){
    //                         console.log('Пятерка весит 500')
    //                     }
    //                     if(z[0] == 6 && z[1] == 3){
    //                         console.log('Шестерка весит 600')
    //                     }
    //                     //КУБИК 2
    //                     if(z[0] == 2 && z[1] >= 1 && z[1] !== 3){
    //                         console.log('Двойка весит весит 50')
    //                     }
    //                 }
    // }


//     let map2 = Object.fromEntries(map)
//     let com1 = Object.fromEntries([
//         [1,1], [2,1], [3,1], [4,1], [5,1], [6,1]
//     ])

//         if(JSON.stringify(map2) == JSON.stringify(com1)){
//             console.log('стрит')
//         }else{
    
//             for(let z of map){
//                 //КУБИКИ ЕДИНИЧКИ
                // if(z[0] == 1 && z[1] >= 1 && z[1] !== 3){
                //     return 100
                // }
                // if(z[0] == 1 && z[1] == 3){
                //     console.log('Три единички можно подсветить')
                // }
                // //КУБИКИ ДВОЙКИ
                // if(z[0] == 2 && z[1] == 3){
                //     console.log('Двойку можно подсветить')
                // }
                // //КУБИК ТРОЙКА
                // if(z[0] == 3 && z[1] == 3 && z[1]){
                //     console.log('Тройи можно подсветить')
                // }
                // //КУБИК ЧЕТВЕРКА
                // if(z[0] == 4 && z[1] == 3){
                //     console.log(' весит 400')
                // }
                // //КУБИК ПЯТЕРКА
                // if(z[0] == 5 && z[1] == 3){
                //     console.log('Пятерка весит 500')
                // }
                // if(z[0] == 6 && z[1] == 3){
                //     console.log('Шестерка весит 600')
                // }
                // //КУБИК 2
                // if(z[0] == 2 && z[1] >= 1 && z[1] !== 3){
                //     console.log('Двойка весит весит 50')
                // }
//             }
//         }
    
// } 
// function co(el){
//     console.log(el)
//     console.log(map)
// }

// let map = new Map()
// let list = [
//     {id:1,title:1, img:"https://www.zonkpro.ru/zonk/assets/dice/mini/1.png"},
//     {id:2,title:2, img:"https://www.zonkpro.ru/zonk/assets/dice/mini/2.png"},
//     {id:3,title:3, img:"https://www.zonkpro.ru/zonk/assets/dice/mini/3.png"},
//     {id:4,title:4, img:"https://www.zonkpro.ru/zonk/assets/dice/mini/4.png"},
//     {id:5,title:5, img:"https://www.zonkpro.ru/zonk/assets/dice/mini/5.png"},
//     {id:6,title:6, img:"https://www.zonkpro.ru/zonk/assets/dice/mini/6.png"},
// ]
// function posa(){
//         for(let key of list){
//           if(map.has(key.title) == false){
//               map.set(key.title, 1)
//           }
//           else{
//               map.set(key.title, map.get(key.title)+1)
//           }
//       }
//       console.log(map)
//   }
//   function a(el){
//       // console.log(el)
//       for(let z of map){
//         console.log(z)
// }
// console.log(map)
//   }

//   posa()
//   a()
//Проверяем комбинацию от 1-6
// let map2 = Object.fromEntries(map)
// let com1 = Object.fromEntries([
//     [1,1], [2,1], [3,1], [4,1], [5,1], [6,1]
// ])
// let com2 = Object.fromEntries([
//     [1,2] , [3,2], [6,2]
// ])
// if(JSON.stringify(map2) == JSON.stringify(com1)){
//     console.log('стрит')
//     setdebcount(debcount+=1500)
// }
// if(JSON.stringify(map2) == JSON.stringify(com2)){
//     setdebcount(debcount += 750)
// }
// for(let z of map){
//     if(z[0] == 1 && z[1] >= 1 && z[1] !== 3){
//         setdebcount(debcount+=100 * z[1])
//         win(debcount)
//     }
//     if(z[0] == 1 && z[1] == 3){
//         setdebcount(debcount+=1000)
//         win(debcount)
//     }
//     //КУБИКИ ДВОЙКИ
//     if(z[0] == 2 && z[1] == 3){
//         setdebcount(debcount+=200)
//         win(debcount)
//     }
//     //КУБИК ТРОЙКА
//     if(z[0] == 3 && z[1] == 3 && z[1]){
//         setdebcount(debcount+=300)
//         win(debcount)
//     }
//     //КУБИК ЧЕТВЕРКА
//     if(z[0] == 4 && z[1] == 3){
//         setdebcount(debcount+=400)
//         win(debcount)
//     }
//     //КУБИК ПЯТЕРКА
//     if(z[0] == 5 && z[1] == 3){
//         setdebcount(debcount+=500)
//         win(debcount)
//     }
//     if(z[0] == 6 && z[1] == 3){
//         setdebcount(debcount+=600)
//         win(debcount)
//     }
//     //КУБИК 2
//     if(z[0] == 2 && z[1] >= 1 && z[1] !== 3){
//         setdebcount(debcount+=50 * z[1])
//         win(debcount)
//     }
// }
// function win(debcount){
//     if(debcount >=300){
//         console.log('вы можете сохранить')
//     }else{
//         console.log('нада брать')
//     }
// }       
// }
        // for(let z of sa){
        //         if(z[0] == el.title && z[1] == 3){
        //             setdebcount(debcount+= Number(z[0] + '00'))
        //         }
        //         if(z[0] == el.title && z[1] > 3 ){
        //             setdebcount(debcount+=Number((z[0]*2) + '00'))
        //         }
        //     console.log(sa)
        // }



        // if(sa.has(el.title) == false){
        //         sa.set(el.title, 1)
        //         console.log('net new')
        //     }
        //     else{
        //         sa.set(el.title, sa.get(el.title)+1)
        //         console.log('est')
        //     }
        // //Проверяем комбинацию 3пары
        // if(JSON.stringify(com3) == JSON.stringify(Object.fromEntries(sa))){
        //     setdebcount(debcount+=750)
        //     console.log('3пары + 750очков')
        // }
        // //Проверяем комбинацию стрит
        // if(JSON.stringify(com4) == JSON.stringify(Object.fromEntries(sa))){
        //     setdebcount(debcount+=1500)
        //     console.log('Стрит! + 1500очков')
        // }
  
        // for(let z of sa){       
        //     if(z[0] == el.title && z[1] == 3 && z[0] != 1 && z[0] !=5){
                
        //         console.log('Сумма к прибовлению: '+ z[0] + '00')
        //         debcount+= Number(z[0] + '00')
        //     }
        //     else if(z[0] == el.title && z[1] > 3 && z[0] != 1 && z[0] != 5){
        //         console.log('Сумма к прибовлению: '+ z[0] * 2 + '00')
        //         debcount+= Number(z[0] * 2 + '00')
        //         debcount=  debcount - (z[0]+ '00')
        //     }
        // }
        // win()
        // // cubikinapole.filter(p=> p.id !== el.id)


        // if(el.title != 1 || el.title != 5){
        //         if(sa.get(el.title) == 3){
        //             debcount+= Number(el.title + '00')
        //         }
        //         else if(sa.get(el.title) >= 4){
        //          debcount+= Number(el.title * 2 + '00')
        //         }
        //     }
        //     if(el.title == 1){
        //         if(sa.get(el.title) <= 2){
        //             // console.log(100)
        //             debcount+= Number(el.title + '00')
        //         }
        //         else if(sa.get(el.title) == 3){
        //             // console.log(1000)
        //             debcount+= 1000
        //         }
        //         else if(sa.get(el.title) >= 4){
        //             // console.log(Number(el.title * 2 + '000'))
        //             debcount+= Number(el.title * 2 + '00')
        //         }
        //     }
        //     if(el.title == 5){
        //         if(sa.get(el.title) <= 2){
        //             // console.log(50)
        //             debcount+= 50
        //         }
        //         else if(sa.get(el.title) == 3){
        //             // console.log(500)
        //             debcount+=500
        //         }
        //         else if(sa.get(el.title) >= 4){
        //             // console.log(500 * 2)
        //             debcount+=500 * 2
        //         }
        //     }

// let obj = [
//         {id:0, title:1, style:''},
//         {id:1, title:2, style: ''},
//         {id:3, title:1, style: ''}
// ]
// for(let key of obj){
//         console.log(key.title == 1)
//         if(key.title == 1){
//                 key.style = 'active'
//         }
// }
// console.log(obj)



for(let i =0;i<10;i++){
        console.log(i)
}
