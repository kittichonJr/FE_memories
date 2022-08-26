import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from "@material-ui/core";

import { GoogleOAuthProvider } from "@react-oauth/google";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";

const App = () => {
  return (
    <GoogleOAuthProvider clientId="822064271773-c4plmraqa8ujri7ta31thmsjvf277tei.apps.googleusercontent.com">
      <BrowserRouter>
        <Navbar />
        <Container maxWidth="lg">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </GoogleOAuthProvider>
  );
};

export default App;
