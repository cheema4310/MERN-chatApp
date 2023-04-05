import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import Home from "./pages/Home";
import Chat from "./pages/Chat";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Feedback from "./pages/Feedback";
import NotFound from "./pages/NotFound";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Chat />} path="/chat" />
        <Route element={<Login />} path="/login" />
        <Route element={<Register />} path="/register" />
        <Route element={<Feedback />} path="/feedback" />
        <Route element={<NotFound />} path="*" />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
