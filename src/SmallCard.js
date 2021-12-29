import React, { useState } from 'react'
import "./smallcard.css"
const SmallCard = ({res}) => {
    const [change,setChange]=useState([])
    console.log(change)
    return (
        <div>
        <div className="card">
            <div className="fullcard">
                <div className="card-image">
                    <img src={change.picture.large}></img>
                </div>
                <div className="card-desc">
                      
                                <>
                                <h1>{change.name.title}. {change.name.first} {change.name.last}</h1>
                                <p><span>{change.location.street.number}, {change.location.city}, {change.location.state} , <span className="bold">{change.location.country}</span> {change.location.postcode}</span></p>
                                <p>+6.00 .<span className="underline"> {change.location.street.name}</span>, {change.location.country}</p>
                                <span className="para">{change.gender}</span>
                                </>
                        
                </div>
            </div>
        </div>
        <div className="full">
        {res && 
            res.map(data=>(
               
                    <div onClick={()=>setChange(data)} className="cards">
                            <span className="para">{data.gender} . {data.nat}</span>
                            <h2>{data.name.title}. {data.name.first} {data.name.last}</h2>
                            <p>{data.email}</p>
                        
                    </div>
                
                
            ))
        }
        </div>
        </div>
    )
}

export default SmallCard
