import { useQuery } from '@apollo/client';
import { Navigate, Route, Routes } from 'react-router-dom';
import Spinner from 'react-spinner';
import { CurrentUserDetailsDocument } from './graphql/queries/current-user-details';
import Login from './pages/auth/login.component';
import Stage from './pages/stage/stage.component';

function AppRoutes() {
  const { data, loading } = useQuery(CurrentUserDetailsDocument);
  const username = data?.me?.username;

  if (loading) {
    return <Spinner />;
  }

  return username ? (
    <Routes>
      <Route path="/" element={<Stage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  ) : (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default AppRoutes;
