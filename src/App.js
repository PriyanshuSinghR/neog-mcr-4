import { Route, Routes } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import { useContext } from 'react';
import { Bookmark } from './pages/Bookmark';
import { MyContext } from './context/MyContext';
import { Comment } from './pages/Comment';

function App() {
  const { state, dispatch } = useContext(MyContext);
  return (
    <div className="App" style={{ height: '100vh' }}>
      <div>
        <h3 style={{ color: 'purple', textAlign: 'left', marginLeft: '100px' }}>
          My Forum
        </h3>
      </div>
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookmark" element={<Bookmark />} />
          <Route path="/comment/:postId" element={<Comment />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
