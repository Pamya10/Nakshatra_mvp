import React from 'react';
import CompareImage from 'react-compare-image';

const BeforeAfterSlider = ({ beforeImage, afterImage, title }) => {
  return (
    <div className="w-full">
      {title && (
        <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">
          {title}
        </h3>
      )}
      <div className="rounded-xl overflow-hidden shadow-2xl">
        <CompareImage
          leftImage={beforeImage}
          rightImage={afterImage}
          sliderLineColor="#047C74"
          sliderLineWidth={3}
          handleSize={40}
          hover={true}
        />
      </div>
      <div className="flex justify-between mt-4 text-sm text-gray-600">
        <span className="bg-gray-100 px-4 py-2 rounded-lg">← Before</span>
        <span className="bg-[#047C74] text-white px-4 py-2 rounded-lg">After →</span>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
