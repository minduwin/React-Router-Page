import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import { RouteLayout } from "../layout/RouteLayout";
import Home from "../routes/Home";
import Steam from "../routes/Steam";
import Rog from "../routes/Rog";
import Retroid from '../routes/Retroid';
import Odin from '../routes/Odin';
import Switch from '../routes/Switch';

function App() {

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RouteLayout />}>
        <Route index element={<Home />}/>
        <Route path="Steam" element={<Steam />}/>
        <Route path="Rog" element={<Rog />}/>
        <Route path="Retroid" element={<Retroid />}/>
        <Route path="Odin" element={<Odin />}/>
        <Route path="Switch" element={<Switch />}/>
      </Route>
    )
  )

  return (
    <RouterProvider router={router}/>
  )
}

export default App
