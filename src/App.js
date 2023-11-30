import { Route, Routes } from "react-router-dom";
import CustomLink from "./components/CustomLink";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import News from "./pages/News";
import PrayerTime from "./pages/PrayerTime";
import Quran from "./pages/Quran";
import QuranAyat from "./pages/QuranAyat";
import Surah from "./pages/Surah";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route index element={<Home />} />
        <Route path="quran">
          <Route path=":surahNumber" element={<Surah />} />
          <Route path=":surahNumber/:ayahNumber" element={<QuranAyat />} />
          <Route index element={<Quran />} />
        </Route>
        <Route path="prayer" element={<PrayerTime />} />
        <Route path="berita" element={<News />} />
      </Routes>
    </Layout>
  );
};

export default App;
