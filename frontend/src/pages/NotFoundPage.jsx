// src/pages/NotFoundPage.jsx
import { Link } from 'react-router-dom';
import { AlertCircle, Home } from 'lucide-react';

export default function NotFoundPage() {
    return (
        <main className="flex-grow flex items-center justify-center bg-gray-50 py-24 animate-in fade-in duration-500">
            <div className="text-center px-6 max-w-lg mx-auto">
                <div className="w-24 h-24 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-sm">
                    <AlertCircle size={48} strokeWidth={1.5} />
                </div>
                <h1 className="text-7xl font-bold text-corporate-dark mb-4 tracking-tighter">404</h1>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Đường ống này không tồn tại!</h2>
                <p className="text-gray-600 mb-10 text-lg">
                    Có vẻ như bạn đã truy cập vào một liên kết bị hỏng hoặc trang này đã được di dời. Đừng lo lắng, hãy quay lại trang chủ để tiếp tục khám phá các giải pháp của chúng tôi.
                </p>
                <Link
                    to="/"
                    className="inline-flex items-center gap-2 bg-corporate-blue text-white px-8 py-4 rounded-lg font-bold hover:bg-corporate-dark transition-colors shadow-md"
                >
                    <Home size={20} />
                    Về Trang Chủ
                </Link>
            </div>
        </main>
    );
}