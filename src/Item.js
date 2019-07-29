import React, { Component } from "react";
import './App.css';

class Item extends Component {
  state = {
    listitems: [
      {
        id: 0,
        name: "Now TV",
        email: "nowtv@test.com",
        subject : "Grab another Pass, you need to be watching this...",
        body : "Oscar winners Sir Anthony Hopkins and Ed Harris join an impressive cast boasting the likes of Thandie Newton, James Marsden and Jeffrey Wright.",
        smallname : "N",
        time : "02.05",
        modifier: "list-group-item"
      },
      {
        id: 1,
        name: "Investopedia Terms",
        email: "investopedia@test.com",
        subject : "What is 'Fibonanci Retracement'?..",
        body : "Fibonacci retracement is a term used in technical analysis that refers to areas of support (price stops going lower) or resistance (price stops going higher).",
        smallname : "I",
        time : "16.00",
        modifier: "list-group-item"
      },
      {
        id: 2,
        name: "ASICS Greater Manchester Marathon",
        email: "events@human-race.co.uk",
        subject : "Your chance to take on the marathon",
        body : "Do you feel inspired to take on one of Europe's most highly regarded and popular marathons?",
        smallname : "A",
        time : "12.00",
        modifier: "list-group-item"
      },
      {
        id: 3,
        name: "Now TV",
        email: "nowtv@test.com",
        subject : "Grab another Pass, you need to be watching this...",
        body : "Oscar winners Sir Anthony Hopkins and Ed Harris join an impressive cast boasting the likes of Thandie Newton, James Marsden and Jeffrey Wright.",
        smallname : "N",
        time : "02.05",
        modifier: "list-group-item"
      },
      {
        id: 4,
        name: "Investopedia Terms",
        email: "investopedia@test.com",
        subject : "What is 'Fibonanci Retracement'?..",
        body : "Fibonacci retracement is a term used in technical analysis that refers to areas of support (price stops going lower) or resistance (price stops going higher).",
        smallname : "I",
        time : "02.00",
        modifier: "list-group-item"
      },
      {
        id: 5,
        name: "Now TV",
        email: "nowtv@test.com",
        subject : "Grab another Pass, you need to be watching this...",
        body : "Oscar winners Sir Anthony Hopkins and Ed Harris join an impressive cast boasting the likes of Thandie Newton, James Marsden and Jeffrey Wright.",
        smallname : "N",
        time : "02.05",
        modifier: "list-group-item"
      },
      {
        id: 6,
        name: "Investopedia Terms",
        email: "investopedia@test.com",
        subject : "What is 'Fibonanci Retracement'?..",
        body : "Fibonacci retracement is a term used in technical analysis that refers to areas of support (price stops going lower) or resistance (price stops going higher).",
        smallname : "I",
        time : "16.00",
        modifier: "list-group-item"
      },
      {
        id: 7,
        name: "ASICS Greater Manchester Marathon",
        email: "events@human-race.co.uk",
        subject : "Your chance to take on the marathon",
        body : "Do you feel inspired to take on one of Europe's most highly regarded and popular marathons?",
        smallname : "A",
        time : "12.00",
        modifier: "list-group-item"
      },
      {
        id: 8,
        name: "Now TV",
        email: "nowtv@test.com",
        subject : "Grab another Pass, you need to be watching this...",
        body : "Oscar winners Sir Anthony Hopkins and Ed Harris join an impressive cast boasting the likes of Thandie Newton, James Marsden and Jeffrey Wright.",
        smallname : "N",
        time : "02.05",
        modifier: "list-group-item"
      },
      {
        id: 9,
        name: "Investopedia Terms",
        email: "investopedia@test.com",
        subject : "What is 'Fibonanci Retracement'?..",
        body : "Fibonacci retracement is a term used in technical analysis that refers to areas of support (price stops going lower) or resistance (price stops going higher).",
        smallname : "I",
        time : "02.00",
        modifier: "list-group-item"
      }
    ]
  };
 
  render() {
    return (
      <React.Fragment>
        
        <ul className="list">
          {this.state.listitems.map(listitem => (
            
            <li key={listitem.id} className={listitem.modifier}>
              <div className="dis">{listitem.smallname}</div>
              <div className="email"> 
                 <h3>{listitem.name}</h3>
                    <b>{listitem.subject}</b>
                    <p>{listitem.body}</p>
               </div>
               <div className="time">{listitem.time}</div>
            </li>
          ))}
        </ul>
        
      </React.Fragment>
    );
  }
}
 
export default Item;