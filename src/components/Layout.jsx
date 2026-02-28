import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import TopTabs from "./TopTabs";

const Layout = () => {
  return (
    <div className="min-h-screen flex lg:items-center lg:justify-center">
      {/* 전체 메인 박스 */}
      <div className=" flex flex-col lg:flex-row w-[90%] mx-auto gap-4 lg:h-[90vh]">
        {/* 좌측 */}
        <div className="w-full pt-10 lg:pt-0 lg:w-[40%] lg:h-full">
          <Sidebar />
        </div>

        {/* 우측 */}
        <div className="w-full lg:flex-1 pb-5 lg:pb-0">
          <TopTabs />
          <div className="lg:h-[85vh] h-[85vh] rounded-t-none bg-white rounded-[10px] md:rounded-tr-none border-3 border-[#897098]">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
