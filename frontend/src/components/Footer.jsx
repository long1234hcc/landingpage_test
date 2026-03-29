// src/components/Footer.jsx
import { Droplet } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-corporate-dark text-gray-300 py-12 border-t border-gray-800">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* Cột Logo */}
                <div className="col-span-1 md:col-span-2">
                    <Link to="/" className="flex items-center gap-2 text-white mb-4">
                        <Droplet size={28} className="text-engineering-green" />
                        <span className="text-2xl font-bold tracking-tight">HydroSys<span className="text-engineering-green">EPC</span></span>
                    </Link>
                    <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
                        Đơn vị hàng đầu về kỹ thuật, mua sắm vật tư và thi công các cơ sở hạ tầng xử lý nước tiên tiến. Cam kết giải pháp bền vững.
                    </p>
                </div>

                {/* Cột Công nghệ / Giải pháp */}
                <div>
                    <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Giải pháp</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/solutions" className="hover:text-engineering-green transition-colors">Xử lý Nước & Nước thải</Link></li>
                        <li><Link to="/solutions" className="hover:text-engineering-green transition-colors">Khử mặn (RO)</Link></li>
                        <li><Link to="/solutions" className="hover:text-engineering-green transition-colors">Số hóa & Giám sát IoT</Link></li>
                    </ul>
                </div>

                {/* Cột Điều hướng chính */}
                <div>
                    <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Khám phá</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link to="/" className="hover:text-engineering-green transition-colors">Trang chủ</Link></li>
                        <li><Link to="/industries" className="hover:text-engineering-green transition-colors">Ngành nghề Ứng dụng</Link></li>
                        <li><Link to="/portfolio" className="hover:text-engineering-green transition-colors">Hồ sơ Năng lực</Link></li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-gray-800 text-sm text-gray-500 flex justify-between items-center">
                <p>© 2026 HydroSys EPC. All rights reserved.</p>
            </div>
        </footer>
    );
}