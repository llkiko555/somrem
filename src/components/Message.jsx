import som from "../assets/chat-som.svg";
import rem from "../assets/chat-rem.svg";

const Message = ({ who, text }) => {
  const isSom = who === "som";

  return (
    <div className={`w-full flex ${isSom ? "justify-start" : "justify-end"}`}>
      <div
        className={`flex items-start gap-3 max-w-[70%] ${isSom ? "flex-row" : "flex-row-reverse"}`}
      >
        <img
          src={isSom ? som : rem}
          alt={who}
          className="w-10 h-10 rounded-full shrink-0"
        />
        <p
          className={`font-nosutaru p-3 rounded-xl text-sm ${isSom ? "bg-[#D9CCE2]" : "bg-[#F3EFF6]"}`}
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export default Message;
