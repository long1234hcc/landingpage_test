// src/App.jsx
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import PortfolioPage from './pages/PortfolioPage'
import ProjectDetailPage from './pages/ProjectDetailPage'
import ConsultationModal from './components/ConsultationModal'
import SolutionsPage from './pages/SolutionsPage'
import IndustriesPage from './pages/IndustriesPage'
import NotFoundPage from './pages/NotFoundPage';
import LoginMaintenanceModal from './components/LoginMaintenanceModal'

function App() {
  // 2 CÔNG TẮC ĐIỀU KHIỂN TÁCH BIỆT
  const [isConsultOpen, setIsConsultOpen] = useState(false);
  const [isLoginMaintenOpen, setIsLoginMaintenOpen] = useState(false);

  return (
    <div className="font-sans min-h-screen flex flex-col bg-gray-50 text-gray-800 relative">

      {/* Truyền 2 hàm mở khác nhau xuống cho Header */}
      <Header
        onOpenConsultModal={() => setIsConsultOpen(true)}
        onOpenLoginModal={() => setIsLoginMaintenOpen(true)}
      />

      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />
          <Route path="/portfolio/:id" element={<ProjectDetailPage />} />
          <Route path="/solutions" element={<SolutionsPage />} />
          <Route path="/industries" element={<IndustriesPage />} />
          {/* CATCH-ALL ROUTE: Xử lý lỗi 404 */}
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>

      <Footer />

      {/* Modal 1: Form Tư vấn Kỹ thuật */}
      <ConsultationModal
        isOpen={isConsultOpen}
        onClose={() => setIsConsultOpen(false)}
      />

      {/* Modal 2: Thông báo bảo trì Đăng nhập */}
      <LoginMaintenanceModal
        isOpen={isLoginMaintenOpen}
        onClose={() => setIsLoginMaintenOpen(false)}
      />
    </div>
  )
}

export default App