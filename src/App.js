
//Штука чтобы не вылазили ошибки и приложение не крашилось 
 /* eslint-disable */ 

//Импортирую реакт и стили
import {  useState, useRef } from 'react';
import './App.css';


function App() {
 //Выход
  function exit(){
    alert('тут типо выход в главное меню, но его нет')
  }
  //Звуки
  function music(){
    alert('Музыку сьели авторские права')
  }
  //Массив кубиков
  let [cubs] = useState([
    {id:1,title:1, img:"https://www.zonkpro.ru/zonk/assets/dice/mini/1.png", style: 'none'},
    {id:2,title:2, img:"https://www.zonkpro.ru/zonk/assets/dice/mini/2.png" , style: 'none'},
    {id:3,title:3, img:"https://www.zonkpro.ru/zonk/assets/dice/mini/3.png" , style: 'none'},
    {id:4,title:4, img:"https://www.zonkpro.ru/zonk/assets/dice/mini/4.png" , style: 'none'},
    {id:5,title:5, img:"https://www.zonkpro.ru/zonk/assets/dice/mini/5.png" , style: 'none'},
    {id:6,title:6, img:"https://www.zonkpro.ru/zonk/assets/dice/mini/6.png" , style: 'none'},
    
  ])
  let [raundco, setraundco] = useState(0) //Текунщий раунд
  let [debcount, setdebcount] = useState(0) //Счет
  let [shekerstyle, setstyle] = useState('active') //Стиль для шехера
  let [raund, setraund] = useState([ //раунды
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
  let [res,setres] = useState(0) //Общий счет
  let [cubikinapole, setcubikinapole] = useState([]) //Кубики на поле

  let list = []
  let [skok,setskok] = useState(6) //Сколько берется кубиков
  let [btndi,setbtn] = useState(true) //Можно ли брать кубики
  
  //Выкладываем кубики на поле
  function sheker(){ 
    if(debcount >= 300){
        setkuda(kuda_stavit = kuda_stavit - 1)
    }
    setstyle(shekerstyle = 'tresem')
    setTimeout(() => {
        setpr(prrr = 0)
        if(btndi){
            setstyle(shekerstyle = 'none')
            setsa(sa2 = new Map())
            setmap(map = new Map())
            setcubikinapole(cubikinapole = [])
            setbtn(btndi = false)
            for(let i=0;i<skok;i++){
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
        else{
            console.log('вы должны взять кубики которые ')
        }
    }, 2000);
  }
  //Комбинации
let com3 = Object.fromEntries([ 
    [1,2], [3,2] , [6,2]
])
let com4 = Object.fromEntries([
    [1,1],[2,1],[3,1],[4,1],[5,1],[6,1]
])

  let [map,setmap] = useState(new Map())
  let [strit,setstrit] = useState(0)
  let th = 0
  let list2 = list
  //Считаем сколько кубиков одного номинала и добавляем стиль кубику если его можно взять
  function posa(){
    new Map(map)
          for(let key of list){
            if(map.has(key.title) === false){
                setmap(map =map.set(key.title, 1))
            }
            else{
                setmap(map =map.set(key.title, map.get(key.title)+1))
            }
        }
        
        if(JSON.stringify(com4) === JSON.stringify(Object.fromEntries(map))){
           console.log('Выпал стрит')
           for(let i=0;i<list2.length;i++){
            list2[i].style = 'active'
           }
           strit++
        }
        if(JSON.stringify(com3) === JSON.stringify(Object.fromEntries(map))){
            console.log('Выпали 3пары')
            for(let i=0;i<list2.length;i++){
                list2[i].style = 'active'
               }
            th++
        }
        for(let z of map){
            for(let key of list2){
                if(z[0] === 1 || z[0] === 5){
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
        let active = list2
        let factive = active.filter(el=> el.style == 'active').length
        if(factive == 0){
            // alert('зонк')
            debcount =  'ZONK'
            setstyle(shekerstyle = 'active')
            console.log(factive)
            save()
        }
  }


    let [sa2, setsa] = useState(new Map())
    let [kuda_stavit, setkuda] = useState(6)
    //клик на кубик
    function a(el){
        if(sa2.has(el.title) == false){
            setsa(sa2.set(el.title, 1))
        }
        else{
            setsa(sa2.set(el.title, sa2.get(el.title)+1))
        }
        //в какую строчку ставим
        if(el.style == 'active'){
            if(kuda_stavit == 6){
                setsixb([...sixb , el])
            }
            else if(kuda_stavit == 5){
                setfiveb([...fiveb, el])
            } 
            else if(kuda_stavit == 4){
                setfourb([...fourb, el])
            } 
            else if(kuda_stavit == 3){
                setthreeb([...threeb, el])
            } 
            else if(kuda_stavit == 2){
                settwob([...twob, el])
            } 
            else if(kuda_stavit == 1){
                setoneb([...oneb, el])
            } 
            el.style = 'hidden'
            //Сколько мы должны дать очков
            if(el.title != 1 || el.title != 5){
                for(let z of sa2){   
                    if(z[0] === el.title && z[1] == 3 && z[0] !== 1 && z[0] !==5){
                        setdebcount(debcount = debcount+ Number(z[0] + '00'))
                    }
                    else if(z[0] === el.title && z[1] > 3 && z[0] !== 1 && z[0] !==5){
                        setdebcount(debcount = debcount + Number(z[0] * 2 + '00'))
                        setdebcount(debcount = debcount - (z[0]+ '00'))
                    }}
        }
        if(sa2.has(el.title) && el.title === 1){
            if(sa2.get(el.title) <= 2){
                setdebcount(debcount = debcount + Number(100))
                el.style = 'hidden'
            }
            else if(sa2.get(el.title) === 3){
                setdebcount(debcount = debcount+ Number(el.title + '000') - 200)
                el.style = 'hidden'
            }
            else if(sa2.get(el.title) >= 4){
                setdebcount(debcount = debcount + Number(el.title + '000') )
                el.style = 'hidden'
            }
        }
        if(sa2.has(el.title) && el.title === 5){
            if(sa2.get(el.title) <= 2){
                setdebcount(debcount = debcount+ 50)
                el.style = 'hidden'
            }
            else if(sa2.get(el.title) === 3){
                setdebcount(debcount = debcount + Number(el.title + '00') - 100)
                el.style = 'hidden'
            }
            else if(sa2.get(el.title) >= 4){
                setdebcount(debcount = debcount + Number(el.title + '00'))
                el.style = 'hidden'
            }
        }
        if(JSON.stringify(com4) === JSON.stringify(Object.fromEntries(map))){
            el.style = 'hidden'
            if(JSON.stringify(com4) === JSON.stringify(Object.fromEntries(sa2))){
                console.log('Стрит')
                setdebcount(debcount += 1500 - 150)
                setstrit(strit = strit + 1)
            }
        }
        if(JSON.stringify(com3) === JSON.stringify(Object.fromEntries(map))){
            el.style = 'hidden'
            if(JSON.stringify(com3) === JSON.stringify(Object.fromEntries(sa2))){
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
let [prrr,setpr] = useState(0)
//Есть ли комбинации
function combim(){
    setstyle(shekerstyle = 'none')
    if(JSON.stringify(com4) === JSON.stringify(Object.fromEntries(sa2))){
        setstyle(shekerstyle = 'active')
        setskok(skok = 6)
        console.log('приз бросок')
        setbtn(btndi  = true)
        setpr(prrr = prrr + 1)
    }else{
        let none = cubikinapole
        let active = cubikinapole
        let fnone = none.filter(el=>el.style == 'none').length
        let factive = active.filter(el=> el.style == 'active').length
        if(debcount < 300 && fnone > 0 && factive==0){
            console.log('нет комб')
            setkuda(kuda_stavit = kuda_stavit - 1)
            setTimeout(() => {
                setbtn(btndi = true)
            }, 10);
        }
        if(factive == 0){
            setbtn(btndi  = true)
        }
        if(factive == 0 && fnone == 0){
            setbtn(btndi = false)
        }
        if(factive == 0 ){
            setstyle(shekerstyle = 'active')
        }
        setskok(skok = fnone)
    }
}


//Это для откладки
function win(el){
    if(debcount>=300){
        console.log('вы можете сохранить или продолжить')
    }else{
        console.log('пока нельзя сохранить')
    }
}
//Приз бросок
function Priz(){
    if(prrr == 1){
        return (<h1>Priz brosok</h1>)
    }
}


let [c,setc] = useState(0)
//Сохраняем и удаляем то что надо
function save(){
    if(debcount <300){
        console.log('Вы не можете сохранить')
    }
    else{
        setkuda(kuda_stavit = 6)
        setoneb(oneb = [])
        settwob(twob = [])
        setthreeb(threeb = [])
        setfourb(fourb = [])
        setfiveb(fiveb = [])
        setsixb(sixb = [])
        setpr(prrr = 0)
        setbtn(btndi = true)
        console.log('вы можете сохранить')
        raund = raund[raundco].counter = debcount
        setraundco(raundco = raundco + 1)
        if(debcount == 'ZONK'){
            //
        }else{
            setres(res = res + debcount)
        }
        setdebcount(debcount = 0)
        setcubikinapole(cubikinapole = [])
        list = []
        list2 =[]
        setsa(sa2 = new Map())
        setmap(map = new Map())
        console.log('res: ' + res)
        setskok(skok = 6)
    }
}
    //Ячейки для кубиков
    let [oneb, setoneb] = useState([
        // {id:1,title:1, img:"https://www.zonkpro.ru/zonk/assets/dice/mini/1.png", style: 'none'},
    ])
    let [twob, settwob] = useState([
        // {id:1,title:1, img:"https://www.zonkpro.ru/zonk/assets/dice/mini/1.png", style: 'none'},
        // {id:2,title:2, img:"https://www.zonkpro.ru/zonk/assets/dice/mini/2.png" , style: 'none'},
    ])
    let [threeb, setthreeb] = useState([
        // {id:1,title:1, img:"https://www.zonkpro.ru/zonk/assets/dice/mini/1.png", style: 'none'},
        // {id:2,title:2, img:"https://www.zonkpro.ru/zonk/assets/dice/mini/2.png" , style: 'none'},
        // {id:3,title:3, img:"https://www.zonkpro.ru/zonk/assets/dice/mini/3.png" , style: 'none'},
    ])
    let [fourb, setfourb] = useState([
        // {id:1,title:1, img:"https://www.zonkpro.ru/zonk/assets/dice/mini/1.png", style: 'none'},
        // {id:2,title:2, img:"https://www.zonkpro.ru/zonk/assets/dice/mini/2.png" , style: 'none'},
        // {id:3,title:3, img:"https://www.zonkpro.ru/zonk/assets/dice/mini/3.png" , style: 'none'},
        // {id:4,title:4, img:"https://www.zonkpro.ru/zonk/assets/dice/mini/4.png" , style: 'none'},
    ])
    let [fiveb, setfiveb] = useState([
        // {id:5,title:5, img:"https://www.zonkpro.ru/zonk/assets/dice/mini/5.png" , style: 'none'},
        // {id:2,title:2, img:"https://www.zonkpro.ru/zonk/assets/dice/mini/2.png" , style: 'none'},
        // {id:3,title:3, img:"https://www.zonkpro.ru/zonk/assets/dice/mini/3.png" , style: 'none'},
        // {id:4,title:4, img:"https://www.zonkpro.ru/zonk/assets/dice/mini/4.png" , style: 'none'},
        // {id:1,title:1, img:"https://www.zonkpro.ru/zonk/assets/dice/mini/1.png", style: 'none'},
    ])
    let [sixb , setsixb] = useState([
        // {id:1,title:1, img:"https://www.zonkpro.ru/zonk/assets/dice/mini/1.png", style: 'none'},
        // {id:2,title:2, img:"https://www.zonkpro.ru/zonk/assets/dice/mini/2.png" , style: 'none'},
        // {id:3,title:3, img:"https://www.zonkpro.ru/zonk/assets/dice/mini/3.png" , style: 'none'},
        // {id:4,title:4, img:"https://www.zonkpro.ru/zonk/assets/dice/mini/4.png" , style: 'none'},
        // {id:5,title:5, img:"https://www.zonkpro.ru/zonk/assets/dice/mini/5.png" , style: 'none'},
        // {id:6,title:6, img:"https://www.zonkpro.ru/zonk/assets/dice/mini/6.png" , style: 'none'},   
    ])
    


    //Выйграл или нет
    function Tiwin(){
        if(res >= 5000){
            if(confirm('Вы выйграли! Сначала?')){
                window.location.reload()
           }else{
            alert('а я все равно перезагружу')
            window.location.reload()
           }
        }
        else{
            return (<h2>Вы пока не выйграли</h2>)
        }
    }
    //Дать 5к для откладки
   function givemoney(){
    setres(res = 5000)
   } 
  return (
    <div className="App">
        <button onClick={()=>givemoney()}>Дать 5к очков для откладки</button>

     <div className="container" id='test'>
        <div className="header">
            <button onClick={()=>exit()}>Выйти</button>
            <button onClick={()=>music()}>Выключить звук</button>
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
                        <li key={el.id}>{el.id + 1 +') '+ el.counter}</li>
                        )}
                    </ul>
                    <button onClick={()=>save()}>Сохранить</button>
                    <h1>Всего : {res}</h1>
                    <Tiwin />
                </div>
            </div>
            {/* <Cubs/> */}
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
                        <Priz />
                        <img src="https://www.zonkpro.ru/zonk/assets/shakers/1.png" alt="" className={shekerstyle} onClick={()=>sheker()}/>
                    </div>
                    <div className="polyakakieto">
                        <div className="blocksone">
                            {oneb?.[0]?.img ? <img className='blockone all' src={oneb[0].img} /> : <div className='blockone all'></div>}
                        </div>
                        <div className="blockstwo">
                            {twob?.[0]?.img ? <img className='blocktwo all' src={twob[0].img} /> : <div className='blocktwo all'></div>}
                            {twob?.[1]?.img ? <img className='blocktwo all' src={twob[1].img} /> : <div className='blocktwo all'></div>}
                        </div>
                        <div className="blocksthree">
                            {threeb?.[0]?.img ? <img className='blockthree all' src={threeb[0].img} /> : <div className='blockthree all'></div>}
                            {threeb?.[1]?.img ? <img className='blockthree all' src={threeb[1].img} /> : <div className='blockthree all'></div>}
                            {threeb?.[2]?.img ? <img className='blockthree all' src={threeb[2].img} /> : <div className='blockthree all'></div>}
                        </div>
                        <div className="blocksfour">
                          
                            {fourb?.[0]?.img ? <img className='blockfour all' src={fourb[0].img} /> : <div className='blockfour all'></div>}
                            {fourb?.[1]?.img ? <img className='blockfour all' src={fourb[1].img} /> : <div className='blockfour all'></div>}
                            {fourb?.[2]?.img ? <img className='blockfour all' src={fourb[2].img} /> : <div className='blockfour all'></div>}
                            {fourb?.[3]?.img ? <img className='blockfour all' src={fourb[3].img} /> : <div className='blockfour all'></div>}
                        </div>
                        <div className="blocksfive">
                            {fiveb?.[0]?.img ? <img className='blockfive all' src={fiveb[0].img} /> : <div className='blockfive all'></div>}
                            {fiveb?.[1]?.img ? <img className='blockfive all' src={fiveb[1].img} /> : <div className='blockfive all'></div>}
                            {fiveb?.[2]?.img ? <img className='blockfive all' src={fiveb[2].img} /> : <div className='blockfive all'></div>}
                            {fiveb?.[3]?.img ? <img className='blockfive all' src={fiveb[3].img} /> : <div className='blockfive all'></div>}
                            {fiveb?.[4]?.img ? <img className='blockfive all' src={fiveb[4].img} /> : <div className='blockfive all'></div>}
                        </div>
                        <div className="blockssix">
                            {sixb?.[0]?.img ? <img className='blocksix all' src={sixb[0].img} /> : <div className='blocksix all'></div>}
                            {sixb?.[1]?.img ? <img className='blocksix all' src={sixb[1].img} /> : <div className='blocksix all'></div>}
                            {sixb?.[2]?.img ? <img className='blocksix all' src={sixb[2].img} /> : <div className='blocksix all'></div>}
                            {sixb?.[3]?.img ? <img className='blocksix all' src={sixb[3].img} /> : <div className='blocksix all'></div>}
                            {sixb?.[4]?.img ? <img className='blocksix all' src={sixb[4].img} /> : <div className='blocksix all'></div>}
                            {sixb?.[5]?.img ? <img className='blocksix all' src={sixb[5].img} /> : <div className='blocksix all'></div>}
                            
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
                    <img src="	https://www.zonkpro.ru/zonk/assets/dice/mini/3.png" alt=""/>
                    <img src="	https://www.zonkpro.ru/zonk/assets/dice/mini/3.png" alt=""/>
                    <img src="	https://www.zonkpro.ru/zonk/assets/dice/mini/6.png" alt=""/>
                    <img src="	https://www.zonkpro.ru/zonk/assets/dice/mini/6.png" alt=""/>
                    <p>3пары-750</p>
                </div>
                <div className="opiaty_hz_name">
                    <img src="https://www.zonkpro.ru/zonk/assets/dice/mini/1.png" alt=""/>
                    <img src="https://www.zonkpro.ru/zonk/assets/dice/mini/2.png" alt=""/>
                    <img src="	https://www.zonkpro.ru/zonk/assets/dice/mini/3.png" alt=""/>
                    <img src="https://www.zonkpro.ru/zonk/assets/dice/mini/4.png" alt=""/>
                    <img src="	https://www.zonkpro.ru/zonk/assets/dice/mini/5.png" alt=""/>
                    <img src="	https://www.zonkpro.ru/zonk/assets/dice/mini/6.png" alt=""/>
                    <p>стрит-1500</p>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}

export default App;
