import React, {useState} from 'react'
import "./ternaryOperators.css"

const TernaryOperators = () => {
    const [item, setitem] = useState("");
    const [list, setlist] = useState([]);
    
  return (
    <div>
      <input type="text" onChange={(event) => {
        setitem(event.target.value)
      }}/>
      <button onClick={() => {
        setlist([...list, item])
        setitem("")
        console.log(list)
      }}>Add Item</button>

      {list.map((value, key) => {
        return(
        <li key={key}>{value}</li>
        )
      })}
      </div>
  )
}

export default TernaryOperators;