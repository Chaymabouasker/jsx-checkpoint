import myWonderfulImage from "./perceptual-standard.jpg"
import './style.css';
import './App.css';


function App() {
  return (
    <div className="App" style={{border:"solid 1px black", maxWidth:"100vw"}}>
       <h1 className="title red">Your name here</h1>
      <br />
      <img src={myWonderfulImage} alt='firstImage'/>
      <br />
      <img src="/mypic.jpg" alt='secondImage' style={{width:"100%"}} />
      <>
      <video style={{with:"320" , height:"240"}} controls>
      <source src="myVide" type="video/mp4"/>
      </video>
      </>
    </div>
   
  );
}

export default App;
