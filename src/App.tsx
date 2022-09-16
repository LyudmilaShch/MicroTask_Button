import React, {MouseEvent, useState} from 'react';
import './App.css';
import {Button} from "./components/button";


function App() {

    //let a = 1
    let [a, setA]=useState(1)
    const onClickHandler = () => {
        setA(++a)
        console.log(a)
    }

    const onClickHol = () => {
        setA(a = 0)
        console.log(a)
    }

    return (

        <div className="App">
            <h1>{a}</h1>
            <button onClick={onClickHandler}>number</button>
            <button onClick={onClickHol}>0</button>
        </div>
    )


    /*    const Button1Foo = (subscriber: string, age: number, address: string) => {
            console.log(subscriber, age, address)
        }

        const Button2Foo = (subscriber: string) => {
            console.log(subscriber)
        }

        const Button3Foo = () => {
            console.log('Im stupid button')
        }

        return (


            <div className="App">
                <Button name={'MyYouTubeChanel-1'} callBack={() => Button1Foo('Im Vasya', 21, 'live in Minsk')}/>
                <Button name={'MyYouTubeChanel-2'} callBack={() => Button2Foo('Im Ivan')}/>
                <Button name={'Stupid button'} callBack={Button3Foo}/>
            </div>
        );*/
}

export default App;
