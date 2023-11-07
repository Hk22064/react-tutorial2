import React, { useState } from 'react';
function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}
function setUS(){
  
}
function setUK(){
  
}

export default function App() {
  const [showStory, setShowStory] = useState(false);
  const [xItem, setXItem] = useState("");
  const [yItem, setYItem] = useState("");
  const [zItem, setZItem] = useState("");
  const [customName, setName] = useState("");
  const [Name,setUsername] = useState("");
  const [temp,setTemp]=useState("");
  const [mass,setMass]=useState("");
  const [ukus,setUKUS]=useState("");

  const generateRandomStory = () => {
    const xItems = ["Willy the Goblin", "Big Daddy", "Father Christmas"];
    const yItems = ["the soup kitchen", "Disneyland", "the White House"];
    const zItems = [
      "spontaneously combusted",
      "melted into a puddle on the sidewalk",
      "turned into a slug and crawled away",
    ];
    
    const randomXItem = randomValueFromArray(xItem);
    const randomYItem = randomValueFromArray(yItem);
    const randomZItem = randomValueFromArray(zItem);
    
    if (ukus === "uk") {
      setMass("stones");
      setTemp("Celsius");
    } else {
      setMass("pounds");
      setTemp("Fahrenheit");
    }
  
    
    if(customName!==""){
      setUsername(customName);
    }else{
      setUsername("Bob");
    }
    setXItem(randomXItem);
    setYItem(randomYItem);
    setZItem(randomZItem);
    setShowStory(true);
  };

  return (
    <>
      <div>
        <label htmlFor="customname">Enter custom name:</label>
        <input type="text" placeholder="" value={customName} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label htmlFor="us">US</label>
        <input type="radio" value="us"  onChange={() => setUKUS("us")}/>
        <label htmlFor="uk">UK</label>
        <input type="radio" value="uk"    onChange={() => setUKUS("uk")}/>
      </div>
      <div>
        <button onClick={generateRandomStory}>Generate random story</button>
      </div>
      {showStory && (
        <p>
          It was 94 {temp} outside, so {xItem} went for a walk. When they
          got to {yItem}, they stared in horror for a few moments, then {zItem}.
          {Name} saw the whole thing, but was not surprised — {xItem} weighs 300
          {mass}, and it was a hot day.
        </p>
      )}
    </>
  );
}
