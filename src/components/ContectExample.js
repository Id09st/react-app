import React, { createContext, useState, useContext } from 'react'

const MyContext = createContext()
export default function ContectExample() {
    const [name, setName] = useState('React')
  return (
    <MyContext.Provider value={name}>
    <Com3/>
    </MyContext.Provider>
    
  )
}

function Com1(){
    return(<>
    <Com2/>
    </>
    )
}
function Com2(){
    return(<>
    <Com3 />
    </>
    )
}
function Com3(){
    const valueFromContext = useContext(MyContext)
    return(<>
    this is com3 - {valueFromContext}
    </>)
}