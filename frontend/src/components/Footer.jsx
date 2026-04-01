// src/components/Footer.jsx
import { Droplet, MapPin, Phone, Mail, Facebook, Linkedin, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-corporate-dark text-gray-300 py-16 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                {/* Cột 1: Thông tin công ty & Địa chỉ */}
                <div>
                    <Link to="/" className="flex items-center gap-2 text-white mb-6">
                        <Droplet size={32} className="text-engineering-green" />
                        <span className="text-2xl font-bold tracking-tight">HydroSys<span className="text-engineering-green">EPC</span></span>
                    </Link>
                    <div className="space-y-4 text-sm text-gray-400">
                        <div className="flex items-start gap-3">
                            <MapPin size={18} className="text-engineering-green flex-shrink-0 mt-0.5" />
                            <p>Tòa nhà Petrovietnam, số 1-5 Lê Duẩn, Phường Bến Nghé, Quận 1, TP. HCM</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <Phone size={18} className="text-engineering-green flex-shrink-0" />
                            <p>024 999 55 868</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <Mail size={18} className="text-engineering-green flex-shrink-0" />
                            <p>contact@hydrosys.com.vn</p>
                        </div>
                    </div>
                </div>

                {/* Cột 2: Giải pháp */}
                <div>
                    <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Năng lực cốt lõi</h4>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li><Link to="/industries" className="hover:text-engineering-green transition-colors">Xử lý Nước Đô thị</Link></li>
                        <li><Link to="/industries" className="hover:text-engineering-green transition-colors">Xử lý Nước Công nghiệp</Link></li>
                        <li><Link to="/certifications" className="hover:text-engineering-green transition-colors">Hệ thống Quản lý ISO</Link></li>
                        <li><Link to="/certifications" className="hover:text-engineering-green transition-colors">Hồ sơ Năng lực (PDF)</Link></li>
                    </ul>
                </div>

                {/* Cột 3: Khám phá */}
                <div>
                    <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Danh mục</h4>
                    <ul className="space-y-3 text-sm text-gray-400">
                        <li><Link to="/" className="hover:text-engineering-green transition-colors">Về chúng tôi</Link></li>
                        <li><Link to="/industries" className="hover:text-engineering-green transition-colors">Lĩnh vực ứng dụng</Link></li>
                        <li><Link to="/portfolio" className="hover:text-engineering-green transition-colors">Hồ sơ năng lực</Link></li>
                        <li><span className="cursor-pointer hover:text-engineering-green transition-colors">Tin tức & Sự kiện</span></li>
                    </ul>
                </div>

                {/* Cột 4: Đăng ký & Mạng xã hội */}
                <div>
                    <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Kết nối với chúng tôi</h4>
                    <p className="text-sm text-gray-400 mb-4">Để lại email để nhận thông tin mới nhất về công nghệ xử lý nước.</p>
                    {/* Form nhận tin (UI Mock) */}
                    <div className="flex gap-2 mb-6">
                        <input type="email" placeholder="Email của bạn..." className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-lg focus:outline-none focus:border-engineering-green text-sm text-white" />
                        <button className="bg-amber-500 hover:bg-amber-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors text-sm">Gửi</button>
                    </div>
                    {/* Icon Mạng xã hội */}
                    <div className="flex gap-3">
                        <span className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors text-white cursor-pointer"><Facebook size={18} /></span>
                        <span className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors text-white cursor-pointer"><Linkedin size={18} /></span>
                        <span className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-red-600 transition-colors text-white cursor-pointer"><Youtube size={18} /></span>
                    </div>
                </div>
            </div>

            {/* Bottom Bar: Copyright & Chính sách */}
            <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
                <p>© 2026 HydroSys EPC. All rights reserved. Design by B2B Team.</p>
                <div className="flex gap-6">
                    <span className="cursor-pointer hover:text-gray-300 transition-colors">Chính sách bảo mật</span>
                    <span className="cursor-pointer hover:text-gray-300 transition-colors">Điều khoản sử dụng</span>
                </div>
            </div>
        </footer>
    );
}