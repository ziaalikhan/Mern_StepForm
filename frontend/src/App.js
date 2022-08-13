import Form from './stepForm/Form';
import Users from './pages/Users';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={ <Form />} />
        <Route path='/users' element={ <Users />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
