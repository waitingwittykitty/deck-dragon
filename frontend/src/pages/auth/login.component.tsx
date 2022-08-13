import { useApolloClient, useMutation } from '@apollo/client';
import { Formik } from 'formik';
import { toast } from 'react-toastify';
import Button from '../../components/button/button.component';
import FormField from '../../components/form-field/form-field.component';
import Form from '../../components/form/form.component';
import { LoginDocument } from '../../graphql/mutations/login';
import { CurrentUserDetailsDocument } from '../../graphql/queries/current-user-details';
import { GameDetailsDocument } from '../../graphql/queries/game-details';
import constants from '../../utils/constants';

function Login() {
  const client = useApolloClient();
  const [login] = useMutation(LoginDocument);

  const handleLogin = async (
    { username, password }: LoginFormData,
    { setSubmitting, setErrors }: LoginFormActions
  ) => {
    setSubmitting(true);
    const { data } = await login({ variables: { username, password } });
    setSubmitting(false);
    const token = data?.login?.token;

    if (!token) {
      const errors = data?.login?.errors;

      setErrors(errors);
    } else {
      localStorage.setItem('token', token);
      toast.success('Successfully logged in!');
      client.refetchQueries({ include: [CurrentUserDetailsDocument, GameDetailsDocument] });
    }
  };

  return (
    <Formik
      initialValues={{ username: '', password: '' }}
      action="/login"
      method="post"
      onSubmit={handleLogin}
    >
      <Form>
        <FormField label={constants.username} id="username" name="username" type="text" />
        <FormField label={constants.password} id="password" name="password" type="password" />

        <Button type="submit">{constants.login}</Button>
      </Form>
    </Formik>
  );
}

export default Login;
