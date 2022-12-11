
import { useState } from 'react';
import './App.css';

function App() {
  //Функции
  function exit(){
    alert('Выйти')
  }

  let [music_stat, set_music_stat] = useState(1)
  function music(){
    if(music_stat){
      alert('Выключить звук')
      set_music_stat(music_stat = 0)
    }else{
      alert('Включить звук')
      set_music_stat(music_stat = 1)
    }
  }

  
  let [cubs, setcubs] = useState([
    {id:1,title:1, img:"https://www.zonkpro.ru/zonk/assets/dice/mini/1.png"},
    {id:2,title:2, img:"https://www.zonkpro.ru/zonk/assets/dice/mini/2.png"},
    {id:3,title:3, img:"https://www.zonkpro.ru/zonk/assets/dice/mini/3.png"},
    {id:4,title:4, img:"https://www.zonkpro.ru/zonk/assets/dice/mini/4.png"},
    {id:5,title:5, img:"https://www.zonkpro.ru/zonk/assets/dice/mini/5.png"},
    {id:6,title:6, img:"https://www.zonkpro.ru/zonk/assets/dice/mini/6.png"},
  ])
  
  let [cubikinapole, setcubikinapole] = useState([

  ])
  
  let list = []
  function sheker(){
    for(let i=0;i<6;i++){
    //   let randomcub = Math.floor(Math.random() * (6 - 0) + 0)
      let obj = {
        id: Date.now() + Math.random(),
        title: cubs[i].title,
        img: cubs[i].img
      }
      list.push(obj)
    }
    setcubikinapole([...cubikinapole, ...list])
    //счет?
    posa()

  }

let [debcount, setdebcount] = useState(0)
  let map = new Map()

  function posa(){
      for(let key of list){
        if(map.has(key.title) == false){

            map.set(key.title, 1)
        }
        else{
          
            map.set(key.title, map.get(key.title)+1)
        }
    }
    console.log(map)
    let com2 = new Map([
        [1,1],
        [2,1],
        [3,1],
        [4,1],
        [5,1],
        [6,1],
    ])
    console.log(com2)
    if(map == com2){
        console.log('СТРИТ')
    }   
    for(let z of map){

        // console.log([z[0],z[1]])
        //СТРИТ
        // console.log(z[0],z[1])
   
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
    }
    // console.log(map)
  }


  return (
    <div className="App">
     <div className="container">
        <div className="header">
            <button onClick={()=>exit}>Выйти</button>
            <button onClick={()=>music}>Выключить звук</button>
        </div>
        <div className="main">
            <div className="counter">
                <div className="name">
                    <img src="https://miro.medium.com/max/1200/1*Xy0Iv7mQEg-5LpmJxUarVw.jpeg" alt="" />
                    <h2>JavaScript/React Js</h2>
                    <h3>Debug counter: {debcount}</h3>
                </div>
                <div className="counters">
                    <ul>
                        <li>1.</li>
                        <li>2.</li>
                        <li>3.</li>
                        <li>4.</li>
                        <li>5.</li>
                        <li>6.</li>
                        <li>7.</li>
                        <li>8.</li>
                        <li>9.</li>
                        <li>10.</li>
                    </ul>
                    <h2>Общий счет</h2>
                    <button>Сохранить</button>
                </div>
            </div>
            <div className="pole">
                <div className="ymnojitli">
                    <div className="z g">Z</div>
                    <div className="-z g">-Z</div>
                    <div className="x2 g">X2</div>
                    <div className="6 g">+6</div>
                </div>
                <div className="samo_pole">
                  <div className='cubiki'>
                    {cubikinapole.length !== 0 ? 
                    cubikinapole.map((el)=>
                    <div className='cub' key={el.id} id={el.title}>
                      <img src={el.img} onClick={()=>posa()} />
                    </div>
                    )
                    : console.log('их нет') }
                  </div>
                    <div className="sheker">
                        <img src="https://www.zonkpro.ru/zonk/assets/shakers/1.png" alt="" onClick={()=>sheker()}/>
                    </div>
                    <div className="polyakakieto">
                        <div className="blocksone">
                            <div className="blockone all"></div>
                        </div>
                        <div className="blockstwo">
                            <div className="blocktwo all"></div>
                            <div className="blocktwo all"></div>
                        </div>
                        <div className="blocksthree">
                            <div className="blockthree all"></div>
                            <div className="blockthree all"></div>
                            <div className="blockthree all"></div>
                        </div>
                        <div className="blocksfour">
                            <div className="blockfour all"></div>
                            <div className="blockfour all"></div>
                            <div className="blockfour all"></div>
                            <div className="blockfour all"></div>
                        </div>
                        <div className="blocksfive">
                            <div className="blockfive all"></div>
                            <div className="blockfive all"></div>
                            <div className="blockfive all"></div>
                            <div className="blockfive all"></div>
                            <div className="blockfive all"></div>
                        </div>
                        <div className="blockssix">
                            <div className="blocksix all"></div>
                            <div className="blocksix all"></div>
                            <div className="blocksix all"></div>
                            <div className="blocksix all"></div>
                            <div className="blocksix all"></div>
                            <div className="blocksix all"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="vseymnojiteli">
                <ul>
                    <li>X2 Сохраняет результаттт раунда умноженный на два</li>
                    <li>Бросок с джокером которые поожет вам собрать хорогую комбинацию</li>
                    <li>Брсоить еще шесть кубиков чтобы получить еще больше очков за один ход</li>
                    <li>Отмена хода когда вы получаете ЗОНК</li>
                </ul>
            </div>
            <div className="kombinajii">
                <h2>Комбинации</h2>
                <div className="one">
                    <img src="https://www.zonkpro.ru/zonk/assets/dice/mini/1.png" alt="" /><p>100</p>
                </div>
                <div className="five">
                    <img src="https://www.zonkpro.ru/zonk/assets/dice/mini/2.png" alt="" /><p>50</p>
                </div>
                <div className="one_3">
                    <img src="	https://www.zonkpro.ru/zonk/assets/dice/mini/1.png" alt=""/>
                    <img src="	https://www.zonkpro.ru/zonk/assets/dice/mini/1.png" alt=""/>
                    <img src="	https://www.zonkpro.ru/zonk/assets/dice/mini/1.png" alt=""/>
                    <p>1000</p>
                </div>
                <div className="two_3">
                    <img src="	https://www.zonkpro.ru/zonk/assets/dice/mini/2.png" alt=""/>
                    <img src="	https://www.zonkpro.ru/zonk/assets/dice/mini/2.png" alt=""/>
                    <img src="	https://www.zonkpro.ru/zonk/assets/dice/mini/2.png" alt=""/>
                    <p>200</p>
                </div>
                <div className="three_3">
                    <img src="	https://www.zonkpro.ru/zonk/assets/dice/mini/3.png" alt=""/>
                    <img src="	https://www.zonkpro.ru/zonk/assets/dice/mini/3.png" alt=""/>
                    <img src="	https://www.zonkpro.ru/zonk/assets/dice/mini/3.png" alt=""/>
                    <p>300</p>
                </div>
                <div className="four_4">
                    <img src="https://www.zonkpro.ru/zonk/assets/dice/mini/4.png" alt=""/>
                    <img src="https://www.zonkpro.ru/zonk/assets/dice/mini/4.png" alt=""/>
                    <img src="https://www.zonkpro.ru/zonk/assets/dice/mini/4.png" alt=""/>
                    <p>400</p>
                </div>
                <div className="five_3">
                    <img src="	https://www.zonkpro.ru/zonk/assets/dice/mini/5.png" alt=""/>
                    <img src="	https://www.zonkpro.ru/zonk/assets/dice/mini/5.png" alt=""/>
                    <img src="	https://www.zonkpro.ru/zonk/assets/dice/mini/5.png" alt=""/>
                    <p>500</p>
                </div>
                <div className="six_3">
                    <img src="	https://www.zonkpro.ru/zonk/assets/dice/mini/6.png" alt=""/>
                    <img src="	https://www.zonkpro.ru/zonk/assets/dice/mini/6.png" alt=""/>
                    <img src="	https://www.zonkpro.ru/zonk/assets/dice/mini/6.png" alt=""/>
                    <p>600</p>
                </div>
                <div className="five_2">
                    <img src="https://www.zonkpro.ru/zonk/assets/dice/mini/2.png" alt=""/>
                    <img src="https://www.zonkpro.ru/zonk/assets/dice/mini/2.png" alt=""/>
                    <img src="https://www.zonkpro.ru/zonk/assets/dice/mini/2.png" alt=""/>
                    <img src="https://www.zonkpro.ru/zonk/assets/dice/mini/2.png" alt=""/>
                    <img src="https://www.zonkpro.ru/zonk/assets/dice/mini/2.png" alt=""/>
                    <p>200+200+200..</p>
                </div>
                <div className="hz_kakoe_name">
                    <img src="https://www.zonkpro.ru/zonk/assets/dice/mini/1.png" alt=""/>
                    <img src="https://www.zonkpro.ru/zonk/assets/dice/mini/1.png" alt=""/>
                    <img src="	https://www.zonkpro.ru/zonk/assets/dice/mini/5.png" alt=""/>
                    <img src="	https://www.zonkpro.ru/zonk/assets/dice/mini/5.png" alt=""/>
                    <img src="	https://www.zonkpro.ru/zonk/assets/dice/mini/5.png" alt=""/>
                    <img src="	https://www.zonkpro.ru/zonk/assets/dice/mini/5.png" alt=""/>
                    <p>3пары-750</p>
                </div>
                <div className="opiaty_hz_name">
                    <img src="https://www.zonkpro.ru/zonk/assets/dice/mini/1.png" alt=""/>
                    <img src="https://www.zonkpro.ru/zonk/assets/dice/mini/2.png" alt=""/>
                    <img src="	https://www.zonkpro.ru/zonk/assets/dice/mini/5.png" alt=""/>
                    <img src="https://www.zonkpro.ru/zonk/assets/dice/mini/4.png" alt=""/>
                    <img src="	https://www.zonkpro.ru/zonk/assets/dice/mini/5.png" alt=""/>
                    <img src="	https://www.zonkpro.ru/zonk/assets/dice/mini/5.png" alt=""/>
                    <p>стрит-1500</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}

export default App;
