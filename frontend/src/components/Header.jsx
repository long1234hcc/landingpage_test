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

                <nav className="hidden md:flex gap-8">
                    <Link to="/solutions" className="font-semibold text-sm text-gray-600 hover:text-corporate-blue transition-colors">Giải pháp</Link>
                    <Link to="/industries" className="font-semibold text-sm text-gray-600 hover:text-corporate-blue transition-colors">Ngành nghề</Link>
                    <Link to="/portfolio" className="font-semibold text-sm text-gray-600 hover:text-corporate-blue transition-colors">Hồ sơ Dự án</Link>
                </nav>

                <div className="flex items-center gap-4">
                    {/* Nút 1: Gọi hàm mở Modal Bảo trì */}
                    <button
                        onClick={onOpenLoginModal}
                        className="text-sm font-semibold text-gray-600 hover:text-corporate-dark transition-colors"
                    >
                        Đăng nhập Khách hàng
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