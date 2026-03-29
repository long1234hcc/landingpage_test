// src/pages/SolutionsPage.jsx
import ServicesSection from '../components/ServicesSection';
import CTASection from '../components/CTASection';
import { Settings, Shield, Zap } from 'lucide-react';

export default function SolutionsPage() {
    return (
        <main className="flex-grow bg-white animate-in fade-in duration-500">
            {/* Khối Banner Trang */}
            <div className="bg-corporate-dark text-white py-24">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Giải pháp Công nghệ Nước Toàn diện</h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Áp dụng các công nghệ màng lọc tiên tiến và hệ thống điều khiển tự động hóa để giải quyết triệt để các thách thức về hạ tầng nước đô thị và công nghiệp.
                    </p>
                </div>
            </div>

            {/* TÁI SỬ DỤNG: Khối Lưới 4 Dịch vụ */}
            <ServicesSection />

            {/* Khối Cốt lõi Công nghệ (Làm trang trông sâu hơn) */}
            <section className="py-24 bg-gray-50 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-corporate-dark mb-4">Lợi thế Công nghệ của HydroSys</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <Zap className="text-engineering-green mb-6" size={40} />
                            <h3 className="text-xl font-bold text-corporate-dark mb-3">Tối ưu Năng lượng</h3>
                            <p className="text-gray-600">Thiết kế hệ thống bơm và màng lọc giảm thiểu tối đa điện năng tiêu thụ, hạ giá thành vận hành (OPEX).</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <Settings className="text-engineering-green mb-6" size={40} />
                            <h3 className="text-xl font-bold text-corporate-dark mb-3">Tự động hóa 100%</h3>
                            <p className="text-gray-600">Hệ thống SCADA hiện đại cho phép điều khiển, thu thập dữ liệu và cảnh báo rủi ro hoàn toàn từ xa.</p>
                        </div>
                        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                            <Shield className="text-engineering-green mb-6" size={40} />
                            <h3 className="text-xl font-bold text-corporate-dark mb-3">Tuổi thọ vượt trội</h3>
                            <p className="text-gray-600">Lựa chọn vật liệu chống ăn mòn và quy trình thi công nghiêm ngặt, đảm bảo công trình bền bỉ hàng chục năm.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* TÁI SỬ DỤNG: Khối Gọi hành động */}
            <CTASection />
        </main>
    );
}