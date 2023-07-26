import Header from './Components/Header';
import Body from './Components/Body';
import './App.css';
import { Provider } from 'react-redux';
import store from './Ulitis/store';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Maincontainer from './Components/Maincontainer';
import WatchPage from './Components/WatchPage';


const appRouter =createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[
   { path:"/",
     element:<Maincontainer/>
    }
    ,{
      path:"watch/:id",
      element:<WatchPage/>
    }

  ]

}])

function App() {
  return (
   <Provider store={store}>
  <Header/>
  <RouterProvider router={appRouter}/>
   </Provider>
  );
}

export default App;
