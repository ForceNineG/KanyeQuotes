import React, { useState, useEffect } from 'react'
import '../quote.css'
import { Button } from 'reactstrap'
const Quote = (props) =>{
    const amountOfPics = 10
    const [quote, setQuote] = useState(null)
    const [random, setRandom] = useState('')
    const [picture, setPicture] = useState('')
    const quoteHandler = () => {
        fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(res => setQuote(res.quote))
        const randomPossible = Math.round((Math.random()*(amountOfPics-1)+1)).toString();
        if(randomPossible != random){
            setRandom(randomPossible)
        }else{
            setRandom(Math.round((Math.random()*(amountOfPics-1)+1)).toString())
        }
        setPicture(`/kanyePics/download-${random}.jpg`)
        console.log(random,picture)
    }
    const initalRandom = () =>{
        setRandom(Math.round((Math.random()*(amountOfPics-1)+1)).toString())
        console.log(random)
    }
    useEffect(() => {
        initalRandom()
    }, [])
    return (
        <div className = "quoteContainer">
            <div className = "container">
            {picture ? <img className = "picture" src = {picture}></img> : <img className = "prePicture" src = "/kanyePics/download-3.jpg"></img>}
            {quote ? <><h1 className = "font-italic" className = "quote"> "{quote}" </h1><br></br><h1 className = "font-italic" className = "quoteEnd">- Kanye West</h1> </>: <h1 className = "quote">click to make your own custom kanye quote</h1>}
            </div>
            <Button className = "button" color = "secondary" onClick = {quoteHandler}>Generate Quote</Button>
            
        </div>
    )
}
export default Quote;