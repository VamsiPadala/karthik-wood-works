import React, { useState } from 'react';

const images = [
  "https://res.cloudinary.com/daaizwbdw/image/upload/v1759213101/IMG-20250929-WA0146_bttasb.jpg",
  "https://res.cloudinary.com/daaizwbdw/image/upload/v1759213101/IMG-20250929-WA0145_vlamzu.jpg",
  "https://res.cloudinary.com/daaizwbdw/image/upload/v1759213101/IMG-20250929-WA0147_aybj9p.jpg",
  "https://res.cloudinary.com/daaizwbdw/image/upload/v1759213102/IMG-20250929-WA0148_syoovc.jpg",
  "https://res.cloudinary.com/daaizwbdw/image/upload/v1759213102/IMG-20250929-WA0149_jialbp.jpg",
  "https://res.cloudinary.com/daaizwbdw/image/upload/v1759213105/IMG-20250929-WA0150_byrnt9.jpg",
  "https://res.cloudinary.com/daaizwbdw/image/upload/v1759213106/IMG-20250929-WA0151_pu6wri.jpg",
  "https://res.cloudinary.com/daaizwbdw/image/upload/v1759213106/IMG-20250929-WA0152_lpfkrr.jpg",
  "https://res.cloudinary.com/daaizwbdw/image/upload/v1759213106/IMG-20250929-WA0153_yfftnh.jpg",
  "https://res.cloudinary.com/daaizwbdw/image/upload/v1759213106/IMG-20250929-WA0154_cnojdu.jpg",
  "https://res.cloudinary.com/daaizwbdw/image/upload/v1759213085/IMG-20250929-WA0124_g3qyrx.jpg",
  "https://res.cloudinary.com/daaizwbdw/image/upload/v1759213085/IMG-20250929-WA0125_bvfxk7.jpg",
  "https://res.cloudinary.com/daaizwbdw/image/upload/v1759213087/IMG-20250929-WA0126_yo3xoa.jpg",
  "https://res.cloudinary.com/daaizwbdw/image/upload/v1759213090/IMG-20250929-WA0128_w2sjck.jpg",
  "https://res.cloudinary.com/daaizwbdw/image/upload/v1759213090/IMG-20250929-WA0129_iylehm.jpg",
  "https://res.cloudinary.com/daaizwbdw/image/upload/v1759213091/IMG-20250929-WA0130_wngceq.jpg",
  "https://res.cloudinary.com/daaizwbdw/image/upload/v1759213094/IMG-20250929-WA0133_f1vsd5.jpg",
  "https://res.cloudinary.com/daaizwbdw/image/upload/v1759213095/IMG-20250929-WA0137_ccxi2c.jpg",
  "https://res.cloudinary.com/daaizwbdw/image/upload/v1759213097/IMG-20250929-WA0142_p84jze.jpg",
  "https://res.cloudinary.com/daaizwbdw/image/upload/v1759213060/IMG-20250929-WA0074_laypgp.jpg",
  "https://res.cloudinary.com/daaizwbdw/image/upload/v1759213060/IMG-20250929-WA0079_pydzug.jpg",
  "https://res.cloudinary.com/daaizwbdw/image/upload/v1759213065/IMG-20250929-WA0083_ffhigq.jpg",
  "https://res.cloudinary.com/daaizwbdw/image/upload/v1759213065/IMG-20250929-WA0085_i9cg9i.jpg",
  "https://res.cloudinary.com/daaizwbdw/image/upload/v1759213066/IMG-20250929-WA0088_ddgx7y.jpg",
  "https://res.cloudinary.com/daaizwbdw/image/upload/v1759213070/IMG-20250929-WA0093_b3ocre.jpg",
  "https://res.cloudinary.com/daaizwbdw/image/upload/v1759213054/IMG-20250929-WA0070_pf3chd.jpg",
  "https://res.cloudinary.com/daaizwbdw/image/upload/v1759213050/IMG-20250929-WA0060_jiwyq6.jpg",
  "https://res.cloudinary.com/daaizwbdw/image/upload/v1759213041/IMG-20250929-WA0031_tsxrgk.jpg",
  "https://res.cloudinary.com/daaizwbdw/image/upload/v1759213042/IMG-20250929-WA0042_xykqm5.jpg",
  "https://res.cloudinary.com/daaizwbdw/image/upload/v1759213045/IMG-20250929-WA0054_bdjdcr.jpg",
  "https://res.cloudinary.com/daaizwbdw/image/upload/v1759213053/IMG-20250929-WA0062_fndgpc.jpg"
];

export default function Gallery() {
  const [showAll, setShowAll] = useState(false);
  const previewCount = 8;
  const visibleImages = showAll ? images : images.slice(0, previewCount);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-zinc-900 py-12 px-4">
      <h1 className="text-3xl font-bold text-center mb-10 text-amber-700">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {visibleImages.map((src, idx) => (
          <div key={idx} className="overflow-hidden rounded-lg shadow-lg bg-white dark:bg-zinc-800">
            <img src={src} alt={`Gallery ${idx + 1}`} className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300" loading="lazy" />
          </div>
        ))}
      </div>
      {!showAll && images.length > previewCount && (
        <div className="flex justify-center mt-10">
          <button
            className="px-8 py-3 rounded-lg bg-amber-700 text-white font-semibold text-lg shadow hover:bg-amber-800 transition-colors"
            onClick={() => setShowAll(true)}
          >
            View More
          </button>
        </div>
      )}
    </div>
  );
}
