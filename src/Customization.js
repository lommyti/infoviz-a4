import React, { Component } from 'react';
import './App.css';

import cookieImg from './img/cookie.png';
import cookieSideViewImg from './img/cookie_side_view.png';


class Customization extends React.Component {
    constructor(props) {
     super(props);
     this.state = {
       pointerLocation: {marginLeft: "37.5%"},
       cookieHeight: {width: "auto"},
       cookieSpread: {height:"20em", width:"auto"},
     };
   }



render(){

  return (
    <div>
    <div class="customizationViz">
    <div class="customizationButtons">this is where the buttons go</div>
      <div class="customizationImages">
        <img src={cookieImg} style={this.state.cookieSpread}/>
        <img src={cookieSideViewImg} style={this.state.cookieHeight}/>
      </div>
      </div>
      <div class="customizationBar">
        <div class="customizationDivider"></div>
        <div class="customizationLine"></div>
        <div class="customizationDivider"></div>

        <div class="customizationPointer" style={this.state.pointerLocation}></div>

        <div>
        <table>
        <tr>
        <td>Crispy</td> <td>Chewy</td> <td>Cakey</td></tr></table></div>
      </div>
    </div>
  );
}
}

export default Customization;
