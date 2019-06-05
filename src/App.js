import React, { Component } from 'react';
import './App.css';
import ReactTooltip from 'react-tooltip';
import { DragSource } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';


import butterSugarImg from './img/butter_sugar.png';
import eggVanillaImg from './img/egg_vanilla.png';
import dryIngrededientsImg from './img/dry_ingredients.png';
import chocChipsImg from './img/chocolate_chips.png';
import cookieTrayImg from './img/cookie_tray.png';
import emptyBowlImg from './img/bowl.png';
import butterSugarBowlImg from './img/butter_sugar_bowl.png';
import eggVanillaBowlImg from './img/egg_vanilla_bowl.png';
import dryIngBowlImg from './img/dry_ingredients_bowl.png';
import ovenImg from './img/oven.png';
import cookieImg from './img/cookie.png';




class App extends React.Component {
    constructor(props) {
     super(props);
     this.state = {
        selected_ingred: null,
        texture_change_text: null,
     };
   }

  //   this.state = {
  //     selected_ingred: null,
  //   };
  // };

  // clickAddIngred = () => {
  //   return
  // };

  setTextureCrunchy = () => {
    this.setState({texture_change_text: "For crunchy cookies..."})
  }

  setTextureChewy = () => {
    this.setState({texture_change_text: "For chewy cookies..."})
  }

  setTextureCakey = () => {
    this.setState({texture_change_text: "For cakey cookies..."})
  }
render(){

  return (
     <div className="w-h-100">
        <div className="App-header">
        <h1>What Makes a Perfect Cookie?</h1>
        <h2>Thomas Li, Ilham Nurjadin, Jodie Wei &middot;<br/> EECS 396: Interactive Information Visualization</h2>
        </div>
        <div className="divider-brown"><div className="divider-brown-inside"></div></div>
        <div className="bar-brown"></div>
        <div className="App">
          <p className="intro">
            Everyone has a favorite kind of chocolate chip cookie, from wafer-thin and crispy to thick and cakey.
            Though cookies come in a variety of different textures, they often borm from the same ingredients and general process.
            It's in the proportion of the ingredients and a little bit of chemistry that goes on during the
            actual baking that changes the texture.
            <br/><br/>
            To see how this works, let's make a batch of cookies! Scroll through the steps and follow the instructions to step through the
            generalized steps that go into making chocolate chip cookies. Then we'll talk about some of the most popular textures and the changes
            from an ordinary cookie that are needed to take yours to the next level!<br/><br/>
            To learn more about each ingredient, hover over any of the <b data-tip="And you'll see info here!">underlined ingredients</b> and
            a tooltip will appear that explains more information about how that particular ingredient impacts the baking process.
          </p>
          <div className="entire_step">
            <div className="step">
              <h1>STEP 1</h1>
              <p>Mix
              <b data-tip="Granulated white sugar creates a thinner, crisper cookie.<br/>
                          Brown sugar contains molasses that helps absorb moisture, giving the cookie a chewier texture.<br/>
                          It also helps create more complex tastes when the Maillard reaction occurs during baking.<br/>
                          If you want a puffier cookie, decrease the amount of sugar used overall."> sugar </b>
                          and
              <b data-tip="Increasing the amount of butter increases the cookie's spread.<br/>
                          If you use melted butter, the water will dissolve the sugar, making the cookie more chewy and flat.<br/>
                          Mixing room-temperature butter and sugar creates air pockets, for a puffier cookie.<br/>
                          The fat in butter helps prevent gluten from forming, so using high-fat butter will make the cookie less chewy.<br/>
                          Substituting with margarine or shortening will make the cookie spread less."> butter </b>
              together in a bowl.</p>
            </div>

            <div className="images">
              <div className="drag_images">
                <img src={butterSugarImg} style={{height: '20em'}} alt='butter'/>
              </div>
              <div className="static_images">
                <img src={emptyBowlImg} style={{height: '30em'}} alt='bowl'/>
              </div>
            </div>
          </div>

          <br/>


          <div className="entire_step">
            <div className="step">
              <h1>STEP 2</h1>
              <p>Add
              <b data-tip="The fat in egg yolks act as a tenderizer, making a softer cookie, while egg whites tend to make cookies drier.<br/>
                          The egg bonds with the flour, giving it structure. The protein in the egg increases chewiness. "> eggs </b>
              and vanilla.</p>
              </div>

              <div className="images">
                <div className="drag_images">
                  <img src={eggVanillaImg} style={{height: '20em'}} alt='butter'/>
                </div>
                <div className="static_images">
                  <img src={butterSugarBowlImg} style={{height: '30em'}} alt='bowl'/>
                </div>
              </div>
            </div>


          <br/>

          <div className="entire_step">
            <div className="step">
              <h1>STEP 3</h1>
              <p>Combine
              <b data-tip="Using more flour gives the cookie a thicker shape and makes it tender and crumbly,<br/>
                          while using less makes it chewier or cakier."> flour</b>
              , salt, and
              <b data-tip="Baking soda, or bicarbonate of soda, neutralizes other acidic ingredients, letting the cookie brown more.<br/>
                          Baking powder, a mixture of baking soda and an acidic ingredient,<br/>
                          creates more carbon dioxide during baking, making the cookie puffier and lighter colored."> bicarbonates </b>
              in a separate bowl.</p>
            </div>

            <div className="images">
              <div className="drag_images">
                <img src={dryIngrededientsImg} style={{height: '20em'}} alt='butter'/>
              </div>
              <div className="static_images">
                <img src={dryIngBowlImg} style={{height: '30em'}} alt='bowl'/>
              </div>
            </div>
          </div>

          <br/>


          <div className="entire_step">
            <div className="step">
              <h1>STEP 4</h1>
              <p>Combine wet and dry ingredients, and fold in
              <b data-tip="Chocolate chips make the cookie taste better."> chocolate chips</b>.</p>
            </div>

            <div className="images">
              <div className="drag_images">
                <img src={chocChipsImg} style={{height: '20em'}} alt='butter'/>
              </div>
              <div className="static_images">
                <img src={dryIngBowlImg} style={{height: '30em'}} alt='bowl'/>
              </div>
            </div>
          </div>


          <br/>

          <div className="entire_step">
            <div className="step">
              <h1>STEP 5</h1>
              <p>Place dough onto baking sheet in 1 inch balls, and
              <b data-tip="As the butter melts, the cookie begins to spread out and flatten.<br/>
                          The water in the dough creates vapors that cause the cookie to rise.<br/>
                          Bicarbonates breaking down into carbon dioxide also cause rising, leaving holes that make the cookie flaky.<br/>
                          Finally, when the cookie reaches the right temperature (around 320F), the sugars caramelize.<br/>
                          The Maillard reaction between the amino acids and sugars (like glucose and fructose) also occurs,<br/>
                          creating new flavors and browning the cookie."> bake </b> in oven.</p>
          </div>

            <div className="images">
              <div className="drag_images">
                  <img src={cookieTrayImg} style={{height: '20em'}} alt='cookie tray'/>
                </div>
              <div className="static_images">
                  <img src={ovenImg} style={{height: '30em'}} alt='oven'/>
              </div>
            </div>
          </div>
          <p>And after all of that hard work, your cookies are done!</p>
          <div>
            <img src={cookieImg} style={{height: '20em'}} alt='cookie'/>
          </div>
          <p>This, of course, is a little simpler than what <em>actually</em> goes on; we didn't even give you the proportions of the ingredients you were using!
          Truthfully, there is no true baseline cookie that we can use as the gold standard here.
          However, numerous sources have done tests to try and maximize the effects of these ingredients and create unique textures; we've compiled some of the best
          we saw and tried to figure out what made each of them unique in terms of the relative ingredient proportions.
          <br/><br/>
          Interested in switching up your cookie? Do you want it to be... </p>
          <button className="texture-button" onClick={this.setTextureCrunchy}>Crunchy</button>
          <button className="texture-button" onClick={this.setTextureChewy}>Chewy</button>
          <button className="texture-button" onClick={this.setTextureCakey}>Cakey</button>
          <br/><br/>
          <p>{this.state.texture_change_text}</p>
        </div>
        <ReactTooltip multiline={true} place="right" type="dark" effect="float"/>
      </div>
  );
}
}

export default App;
