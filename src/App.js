import './styles/App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header>
          <Nav />
          <Routes>
              <Route path="/" element={<Main />}/>
          </Routes>
        </Header>
      </div>
    </BrowserRouter>
  );
}

export default App;
