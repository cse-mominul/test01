import "./App.css";
import { RouterProvider } from "react-router-dom";
import routes from "./Route/Routes";

function App() {

  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
