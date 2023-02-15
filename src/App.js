import './App.css';
import AddRecord from './pages/AddRecord';
// import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ShowTable from './pages/ShowTable';

const router = createBrowserRouter([
  {path: '/', element: <AddRecord />},
  {path: '/show', element: <ShowTable />}
])


function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
