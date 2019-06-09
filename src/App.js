import React, { Component } from 'react';
import './App.css';
import ReactTooltip from 'react-tooltip';
import { DragSource } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

import Cakey from './Cakey.js'
import Crunchy from './Crunchy.js'
import Chewy from './Chewy.js'
import Customization from './Customization.js'

import butterSugarImg from './img/butter_sugar.png';
import eggVanillaImg from './img/egg_vanilla.png';
import dryIngrededientsImg from './img/dry_ingredients.png';
import chocChipsImg from './img/chocolate_chips.png';
import cookieTrayImg from './img/cookie_tray.png';
import trayImg from './img/tray.png';
import emptyBowlImg from './img/bowl.png';
import butterSugarBowlImg from './img/butter_sugar_bowl.png';
import eggVanillaBowlImg from './img/egg_vanilla_bowl.png';
import dryIngBowlImg from './img/dry_ingredients_bowl.png';
import ovenImg from './img/oven.png';
import cookieImg from './img/cookie.png';
import chocChipsBowlImg from './img/chocolate_chips_bowl.png'
import ovenGif from './img/oven.gif'



class App extends React.Component {
    constructor(props) {
     super(props);
     this.state = {
        selected_ingred: null,
        texture_change_text: null,
        img: emptyBowlImg,
        trayImg: trayImg,
        ovenImg:ovenImg,
        draggedObj: null,
        stepOneInfo: null,
        stepTwoInfo: null,
        stepThreeInfo: null,
        stepFourInfo: null,
        stepFiveInfo: null,

        sugar: "0",
        brownsugar: "0",
        butter: "0",
        butter_temp: "0",
        egg: "0",
        flour: "0",
        bakingsoda: "0",
        bakingpowder: "0",
        temp: "0",
        time: "0",
        score: 10,
        pointerLocation: {marginLeft: "37.5%"},
        cookieHeight: {width: "auto", marginLeft: "24em"},
        cookieSpread: {height:"20em", width:"auto"},

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
    this.setState({texture_change_text: <Crunchy/>})
  }

  setTextureChewy = () => {
    this.setState({texture_change_text: <Chewy/>})
  }

  setTextureCakey = () => {
    this.setState({texture_change_text: <Cakey/>})
  }

  onDrag = (event, dragVal) => {
    event.preventDefault();
    this.setState({
      draggedObj: dragVal,
    });
  }

  handleChange = (e) => {
    // this.updateValue(e);
    // this.calculateScore();
    // this.resizeCookie();
    return new Promise((resolve, reject) => {
        //do something for 5 seconds
        console.log("E: " + e);
        this.updateValue(e);
        resolve();
    }).then(() => {
        return new Promise((resolve, reject) => {
            this.calculateScore();
            resolve();
        });
    }).then(() => {
        return new Promise((resolve, reject) => {
            this.resizeCookie();
            resolve();
        });
    });
  }

  updateValue = (e) => {
    console.log("changing " + e.target.name + " from " + this.state[e.target.name] + " to " + e.target.value );
    this.setState({
      [e.target.name]: e.target.value,
    });

  }

  calculateScore = () => {
    let attrs = ["sugar", "brownsugar", "butter", "butter_temp", "egg", "flour", "bakingsoda", "bakingpowder", "temp", "time"]
    let newScore = 10;
    for(let i = 0; i < attrs.length; i++) {
      newScore += parseInt(this.state[attrs[i]])
    }
    console.log("changing score from " + this.state.score + " to " + newScore);
    this.setState({
      score: newScore,
    })
  }

  resizeCookie = () => {
    let newPosition =  (this.state.score-1) * (75/18);
    let newMarginLeft = {marginLeft: newPosition + "%"};
    let newCookieHeight = {width: (1.388889 + 0.6111111*this.state.score) + "em", marginLeft:"24em", height:(27.77778 - 0.7777778*this.state.score)+"em"};
    let newCookieSpread = {height:(27.77778 - 0.7777778*this.state.score)+"em", width:"auto"}
    this.setState({
      pointerLocation: newMarginLeft,
      cookieHeight: newCookieHeight,
      cookieSpread: newCookieSpread,
    })
  }

  showButterInfo = () => {
    this.setState({
      stepOneInfo: "The liquids in the butter affect the spread of the cookie during baking. Higher liquid content increases spread; for example, melted butter will dissolve the sugar, increasing spread. Mixing room-temperature (or even cold) butter with sugar creates air pockets, decreasing spread. The fat in butter helps prevent gluten from forming. Gluten is what makes a cookie chewy. "
    })
  }

  showSugarInfo = () => {
    this.setState({
      stepOneInfo: "Granulated white sugar removes moisture from the dough and also encourages browning due to caramelization. Brown sugar contains molasses that helps absorb moisture. It also helps create more complex tastes when the Maillard reaction occurs during baking."
    })
  }

  showEggInfo = () => {
    this.setState({
      stepTwoInfo: "The liquid in eggs bond with the starch and protein in the dough, giving a cookie its structure. The fat in egg yolks act as a tenderizer, making a softer cookie, while egg whites tend to make cookies drier.",
    })
  }

  showFlourInfo = () => {
    this.setState({
      stepThreeInfo: "Using more flour in proportion to the wet ingredients decreases the liquid content, preventing spread and creating a cakier cookie.",
    })
  }

  showBicarbInfo = () => {
    this.setState({
      stepThreeInfo: "Baking soda, or bicarbonate of soda, neutralizes other acidic ingredients, letting the cookie brown more. Baking powder, a mixture of baking soda and an acidic ingredient, creates more carbon dioxide during baking, making the cookie puffier and lighter colored.",
    })
  }

  showBakeInfo = () => {
    this.setState({
      stepFiveInfo: "As the butter melts, the cookie begins to spread out and flatten. The water in the dough creates vapors that cause the cookie to rise. Bicarbonates breaking down into carbon dioxide also cause rising, leaving holes that make the cookie flaky. Finally, when the cookie reaches the right temperature (around 320F), the sugars caramelize. The Maillard reaction between the amino acids and sugars (like glucose and fructose) also occurs, creating new flavors and browning the cookie."
    })
  }



onDragOver = (event) => {
  event.preventDefault();
}

onDrop = (event) => {
  if(this.state.draggedObj == 1) {
  this.setState({
    img: butterSugarBowlImg,
  });
}
else if(this.state.draggedObj == 2) {
this.setState({
  img: eggVanillaBowlImg,
});
}
else if(this.state.draggedObj == 3) {
this.setState({
  img: dryIngBowlImg,
});
}

else if(this.state.draggedObj == 4) {
this.setState({
  img: chocChipsBowlImg,
});
}

else if(this.state.draggedObj == 5) {
this.setState({
  img:emptyBowlImg,
  trayImg: cookieTrayImg,
});
}

else if(this.state.draggedObj == 6) {
this.setState({
  trayImg: trayImg,
  ovenImg: ovenGif,
});
}
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
        <ReactTooltip multiline={true} place="right" type="dark" effect="float"/>
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
            a tooltip will appear that gives a tip about how that ingredient affects the <em>physical</em> structure of your cookie. Then click on
            the name to see the <em>chemical/scientific</em> description.<br/><br/>
            Look to your right! We even got you a bowl.
          </p>
          <div className="bowl">
            <img src={this.state.img} style={{width: '25%'}} alt='bowl' onDrop={event => this.onDrop(event)}
       onDragOver={(event => this.onDragOver(event))}draggable="true" onDrag={(event) => this.onDrag(event, 5)}/>
           </div>
          <div className="entire_step">
            <div className="step">
              <h1>STEP 1</h1>
              <p>Mix
              <b onClick={this.showSugarInfo}
                data-tip="Use more granulated sugar for a crunchier, flatter cookie.<br/>
                      For a chewier, moister cookie, use more brown sugar.<br/>
                      For a puffier cookie, decrease the amount of sugar used overall."> sugar </b>
                          and
              <b onClick={this.showButterInfo}
                data-tip="Use more butter, or melted butter for a flatter cookie.<br/>
                        Use solid butter for a puffier cookie."> butter </b>
              together by dragging them into the bowl on the right.</p>
            </div>

            <div className="images">
              <div className="drag_images">
                <img src={butterSugarImg} style={{height: '20em'}} alt='butter' draggable="true" onDrag={(event) => this.onDrag(event, 1)}/>
              </div>
              <div className="static_images">
              </div>
            </div>
          </div>
          <p>{this.state.stepOneInfo}</p>

          <br/>


          <div className="entire_step">
            <div className="step">
              <h1>STEP 2</h1>
              <p>Add
              <b onClick={this.showEggInfo}
                data-tip="Use a little less egg for crunchier cookies.<br/>"> eggs </b>
              and vanilla by dragging them into the bowl on the right.</p>
              </div>

              <div className="images">
                <div className="drag_images">
                  <img src={eggVanillaImg} style={{height: '20em'}} alt='butter'draggable="true" onDrag={(event) => this.onDrag(event, 2)}/>
                </div>
              </div>
            </div>
            <p>{this.state.stepTwoInfo}</p>

          <br/>

          <div className="entire_step">
            <div className="step">
              <h1>STEP 3</h1>
              <p>Combine
              <b onClick={this.showFlourInfo}
                data-tip="Use more flour for a tender, crumbly cookie. Use less flour for a chewier, denser cookie.."> flour</b>
              , salt, and
              <b onClick={this.showBicarbInfo}
                data-tip="Use more baking powder for a thicker, cakier cookie."> bicarbonates </b>
              , then combine the wet and dry ingredients by dragging them into the bowl on the right.</p>
            </div>

            <div className="images">
              <div className="drag_images">
                <img src={dryIngrededientsImg} style={{height: '20em'}} alt='butter' draggable="true" onDrag={(event) => this.onDrag(event, 3)}/>
              </div>
              <div className="static_images">
              </div>
            </div>
          </div>
          <p>{this.state.stepThreeInfo}</p>

          <br/>


          <div className="entire_step">
            <div className="step">
              <h1>STEP 4</h1>
              <p>Fold in chocolate chips by dragging them into the bowl on the right!</p>
            </div>

            <div className="images">
              <div className="drag_images">
                <img src={chocChipsImg} style={{height: '20em'}} alt='butter' draggable="true" onDrag={(event) => this.onDrag(event, 4)}/>
              </div>
              <div className="static_images">
              </div>
            </div>
          </div>
          <p>{this.state.stepFourInfo}</p>

          <br/>

          <div className="entire_step">
            <div className="step">
              <h1>STEP 5</h1>
              <p>Place dough onto baking sheet in 1 inch balls by dragging the bowl onto the baking sheet, and then they'll be ready to
              <b onClick={this.showBakeInfo}
              data-tip="Bake at a low temperature for a longer time time for crisper, thinner cookies.<br/>
                        Bake for a shorter time at a higher temperature for softer, thicker cookies."> bake </b> by dragging them to the oven!</p>
          </div>

            <div className="images">
              <div className="drag_images">
                  <img src={this.state.trayImg} style={{height: '20em'}} alt='cookie tray'  onDrag={(event) => this.onDrag(event, 6)}  onDrop={event => this.onDrop(event)}
             onDragOver={(event => this.onDragOver(event))}/>
                </div>
            </div>
          </div>
          <p>{this.state.stepFiveInfo}</p>



          <div className="lastp">
          <p>And after all of that hard work, your cookies are done!</p></div>

        </div>
        <div className="oven">
            <img src={this.state.ovenImg} style={{height: '30em'}} alt='oven' onDrop={event => this.onDrop(event)}
       onDragOver={(event => this.onDragOver(event))}/>
        </div>
        <div className="other"><p>And after all of that hard work, your cookies are done!</p>
                <br/><br/>
                <div className="center-text">
                <img src={cookieImg} style={{height: '20em'}} alt='cookie'/>
                <img src={cookieImg} style={{height: '20em'}} alt='cookie'/>
                <img src={cookieImg} style={{height: '20em'}} alt='cookie'/>
                </div>
                  <p>This, of course, is a little simpler than what <em>actually</em> goes on; we didn't even give you the proportions of the ingredients you were using!
                  Truthfully, there is no true baseline cookie that we can use as the gold standard here.
                  However, numerous sources have done tests to try and maximize the effects of these ingredients and create unique textures; we've compiled some of the best
                  we saw and tried to figure out what made each of them unique in terms of the relative ingredient proportions.
                  <br/><br/>
                  Interested in switching up your cookie? Do you want it to be... </p><br/><br/>
                  <div className="center-text">
                  <button className="texture-button" onClick={this.setTextureCrunchy}>Crunchy</button>
                  <button className="texture-button" onClick={this.setTextureChewy}>Chewy</button>
                  <button className="texture-button" onClick={this.setTextureCakey}>Cakey</button>
                  </div>
                  <br/><br/>
                  <div>{this.state.texture_change_text}</div>
                  <Customization handleChange={this.handleChange} cookieData={this.state}/>
                  </div>
      </div>
  );
}
}

export default App;
