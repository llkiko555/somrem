import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Layout from "./components/Layout";

import Add from "./pages/Add.jsx";
import Diary from "./pages/Diary.jsx";
import Banners from "./pages/Banners.jsx";
import More from "./pages/More.jsx";

function App() {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const loggedIn = sessionStorage.getItem("isAdmin");
    if (loggedIn === "true") setIsAdmin(true);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Diary />} />
          <Route
            path="add"
            element={<Add isAdmin={isAdmin} setIsAdmin={setIsAdmin} />}
          />
          <Route path="diary" element={<Diary />} />
          <Route path="banners" element={<Banners />} />
          <Route path="more" element={<More isAdmin={isAdmin} />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
