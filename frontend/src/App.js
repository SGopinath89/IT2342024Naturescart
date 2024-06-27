import { BrowserRouter , Route, Routes } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { LinkContainer } from 'react-router-bootstrap';

function App() {
  return (
    <BrowserRouter>
      <div className='d-flex flex-column site-container'>
        <header>
           <Navbar className='navbar-custom' variant='dark'>
            <Container>
              <LinkContainer to = '/'>
                <Navbar.Brand> Nature's Cart </Navbar.Brand>
              </LinkContainer>
            </Container>
          </Navbar>
        </header>
        <main> 
          <Container className='mt-3'>
          <Routes>
            <Route path='/product/:slug' element={<ProductScreen />} />
            <Route path='/' element={<HomeScreen />} />
          </Routes> 
          </Container>
        </main>
        <footer className="footer">
          <div className='text-center'> All rights reserved </div>
        </footer>
      </div> 
    </BrowserRouter>
  );
}

export default App;
