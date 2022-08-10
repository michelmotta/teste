import React, {
  PropsWithChildren,
  ReactElement,
  useEffect,
  useLayoutEffect,
} from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import AppIndex from "./Pages/App";
import ConsultarRelatorio from "./Pages/ConsultarRelatorio";
import CreateUser from "./Pages/CreateUser";
import ExameEpidemio from "./Pages/ExameEpidemio";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import ResetPassword from "./Pages/ResetPassword";
import SocioEcon from "./Pages/SocioEcon";
import SocioEconForm from "./Pages/SocioEconForm";
import Users from "./Pages/Users";
import ProtectedRoutes from "./Security/ProtectedRoutes";
import { validateToken } from "./services/api/authServices";
import Locations from "./Pages/Locations";
import LocationsForm from "./Pages/LocationsForm";
import ExameEpidemioForm from "./Pages/ExameEpidemioForm";
import NotFound from "./Pages/NotFound";
import AdmOnly from "./Security/AdmOnly";
import CoordAndUp from "./Security/CoorAndUp";
import AssistAndUp from "./Security/AssistAndUp";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const isAuthenticated = false;

  async function verifyToken() {
    if (localStorage.getItem("user")) {
      try {
        const user = JSON.parse(localStorage.getItem("user")!);
        const res = await validateToken({ id: user.id, token: user.token });

        if (res.status === 401) {
          localStorage.removeItem("user");
          return;
        }
        if (res.status === 200) {
          localStorage.setItem(
            "user",
            JSON.stringify({
              id: user.id,
              name: user.name,
              email: user.email,
              role: user.role,
              token: res.data.token,
            })
          );
          return;
        }
      } catch (e) {
        localStorage.removeItem("user");
      }
      return;
    }
  }

  useEffect(() => {
    verifyToken();
  }, [isAuthenticated]);

  return (
    <div className="App">
      <ScrollToTop>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="not-found" element={<NotFound />} />
            <Route element={<ProtectedRoutes />}>
              <Route element={<AdmOnly />}>
                <Route path="app/locations" element={<Locations />} />
                <Route path="app/create-location" element={<LocationsForm />} />
              </Route>
              <Route element={<CoordAndUp />}>
                <Route path="app/create-user" element={<CreateUser />} />
                <Route path="app/users" element={<Users />} />
              </Route>
              <Route element={<AssistAndUp />}>
                <Route path="app/exame-epidemio" element={<ExameEpidemio />} />
                <Route
                  path="app/exame-epidemio-form"
                  element={<ExameEpidemioForm />}
                />
              </Route>
              <Route path="reset-password" element={<ResetPassword />} />
              <Route path="app" element={<AppIndex />} />
              <Route path="app/socio-econ" element={<SocioEcon />} />
              <Route path="app/socio-econ-form" element={<SocioEconForm />} />
              <Route
                path="app/consultar-relatorios"
                element={<ConsultarRelatorio />}
              />
            </Route>
          </Routes>
        </div>
        <Footer />
      </ScrollToTop>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover={false}
      />
    </div>
  );
}

function ScrollToTop(props: PropsWithChildren<{}>) {
  const location = useLocation();
  useLayoutEffect(() => {
    document.documentElement.scrollTo(0, 0);
  }, [location.pathname]);
  return props.children as ReactElement<any>;
}

export default App;
