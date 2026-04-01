// src/components/FloatingContact.jsx
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';

export default function FloatingContact() {
    // Hàm cuộn mượt lên đầu trang
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className="fixed bottom-8 right-6 z-[90] flex flex-col gap-3">

            {/* Nút Chat/Zalo (Màu xanh Zalo) */}
            <button
                onClick={() => alert('Demo: Mở ứng dụng Zalo')}
                className="w-12 h-12 bg-[#0068FF] text-white rounded-full flex items-center justify-center shadow-lg hover:bg-blue-600 hover:-translate-y-1 transition-all group relative"
            >
                <MessageCircle size={22} />
                {/* Tooltip ẩn */}
                <span className="absolute right-14 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Chat Zalo
                </span>
            </button>

            {/* Nút Hotline (Màu cam nổi bật + Hiệu ứng rung) */}
            <button
                onClick={() => alert('Demo: Gọi Hotline 024 999 55 868')}
                className="w-12 h-12 bg-amber-500 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-amber-600 hover:-translate-y-1 transition-all animate-bounce group relative"
            >
                <Phone size={22} />
                <span className="absolute right-14 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Hotline 24/7
                </span>
            </button>

            {/* Nút Scroll to Top (Lên đầu trang) */}
            <button
                onClick={scrollToTop}
                className="w-12 h-12 bg-gray-200 text-gray-600 rounded-full flex items-center justify-center shadow-lg hover:bg-gray-300 transition-colors mt-2"
            >
                <ArrowUp size={22} />
            </button>

        </div>
    );
}