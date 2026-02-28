import deleteIcon from "../assets/icons/delete.svg";

const Comments = ({ id, text, date, showDelete, onDelete }) => {
  const formatDate = (timestamp) => {
    if (!timestamp) return "今";

    // Firestore Timestamp일 경우 .toDate()로 변환, 아니면 일반 Date 객체 사용
    const dateObj = timestamp.toDate ? timestamp.toDate() : new Date(timestamp);

    const yy = String(dateObj.getFullYear()).slice(-2);
    const mm = String(dateObj.getMonth() + 1).padStart(2, "0");
    const dd = String(dateObj.getDate()).padStart(2, "0");

    return `${yy}/${mm}/${dd}`;
  };

  return (
    <div className="flex flex-col w-full gap-1 font-dunggeunmo group">
      <div className="flex justify-between text-[#897098] text-sm px-2 lg:text-base">
        {/* 포맷팅된 날짜 출력 */}
        <p>{formatDate(date)}</p>
        <div className="flex items-center gap-2">
          <p>@ {id}</p>
          {showDelete && (
            <img
              src={deleteIcon}
              onClick={onDelete}
              className="cursor-pointer w-4 h-4"
              alt="delete"
              title="delete"
            />
          )}
        </div>
      </div>
      <div className="w-full rounded-[10px] bg-linear-to-b from-0% from-[#F0E8F6] via-80% via-[#DACCE3] to-100% to-[#C4B4CD] shadow-[inset_0_-4px_4px_rgba(0,0,0,0.25)] text-[#371C4B] text-base p-2 px-3 lg:text-xl lg:p-3 wrap-break-words">
        {text}
      </div>
    </div>
  );
};

export default Comments;
