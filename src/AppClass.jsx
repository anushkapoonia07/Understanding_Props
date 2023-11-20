import { Component } from "react";
import "./App.css"

export default class AppClass extends Component{
  // code here
  render(){
    const ImgData = this.props.data;
  return(
    <div>
      <div><h1>Kalvium gallary</h1></div>
      <div>{ImgData.map((item) => {
      return <img key={item.id} src={item.img} alt="" />
      })}
      </div>
   </div>
  )
  }
}
