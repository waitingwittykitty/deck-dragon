import { ApolloProvider } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import client from './graphql/client';
import AppRoutes from './routes';
import styles from './App.module.css';
import 'react-toastify/dist/ReactToastify.min.css';

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <section className={styles.body}>
          <AppRoutes />

          <ToastContainer />
        </section>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
