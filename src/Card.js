import React, { useEffect, useState } from 'react'
import "./card.css"
import SmallCard from './SmallCard'
import {getAPI} from "./request"
const Card = () => {
    const [res,setRes]=useState([])
    useEffect(() => {
        const getData=async()=>{
            setRes(await getAPI())
        }
        getData();
    }, [])
    console.log(res)
    return (
        <>
        <SmallCard res={res}/>
        </>
    )
}

export default Card
