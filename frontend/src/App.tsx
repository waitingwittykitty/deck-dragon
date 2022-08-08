import { ApolloProvider } from '@apollo/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import client from './graphql/client';
import Stage from './pages/stage/stage.component';
import styles from './App.module.css';

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <section className={styles.body}>
          <Routes>
            <Route path="/" element={<Stage />} />
          </Routes>
        </section>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
