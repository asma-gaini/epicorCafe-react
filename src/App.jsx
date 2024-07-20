import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Menu from "./features/menu/Menu";
import AppLayout from "./Ui/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [{ path: "/", element: <Menu /> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
