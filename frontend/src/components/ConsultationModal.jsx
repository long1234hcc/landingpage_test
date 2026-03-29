// src/components/ConsultationModal.jsx
import { useState } from 'react';
import { X, Send, CheckCircle2 } from 'lucide-react';
import { submitContactForm } from '../services/api';

export default function ConsultationModal({ isOpen, onClose }) {
    // Quản lý dữ liệu người dùng nhập
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
    });

    // Quản lý trạng thái UI
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    // Nếu modal không mở, không render gì cả
    if (!isOpen) return null;

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await submitContactForm(formData);

            setIsSuccess(true);

            setTimeout(() => {
                setIsSuccess(false);
                setFormData({ name: '', email: '', phone: '', company: '', message: '' });
                onClose();
            }, 3000);

        } catch (error) {
            alert(error.message); // Hiển thị popup lỗi cơ bản nếu mạng rớt
        } finally {
            setIsSubmitting(false); // Xong xuôi thì tắt trạng thái loading
        }
    };

    return (
        // Lớp phủ đen mờ (Overlay)
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-corporate-dark/80 backdrop-blur-sm transition-opacity">

            {/* Khối Form (Nổi lên trên) */}
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden relative animate-in fade-in zoom-in duration-200">

                {/* Nút X để đóng Modal */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
                >
                    <X size={24} />
                </button>

                {/* Nội dung bên trong */}
                <div className="p-8">
                    <h2 className="text-2xl font-bold text-corporate-dark mb-2">Yêu cầu Tư vấn</h2>
                    <p className="text-gray-500 mb-6 text-sm">Vui lòng để lại thông tin, chuyên gia của chúng tôi sẽ liên hệ với bạn trong vòng 24h.</p>

                    {isSuccess ? (
                        // Màn hình Thành công
                        <div className="flex flex-col items-center justify-center py-10 text-center animate-in fade-in zoom-in">
                            <CheckCircle2 size={64} className="text-engineering-green mb-4" />
                            <h3 className="text-xl font-bold text-gray-800 mb-2">Đã gửi yêu cầu thành công!</h3>
                            <p className="text-gray-500">Cảm ơn bạn. Chúng tôi đã nhận được thông tin và sẽ phản hồi sớm nhất.</p>
                        </div>
                    ) : (
                        // Màn hình Điền Form
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Họ và Tên *</label>
                                    <input required type="text" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-corporate-blue outline-none" placeholder="VD: Nguyễn Văn A" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Số điện thoại *</label>
                                    <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-corporate-blue outline-none" placeholder="09xx..." />
                                </div>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                                    <input required type="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-corporate-blue outline-none" placeholder="email@congty.com" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Tên Tổ chức/Công ty</label>
                                    <input type="text" name="company" value={formData.company} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-corporate-blue outline-none" placeholder="Tùy chọn" />
                                </div>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Vấn đề cần tư vấn *</label>
                                <textarea required name="message" value={formData.message} onChange={handleChange} rows="3" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-corporate-blue outline-none resize-none" placeholder="Mô tả ngắn gọn hệ thống hoặc bài toán của bạn..."></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-corporate-blue text-white py-3 rounded-lg font-bold hover:bg-corporate-dark transition-colors flex items-center justify-center gap-2 disabled:bg-gray-400"
                            >
                                {isSubmitting ? (
                                    <>Đang gửi dữ liệu...</>
                                ) : (
                                    <>Gửi Yêu cầu <Send size={18} /></>
                                )}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
}