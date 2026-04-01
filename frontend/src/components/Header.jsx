// src/components/Header.jsx
import { Droplet } from 'lucide-react'
import { Link } from 'react-router-dom'

// Nhận 2 hàm prop từ App.jsx truyền xuống
export default function Header({ onOpenConsultModal, onOpenLoginModal }) {
    return (
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">

                <Link to="/" className="flex items-center gap-2 text-corporate-dark hover:opacity-80 transition-opacity">
                    <Droplet size={32} strokeWidth={2.5} className="text-engineering-green" />
                    <span className="text-2xl font-bold tracking-tight">HydroSys<span className="text-engineering-green">EPC</span></span>
                </Link>

                <nav className="hidden lg:flex gap-8">
                    <Link to="/about" className="font-semibold text-sm text-gray-600 hover:text-corporate-blue transition-colors">Về chúng tôi</Link>
                    {/* <Link to="/solutions" className="font-semibold text-sm text-gray-600 hover:text-corporate-blue transition-colors">Giải pháp</Link> */}
                    <Link to="/industries" className="font-semibold text-sm text-gray-600 hover:text-corporate-blue transition-colors">Lĩnh vực</Link>
                    <Link to="/portfolio" className="font-semibold text-sm text-gray-600 hover:text-corporate-blue transition-colors">Dự án</Link>
                    <Link to="/news" className="font-semibold text-sm text-gray-600 hover:text-corporate-blue transition-colors">Tin tức</Link>
                    <Link to="/certifications" className="font-semibold text-sm text-gray-600 hover:text-corporate-blue transition-colors">Chứng nhận</Link>
                </nav>

                <div className="flex items-center gap-4">

                    {/* FAKE LANGUAGE SWITCHER */}
                    <div className="hidden md:flex items-center gap-2 text-xs font-bold text-gray-400 border-r border-gray-200 pr-4 mr-1">
                        <span className="text-corporate-blue cursor-pointer">VN</span>
                        <span>|</span>
                        <span className="hover:text-gray-700 cursor-pointer transition-colors" onClick={() => alert('Phiên bản tiếng Anh đang được cập nhật.')}>EN</span>
                    </div>

                    {/* Nút 1: Gọi hàm mở Modal Bảo trì */}
                    <button
                        onClick={onOpenLoginModal}
                        className="text-sm font-semibold text-gray-600 hover:text-corporate-dark transition-colors"
                    >
                        Đăng nhập
                    </button>

                    {/* Nút 2: Gọi hàm mở Form Tư vấn */}
                    <button
                        onClick={onOpenConsultModal}
                        className="bg-corporate-blue text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-corporate-dark transition-colors shadow-sm group"
                    >
                        Tư vấn Kỹ thuật
                    </button>
                </div>
            </div>
        </header>
    )
}