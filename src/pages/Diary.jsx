import { useState, useEffect } from "react";
import DiarySection from "../components/DiarySection";
import { diaryData } from "../util/diarydata";
import { db } from "../util/firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

const Diary = () => {
  const [dbDiaries, setDbDiaries] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "diary"), orderBy("createdAt", "desc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setDbDiaries(data);
    });
  });

  const allDiaries = [...dbDiaries, ...diaryData];

  return (
    <div className="h-full overflow-y-auto">
      <div className="columns-2 gap-5 space-y-4 p-5">
        {allDiaries.map((item, index) => (
          <div key={item.id || index} className="break-inside-avoid mb-4">
            <DiarySection img={item.image} copr={item.copr} memo={item.memo} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Diary;
