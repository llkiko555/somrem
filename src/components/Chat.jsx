import backArrow from "../assets/icons/back-arrow.svg";
import faceTime from "../assets/icons/face-time.svg";
import call from "../assets/icons/call.svg";
import menu from "../assets/icons/menu.svg";
import send from "../assets/icons/send.svg";

import Message from "./Message";

const Chat = () => {
  return (
    <div className="w-full h-full bg-white border-2 border-[#897098] rounded-[10px] flex flex-col">
      {/* 상단 메뉴바 */}
      <div className="h-12 p-2 px-4 flex align-middle justify-between gap-2 bg-linear-to-b from-white from-5% via-[#CBC1D2] via-80% to-[#AA98B5] to-100% rounded-t-[10px] border-b-2 border-[#897098]">
        <div className="flex items-center gap-2">
          <img src={backArrow}></img>
          <p className="font-dunggeunmo text-3xl">SOMA</p>
        </div>
        <div className="flex gap-1">
          <img src={faceTime}></img>
          <img src={call}></img>
          <img src={menu}></img>
        </div>
      </div>

      {/* 채팅 내용 */}
      <div className="md:flex-1 flex flex-col gap-2 p-4 pb-10 h-auto overflow-y-auto">
        <Message who="som" text="起きた？" />
        <Message who="rem" text="ごめん！！ちょっと遅れるかも！" />
        <Message who="som" text="大丈夫。俺が早めに起きただけ。" />
        <Message who="som" text="そっち迎えに行くね" />
        <Message who="rem" text="₍ᐢ.ˬ.ᐡ₎ .ᐟ" />
      </div>

      {/* 메세지 입력란 */}
      <div className="shrink-0 rounded-b-[10px] border-t-2 border-[#897098] flex p-2 bg-[#E1D8E8] gap-2">
        <div className="bg-white rounded-full flex-1"></div>
        <img src={send} className="w-8"></img>
      </div>
    </div>
  );
};

export default Chat;
