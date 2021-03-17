import React from 'react'
import Draggable from 'react-draggable'
import DraggableImage from './DraggableImage'
import './App.css';
import logo from './logo.png';
import polaroid1 from './polaroids/1.jpg';
import polaroid2 from './polaroids/2.jpg';
import polaroid3 from './polaroids/3.jpg';
import polaroid4 from './polaroids/4.jpg';
import polaroid5 from './polaroids/5.jpg';
import polaroid6 from './polaroids/6.jpg';

function App() {
  const nodeRef = React.useRef(null);

  return (
    <div className="App">
      <div className="header-logo">
        <img className="logo" src={logo}/>
      </div>

        <div className="container-polaroid">
          <div>
            <Draggable nodeRef={nodeRef}>
              <div className="polaroid-20p">
                <img ref={nodeRef} src={polaroid1} draggable="false"/>
              </div>
            </Draggable>
          </div>
          <div>
            <Draggable nodeRef={nodeRef}>
              <div className="polaroid-20p">
                <img ref={nodeRef} src={polaroid2} draggable="false"/>
              </div>
            </Draggable>
          </div>
          <div>
            <Draggable nodeRef={nodeRef}>
              <div className="polaroid-20p">
                <img ref={nodeRef} src={polaroid3} draggable="false"/>
              </div>
            </Draggable>
          </div>
          <div>
            <Draggable nodeRef={nodeRef}>
              <div className="polaroid-20p">
                <img ref={nodeRef} src={polaroid4} draggable="false"/>
              </div>
            </Draggable>
          </div>
          <div>
            <Draggable nodeRef={nodeRef}>
              <div className="polaroid-20p">
                <img ref={nodeRef} src={polaroid5} draggable="false"/>
              </div>
            </Draggable>
          </div>
          <div>
            <Draggable nodeRef={nodeRef}>
              <div className="polaroid-20p">
                <img ref={nodeRef} src={polaroid6} draggable="false"/>
              </div>
            </Draggable>
          </div>
        </div>

        <div className="black-dot" style={{marginRight: 40}}></div>
        <div className="black-dot"></div>
        
    </div>
  );
}

export default App;