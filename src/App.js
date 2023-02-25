import "./App.css";

import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer";
import Player from "./components/Player/Player";
import Detail from "./components/Detail/Detail";
import { Routes, Route } from "react-router-dom";

//import Player from './components/Player';
function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Player />}></Route>
        <Route path="/detail/:id" element={<Detail />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}
export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
 