import React from 'react';
import './App.css';
import ReactTooltip from 'react-tooltip'

function App() {
  return (
    <div className="App">
      <div className="step">
        <h1>STEP 1</h1>
        <p>Combine 
        <b data-tip="Granulated white sugar creates a thinner, crisper cookie.<br/>
                    Brown sugar contains molasses that helps absorb moisture, giving the cookie a chewier texture.<br/>
                    It also helps create more complex tastes when the Maillard reaction occurs during baking.<br/>
                    If you want a puffier cookie, decrease the amount of sugar used overall."> sugar </b> 
                    and  
        <b data-tip="Increasing the amount of butter increases the cookie's spread.<br/>
                    Decreasing the amount of butter makes it puffier and more cake-like.<br/>
                    If you use melted butter, the water will dissolve the sugar, making the cookie more chewy and flat.<br/>
                    Mixing room-temperature butter and sugar creates air pockets, for a puffier cookie."> butter</b>
        in a bowl.</p>
        
      </div>

      <div className="step">
        <h1>STEP 2</h1>
        <p>Add 
        <b data-tip="The fat in egg yolks act as a tenderizer, making a softer cookie, while egg whites tend to make cookies drier.<br/>
                    The egg bonds with the flour, giving it structure. The protein in the egg increases chewiness. "> egg </b>
        and vanilla.</p>
      </div>

      <div className="step">
        <h1>STEP 3</h1>
        <p>Combine
        <b data-tip="Using more flour gives the cookie a thicker shape and makes it tender and crumbly,<br/>
                    while using less makes it chewier or cakier."> flour</b>
        , salt, and  
        <b data-tip="Baking powder creates more carbon dioxide during baking, making the cookie puffier and lighter colored.<br/>
                    Baking soda neutralizes other acidic ingredients, letting the cookie brown more."> bicarbonates </b>
        in a separate bowl.</p>
      </div>

      <div className="step">
        <h1>STEP 4</h1>
        <p>Combine wet and dry ingredients, and fold in 
        <b data-tip="Chocolate chips make the cookie taste better."> chocolate chips</b>.</p>
      </div>

      <div className="step">
        <h1>STEP 4</h1>
        <p>Bake.</p>
      </div>
      <ReactTooltip multiline={true} place="bottom" type="dark" effect="float"/>
    </div>
  );
}

export default App;
