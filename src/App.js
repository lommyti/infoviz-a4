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




function App() {
  // constructor () {
  //   super();

  //   this.state = {
  //     selected_ingred: null,
  //   };
  // };

  // clickAddIngred = () => {
  //   return
  // };



  return (
     <div className="w-h-100">
        <div className="App-header">
        <h1>What Makes a Perfect Cookie?</h1>
        <h2>Thomas Li, Ilham Nurjadin, Jodie Wei &middot;<br/> EECS 396: Interactive Information Visualization</h2>
        </div>
        <div className="divider-brown"><div className="divider-brown-inside"></div></div>
        <div className="bar-brown"></div>
        <div className="App">
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
              <h1>STEP 4</h1>
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
          <div>
            <img src={cookieImg} style={{height: '20em'}} alt='cookie'/>
          </div>
        </div>

        <ReactTooltip multiline={true} place="right" type="dark" effect="float"/>
      </div>
  );
}

export default App;
