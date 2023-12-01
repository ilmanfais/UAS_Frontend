import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import PrayerTime from "./pages/PrayerTime";
import Quran from "./pages/Quran";
import QuranAyat from "./pages/QuranAyat";
import Surah from "./pages/Surah";
import AboutUs from "./pages/About";


const App = () => {
  return (
    <Layout>
      <Routes>
        <Route index element={<Home />} />
        <Route index element={<AboutUs/>} />
        <Route path="quran">
          <Route path=":surahNumber" element={<Surah />} />
          <Route path=":surahNumber/:ayahNumber" element={<QuranAyat />} />
          <Route index element={<Quran />} />
        </Route>
        <Route path="prayer" element={<PrayerTime />} />
        <Route path="about" element={<AboutUs />} />
      </Routes>
    </Layout>
  );
};

export default App;
