import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Stage from './pages/stage/stage.component';
import styles from './App.module.css';

function App() {
  return (
    <section className={styles.body}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Stage />} />
        </Routes>
      </BrowserRouter>
    </section>
  );
}

export default App;
