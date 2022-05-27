import React from 'react';
import { useParams } from "react-router-dom";
import { useEffect, useState} from 'react';

export const Details = () => {

const { id } = useParams();
const {name, setName} = useState()
const mainUrl = `https://pokeapi.co/api/v2/pokemon/${id}`
const {type, setType } = useState()
const {height, setHight} = useState()
const {weight, setWeight} = useState()
const {image, setImage} = useState()

const getImage = async () =>{
    const res = await fetch(mainUrl)
    const json = await res.json()
    const data = json.data.results
    setImage(data)
}

useEffect (() => {
    getImage()
}, [id])




  return (
    <div className='detail-page'> {id}
        <div className='header'> {name}
            <div className='number'> {type}
                <img src={image} alt="" />
                    <div className='height'>{height}
                        <div className='weight'>{weight}
                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}
