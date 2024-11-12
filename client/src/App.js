
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import CreateDog from './components/CreateDog/CreateDog';
import Detail from './components/Detail/Detail';
import About from './components/About/About';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
      <Route exact path= '/detail/:id' element= {<Detail/>}/>
        <Route exact path= '/' element= {<Landing/>}/>
        <Route exact path= '/home' element= {<Home/>}/>
        <Route exact path= '/dogs' element= {<CreateDog/>}/>
        <Route exact path= '/about' element= {<About/>}/>
      </Routes>
      
    </div>
    </BrowserRouter>
  );
}

export default App;
