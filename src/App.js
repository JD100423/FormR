import FormSignUp from './Components/FormsignUp';
import './App.css';
import { Container } from '@mui/material';
import { Typography } from '@mui/material';

function App() {

  const handleSubmit = (valores) => {
    console.log('Appjs:', valores)
  }
  return (
    <Container component="section" maxWidth="sm">
    <Typography variant='h3' align='center' component="h1">Formulario de registro</Typography>
    <FormSignUp handleSubmit={handleSubmit}/>
    </Container>
  );
}

export default App;
