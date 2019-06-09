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
    <h2>COOKIE VARIABLES</h2>
    <div class="customizationButtons">
    <p>White Sugar</p>

      <div className="radio">
        <label>
          <input type="radio" name="sugar" onClick={event => this.props.handleChange(event)} value="less" selected={this.props.cookieData.sugar === 'less'} />
          Less
        </label>
      </div>
      <div className="radio">
        <label>
          <input defaultChecked type="radio" name="sugar" onClick={event => this.props.handleChange(event)} value="regular" selected={this.props.cookieData.sugar === 'regular'} />
          Regular
        </label>
      </div>
      <div className="radio">
        <label>
          <input type="radio" name="sugar" onClick={event => this.props.handleChange(event)} value="more" selected={this.props.cookieData.sugar === 'more'} />
          More
        </label>
      </div>
      <p>Brown Sugar</p>

      <div className="radio">
        <label>
          <input type="radio" name="brownsugar" onClick={event => this.props.handleChange(event)} value="less" selected={this.props.cookieData.brownsugar === 'less'} />
          Less
        </label>
      </div>
      <div className="radio">
        <label>
          <input defaultChecked type="radio" name="brownsugar" onClick={event => this.props.handleChange(event)} value="regular" selected={this.props.cookieData.brownsugar === 'regular'} />
          Regular
        </label>
      </div>
      <div className="radio">
        <label>
          <input type="radio" name="brownsugar" onClick={event => this.props.handleChange(event)} value="more" selected={this.props.cookieData.brownsugar === 'more'} />
          More
        </label>
      </div>
      <p>Butter</p>

      <div className="radio">
        <label>
          <input type="radio" name="butter" onClick={event => this.props.handleChange(event)} value="less" selected={this.props.cookieData.butter === 'less'} />
          Less
        </label>
      </div>
      <div className="radio">
        <label>
          <input defaultChecked type="radio" name="butter" onClick={event => this.props.handleChange(event)} value="regular" selected={this.props.cookieData.butter === 'regular'} />
          Regular
        </label>
      </div>
      <div className="radio">
        <label>
          <input type="radio" name="butter" onClick={event => this.props.handleChange(event)} value="more" selected={this.props.cookieData.butter === 'more'} />
          More
        </label>
      </div>
      </div>
      <div class="customizationButtons">
      <p>Butter Temp</p>

      <div className="radio">
        <label>
          <input type="radio" name="butter_temp" onClick={event => this.props.handleChange(event)} value="melted" selected={this.props.cookieData.butter_temp === 'melted'} />
          Melted
        </label>
      </div>
      <div className="radio">
        <label>
          <input defaultChecked type="radio" name="butter_temp" onClick={event => this.props.handleChange(event)} value="regular" selected={this.props.cookieData.butter_temp === 'regular'} />
          Regular
        </label>
      </div>
      <div className="radio">
        <label>
          <input type="radio" name="butter_temp" onClick={event => this.props.handleChange(event)} value="cold" selected={this.props.cookieData.butter_temp === 'cold'} />
          Cold
        </label>
      </div>
      <p>Egg</p>

      <div className="radio">
        <label>
          <input type="radio" name="egg" onClick={event => this.props.handleChange(event)} value="less" selected={this.props.cookieData.egg === 'less'} />
          Less
        </label>
      </div>
      <div className="radio">
        <label>
          <input defaultChecked type="radio" name="egg" onClick={event => this.props.handleChange(event)} value="regular" selected={this.props.cookieData.egg === 'regular'} />
          Regular
        </label>
      </div>
      <div className="radio">
        <label>
          <input type="radio" name="egg" onClick={event => this.props.handleChange(event)} value="more" selected={this.props.cookieData.egg === 'more'} />
          More
        </label>
      </div>

      <p>Flour</p>

      <div className="radio">
        <label>
          <input type="radio" name="flour" onClick={event => this.props.handleChange(event)} value="less" selected={this.props.cookieData.flour === 'less'} />
          Less
        </label>
      </div>
      <div className="radio">
        <label>
          <input defaultChecked type="radio" name="flour" onClick={event => this.props.handleChange(event)} value="regular" selected={this.props.cookieData.flour === 'regular'} />
          Regular
        </label>
      </div>
      <div className="radio">
        <label>
          <input type="radio" name="flour" onClick={event => this.props.handleChange(event)} value="more" selected={this.props.cookieData.flour === 'more'} />
          More
        </label>
      </div>
      </div>
      <div class="customizationButtons">

      <p>Baking Powder</p>

      <div className="radio">
        <label>
          <input type="radio" name="bakingpowder" onClick={event => this.props.handleChange(event)} value="less" selected={this.props.cookieData.bakingpowder === 'less'} />
          Less
        </label>
      </div>
      <div className="radio">
        <label>
          <input defaultChecked type="radio" name="bakingpowder" onClick={event => this.props.handleChange(event)} value="regular" selected={this.props.cookieData.bakingpowder === 'regular'} />
          Regular
        </label>
      </div>
      <div className="radio">
        <label>
          <input type="radio" name="bakingpowder" onClick={event => this.props.handleChange(event)} value="more" selected={this.props.cookieData.bakingpowder === 'more'} />
          More
        </label>
      </div>
      <p>Baking Temp</p>

      <div className="radio">
        <label>
          <input type="radio" name="temp" onClick={event => this.props.handleChange(event)} value="lower" selected={this.props.cookieData.temp === 'lower'} />
          Lower
        </label>
      </div>
      <div className="radio">
        <label>
          <input defaultChecked type="radio" name="temp" onClick={event => this.props.handleChange(event)} value="regular" selected={this.props.cookieData.temp === 'regular'} />
          Regular
        </label>
      </div>
      <div className="radio">
        <label>
          <input type="radio" name="temp" onClick={event => this.props.handleChange(event)} value="higher" selected={this.props.cookieData.temp === 'higher'} />
          Higher
        </label>
        <p>Baking Time</p>

      <div className="radio">
        <label>
          <input type="radio" name="bakingtime" onClick={event => this.props.handleChange(event)} value="shorter" selected={this.props.cookieData.time === 'shorter'} />
          Shorter
        </label>
      </div>
      <div className="radio">
        <label>
          <input defaultChecked type="radio" name="bakingtime" onClick={event => this.props.handleChange(event)} value="regular" selected={this.props.cookieData.time === 'regular'} />
          Regular
        </label>
      </div>
      <div className="radio">
        <label>
          <input type="radio" name="bakingtime" onClick={event => this.props.handleChange(event)} value="longer" selected={this.props.cookieData.time === 'longer'} />
          Longer
        </label>
      </div>

      </div>

    </div>
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
