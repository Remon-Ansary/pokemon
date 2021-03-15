import  React,{useState,useEffect} from 'react';
import axios from 'axios';

const Component=()=>{

   const[num,setNum]= useState();
   const[name,setName]=useState();
   const[moves,setMove]=useState();
    
   useEffect(() => {   
       async function getData() {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`)
        console.log(res.data.name)
        setName(res.data.name)
        setMove(res.data.moves.length)
       }
       
  getData();
   })

    return(
        <>
        <h1>Name:{name}</h1>
        <h1>Moves:{moves}</h1>

        <select value={num} onChange={(event)=>{
            setNum(event.target.value);

        }}>
            <option value="1">1</option>
            <option value="25">25</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
        </>
    );
};

export default Component;