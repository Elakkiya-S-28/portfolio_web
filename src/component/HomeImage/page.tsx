export default function HomeImage() {
  return (
    /* 
       1. Changed fixed w-[550px] to w-full.
       2. Used aspect-square to maintain a consistent shape.
       3. Added flex centering to make sure the image stays in the middle on mobile.
    */
    <div className="relative w-full h-full min-h-[300px] md:w-[550px] md:h-[520px] flex items-center justify-center overflow-hidden">

      {/* 
         IMAGE ADJUSTMENTS:
         - Mobile: w-[90%] (stays inside container), relative (centered), top-0
         - Desktop (md): w-[400px], absolute position with your specific offsets
      */}
      <img
        src="/Image/homeimage.png"
        alt="Profile"
        className="
          relative z-10 object-contain transition-transform duration-500 mr-12
          w-[85%] h-auto top-0            /* Mobile defaults */
          md:absolute md:w-[400px] md:top-25 md:right-15 /* Desktop overrides */
          group-hover:scale-105           /* Hover effect from parent group */
        "
      />

      {/* 
          DECORATIVE BACKGROUND ELEMENTS (Optional/Refined)
          If you want to keep the circle/background icons, 
          scale them down for mobile so they don't cause overflow.
      */}
      {/* <div className="absolute inset-0 flex items-center justify-center opacity-20 md:opacity-40">
        <div className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] rounded-full border-[10px] md:border-[15px] border-indigo-500/30" />
      </div> */}
    </div>
  );
}