import React from 'react';
import ReactDOM from 'react-dom';
import { useState } from 'react'; // for hooks
import './styles.css';



function App(){
    let [view, setView] = useState(true);  

    
    return(
        <div> 
            <PickDifficulty view={view} setView={setView}/>  
        </div>
    );
}


function PickDifficulty({view, setView}){
    let [difficulty, setDifficulty] = useState();
    

    let loadEasy = (e) =>{
        e.preventDefault();
        console.log('Easy loaded!');
        setDifficulty('Easy');
        setView(false);
    }

    let loadMedium = (e) =>{
        e.preventDefault(); 
        console.log('Medium loaded!');
        setDifficulty('Medium');
        setView(false);
    }

    let loadHard = (e) =>{
        e.preventDefault();
        console.log('Hard loaded!');
        setDifficulty('Hard');
        setView(false);
    }

    if (view){
        return(
            <div> 
                <form id='diffiultyForm'>
                    <h3>Please select a difficulty:</h3>
                    <div id='difficultyDiv'>
                        <input id='submitEasy' type='submit' value='Easy' onClick={loadEasy} /> 
                        <input id='submitMedium' type='submit' value='Medium' onClick={loadMedium}/> 
                        <input id='submitHard' type='submit' value='Hard' onClick={loadHard}/> 
                    </div>
                </form>
            </div>
        );
    }
    else{
        return(
           <div id='returnDiv'>
                <ReturnFunction difficulty={difficulty} view={view} setView={setView}/><br></br>
                <DisplayCards difficulty={difficulty}/>
            </div>
        );
    }
}

function ReturnFunction({difficulty, view, setView}){
    let submit = (e) =>{
        e.preventDefault();
        setView(true);
        return(
            <PickDifficulty view={view} setView={setView}/>
        );
    }
    return(
        <div>
            <h1>Difficulty: {difficulty}</h1>
            <h3>Good luck!</h3>
            <form onSubmit={submit}>
                <input id='submitHard' type='submit' value='Return'/> 
            </form> 
        </div>
    );
}


function DisplayCards({difficulty}){
    console.log("REEEEEEELOADDEEEEEEDDDDD")
    let [countyBoi, setCountyBoi] = useState(0);
    let [firstFlip, setFirstFlip] = useState('');
    let [secondFlip, setSecondFlip] = useState('');
    let shuffled = false;

    if (difficulty==='Easy'){   
        let arr = ['a','a','b','b','c','c','d','d', 'e','e','f','f']
        //let arr = arr.map(item => <span className='cardItem'>{item}</span>)

        if (shuffled===false){
            console.log('SHUFFLE MAN!!!!');
            arr = shuffle(arr);
            shuffled=true;
        }


        return(
            <div >
                <Card item={arr[0]} countyBoi={countyBoi} setCountyBoi={setCountyBoi} firstFlip={firstFlip} setFirstFlip={setFirstFlip} secondFlip={secondFlip} setSecondFlip={setSecondFlip}/>    <Card item={arr[1]} countyBoi={countyBoi} setCountyBoi={setCountyBoi} firstFlip={firstFlip} setFirstFlip={setFirstFlip} secondFlip={secondFlip} setSecondFlip={setSecondFlip}/>    <Card item={arr[2]} countyBoi={countyBoi} setCountyBoi={setCountyBoi} firstFlip={firstFlip} setFirstFlip={setFirstFlip} secondFlip={secondFlip} setSecondFlip={setSecondFlip}/>    <Card item={arr[3]} countyBoi={countyBoi} setCountyBoi={setCountyBoi} firstFlip={firstFlip} setFirstFlip={setFirstFlip} secondFlip={secondFlip} setSecondFlip={setSecondFlip}/><br></br>

                <Card item={arr[4]} countyBoi={countyBoi} setCountyBoi={setCountyBoi} firstFlip={firstFlip} setFirstFlip={setFirstFlip} secondFlip={secondFlip} setSecondFlip={setSecondFlip}/>    <Card item={arr[5]} countyBoi={countyBoi} setCountyBoi={setCountyBoi} firstFlip={firstFlip} setFirstFlip={setFirstFlip} secondFlip={secondFlip} setSecondFlip={setSecondFlip}/>    <Card item={arr[6]} countyBoi={countyBoi} setCountyBoi={setCountyBoi} firstFlip={firstFlip} setFirstFlip={setFirstFlip} secondFlip={secondFlip} setSecondFlip={setSecondFlip}/>    <Card item={arr[7]} countyBoi={countyBoi} setCountyBoi={setCountyBoi} firstFlip={firstFlip} setFirstFlip={setFirstFlip} secondFlip={secondFlip} setSecondFlip={setSecondFlip}/><br></br>

                <Card item={arr[8]} countyBoi={countyBoi} setCountyBoi={setCountyBoi} firstFlip={firstFlip} setFirstFlip={setFirstFlip} secondFlip={secondFlip} setSecondFlip={setSecondFlip}/>    <Card item={arr[9]} countyBoi={countyBoi} setCountyBoi={setCountyBoi} firstFlip={firstFlip} setFirstFlip={setFirstFlip} secondFlip={secondFlip} setSecondFlip={setSecondFlip}/>    <Card item={arr[10]} countyBoi={countyBoi} setCountyBoi={setCountyBoi} firstFlip={firstFlip} setFirstFlip={setFirstFlip} secondFlip={secondFlip} setSecondFlip={setSecondFlip}/>   <Card item={arr[11]} countyBoi={countyBoi} setCountyBoi={setCountyBoi} firstFlip={firstFlip} setFirstFlip={setFirstFlip} secondFlip={secondFlip} setSecondFlip={setSecondFlip}/><br></br>
            </div>
            
        );
    }
    else if (difficulty==='Medium'){

    }

    else{

    }
}


function Card({item, countyBoi, setCountyBoi, firstFlip, setFirstFlip, secondFlip, setSecondFlip}){
    let [flipped, setFlipped] = useState(false);

    const flippyBoi = (e) =>{
        e.preventDefault();
        setFlipped(!flipped);
       
    }

    const clickCounter = (e) =>{
        e.preventDefault();
        setCountyBoi(countyBoi+1);
        console.log(countyBoi);

        if (countyBoi === 1){
            setFirstFlip(item);
            console.log({firstFlip});
        }
        else{
            setSecondFlip(item);
            console.log({secondFlip})
            setCountyBoi(0);
        }
    }
    
    
    return(
        <div className="scene">
            <div className={flipped ? "card is-flipped" : "card"  } onClick={flippyBoi}>
                <div className="card__face card__face--front" onClick={clickCounter} ></div>
                <div className="card__face card__face--back">{item}</div>
            </div>
        </div>
    );
    
    
}


function shuffle(array){
    let i = array.length - 1;
    for (; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
  return array;
}


ReactDOM.render(<App />, document.getElementById('root'));

// TODO: Cards keep refreshing letters
// TODO: use of many card components wrong?
// maybe eliminate component and put everything into DisplayCards?