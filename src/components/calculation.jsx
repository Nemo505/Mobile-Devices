import React, { useState } from 'react'

const calculation = () => {
    const [count, setCount] = useState(0);
    const [check, setCheck] = useState(true);
    const [text, setText] = useState(true);

    const [items, setItem] = useState([
        {
            id: 1,
            name: "Kazue",
        },
        {
            id: 2,
            name: "Hayami",
        },
    ]);
    const [name, setName] = useState('');
    const onSubmitHandler = (e) => {
        e.preventDefault();
        const newList = {id: Date.now(), name: name};
        setItem([...items, newList]);
    }

    const minus = () => setCount(count - 1);
  return (
    <div>
        <h2>{count}</h2>

        {/* Onclick */}
        <button onClick={() => {
            if (count<10) {
                setCount(count + 1);
            } 
        }}>Add me</button>
        {/* OR */}
        <button onClick={() => setCount(count + 1) }>Add me</button>
            

        {/* Calling back func */}
        <button onClick={minus}>Minus</button>

        {/* true false */}
        <p>{check ? "true": "false"}</p>
        <button onClick={() => setCheck(!check)}>Check to Click</button>

        <h1 className={`${text && ""}`}>Text decoration</h1>
        <button onClick={() => setText(text)}>Change Text</button>

        <hr />

        <form action="" onSubmit={onSubmitHandler}>
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder='Enter your name' />
            <button type='submit'>Submit</button>
        </form>

        <ul>
            {items.map((items)=> {
                return (
                    <li key={items.id}>{items.name}</li> 
                )
            })}
        </ul>

    </div>
  )
}

export default calculation