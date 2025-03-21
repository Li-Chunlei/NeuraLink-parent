import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// 导入页面组件
import ImageGenPage from './pages/ImageGenPage';
import HealthManagerPage from './pages/HealthManagerPage';
import DailyReportPage from './pages/DailyReportPage';
import EmotionChartPage from './pages/EmotionChartPage';
import VoiceClonePage from './pages/VoiceClonePage';
import Layout from './components/Layout';

const App: React.FC = () => {
  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={<DailyReportPage />} />
          <Route path="/image-gen" element={<ImageGenPage />} />
          <Route path="/health-manager" element={<HealthManagerPage />} />
          <Route path="/daily-report" element={<DailyReportPage />} />
          <Route path="/emotion-chart" element={<EmotionChartPage />} />
          <Route path="/voice-clone" element={<VoiceClonePage />} />
        </Routes>
      </AnimatePresence>
    </Layout>
  );
};

export default App;