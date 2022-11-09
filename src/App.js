import './App.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './route/Routs';
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="">
      <ToastContainer />
     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
