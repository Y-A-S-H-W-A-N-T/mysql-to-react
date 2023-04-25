import './App.css';
import {useEffect,useState} from 'react'

function App() {

const [Data,setData] = useState([{}])

useEffect(()=>{
  fetch(
    "/data",
    {mode: 'no-cors'}
  ).then(
    data=>data.json()
  ).then(
    data=>setData(data)
  )
},[])

  return (
    <div className="page">
      {Data.map((data,id)=>(
        <div className='Information' key={id}>
          <h1>Name : {data.name}</h1><h1> Place : {data.place}</h1>
        </div>
      ))}
    </div>
  );
}

export default App;
