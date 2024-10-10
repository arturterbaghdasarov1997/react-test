import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Hello } from '../components/Hello';
import { Form } from '../components/Form';
import { CounterPage } from '../components/CounterPage';

export const AppRouter = () => {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Hello</Link></li>
          <li><Link to="/form">Form</Link></li>
          <li><Link to="/counter">Counter</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Hello name="Artur" />} />
        <Route path="/form" element={<Form onSubmit={(name) => alert(name)} />} />
        <Route path="/counter" element={<CounterPage />} />
      </Routes>
    </Router>
  );
};
