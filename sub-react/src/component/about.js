import { setState, STORE} from "./../utils/appstore";
import {useState } from "react";

 const  App=()=> {
  const [inputValue,setInputValue ]= useState('');
  const [msg,setMsg ]= useState('');
  STORE.onGlobalStateChange((props)=>{
    // console.log('react-native'+props)
        setMsg(props.msg)
  })
  return (
    <div className="App">
      <header className="App-header">
        <p>
          this is sub-react about page
        </p>
       
        <div>全局的广播：{msg}</div>
        <input  onChange={(e)=>{setInputValue(e.target.value) }}/>
        <div  onClick={()=>{setState({msg:'sub-react==='+inputValue})}}>
          点击进行通信
        </div>
      </header>
    </div>
  );
}

export default App;
