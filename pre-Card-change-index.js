import React from 'react';
import ReactDOM from 'react-dom';
import { useState, useEffect } from 'react'; // for hooks
import './styles.css';


function App() {
  let [view, setView] = useState(true);


  return (
    <div>
      <PickDifficulty view={view} setView={setView} />
    </div>
  );
}




function PickDifficulty({ view, setView }) {
  let [difficulty, setDifficulty] = useState();
  let arr = ['a', 'a', 'b', 'b', 'c', 'c', 'd', 'd', 'e', 'e', 'f', 'f']

  console.log('Cards Shuffled!');
  arr = shuffle(arr);


  let loadEasy = (e) => {
    e.preventDefault();
    console.log('Easy loaded!');
    setDifficulty('Easy');
    setView(false);
  }

  let loadMedium = (e) => {
    e.preventDefault();
    console.log('Medium loaded!');
    setDifficulty('Medium');
    setView(false);
  }

  let loadHard = (e) => {
    e.preventDefault();
    console.log('Hard loaded!');
    setDifficulty('Hard');
    setView(false);
  }

  if (view) {
    return (
      <div>
        <form id='diffiultyForm'>
          <h3>Please select a difficulty:</h3>
          <div id='difficultyDiv'>
            <input id='submitEasy' type='submit' value='Easy' onClick={loadEasy} />
            <input id='submitMedium' type='submit' value='Medium' onClick={loadMedium} />
            <input id='submitHard' type='submit' value='Hard' onClick={loadHard} />
          </div>
        </form>
      </div>
    );
  }
  else {
    return (
      <div id='returnDiv'>
        <ReturnFunction difficulty={difficulty} view={view} setView={setView} /><br></br>
        <DisplayCards difficulty={difficulty} arr={arr} />
      </div>
    );
  }
}

function ReturnFunction({ difficulty, view, setView }) {
  let submit = (e) => {
    e.preventDefault();
    setView(true);
    return (
      <PickDifficulty view={view} setView={setView} />
    );
  }
  return (
    <div>
      <h1>Difficulty: {difficulty}</h1>
      <h3>Good luck!</h3>
      <form onSubmit={submit}>
        <input id='submitHard' type='submit' value='Return' />
      </form>
    </div>
  );
}


function DisplayCards({ arr, difficulty }) {


  let [first, setFirst] = useState('');
  let [second, setSecond] = useState('');
  let [count, setCount] = useState(1);
  let [flippy, setFlippy] = useState(true);

  console.log(arr);

  if (difficulty === 'Easy') {

    function compareInParent(first, second) {
      if (first !== second) {

        return false;

      }
      else {

        return true;
      }
    }

    return (
      <div >
        <Card item={arr[0]} flippy={flippy} setFlippy={setFlippy} first={first} second={second} setFirst={setFirst} setSecond={setSecond} count={count} setCount={setCount} compareInParent={compareInParent} />    <Card item={arr[1]} flippy={flippy} setFlippy={setFlippy} first={first} second={second} setFirst={setFirst} setSecond={setSecond} count={count} setCount={setCount} compareInParent={compareInParent} />    <Card item={arr[2]} flippy={flippy} setFlippy={setFlippy} first={first} second={second} setFirst={setFirst} setSecond={setSecond} count={count} setCount={setCount} compareInParent={compareInParent} />    <Card item={arr[3]} flippy={flippy} setFlippy={setFlippy} first={first} second={second} setFirst={setFirst} setSecond={setSecond} count={count} setCount={setCount} compareInParent={compareInParent} /><br></br>

        <Card item={arr[4]} flippy={flippy} setFlippy={setFlippy} first={first} second={second} setFirst={setFirst} setSecond={setSecond} count={count} setCount={setCount} compareInParent={compareInParent} />    <Card item={arr[5]} flippy={flippy} setFlippy={setFlippy} first={first} second={second} setFirst={setFirst} setSecond={setSecond} count={count} setCount={setCount} compareInParent={compareInParent} />    <Card item={arr[6]} flippy={flippy} setFlippy={setFlippy} first={first} second={second} setFirst={setFirst} setSecond={setSecond} count={count} setCount={setCount} compareInParent={compareInParent} />    <Card item={arr[7]} flippy={flippy} setFlippy={setFlippy} first={first} second={second} setFirst={setFirst} setSecond={setSecond} count={count} setCount={setCount} compareInParent={compareInParent} /><br></br>

        <Card item={arr[8]} flippy={flippy} setFlippy={setFlippy} first={first} second={second} setFirst={setFirst} setSecond={setSecond} count={count} setCount={setCount} compareInParent={compareInParent} />    <Card item={arr[9]} flippy={flippy} setFlippy={setFlippy} first={first} second={second} setFirst={setFirst} setSecond={setSecond} count={count} setCount={setCount} compareInParent={compareInParent} />    <Card item={arr[10]} flippy={flippy} setFlippy={setFlippy} first={first} second={second} setFirst={setFirst} setSecond={setSecond} count={count} setCount={setCount} compareInParent={compareInParent} />    <Card item={arr[11]} flippy={flippy} setFlippy={setFlippy} first={first} second={second} setFirst={setFirst} setSecond={setSecond} count={count} setCount={setCount} compareInParent={compareInParent} /><br></br>
      </div>

    );
  }

}


function Card({ item, first, second, setFirst, setSecond, count, setCount, compareInParent, flippy, setFlippy }) {
  let [flip, setFlip] = useState(false);
  let [result, setResult] = useState();


  const flippyBoi = () => {
    setFlip(!flip);
  }


  const clickCounter = () => {
    if (count === 1) {
      setFirst(item);
      setCount(2);
    }

    if (count === 2) {
      setSecond(item);
      setCount(1);
    }
    setResult(compareInParent(first, second));
  }

  if (flip === true) {
    console.log("Match!!!");
    console.log("first: " + first + ", second: " + second);

  }
  else {
    console.log("Not a match!");
    console.log("first: " + first + ", second: " + second);
  }

  useEffect(() => {
    if (result === false) {
      setFirst();
      setSecond();
    }

    setTimeout(function () {
      setFlip(false);
    }, 2000)

  }, [result, setFirst, setSecond]);



  return (
    <div className="scene">
      <div className={flip ? "card is-flipped" : "card"} onClick={flippyBoi}>
        <div className="card__face card__face--front" onClick={clickCounter}></div>
        <div className="card__face card__face--back">{item}</div>
      </div>
    </div>
  );


}


function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}




ReactDOM.render(<App />, document.getElementById('root'));

export default PickDifficulty;
// TODO: cards currently auto flip back to false, need to create something to keep matches flipped up