import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ReactModal from "react-modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setIsOpen(true)}>Open modal</button>
      <ReactModal isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
        <div>
          <div>
            <img src={logo} height={24} alt="logo" />
            <div>こんにちは</div>
          </div>
          <div>かわいい犬ですね 12345</div>
          <div>
            <div>lorem ipsum</div>
            <div>
              <span>34</span>
              <span>1.234</span>
            </div>
          </div>
          <img src={logo} height={24} alt="1個目" />
          <img src={logo} height={24} alt="2個目" />
          <img src={logo} height={24} alt="3個目" />
          <button onClick={() => setIsOpen(false)}>とじる</button>
        </div>
      </ReactModal>
    </div>
  );
}

export default App;
