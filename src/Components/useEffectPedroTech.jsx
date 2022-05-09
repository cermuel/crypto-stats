import React, {useEffect, useState} from 'react'

const UseEffect = () => {
    const [number, setnumber] = useState(0);
    useEffect(() => {
      console.log("Page Rendered")
    }, [number])
    
  return (
    <div>
        {number}
        <br />
        <button onClick={() => {
            setnumber(number + 1)
        }}>Increase</button>
    </div>
  )
}

export default UseEffect