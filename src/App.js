import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import RequireAuth from "./components/requireAuth";
import PersistLogin from "./components/persistLogin";
import useSocketConnect from "./hooks/useSocketConnect";
import {
  SignupForm,
  LoginForm,
  Home,
  About,
  Members,
  Missing,
  HexTK,
  Hydroponics,
  SmartBin,
  GasMonitor,
  BMS,
} from "./pages";

function App() {
  useSocketConnect();
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
              <Route path="/hydroponics" element={<Hydroponics />} />
              <Route path="/smartbin" element={<SmartBin />} />
              <Route path="/gasmonitor" element={<GasMonitor />} />
              <Route path="/bms" element={<BMS />} />
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
