import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/routes";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { Toaster } from "sonner";
import { PersistGate } from "redux-persist/integration/react";
import React from "react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RouterProvider router={router} />
        <Toaster duration={1800} position="top-center" />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
