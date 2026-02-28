import Profile from "./Profile.jsx";
import Chat from "./Chat.jsx";

const Sidebar = () => {
  return (
    <div className="w-full h-full flex flex-col gap-4">
      <Profile className="h-[40vh]" />
      <Chat className="h-[60vh]" />
    </div>
  );
};

export default Sidebar;
