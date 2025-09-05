import { RingLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="w-full h-full bg-black/80 absolute top-0 left-0 flex flex-col gap-1 items-center justify-center">
<RingLoader color="#90EE90" size={60} />
      <p className="text-white text-2xl font-bold tracking-widest speedMultiplier={1}
        loading={true}">
        Loading...
      </p>
    </div>
  );
};

export default Loading;