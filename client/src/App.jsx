
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Start from '../src/pages/Start';
import Home from '../src/pages/Home';
import Learn from '../src/pages/Learn';
import ChooseCategory from '../src/pages/ChooseCatagory';
import Match from '../src/pages/Match';
import Result from '../src/pages/Result';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/home" element={<Home />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/category" element={<ChooseCategory />} />
        <Route path="/match" element={<Match />} />
        <Route path="/result" element={<Result />} />
      </Routes>
    </Router>
  );
}

export default App;
