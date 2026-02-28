import { useState, useEffect } from "react";
import { db } from "../util/firebase";
import {
  collection,
  addDoc,
  serverTimestamp,
  query,
  orderBy,
  onSnapshot,
  doc,
  deleteDoc,
} from "firebase/firestore";

import Comments from "../components/Comments";

const More = ({ isAdmin }) => {
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [comments, setComments] = useState([]);

  const handleSubmit = async () => {
    if (!author || !content) return alert("내용을 입력해주세요!");
    try {
      await addDoc(collection(db, "comments"), {
        author: author,
        content: content,
        createdAt: serverTimestamp(),
      });

      setAuthor("");
      setContent("");
      alert("댓글이 등록되었습니다!");
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const handleDelete = async (commentId) => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      try {
        // doc() 함수로 삭제할 문서의 참조 생성 -> deleteDoc으로 실행
        await deleteDoc(doc(db, "comments", commentId));
      } catch (e) {
        console.error("Error deleting document: ", e);
        alert("삭제 권한이 없거나 오류가 발생했습니다.");
      }
    }
  };

  useEffect(() => {
    // 최신순으로 정렬해서 실시간으로 가져오기
    const q = query(collection(db, "comments"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const commentData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setComments(commentData);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div className="w-full h-full flex flex-col items-center justify-between py-4">
      <div className="w-[95%] flex-1 overflow-y-auto flex flex-col gap-6">
        {comments.map((c) => (
          <Comments
            key={c.id}
            id={c.author}
            text={c.content}
            date={c.createdAt}
            showDelete={isAdmin}
            onDelete={() => handleDelete(c.id)}
          />
        ))}
      </div>

      <div className="w-[95%] bg-[#EFE7F5] border border-[#371C4B] p-2 flex flex-col gap-2">
        <div className="font-dunggeunmo">
          <span>ID: </span>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="shadow-[inset_4px_4px_4px_rgba(0,0,0,0.25)] bg-white px-2 text-[14px]"
          />
        </div>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="font-dunggeunmo p-2 resize-none bg-white shadow-[inset_4px_4px_4px_rgba(0,0,0,0.25)] text-[14px]"
          placeholder="コメントを入力してください。"
        />
        <div className="flex justify-end">
          <button
            onClick={handleSubmit}
            className="border border-[#897098] bg-white font-nosutaru text-[#371C4B] text-[12px] p-0.5 px-2 hover:bg-[#371C4B] hover:text-white cursor-pointer"
          >
            作成
          </button>
        </div>
      </div>
    </div>
  );
};

export default More;
