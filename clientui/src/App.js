import Header from './component/Header'
import Login from './Pages/Login'
import Registraion from './Pages/Registraion'
import { BrowserRouter, Route } from 'react-router-dom';
function App() {
  return (
    <>

      {/* <Login />
      <Registraion /> */}
      <BrowserRouter>
        <Header />

        <Route path='/login' component={Login} />
        <Route path='/registraion' component={Registraion} />
      </BrowserRouter>
    </>

  );
}

export default App;
