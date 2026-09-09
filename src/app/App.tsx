import { RouterProvider } from "react-router";
import { router } from "./router";
import { ModalProvider } from "@/Context/ModalProvider";

const App = () => {
  return (
    <ModalProvider>
      <RouterProvider router={router} />
    </ModalProvider>
  );
};

export default App;
