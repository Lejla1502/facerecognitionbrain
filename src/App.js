
import React, {Component} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';

import Particles from 'react-tsparticles';
import Clarifai from 'clarifai';

import 'tachyons';

const app = new Clarifai.App({
  apiKey: '4372f0464688415b80d62ea743ad25ee'
 });

const options2={
  
  fpsLimit: 60,
  interactivity: {
    events: {
      onClick: {
        enable: true,
        mode: "push",
      },
      onHover: {
        enable: true,
        mode: "repulse",
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 400,
        duration: 2,
        opacity: 0.8,
        size: 40,
      },
      push: {
        quantity: 4,
      },
      repulse: {
        distance: 120,
        duration: 0.4,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1,
    },
    collisions: {
      enable: true,
    },
    move: {
      direction: "none",
      enable: true,
      outMode: "bounce",
      random: false,
      speed: 1.5,
      straight: false,
    },
    number: {
      density: {
        enable: true,
        value_area: 800,
      },
      value: 130,
    },
  }
}


class  App extends Component {
  constructor()
  {
      super()
      this.state={
          input:'',
          imageUrl:''
      }
  }

  onInputChange=(event)=>
  {
    this.setState({input:event.target.value});

  }

  onButtonSubmit=()=>{
    this.setState({imageUrl:this.state.input});
    console.log('click');
    app.models.predict(Clarifai.COLOR_MODEL,this.state.input).then
    ( 
      function(response){
        console.log(response);
      },
      function(err){

      }
    ); 
  }

  render(){
    const particlesInit = (main) => {
      console.log(main);
  
      // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    };
  
    const particlesLoaded = (container) => {
      console.log(container);
    };

  return (
    <div className="App">
       <Particles id="tsparticles" className="particels" init={particlesInit}
      loaded={particlesLoaded}
                options={options2} />
    <Navigation/>
    <Logo/>

    <Rank/>
    <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit}/>
    
    <FaceRecognition imageUrl={this.state.imageUrl}/>
     
     
    </div>
  );
}
}
export default App;
