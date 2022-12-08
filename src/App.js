import { RouterProvider } from 'react-router-dom';
import { routes } from './router/routes';
import './styles/App.css';

function App() {
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
}

export default App;
