import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './layouts/Layout';
import './index.css';
import Register from './pages/Register';
import SignIn from './pages/SignIn';

function App() {

  return (

    <Router>
      <Routes>
        <Route path="/"
          element={<Layout>
            <p> Home Page</p>
          </Layout>} />

        <Route path="/search"
          element={<Layout>
            <p> Search Page</p>
          </Layout>} />

        <Route path='/register'
          element={<Layout>
            <Register/>
          </Layout> } />

         <Route path='/sign-in' 
         element={<Layout>
          <SignIn/>
         </Layout>}/> 
        <Route path="*" 
        element={<Navigate to="/"></Navigate>} />
      </Routes>
    </Router>


  )
}

export default App;
