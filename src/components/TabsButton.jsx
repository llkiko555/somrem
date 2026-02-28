import { Link } from "react-router-dom";

const TabsButton = ({ text, to }) => {
  return (
    <Link
      to={to}
      className="rounded-t-md text-xl lg:text-2xl border-2 border-[#897098] border-b-0 bg-linear-to-b from-[#CBC1D2] from-9% via-[#AA98B5] via-80% to-[#897098] to-100% w-30 md:py-1 py-0.5"
    >
      <p className="text-white font-dunggeunmo text-center">{text}</p>
    </Link>
  );
};

export default TabsButton;
