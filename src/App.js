import {CalculatorComponent} from "./calculator";
import {MovieComponent} from "./movie"
import React, {useState} from "react";
import {Button} from "primereact/button";

function App() {
    const [status, setStatus] = useState('');
    return (
        <div className="App">
            {status === '' && <div className="sizes">
                <Button label="Calculator web app" className="p-button" onClick={() => setStatus('q1')}/>
                <Button label="Movie list" className="p-button" onClick={() => setStatus('q2')}/>
            </div>}

            {status === '' && <h1 style={{margin: "20px"}}>Please click to the button to see project</h1>}
            {status === 'q1' && <CalculatorComponent/>}
            {status === 'q2' && <MovieComponent/>}
            {status !== '' && <Button label="Home" style={{position: "fixed" , bottom: "2%"}} className="p-button" onClick={() => setStatus('')}/> }
        </div>
    );
}

export default App;
