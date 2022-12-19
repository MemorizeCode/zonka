import { clear } from '@testing-library/user-event/dist/clear';
import {Howl, Howler} from 'howler';

import { useEffect, useState, useRef, useMemo } from 'react';
import './App.css';

function App() {
 //Выход
  function exit(){
    alert('Выйти')
  }
  //Звуки
  let [music_stat, set_music_stat] = useState(1)
  function music(){
    alert('V razrabotke')
  }

  //Массив кубиков
  let [cubs, setcubs] = useState([
    {id:1,title:1, img:"https://www.zonkpro.ru/zonk/assets/dice/mini/1.png", style: 'none'},
    {id:2,title:2, img:"https://www.zonkpro.ru/zonk/assets/dice/mini/2.png" , style: 'none'},
    {id:3,title:3, img:"https://www.zonkpro.ru/zonk/assets/dice/mini/3.png" , style: 'none'},
    {id:4,title:4, img:"https://www.zonkpro.ru/zonk/assets/dice/mini/4.png" , style: 'none'},
    {id:5,title:5, img:"https://www.zonkpro.ru/zonk/assets/dice/mini/5.png" , style: 'none'},
    {id:6,title:6, img:"https://www.zonkpro.ru/zonk/assets/dice/mini/6.png" , style: 'none'},
    
  ])
  let [winner , setwinner] = useState(0)
  let [raundco, setraundco] = useState(0) //Текунщий раунд
  let [debcount, setdebcount] = useState(0) //Счет
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

  let [cubikinapole, setcubikinapole] = useState([])

  let list = []
  
  let [btndi,setbtn] = useState(true) //разрешаем брать
  function sheker(){
    if(btndi){
        setbtn(btndi = false)
        for(let i=0;i<6;i++){
          let randomcub = Math.floor(Math.random() * (6 - 0) + 0)
          let obj = {
            id: Date.now() + Math.random(),
            title: cubs[i].title,
            img: cubs[i].img,
            style: cubs[i].style,
          }
          list.push(obj)
        }
        setcubikinapole([...cubikinapole, ...list])
        posa()
    }
    else{
        console.log('вы должны взять кубики которые ')
    }
  }
  
  let com3 = Object.fromEntries([
    [1,2], [3,2] , [6,2]
])
let com4 = Object.fromEntries([
    [1,1],[2,1],[3,1],[4,1],[5,1],[6,1]
])
  let [map,setmap] = useState(new Map())

  let strit = 0
  let th = 0
  let list2 = list
  let est = 0
  console.log(map)
  function posa(){
    new Map(map)
          for(let key of list){
            if(map.has(key.title) == false){
                setmap(map =map.set(key.title, 1))
            }
            else{
                setmap(map =map.set(key.title, map.get(key.title)+1))
            }
        }
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
        for(let i=0;i<list2.length;i++){
            if(list2[i].style == 'none'){
                est = est + 1
            }
        }
        if(est==6){
            console.log('комбинаций нет')
            setbtn(btndi = true)
            setTimeout(()=>{
                alert('зонк')
                list = []
                list = []
                setmap(map = [])
                setsa(sa2= [])
                setcubikinapole(cubikinapole = [])
                setdebcount(debcount= 'ZONK')
                strit = 0
                th = 0
                debcount = 0
            })
        }
        else{
            console.log('комбинаций есть')
            setbtn(btndi = false)
        }
  }


    let [sa2, setsa] = useState(new Map())
    function a(el){        
        if(sa2.has(el.title) == false){
            setsa(sa2.set(el.title, 1))
        }
        else{
            setsa(sa2.set(el.title, sa2.get(el.title)+1))
        }
        if(el.style == 'active'){
            el.style = 'hidden'
            if(el.title != 1 || el.title != 5){
                for(let z of sa2){   
                    if(z[0] == el.title && z[1] == 3 && z[0] != 1 && z[0] !=5){
                        setdebcount(debcount = debcount+ Number(z[0] + '00'))
                        
                    }
                    else if(z[0] == el.title && z[1] > 3 && z[0] != 1 && z[0] != 5){
                        setdebcount(debcount = debcount + Number(z[0] * 2 + '00'))
                        setdebcount(debcount = debcount - (z[0]+ '00'))
                        
                    }}
        }
        if(sa2.has(el.title) && el.title == 1){
            if(sa2.get(el.title) <= 2){
                setdebcount(debcount = debcount + Number(100))
                el.style = 'hidden'
            }
            else if(sa2.get(el.title) == 3){
                setdebcount(debcount = debcount+ Number(el.title + '000') - 200)
                el.style = 'hidden'
            }
            else if(sa2.get(el.title) >= 4){
                setdebcount(debcount = debcount + Number(el.title + '000') )
                el.style = 'hidden'
            }
        }
        if(sa2.has(el.title) && el.title == 5){
            if(sa2.get(el.title) <= 2){
                setdebcount(debcount = debcount+ 50)
                el.style = 'hidden'
            }
            else if(sa2.get(el.title) == 3){
                setdebcount(debcount = debcount + Number(el.title + '00') - 100)
                el.style = 'hidden'
            }
            else if(sa2.get(el.title) >= 4){
                setdebcount(debcount = debcount + Number(el.title + '00'))
                el.style = 'hidden'
            }
        }
        if(JSON.stringify(com4) == JSON.stringify(Object.fromEntries(map))){
            el.style = 'hidden'
            if(JSON.stringify(com4) == JSON.stringify(Object.fromEntries(sa2))){
                console.log('Стрит')
                setdebcount(debcount = 1500)
            }
        }
        if(JSON.stringify(com3) == JSON.stringify(Object.fromEntries(map))){
            el.style = 'hidden'
            if(JSON.stringify(com3) == JSON.stringify(Object.fromEntries(sa2))){
                console.log('3пары')
                setdebcount(debcount = 750)
            }
        }
            setcubikinapole([...cubikinapole])
            console.log('Общая сумма: ' + Number(debcount))
        }
        win()
        combim()
}
function combim(){
    let none = cubikinapole
    let active = cubikinapole
    let fnone = none.filter(el=>el.style == 'none').length
    let factive = active.filter(el=> el.style == 'active').length
    if(debcount < 300 && fnone > 0 && factive==0){
        console.log('у вас нет комбинация гг')
        setTimeout(() => {
            setsa(sa2 = new Map())
            setmap(map = new Map())
            setcubikinapole(cubikinapole = [])
            setbtn(btndi = true)
            console.log(cubikinapole,list,list2,map,sa2)
        }, 1000);
    }

}

function win(){
    if(debcount>=300){
        alert('вы можете сохранить или продолжить')
    }else{
        console.log('пока нельзя сохранить')
    }
}
function save(){
    setbtn(btndi = true)
    if(debcount <300){
        console.log('Вы не можете сохранить')
    }else{
        console.log('вы можете сохранить')
        raund = raund[raundco].counter = debcount
        setraundco(raundco = raundco + 1)
        setdebcount(debcount = 0)
        setcubikinapole(cubikinapole = [])
        list = []
        list2 =[]
        setsa(sa2 = new Map())
        setmap(map = new Map())
    }
}


    function as() {
        var audio = new Audio(); // Создаём новый элемент Audio
        audio.src = 'best.mp4'; // Указываем путь к звуку "клика"
        audio.autoplay = true; // Автоматически запускаем
      }
      function give(){
        alert('пока делаю')
      }
   
    

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
                    <h2>DEBUG</h2>
                    <button onClick={()=>give()}>Дать 300очков "console"</button>
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
