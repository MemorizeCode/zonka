
import { useEffect, useState, useRef } from 'react';
import './App.css';

function App() {
    // let map = new Map()
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

let [stroka,setstroka] = useState(6)


  let [cubikinapole, setcubikinapole] = useState([])
  let [dis, setdisa] = useState(true)
//   let map = new Map()
  let list = []
  function sheker(){
    for(let i=0;i<6;i++){
      let randomcub = Math.floor(Math.random() * (6 - 0) + 0)
      let obj = {
        id: Date.now() + Math.random(),
        title: cubs[randomcub].title,
        img: cubs[randomcub].img
      }
      list.push(obj)
    }
    setcubikinapole([...cubikinapole, ...list])
    posa()
  }
  

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
  }
    function save(){
        if(debcount <300){
            console.log('Вы не можете сохранить')
        }else{
            console.log('вы можете сохранить')
            setraund([...raund, raund[raundco].counter += debcount])
            // setraund(raund.at())
            // setraund([...raund[raundco], raund[raundco].counter += debcount])
            setraundco(raundco = raundco + 1)
            setdebcount(debcount = 0)
            setcubikinapole(cubikinapole = [])
            list = []
            map = []

        }
    }
    function deletea(){
        list = []
        map = []
        setcubikinapole(cubikinapole = [])
        console.log(list)
        console.log(cubikinapole)
        console.log(map)

    }
    let sa = new Map()
    function a(el){
        for(let key of cubikinapole){
            if(sa.has(key.title) == false){
                sa.set(key.title, 1)
            }
            else{
                sa.set(key.title, sa.get(key.title)+1)
            }
        }
        console.log(cubikinapole)
        console.log(el)
        console.log(sa)
    }
  return (
    <div className="App">
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
                    <ul>
                    {raund.map(el=>
                        <li key={el.id}>{el.id + 1 +'. '+ el.counter}</li>
                        )}
                    </ul>
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
                    <div id='cub' key={el.id} className={el.title} onClick={()=>a(el)}>
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
