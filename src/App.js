import React from 'react';
import './App.css';
import ReactTooltip from 'react-tooltip'

function App() {
  return (
    <div className="w-h-100">
      <div className="App-header">
      <h1>What Makes a Perfect Cookie?</h1>
      <h2>Thomas Li, Ilham Nurjadin, Jodie Wei &middot;<br/> EECS 396: Interactive Information Visualization</h2>
      </div>
      <div className="divider-brown"><div className="divider-brown-inside"></div></div>
      <div className="App">
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
        <br/>

        <div className="step">
          <h1>STEP 2</h1>
          <p>Add
          <b data-tip="The fat in egg yolks act as a tenderizer, making a softer cookie, while egg whites tend to make cookies drier.<br/>
                      The egg bonds with the flour, giving it structure. The protein in the egg increases chewiness. "> eggs </b>
          and vanilla.</p>
        </div>
        <br/>

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
        <br/>

        <div className="step">
          <h1>STEP 4</h1>
          <p>Combine wet and dry ingredients, and fold in
          <b data-tip="Chocolate chips make the cookie taste better."> chocolate chips</b>.</p>
        </div>
        <br/>

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
        <ReactTooltip multiline={true} place="right" type="dark" effect="float"/>
      </div>
    </div>
  );
}

export default App;
