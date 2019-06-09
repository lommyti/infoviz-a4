import React, { Component } from 'react';
import './App.css';

import cookieImg from './img/cookie.png';
import cookieSideViewImg from './img/cookie_side_view.png';


class Customization extends React.Component {
    constructor(props) {
     super(props);
     this.state = {

     };
   }



render(){

  return (
    <div>

    <div class="customizationViz">
    <div class="customizationButtons">
    <p>White Sugar</p>

      <div className="radio">
        <label>
          <input type="radio" name="sugar" onClick={event => this.props.handleChange(event)} value="1" checked={this.props.cookieData.sugar === "1"} />
          Less
        </label>
      </div>
      <div className="radio">
        <label>
          <input defaultChecked type="radio" name="sugar" onClick={event => this.props.handleChange(event)} value="0" checked={this.props.cookieData.sugar === "0"} />
          Regular
        </label>
      </div>
      <div className="radio">
        <label>
          <input type="radio" name="sugar" onClick={event => this.props.handleChange(event)} value="-1" checked={this.props.cookieData.sugar === "-1"} />
          More
        </label>
      </div>
      <p>Brown Sugar</p>

      <div className="radio">
        <label>
          <input type="radio" name="brownsugar" onClick={event => this.props.handleChange(event)} value="-1" checked={this.props.cookieData.brownsugar === "-1"} />
          Less
        </label>
      </div>
      <div className="radio">
        <label>
          <input defaultChecked type="radio" name="brownsugar" onClick={event => this.props.handleChange(event)} value="0" checked={this.props.cookieData.brownsugar === "0"} />
          Regular
        </label>
      </div>
      <div className="radio">
        <label>
          <input type="radio" name="brownsugar" onClick={event => this.props.handleChange(event)} value="1" checked={this.props.cookieData.brownsugar === "1"} />
          More
        </label>
      </div>
      <p>Butter</p>

      <div className="radio">
        <label>
          <input type="radio" name="butter" onClick={event => this.props.handleChange(event)} value="1" checked={this.props.cookieData.butter === "1"} />
          Less
        </label>
      </div>
      <div className="radio">
        <label>
          <input defaultChecked type="radio" name="butter" onClick={event => this.props.handleChange(event)} value="0" checked={this.props.cookieData.butter === "0"} />
          Regular
        </label>
      </div>
      <div className="radio">
        <label>
          <input type="radio" name="butter" onClick={event => this.props.handleChange(event)} value="-1" checked={this.props.cookieData.butter === "-1"} />
          More
        </label>
      </div>
      </div>
      <div class="customizationButtons">
      <p>Butter Temp</p>

      <div className="radio">
        <label>
          <input type="radio" name="butter_temp" onClick={event => this.props.handleChange(event)} value="-1" checked={this.props.cookieData.butter_temp === "-1"} />
          Melted
        </label>
      </div>
      <div className="radio">
        <label>
          <input defaultChecked type="radio" name="butter_temp" onClick={event => this.props.handleChange(event)} value="0" checked={this.props.cookieData.butter_temp === "0"} />
          Regular
        </label>
      </div>
      <div className="radio">
        <label>
          <input type="radio" name="butter_temp" onClick={event => this.props.handleChange(event)} value="1" checked={this.props.cookieData.butter_temp === "1"} />
          Cold
        </label>
      </div>
      <p>Egg</p>

      <div className="radio">
        <label>
          <input type="radio" name="egg" onClick={event => this.props.handleChange(event)} value="-1" checked={this.props.cookieData.egg === "-1"} />
          Less
        </label>
      </div>
      <div className="radio">
        <label>
          <input defaultChecked type="radio" name="egg" onClick={event => this.props.handleChange(event)} value="0" checked={this.props.cookieData.egg === "0"} />
          Regular
        </label>
      </div>
      <div className="radio">
        <label>
          <input type="radio" name="egg" onClick={event => this.props.handleChange(event)} value="1" checked={this.props.cookieData.egg === "1"} />
          More
        </label>
      </div>

      <p>Flour</p>

      <div className="radio">
        <label>
          <input type="radio" name="flour" onClick={event => this.props.handleChange(event)} value="-1" checked={this.props.cookieData.flour === "-1"} />
          Less
        </label>
      </div>
      <div className="radio">
        <label>
          <input defaultChecked type="radio" name="flour" onClick={event => this.props.handleChange(event)} value="0" checked={this.props.cookieData.flour === "0"} />
          Regular
        </label>
      </div>
      <div className="radio">
        <label>
          <input type="radio" name="flour" onClick={event => this.props.handleChange(event)} value="1" checked={this.props.cookieData.flour === "1"} />
          More
        </label>
      </div>
      </div>
      <div class="customizationButtons">

      <p>Baking Powder</p>

      <div className="radio">
        <label>
          <input type="radio" name="bakingpowder" onClick={event => this.props.handleChange(event)} value="-1" checked={this.props.cookieData.bakingpowder === "-1"} />
          Less
        </label>
      </div>
      <div className="radio">
        <label>
          <input defaultChecked type="radio" name="bakingpowder" onClick={event => this.props.handleChange(event)} value="0" checked={this.props.cookieData.bakingpowder === "0"} />
          Regular
        </label>
      </div>
      <div className="radio">
        <label>
          <input type="radio" name="bakingpowder" onClick={event => this.props.handleChange(event)} value="1" checked={this.props.cookieData.bakingpowder === "1"} />
          More
        </label>
      </div>
      <p>Baking Temp</p>

      <div className="radio">
        <label>
          <input type="radio" name="temp" onClick={event => this.props.handleChange(event)} value="-1" checked={this.props.cookieData.temp === '-1'} />
          Lower
        </label>
      </div>
      <div className="radio">
        <label>
          <input defaultChecked type="radio" name="temp" onClick={event => this.props.handleChange(event)} value="0" checked={this.props.cookieData.temp === "0"} />
          Regular
        </label>
      </div>
      <div className="radio">
        <label>
          <input type="radio" name="temp" onClick={event => this.props.handleChange(event)} value="1" checked={this.props.cookieData.temp === "1"} />
          Higher
        </label>
        <p>Baking Time</p>

      <div className="radio">
        <label>
          <input type="radio" name="time" onClick={event => this.props.handleChange(event)} value="1" checked={this.props.cookieData.time === '1'} />
          Shorter
        </label>
      </div>
      <div className="radio">
        <label>
          <input defaultChecked type="radio" name="time" onClick={event => this.props.handleChange(event)} value="0" checked={this.props.cookieData.time === "0"} />
          Regular
        </label>
      </div>
      <div className="radio">
        <label>
          <input type="radio" name="time" onClick={event => this.props.handleChange(event)} value="-1" checked={this.props.cookieData.time === "-1"} />
          Longer
        </label>
      </div>

      </div>

    </div>
      <div class="customizationImages">
        <img src={cookieImg} style={this.props.cookieData.cookieSpread}/>
        <img src={cookieSideViewImg} style={this.props.cookieData.cookieHeight}/>
      </div>
      </div>
      <div class="customizationBar">
        <div class="customizationDivider"></div>
        <div class="customizationLine"></div>
        <div class="customizationDivider"></div>

        <div class="customizationPointer" style={this.props.cookieData.pointerLocation}></div>

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
