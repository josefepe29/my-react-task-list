import { Suspense, lazy } from "react";
import { Header } from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyLoader from "./components/Loader";

const Login = lazy(() => import("./pages/Login"));
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const SignUp = lazy(() => import("./pages/SignUp"));
const Tasks = lazy(() => import("./pages/Tasks"));
const ProtectedRoute = lazy(() => import("./ProtectedRoute"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Suspense fallback={<MyLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/tasks" element={<Tasks />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
