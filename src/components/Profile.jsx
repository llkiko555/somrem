import profileImg from "../assets/profile.svg";

const Profile = () => {
  return (
    <div className="w-full bg-white border-2 border-[#897098] rounded-[10px]">
      {/* 상단 메뉴바 */}
      <div className="h-8 p-2 flex align-middle justify-end gap-2 bg-linear-to-b from-white from-5% via-[#CBC1D2] via-80% to-[#AA98B5] to-100% rounded-t-[10px] border-b-2 border-[#897098]">
        <p className="bg-[#AA98B5] p-2 inline text-sm rounded-full"> </p>
        <p className="bg-[#AA98B5] p-2 inline rounded-full"> </p>
        <p className="bg-[#AA98B5] p-2 inline rounded-full"> </p>
      </div>

      {/* 하단 프로필 내용 */}
      <div className="flex gap-4 px-6 py-4">
        <img src={profileImg} className="w-25"></img>
        <div className="text-[#371C4B] flex flex-col">
          <p className="font-dunggeunmo text-2xl py-2">@ satouremi</p>
          <p className="font-nosutaru text-base">働きたくない</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
