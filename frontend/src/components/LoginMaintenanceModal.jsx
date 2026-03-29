// src/components/LoginMaintenanceModal.jsx
import { X, Settings, AlertTriangle } from 'lucide-react';

export default function LoginMaintenanceModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        // Lớp phủ đen mờ (Overlay)
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-4 bg-corporate-dark/80 backdrop-blur-sm animate-in fade-in duration-200">

            {/* Khối Modal */}
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden relative animate-in zoom-in duration-300">

                {/* Nút X để đóng */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
                >
                    <X size={20} />
                </button>

                <div className="p-8 text-center">
                    {/* Icon Cảnh báo thiết kế đẹp */}
                    <div className="w-20 h-20 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-amber-100 shadow-inner">
                        <Settings className="text-amber-500 animate-spin-slow" size={40} strokeWidth={1.5} />
                        <AlertTriangle className="text-amber-600 absolute bottom-6 right-6 bg-white rounded-full p-0.5" size={20} />
                    </div>

                    <h2 className="text-2xl font-bold text-corporate-dark mb-3">Hệ thống đang được nâng cấp</h2>

                    {/* Text được sửa lại cho chuyên nghiệp, lịch sự hơn */}
                    <p className="text-gray-600 mb-8 leading-relaxed">
                        Hệ thống **Portal giám sát SCADA** dành cho khách hàng đang được bảo trì định kỳ để nâng cao trải nghiệm và bảo mật. <br />
                        <span className="font-semibold text-corporate-blue">Tính năng này tạm thời không khả dụng trong thời gian demo.</span> <br />
                        Xin lỗi vì sự bất tiện này.
                    </p>

                    <button
                        onClick={onClose}
                        className="w-full bg-gray-100 text-gray-800 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                    >
                        Đã hiểu
                    </button>
                </div>
            </div>
        </div>
    );
}