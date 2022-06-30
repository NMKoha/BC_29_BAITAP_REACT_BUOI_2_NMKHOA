import React, { Component } from 'react'
import style from "../../components/style.module.css";
export default class RenderingWithMap extends Component {
  
    glassesList = [
    {
        "id": 1,
        "price": 30,
        "name": "GUCCI G8850U",
        "imageUrl": "./images/v1.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 2,
        "price": 50,
        "name": "GUCCI G8759H",
        "imageUrl": "./images/v2.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 3,
        "price": 30,
        "name": "DIOR D6700HQ",
        "imageUrl": "./images/v3.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 4,
        "price": 70,
        "name": "DIOR D6005U",
        "imageUrl": "./images/v4.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 5,
        "price": 40,
        "name": "PRADA P8750",
        "imageUrl": "./images/v5.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 6,
        "price": 60,
        "name": "PRADA P9700",
        "imageUrl": "./images/v6.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 7,
        "price": 80,
        "name": "FENDI F8750",
        "imageUrl": "./images/v7.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 8,
        "price": 100,
        "name": "FENDI F8500",
        "imageUrl": "./images/v8.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    },
    {
        "id": 9,
        "price": 60,
        "name": "FENDI F4300",
        "imageUrl": "./images/v9.png",
        "desc": "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. "
    }
]
    renderGlassesList=()=>{
        const content= this.glassesList.map(ele=>{
            return(
                
                    <img src={ele.imageUrl} alt="" className={style.bg1}/>
                
              
            );
        });
        return content;
    };
    render() {
    return (
      <div className="col-7 container">
        
        {this.renderGlassesList()}
      </div>

    )
  }
}
