import React from 'react';
import Draggable from 'react-draggable';
import Modal from 'react-modal';
import './App.css';

import logo from './logo.png';
import menuLogo from './menu-logo.png';

import polaroid1 from './polaroids/1.jpg';
import polaroid2 from './polaroids/2.jpg';
import polaroid3 from './polaroids/3.jpg';
import polaroid4 from './polaroids/4.jpg';
import polaroid5 from './polaroids/5.jpg';
import polaroid6 from './polaroids/6.jpg';

import right1 from './polaroids/right1.jpg';
import right2 from './polaroids/right2.jpg';
import right3 from './polaroids/right3.jpg';
import right4 from './polaroids/right4.jpg';
import right5 from './polaroids/right5.jpg';

import left1 from './polaroids/left1.jpg';
import left2 from './polaroids/left2.jpg';
import left3 from './polaroids/left3.jpg';

import modal1 from './modal/modal1.jpeg'
import modal2 from './modal/modal2.jpeg'
import modal3 from './modal/modal3.jpeg'
import modal4 from './modal/modal4.jpeg'

const customStyles = {
  overlay : {
    zIndex: 99,
    position: 'absolute'
  },
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    transform             : 'translate(-50%, -50%)',
    border                : 'none'
  }
};

function App() {
  const nodeRef = React.useRef(null);
  const [isModalOpen, setIsOpen] = React.useState(false);
  const [modalSource, setModalSource] = React.useState();

  function openModal(source) {
    setModalSource(source);
    setIsOpen(true);
  }

  function closeModal() {
    setModalSource();
    setIsOpen(false);
  }

  return (
    <div /* className="App" */>
      <div className="header">
        <img className="logo" src={logo}/>
        <img className="logo" src={menuLogo}/>
      </div>

      <div className="container-polaroid-1">
        <div className="container-polaroid">
          <Draggable nodeRef={nodeRef}>
            <div className="polaroid-20p">
              <img ref={nodeRef} src={polaroid1} draggable="false"/>
            </div>
          </Draggable>
        </div>
        <div className="container-polaroid">
          <Draggable nodeRef={nodeRef}>
            <div className="polaroid-20p">
              <img ref={nodeRef} src={polaroid2} draggable="false" onClick={() => openModal(modal4)}/>
            </div>
          </Draggable>
        </div>
        <div className="line1"></div>
        <div className="container-polaroid">
          <Draggable nodeRef={nodeRef}>
            <div className="polaroid-20p">
              <img ref={nodeRef} src={polaroid3} draggable="false"/>
            </div>
          </Draggable>
        </div>
        <div className="container-polaroid">
          <Draggable nodeRef={nodeRef}>
            <div className="polaroid-20p">
              <img ref={nodeRef} src={polaroid4} draggable="false"/>
            </div>
          </Draggable>
        </div>
        <div className="container-polaroid">
          <Draggable nodeRef={nodeRef}>
            <div className="polaroid-20p">
              <img ref={nodeRef} src={polaroid5} draggable="false"/>
            </div>
          </Draggable>
        </div>
        
        <div>
          <div className="container-polaroid">
            <Draggable nodeRef={nodeRef}>
              <div className="polaroid-20p">
                <img ref={nodeRef} src={polaroid6} draggable="false"/>
              </div>
            </Draggable>
          </div>
          <div className="two-dots">
            <div className="black-dot" style={{marginRight: '5px'}}></div>
            <div className="black-dot"></div>
          </div>
        </div>
      </div>

      <div className="container-polaroid-2">

        <div className="container-polaroid-2-left">
          <div className="left-couple">
            <div className="container-polaroid-230">
              <Draggable nodeRef={nodeRef}>
                <div className="polaroid-70p">
                  <img ref={nodeRef} src={left1} draggable="false"/>
                </div>
              </Draggable>
            </div>
            <div style={{display: 'flex', paddingTop: 60, width: '70%', alignSelf: 'center'}}>
              <div style={{textAlign: 'end'}}>
                <Draggable nodeRef={nodeRef}>
                  <div className="polaroid-70p">
                    <img ref={nodeRef} src={left3} draggable="false"/>
                  </div>
                </Draggable>
              </div>
            </div>
          </div>

          <div className="left-single">
            <div className="container-polaroid-550p">
              <Draggable nodeRef={nodeRef}>
                <div className="polaroid-50p">
                  <img ref={nodeRef} src={left2} draggable="false" onClick={() => openModal(modal1)}/>
                </div>
              </Draggable>
            </div>
            <div className="line2"></div>
          </div>
          
        </div>
        
        <div className="container-polaroid-2-right">
          <div>
            <div className="container-polaroid" style={{textAlign: 'center'}}>
              <Draggable nodeRef={nodeRef}>
                <div className="polaroid-20p">
                  <img ref={nodeRef} src={right1} draggable="false"/>
                </div>
              </Draggable>
            </div>
            <div style={{marginTop: 300, display: 'flex', paddingBottom: '30px'}}>
              <div style={{display: 'flex', alignSelf: 'flex-end'}}>
                <div className="black-dot-2"></div>
              </div>
              <div style={{marginLeft: '10px'}}>
                <Draggable nodeRef={nodeRef}>
                  <div className="polaroid-85p">
                    <img ref={nodeRef} src={right5} draggable="false" onClick={() => openModal(modal3)}/>
                  </div>
                </Draggable>
              </div>
            </div>
            
          </div>
          
          <div className="container-polaroid" style={{textAlign: 'center'}}>
            <Draggable nodeRef={nodeRef}>
              <div className="polaroid-20p">
                <img ref={nodeRef} src={right2} draggable="false" onClick={() => openModal(modal2)}/>
              </div>
            </Draggable>
          </div>
          <div style={{textAlign: 'center'}}>
            <div className="container-polaroid">
              <Draggable nodeRef={nodeRef}>
                <div className="polaroid-20p">
                  <img ref={nodeRef} src={right3} draggable="false"/>
                </div>
              </Draggable>
            </div>
            <div style={{paddingTop: 100}}>
              <Draggable nodeRef={nodeRef}>
                <div className="polaroid-20p">
                  <img ref={nodeRef} src={right4} draggable="false"/>
                </div>
              </Draggable>
            </div>
          </div>

        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <div className="polaroid-modal">
          <img src={modalSource}/>
        </div>
      </Modal>
        
    </div>
  );
}

export default App;