import React from "react";
import "./styles.css";
import { useState } from "react";

const AdventureIsle = {
  Safari: [
    { name: "Wildebeest Migration" },
    { name: "Whale Watching" },
    { name: "Helicopter Safaris" },
    { name: "Sleeping under the stars" },
    { name: "Mokoro Safaris" },
    { name: "Meet the Mountain Gorillas" },
    { name: "A Robinson Crusoe Beach Experience" }
    { name: "Canoeing on Africa’s mighty rivers"}
    { name: "Hot air ballooning" }
    { name: "Cultural Encounters" }
  ],

  Trekking: [
    { name: "Strenuous Trekking" },
    { name: "Campsite-based Trekking" },
    { name: "Accommodation-based Trekking" },
    { name: "Circuit Trekking" }
    { name: "Mountain Trekking" }
    { name: "Desert Trekking" }
    { name: "Forest Trekking" }
  ],

  Cycling: [
    { name: "Road Races" },
    { name: "Stage races or Tours" },
    { name: "Criterium" },
    { name: "Time Trials" }
    { name: "Mountain Bike Racing" }
    { name: "BMX (Bicycle Motorcross)" }
    { name: "Track Cycling" }
    { name: "Cycle Speedway" }
    { name: "Mountain Bike Trials" }
    { name: "Cycle Polo" }
    { name: "Artistic Cycling" }
  ],

  Canoeing: [
    { name: "Outrigger Canoeing" },
    { name: "Ice Canoeing" },
    { name: "Wildwater Canoeing" },
    { name: "Recreational Canoeing" },
    { name: "Canoe Diving" },
    { name: "Canoe Slalom" },
    { name: "Canoe Camping" },
    { name: "Canoe Marathon" },
    { name: "Canoe Sailing" }
  ],

  Climbing: [
    { name: "Free Climbing" },
    { name: "Top Rope Climbing" },
    { name: "Sports Climbing" },
    { name: "Bouldering" },
    { name: "Free Solo Climbing" },
    { name: "Deep Water Solo" },
    { name: "Trad Climbing" },
    { name: "Big Wall Climbing" },
    { name: "Aid Climbing" }
  ]
};

const adventurelist = Object.keys(AdventureIsle);

export default function App() {
  const [selectedadventureType, setadvetureType] = useState("Adventurous");
  function adventureTypeButtonHandler(adventureType) {
    setAdventureType(adventureType);
  }
  const mystyle = {
    listStyleType: "none"
  };

  return (
    <div className="App">
      <h1>🏞️⛰️🏔️🧗🏽🚵🗻 Let the Adventure Begin 🏜️🌏🏝️🥾🚢🧳 </h1>

      <p>Don't know where to go?  Just Wing It..!! </p>

      {adventureTypeList.map((adventureType) => {
        return (
          <button
            onClick={() => adventureTypeButtonHandler(adventureType)}
            keys={adventureType}
          >
            {adventureType}
          </button>
        );
      })}

      <hr />

      <div>
        <ul style={mystyle}>
          {AdventureIsle[selectedadventureType].map((adventureType) => {
            return (
              <li>
                <div>{adventureType.name}</div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}