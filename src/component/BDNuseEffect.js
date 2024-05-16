
import React,{ useEffect, useState} from 'react'

export default function BDNuseEffect() {
    // state:count
    const[count, setCount] = useState(0);
    // ham su i su kien clickme
    const bdnHandleClick = ()=>{
         setCount(prev => prev + 1);
    }
    // su dung ham useEffct de cap nhat lai title
    useEffect(()=>{
    document.tetle = 'nguyen le duc thanh: you clicksed ${count} times';
    console.log('you clicksed ${count} times')
    }); 
    // bdnHandleClick tham so thu 2 la mang rong 
    useEffect(() =>{
        console.log("chay lan dau tien - mot lan ");
    },[])
    // [deps]
    useEffect(()=>{
      console.log(' useEffct count click:', count)
    },[count])
  return (
    <div>
        <h2>demo - useEffct: you clicksed {count} times</h2> 
        <button onClick={bdnHandleClick}>
            click me
        </button>
    </div>
  )
}
