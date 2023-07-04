import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home";
import Details from "./components/Details";
import "../src/index.css";
function App() {
  const router = createBrowserRouter(createRoutesFromElements(
  
  <Route path="/" element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path="item/:id" element={<Details/>}/>
  </Route>));
  return <div className="App">

    <RouterProvider router={router}/>
  </div>;
}

export default App;
