export default function HomeImage() {
  return (
    <div className="relative w-[550px] h-[520px] overflow-hidden">
      <span
        className="absolute top-5 left-5 text-[170px] text-[#F26B4F] select-none"
        style={{
          WebkitTextStroke: "3px #F26B4F",
          color: "transparent",
          opacity: 0.8,
        }}
      >
        &lt;
      </span>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[300px] h-[300px] rounded-full border-[15px] border-[#F26B4F] opacity-80 mask-b-from-5% mask-b-to-90%"></div>
      </div>

      <img
        src="/Image/homeimage.png"
        alt="Profile"
        className="absolute top-35 right-32 w-[400px] h-auto object-contain z-10"
      />
      <div className="relative">
        <span
          className="absolute top-70 left-105 text-[170px] text-[#F26B4F] border outline select-none"
          style={{
            WebkitTextStroke: "3px #F26B4F",
            color: "transparent",
            opacity: 0.8,
          }}
        >
          &gt;
        </span>
      </div>
    </div>
  );
}
