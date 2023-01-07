import React from 'react';
import { useState } from 'react';
import Counter from './Counter';
function Cubs() {

    let [cubs, setcubs] = useState([
        {id:1,title:1, img:"https://www.zonkpro.ru/zonk/assets/dice/mini/1.png", style: 'none'},
        {id:2,title:2, img:"https://www.zonkpro.ru/zonk/assets/dice/mini/2.png" , style: 'none'},
        {id:3,title:3, img:"https://www.zonkpro.ru/zonk/assets/dice/mini/3.png" , style: 'none'},
        {id:4,title:4, img:"https://www.zonkpro.ru/zonk/assets/dice/mini/4.png" , style: 'none'},
        {id:5,title:5, img:"https://www.zonkpro.ru/zonk/assets/dice/mini/5.png" , style: 'none'},
        {id:6,title:6, img:"https://www.zonkpro.ru/zonk/assets/dice/mini/6.png" , style: 'none'},
        
    ])
    let [cubikinapole, setcubikinapole] = useState([])
    function cubik(el){
        <Counter element='Hello' />
        console.log(el)
    }

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
      }
    return (<>
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
                    <div id='cub' key={el.id} className={el.style} onClick={()=>cubik(el)}>
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
                            <div className='blocksix all'></div>
                            <div className='blocksix all'></div>
                            <div className='blocksix all'></div>
                            <div className='blocksix all'></div>
                            <div className='blocksix all'></div>
                            <div className='blocksix all'></div>
                 
                        </div>
                    </div>
                </div>
            </div>
    </>);
}

export default Cubs;