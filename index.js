
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

function PickDifficulty({ view, setView, }) {
  let [difficulty, setDifficulty] = useState();
  let arr = [];

  let arrEasy = [
    { id: 1, label: 'a', show: true },
    { id: 2, label: 'a', show: true },
    { id: 3, label: 'b', show: true },
    { id: 4, label: 'b', show: true },
    { id: 5, label: 'c', show: true },
    { id: 6, label: 'c', show: true },
    { id: 7, label: 'd', show: true },
    { id: 8, label: 'd', show: true },
    { id: 9, label: 'e', show: true },
    { id: 10, label: 'e', show: true },
    { id: 11, label: 'f', show: true },
    { id: 12, label: 'f', show: true }
  ];
  let arrMed = [
    { id: 1, label: 'a', show: true },
    { id: 2, label: 'a', show: true },
    { id: 3, label: 'b', show: true },
    { id: 4, label: 'b', show: true },
    { id: 5, label: 'c', show: true },
    { id: 6, label: 'c', show: true },
    { id: 7, label: 'd', show: true },
    { id: 8, label: 'd', show: true },
    { id: 9, label: 'e', show: true },
    { id: 10, label: 'e', show: true },
    { id: 11, label: 'f', show: true },
    { id: 12, label: 'f', show: true },
    { id: 13, label: 'g', show: true },
    { id: 14, label: 'g', show: true },
    { id: 15, label: 'h', show: true },
    { id: 16, label: 'h', show: true },
    { id: 17, label: 'i', show: true },
    { id: 18, label: 'i', show: true }
  ];
  let arrHard = [
    { id: 1, label: 'a', show: true },
    { id: 2, label: 'a', show: true },
    { id: 3, label: 'b', show: true },
    { id: 4, label: 'b', show: true },
    { id: 5, label: 'c', show: true },
    { id: 6, label: 'c', show: true },
    { id: 7, label: 'd', show: true },
    { id: 8, label: 'd', show: true },
    { id: 9, label: 'e', show: true },
    { id: 10, label: 'e', show: true },
    { id: 11, label: 'f', show: true },
    { id: 12, label: 'f', show: true },
    { id: 13, label: 'g', show: true },
    { id: 14, label: 'g', show: true },
    { id: 15, label: 'h', show: true },
    { id: 16, label: 'h', show: true },
    { id: 17, label: 'i', show: true },
    { id: 18, label: 'i', show: true },
    { id: 19, label: 'j', show: true },
    { id: 20, label: 'j', show: true },
    { id: 21, label: 'k', show: true },
    { id: 22, label: 'k', show: true },
    { id: 23, label: 'l', show: true },
    { id: 24, label: 'l', show: true },

  ];

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

  // view === true on load, so display difficulty options
  if (view) {
    return (
      <div id='selectDifficulty'>
        <form id='diffiultyForm'>
          <h1>Choose Your Fate</h1>
          <div id='difficultyDiv'>
            <input id='submitEasy' type='submit' value='Easy' onClick={loadEasy} />
            <input id='submitMedium' type='submit' value='Medium' onClick={loadMedium} />
            <input id='submitHard' type='submit' value='Hard' onClick={loadHard} />
          </div>
        </form>
      </div>
    );
  }
  else { //view set to false after difficulty click, so game + return button will be displayed
    // decide which difficulty cards to load
    console.log('Shuffled!');
    arr = (difficulty === 'Easy') ? shuffle(arrEasy) : (difficulty === 'Medium') ? shuffle(arrMed) : shuffle(arrHard);
    console.log(arr);

    return (
      <div id='gameLoadedDiv'>
        <ReturnFunction difficulty={difficulty} view={view} setView={setView} /><br></br>
        <DisplayCards difficulty={difficulty} arr={arr} />
      </div>
    );
  }
}

function ReturnFunction({ difficulty, view, setView }) {
  // if return button clicked, redisplay difficulty options (easy,med,hard)
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
        <input id='returnButton' type='submit' value='New Game' />
      </form>
    </div>
  );
}

function gameOver(array) {
  let gameOver = true;

  for (let i = 0; i < array.length; i++) {
    if (array[i].show === true) {
      gameOver = false;
      return gameOver;
    }
  }

  return gameOver;
}
function DisplayCards({ arr, difficulty }) {
  let [firstFlip, setFirstFlip] = useState('');
  let [secondFlip, setSecondFlip] = useState('');
  let [count, setCount] = useState(0);
  let [showing, setShowing] = useState(true);
  let [firstID, setFirstID] = useState();
  let [secondID, setSecondID] = useState();
  let cards = [];
  let indexOne, indexTwo;



  // storing values of 1st and 2nd flip with useState()
  function onClick(label, id) {
    if (count === 1) {
      setFirstFlip(label)
      setFirstID(id);
      setCount(count + 1);
    }
    else {
      setSecondFlip(label);
      setSecondID(id);
      setCount(1);
    }
  }

  console.log(firstFlip);
  console.log(secondFlip);

  let len = arr.length;

  // create an array of <Card/> elements
  for (let i = 0; i < len; i++) {
    if (arr[i] === null) {
      continue;
    }
    cards.push(<Card showing={showing} onClick={onClick} id={arr[i].id} label={arr[i].label} index={arr[i]} display={arr[i].show} />)
  }

  useEffect(() => {
    if (firstFlip === secondFlip && firstFlip !== '' && secondFlip !== '' && count === 2) {
      console.log("Huzzah!! " + firstFlip + ", " + secondFlip);

      indexOne = arr.findIndex(x => x.id === firstID);
      indexTwo = arr.findIndex(x => x.id === secondID);

      setTimeout(function () {
        arr[indexOne].show = false;
        arr[indexTwo].show = false;
        setShowing(false);

      }, 1150)


      setFirstFlip();
      setSecondFlip();
      setShowing(true);
    }
    else if (count === 2 && firstFlip !== secondFlip && firstFlip !== '' && secondFlip !== '') {
      console.log("No Match!");
    }
    console.log(indexOne + ', ' + indexTwo);
    return function cleanup() {
      return null;
    }
  }, [firstFlip, secondFlip, count, setFirstFlip, setSecondFlip, indexOne, indexTwo])


  let endGame = gameOver(arr);
  if (endGame === true) {
    return (
      <h1 id='victory'>Victory!</h1>
    );
  }

  if (difficulty === 'Easy') {
    return (
      <div>
        {cards[0]} {cards[1]} {cards[2]} {cards[3]}<br></br>
        {cards[4]} {cards[5]} {cards[6]} {cards[7]}<br></br>
        {cards[8]} {cards[9]} {cards[10]} {cards[11]}
      </div>
    );
  }
  else if (difficulty === 'Medium') {
    return (
      <div>
        {cards[0]} {cards[1]} {cards[2]} {cards[3]} {cards[12]} {cards[13]} <br></br>
        {cards[4]} {cards[5]} {cards[6]} {cards[7]} {cards[15]} {cards[14]}<br></br>
        {cards[8]} {cards[9]} {cards[10]} {cards[11]} {cards[16]} {cards[17]}
      </div>
    );
  }
  else {
    return (
      <div>
        {cards[0]} {cards[1]} {cards[2]} {cards[3]} {cards[12]} {cards[13]} <br></br>
        {cards[4]} {cards[5]} {cards[6]} {cards[7]} {cards[15]} {cards[14]}<br></br>
        {cards[8]} {cards[9]} {cards[10]} {cards[11]} {cards[16]} {cards[17]}<br></br>
        {cards[18]} {cards[19]} {cards[20]} {cards[21]} {cards[22]} {cards[23]}

      </div>
    );
  }
}


function Card({ display, label, id, onClick }) {
  // card face that shows depends on T/F of flip
  let [flip, setFlip] = useState(false);

  const flippyBoi = () => {
    setFlip(!flip);
  }

  // auto flip back cards
  useEffect(() => {
    setTimeout(function () {
      setFlip(false);
    }, 2000);
  });

  // matching pair was found so hide
  if (display === false) {
    console.log("Hide!!");
    return (
      <div className='foundCard'></div>
    );
  }
  else {
    return (
      <div className="scene">
        <div className={flip ? "card is-flipped" : "card"} onClick={flippyBoi}>
          <div className="card__face card__face--front" onClick={() => onClick(label, id)} ></div>
          <div className="card__face card__face--back">{label}</div>
        </div>
      </div>
    );
  }
}


// Fisher-Yates shuffle to randomize 'deck of cards'
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
