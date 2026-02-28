import { useState } from "react";
import { supabase } from "../util/supabase";
import { db } from "../util/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const Add = ({ isAdmin, setIsAdmin }) => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const ADMIN_ID = import.meta.env.VITE_ADMIN_ID;
  const ADMIN_PW = import.meta.env.VITE_ADMIN_PW;

  const [imageFile, setImageFile] = useState(null); // 파일 자체를 저장
  const [previewUrl, setPreviewUrl] = useState(""); // 미리보기용 URL
  const [copr, setCopr] = useState("");
  const [memo, setMemo] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      // 브라우저에서 미리보기를 볼 수 있게 임시 URL 생성
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleLogin = () => {
    if (id === ADMIN_ID && pw === ADMIN_PW) {
      alert("ログインしました。");
      setIsAdmin(true);
      // 세션 스토리지에 저장
      sessionStorage.setItem("isAdmin", "true");
    } else {
      alert("IDまたはパスワードが間違っています。");
    }
  };

  const handleAddDiary = async (e) => {
    e.preventDefault();
    if (!imageFile || !copr || !memo)
      return alert("이미지와 모든 정보를 입력해주세요!");

    try {
      // Supabase Storage에 업로드
      const fileExt = imageFile.name.split(".").pop();
      const fileName = `${Date.now()}.${fileExt}`;
      const filePath = `${fileName}`; // bucket 내부 경로

      const { data, error } = await supabase.storage
        .from("diary") // 설정한 버킷 이름
        .upload(filePath, imageFile);

      if (error) throw error;

      // 업로드된 파일의 공용 URL 가져오기
      const {
        data: { publicUrl },
      } = supabase.storage.from("diary").getPublicUrl(filePath);

      // Firestore에 정보 저장 (이미지 주소는 Supabase 것)
      await addDoc(collection(db, "diary"), {
        image: publicUrl,
        copr: copr,
        memo: memo,
        createdAt: serverTimestamp(),
      });

      alert("다이어리가 추가되었습니다!");
      setPreviewUrl("");
      setImageFile(null);
      setCopr("");
      setMemo("");
    } catch (err) {
      console.error("Error:", err.message);
      alert("업로드 실패!");
    }
  };

  if (!isAdmin) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center gap-10">
        <div className="font-nosutaru text-xl flex flex-col justify-center items-center">
          <p>このページは管理者向けです。</p>
          <p>ログインしてください。</p>
        </div>
        <div className="flex flex-col items-center justify-center gap-2">
          <input
            type="text"
            placeholder="ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="border border-[#371C4B] px-1 font-dunggeunmo"
          />
          <input
            type="password"
            placeholder="Password"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            className="border border-[#371C4B] px-1 font-dunggeunmo"
          />
          <button
            onClick={handleLogin}
            className="border border-[#897098] text-[#371C4B] text-sm p-0.5 px-2 hover:bg-[#371C4B] hover:text-white cursor-pointer"
          >
            ログイン
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-5 font-dunggeunmo text-[#371C4B]">
      <div className="w-full max-w-md bg-[#EFE7F5] border border-[#371C4B] p-6 flex flex-col gap-4 shadow-[4px_4px_0px_#371C4B]">
        <h2 className="text-xl font-bold font-nosutaru mb-2">
          New Diary Entry
        </h2>

        {/* 이미지 선택 및 미리보기 */}
        <div className="flex flex-col gap-1">
          <label className="text-sm">Image Upload</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="text-xs file:mr-4 file:py-1 file:px-2 file:border file:border-[#371C4B] file:bg-white file:text-[#371C4B] cursor-pointer"
          />
          {previewUrl && (
            <div className="mt-2 border border-[#371C4B] bg-white p-1">
              <img
                src={previewUrl}
                alt="Preview"
                className="w-full h-auto block"
              />
            </div>
          )}
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm">Copyright</label>
          <input
            type="text"
            value={copr}
            onChange={(e) => setCopr(e.target.value)}
            className="border border-[#371C4B] bg-white px-2 py-1 text-sm shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1)]"
            placeholder="© Your Name"
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm">Memo</label>
          <textarea
            value={memo}
            onChange={(e) => setMemo(e.target.value)}
            className="border border-[#371C4B] bg-white px-2 py-1 text-sm h-24 resize-none shadow-[inset_2px_2px_4px_rgba(0,0,0,0.1)]"
            placeholder="Enter memo..."
          />
        </div>

        <button
          onClick={handleAddDiary}
          className="mt-2 border border-[#371C4B] bg-[#371C4B] text-white font-nosutaru py-2 hover:bg-white hover:text-[#371C4B] transition-colors cursor-pointer"
        >
          Add to Diary
        </button>
      </div>
    </div>
  );
};

export default Add;
