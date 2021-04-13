import './App.css';
import { Impress, Step } from 'react-impressjs';
import { FaBeer, FaUser, FaServer, FaRouter, FaDatabase, FaPizzaSlice } from 'react-icons/fa';;

function App() {
  return (
    <div className="App">
      <Impress fallbackMessage={<p>Sorry, your <b>device or browser</b> couldn't support well.</p>} progressOn={true}>
        <Step id={'overview'} data={ {x:0, y:0, z:0, rotateX: 0, rotateY: 0, rotateZ: 0, scale:1 } }> 
            <h1>Hello there... client! Welcome to our pizza ordering website</h1>
            <FaUser className="icon"/>
            <hr />
            <p>We saw you typed our address on the <span>browser</span> bar. Press <b>space</b> to request your <FaPizzaSlice /></p>
        </Step>
        <Step id={'second-step'} data={ {x:800, y:800, z:0, rotateX: 0, rotateY: 0, rotateZ: 0, scale:1} }> 
            <h1>This is the second step</h1>
            <hr />
            <p>x:800, y:800, z:0, rotateX: 0, rotateY: 0, rotateZ: 0, scale:1</p>
        </Step>
        <Step id={'third-step'} data={ {x:1200, y:1200, z:400, rotateX: 0, rotateY: 0, rotateZ: 0, scale:1} }> 
            <h1>This is the third step</h1>
            <hr />
            <p>x:1200, y:1200, z:1200, rotateX: 0, rotateY: 0, rotateZ: 0, scale:1</p>
        </Step>
        <Step id={'fourth-step'} data={ {x:1600, y:1600, z:400, rotateX: 180, rotateY: 0, rotateZ: 0, scale:1} }> 
            <h1>This is the fourth step</h1>
            <FaBeer className="icon"/>
            <hr />
            <p>x:1600, y:1600, z:800, rotateX: 180, rotateY: 0, rotateZ: 0, scale:1 </p>
        </Step>

    </Impress>
    </div>
  );
}

export default App;
