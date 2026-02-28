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
        {/* Layout 컴포넌트로 감싸기 */}
        <Route path="/" element={<Layout />}>
          {/* 주소에 따라 Layout 안의 <Outlet /> 자리에 렌더링됨 */}
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
