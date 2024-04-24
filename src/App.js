import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import RequireAuth from "./components/requireAuth";
import PersistLogin from "./components/persistLogin";
import {
  SignupForm,
  LoginForm,
  Home,
  About,
  Members,
  Missing,
  HexTK,
} from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<PersistLogin />}>
            {/* Publically available */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/members" element={<Members />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/login" element={<LoginForm />} />

            {/* Private routes */}
            <Route element={<RequireAuth />}>
              <Route path="/hextk" element={<HexTK />} />
            </Route>
          </Route>

          {/* catch all */}
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
