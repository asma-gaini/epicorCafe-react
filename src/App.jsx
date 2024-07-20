import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainMenu from "./features/menu/MainMenu";
import AppLayout from "./Ui/AppLayout";

const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [{ path: "/", element: <MainMenu /> }],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
