import {Howl, Howler} from 'howler';

import { useEffect, useState, useRef, useMemo } from 'react';
import './App.css';

function App() {
    // let map = new Map()
  //Функции
  function exit(){
    alert('Выйти')
  }

  let [music_stat, set_music_stat] = useState(1)
  function music(){
    alert('V razrabotke')
  }

  
  let [cubs, setcubs] = useState([
    {id:1,title:1, img:"https://www.zonkpro.ru/zonk/assets/dice/mini/1.png", style: 'none'},
    {id:2,title:2, img:"https://www.zonkpro.ru/zonk/assets/dice/mini/2.png" , style: 'none'},
    {id:3,title:3, img:"https://www.zonkpro.ru/zonk/assets/dice/mini/3.png" , style: 'none'},
    {id:4,title:4, img:"https://www.zonkpro.ru/zonk/assets/dice/mini/4.png" , style: 'none'},
    {id:5,title:5, img:"https://www.zonkpro.ru/zonk/assets/dice/mini/5.png" , style: 'none'},
    {id:6,title:6, img:"https://www.zonkpro.ru/zonk/assets/dice/mini/6.png" , style: 'none'},
    
  ])
  let [winner , setwinner] = useState(0)
  let [raundco, setraundco] = useState(0)
  let [debcount, setdebcount] = useState(0)
  let [raund, setraund] = useState([
    {id:0, counter:0},
    {id:1, counter:0},
    {id:2, counter:0},
    {id:3, counter:0},
    {id:4, counter:0},
    {id:5, counter:0},
    {id:6, counter:0},
    {id:7, counter:0},
    {id:8, counter:0},
    {id:9, counter:0},
  ])

  let [cubikinapole, setcubikinapole] = useState([
  ])

  let list = []
  function sheker(){
    for(let i=0;i<6;i++){
      let randomcub = Math.floor(Math.random() * (6 - 0) + 0)
      let obj = {
        id: Date.now() + Math.random(),
        title: cubs[randomcub].title,
        img: cubs[randomcub].img,
        style: cubs[randomcub].style,
      }
      list.push(obj)
    }
    setcubikinapole([...cubikinapole, ...list])
    posa()
  }
  
  let com3 = Object.fromEntries([
    [1,2], [3,2] , [6,2]
])
let com4 = Object.fromEntries([
    [1,1],[2,1],[3,1],[4,1],[5,1],[6,1]
])
  let map = new Map()
  let strit = 0
  let th = 0
  function posa(){
    let list2 = list
          for(let key of list){
            if(map.has(key.title) == false){
                map.set(key.title, 1)
            }
            else{
                map.set(key.title, map.get(key.title)+1)
            }
        }
        console.log(map)
        if(JSON.stringify(com4) == JSON.stringify(Object.fromEntries(map))){
           console.log('Выпал стрит')
           for(let i=0;i<list2.length;i++){
            list2[i].style = 'active'
           }
           strit++
        }
        if(JSON.stringify(com3) == JSON.stringify(Object.fromEntries(map))){
            console.log('Выпали 3пары')
            for(let i=0;i<list2.length;i++){
                list2[i].style = 'active'
               }
            th++
        }
        for(let z of map){
            for(let key of list2){
                if(z[0] == 1 || z[0] == 5){
                    if(key.title == z[0]){
                        key.style = 'active'
                    }
                }else if(z[1] >= 3){
                    if(key.title == z[0]){
                        key.style = 'active'
                    }
                }
            }
        }
        
  }
    function deletea(){
        list = []
        map = []
        sa = []
        setcubikinapole(cubikinapole = [])
        strit = 0
        th = 0
        debcount = 0
    }
    let sa = new Map()

    //f
    function a(el){
        console.log(el.title)
            if(sa.has(el.title) == false){
                sa.set(el.title, 1)
                console.log('net new')
            }
            else{
                sa.set(el.title, sa.get(el.title)+1)
                console.log('est')
            }
            if(el.title != 1 || el.title != 5){
                for(let z of sa){   
                    if(z[0] == el.title && z[1] == 3 && z[0] != 1 && z[0] !=5){
                        console.log('Сумма к прибовлению: '+ z[0] + '00')
                        debcount+= Number(z[0] + '00')
                    }
                    else if(z[0] == el.title && z[1] > 3 && z[0] != 1 && z[0] != 5){
                        console.log('Сумма к прибовлению: '+ z[0] * 2 + '00')
                        debcount+= Number(z[0] * 2 + '00')
                        debcount=  debcount - (z[0]+ '00')
                    }}
        }
        if(sa.has(el.title) && el.title == 1){
            if(sa.get(el.title) <= 2){
                debcount+=100
            }
            else if(sa.get(el.title) == 3){
                debcount+= Number(el.title + '000') - 200
            }
            else if(sa.get(el.title) >= 4){
                debcount+= Number(el.title + '000') 
            }
        }
        if(sa.has(el.title) && el.title == 5){
            if(sa.get(el.title) <= 2){
                debcount+=50
            }
            else if(sa.get(el.title) == 3){
                debcount+= Number(el.title + '00') - 100
            }
            else if(sa.get(el.title) >= 4){
                debcount+= Number(el.title + '00') 
            }
        }
            if(JSON.stringify(com4) == JSON.stringify(Object.fromEntries(sa))){
                console.log('Стрит')
                // debcount+=1500
                debcount= 1500
            }
            if(JSON.stringify(com3) == JSON.stringify(Object.fromEntries(sa))){
                console.log('3пары')
                // debcount+=750
                debcount = 750
            }
  
    win()
    console.log('Общая сумма: ' + Number(debcount))
}
function win(){

}
function save(){
    if(debcount <300){
        console.log('Вы не можете сохранить')
    }else{
        console.log('вы можете сохранить')
        raund = raund[raundco].counter += debcount


        setraundco(raundco = raundco + 1)
        setdebcount(debcount = 0)
        setcubikinapole(cubikinapole = [])
        list = []
        map = []
        
    }
}


    function as() {
        var audio = new Audio(); // Создаём новый элемент Audio
        audio.src = 'best.mp4'; // Указываем путь к звуку "клика"
        audio.autoplay = true; // Автоматически запускаем
      }
      const sound = new Howl({
        src: ['best.mp4']
      });
      sound.play();
      Howler.volume(0.5);


  return (
    <div className="App">
        <button onClick={()=>as}>a</button>
     <div className="container" id='test'>
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
                <audio src="best.mp3"></audio>
                    <ul>
                    {raund.map(el=>
                        <li key={el.id}>{el.id +') '+ el.counter}</li>
                        )}
                    </ul>
                    <h1>{winner  >= 5000 ? 'Ты набрал много очков!' : 'Ты пока не выйграл'}</h1>
                    <h2>Общий счет</h2>
                    <button onClick={()=>save()}>Сохранить</button>
                    <button onClick={()=>deletea()}>Очистить поле</button>
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
                    <div id='cub' key={el.id} className={el.style} onClick={()=>a(el)}>
                      <img src={el.img} />
                    </div>
                    )
                    : console.log() }
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
                            <div id="blocksix" className="blocksix all"></div>
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
                    <img src="https://www.zonkpro.ru/zonk/assets/dice/mini/5.png" alt="" /><p>50</p>
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
