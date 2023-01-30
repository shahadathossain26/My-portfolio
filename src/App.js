import logo from './logo.svg';
import './App.css';
import Home from './Pages/Home/Home/Home';
import { RouterProvider } from 'react-router-dom';
import { router } from './Routes/Routes';

function App() {
  return (
    <div className="" style={{
      maxWidth: '1320px',
      margin: 'auto'
    }}>
      <RouterProvider router={router}>

      </RouterProvider>

    </div>
  );
}

export default App;
