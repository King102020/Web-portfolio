import React from 'react';

const produceSpans = (text, animation) => {
  return text.split("").map((letter, index) => (
    <span
      key={index}
      className={`inline-block transform-style-3d origin-bottom ${animation}`}
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      {letter === " " ? "\u00A0" : letter}
    </span>
  ));
};

const Position = () => {
  return (
    <div className="relative cursor-default font-medium text-white text-[14px] xs:text-[18px] sm:text-[26px] md:text-[32px] 2xl:text-[62px] leading-[28px] 2xl:leading-[36px] w-full flex justify-center items-center">
      <div className="absolute inset-0 top-[-34px] sm:top-[-14px] lg:top-[-4px] flex flex-col">
        <div className="text first absolute left-1 md:left-2 2xl:left-4 flex" aria-label="Software Developer">
          {produceSpans("Software Developer", "animate-textRotate1")}
        </div>
        <div className="text second absolute left-1 md:left-2 2xl:left-4 flex" aria-label=" AI/ML Enthusiast">
          {produceSpans("AI/ML Enthusiast", "animate-textRotate2")}
        </div>
      </div>
    </div>
  );
};
export default Position;
