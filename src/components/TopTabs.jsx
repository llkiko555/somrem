import TabsButton from "./TabsButton";

const TopTabs = () => {
  return (
    <div className="flex justify-end">
      <TabsButton text="Add" to="/add" />
      <TabsButton text="Diary" to="/diary" />
      <TabsButton text="Banners" to="/banners" />
      <TabsButton text="More" to="/more" />
    </div>
  );
};

export default TopTabs;
