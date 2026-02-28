const DiarySection = ({ img, copr, memo }) => {
  return (
    <div className="w-full">
      <img src={img} className="border border-b-0  h-auto block" />
      <div className="font-dunggeunmo flex flex-col p-2 border">
        <p className="text-[11px] text-[#897098]">© {copr}</p>
        <p className="text-sm text-[#371C4B]">{memo}</p>
      </div>
    </div>
  );
};

export default DiarySection;
