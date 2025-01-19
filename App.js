```javascript
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Missing Route for a catch-all */}      </Routes>
    </BrowserRouter>
  );
}

function Home() {  return <h1>Home</h1>;}

function About() {  return <h1>About</h1>;}

export default App;
```