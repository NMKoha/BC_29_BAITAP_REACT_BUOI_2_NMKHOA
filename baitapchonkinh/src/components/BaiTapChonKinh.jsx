import React, { Component } from 'react';
import Header from './Header';
import Img1 from './Img1';
import Img2 from './Img2';
import style from "./style.module.css";

export default class BaiTapChonKinh extends Component {
  state={
    imageUrl:"./images/v1.png",
    display:"none",
  };

  handleChangeGlasses=(id)=>{
    this.setState({
      imageUrl:`./images/v${id}.png`,
      display:"block",
    })
  };
  render() {
    return (
    <div>
        {/* <img className="img-fluid" src="./images/background.jpg"/>   */}
        <div className={style.bg} >               
            <div className="row">
              
          <div className="col-12" >
            <Header />
          </div>
          <div className="col-6" >
            <Img1 />
          </div>
          <div className="col-6">
            <img src={this.state.imageUrl} alt="" className={style.img} style={{display:this.state.display}}/>
            <Img2 />
          </div>
          <div className="col-7 container">
            <div className={style.bg2}>
              
              <img onClick={()=>{
                this.handleChangeGlasses(1)
              }} src="./images/g1.jpg" alt="" className={style.bg1}/>
             <img onClick={()=>{
                this.handleChangeGlasses(2)
              }} src="./images/g2.jpg" alt="" className={style.bg1}/>
              <img onClick={()=>{
                this.handleChangeGlasses(3)
              }} src="./images/g3.jpg" alt="" className={style.bg1}/>
              <img onClick={()=>{
                this.handleChangeGlasses(4)
              }} src="./images/g4.jpg" alt="" className={style.bg1}/>
              <img onClick={()=>{
                this.handleChangeGlasses(5)
              }} src="./images/g5.jpg" alt="" className={style.bg1}/>
              <img onClick={()=>{
                this.handleChangeGlasses(6)
              }} src="./images/g6.jpg" alt="" className={style.bg1}/>
              <img onClick={()=>{
                this.handleChangeGlasses(7)
              }} src="./images/g7.jpg" alt="" className={style.bg1}/>
              <img onClick={()=>{
                this.handleChangeGlasses(8)
              }} src="./images/g8.jpg" alt="" className={style.bg1}/>
              <img onClick={()=>{
                this.handleChangeGlasses(9)
              }} src="./images/g9.jpg" alt="" className={style.bg1}/>
            </div>           
          </div>
          </div> 
        </div>
    </div>
        
    )
  }
}
