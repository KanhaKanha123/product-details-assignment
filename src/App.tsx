import { RouterProvider } from 'react-router-dom';
import { router } from './router/router';
import './App.css';
import { Header } from './components/header/header';

function App() {
  return (
    <div className="App">
      <Header />
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
};

export default App;
