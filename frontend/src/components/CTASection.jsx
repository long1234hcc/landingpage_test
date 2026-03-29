// src/components/CTASection.jsx
import { ArrowRight } from 'lucide-react';

export default function CTASection() {
    return (
        <section className="bg-corporate-dark py-20">
            <div className="max-w-4xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    Sẵn sàng nâng cấp hệ thống của bạn?
                </h2>
                <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                    Đội ngũ chuyên gia của chúng tôi luôn sẵn sàng khảo sát và tư vấn giải pháp tối ưu nhất cho bài toán hạ tầng của doanh nghiệp.
                </p>
                <button className="bg-engineering-green hover:bg-emerald-600 text-white px-8 py-4 rounded-lg text-lg font-bold transition-all shadow-lg hover:shadow-xl flex items-center gap-2 mx-auto group">
                    Yêu cầu Tư vấn Kỹ thuật
                    <ArrowRight className="transform group-hover:translate-x-1 transition-transform" size={20} />
                </button>
            </div>
        </section>
    );
}