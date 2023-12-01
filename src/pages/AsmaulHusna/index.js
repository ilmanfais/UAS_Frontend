import React, { useEffect, useState } from 'react';

const AsmaulHusna = () => {
  const [asmaulHusnaList, setAsmaulHusnaList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAsmaulHusna = async () => {
      try {
        const response = await fetch('https://islamic-api-zhirrr.vercel.app/api/asmaulhusna');
        const data = await response.json();
        setAsmaulHusnaList(data.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Asmaul Husna data:', error);
        setLoading(false);
      }
    };

    fetchAsmaulHusna();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-xl">Loading...</p>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto mt-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Asmaul Husna</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
  {asmaulHusnaList.map((asma, index) => (
    <div key={index} className="bg-gradient-to-b from-white via-gray-300 to-white p-6 rounded-md shadow-md mb-6 hover:shadow-lg transition duration-300">
      <div className="text-lg font-semibold mb-2">{asma.index}. {asma.arabic}</div>
      <div className="text-gray-600 mb-2">
        <span className="font-semibold">Latin:</span> {asma.latin}
      </div>
      <div className="text-gray-600 mb-2">
        <span className="font-semibold">Translation (ID):</span> {asma.translation_id}
      </div>
      <div className="text-gray-600 mb-2">
        <span className="font-semibold">Translation (EN):</span> {asma.translation_en}
      </div>
    </div>
  ))}
</div>
    </div>
  );
};

export default AsmaulHusna;
