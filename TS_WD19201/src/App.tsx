import { useRoutes } from "react-router-dom";
import Homepage from "./pages/Hompage";
import Detail from "./pages/Detail";
import NotFound from "./pages/NotFound";

 



//khai bao router
const routeConfig = [
  { 
    path: "", //url
    element: <Homepage /> //pages
  },
  { //router chi tiết
    path: "/products/:id", //url
    element: <Detail /> 
  },
  {
    path: "/admin", 
    children: [  //khai báo router con
      { path: "" },
      { path: "products" },
      { path: "users" }
    ]
  },
  { 
    path: "*", 
    element: <NotFound />
  },

];

function App() {
  const routes = useRoutes(routeConfig);

  return <div>{routes}</div>
}

export default App