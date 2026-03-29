// src/components/ServicesSection.jsx
import { Droplet, Activity, ShieldCheck, Globe } from 'lucide-react';

// Dữ liệu tĩnh giới thiệu 4 mảng dịch vụ chính
const services = [
    {
        icon: Droplet,
        title: "Xử lý Nước & Nước thải",
        description: "Thiết kế và thi công hệ thống xử lý nước sinh hoạt, nước thải công nghiệp đạt chuẩn môi trường khắt khe nhất."
    },
    {
        icon: Globe,
        title: "Khử mặn & Lọc màng (RO)",
        description: "Giải pháp công nghệ màng lọc tiên tiến giúp chuyển hóa nước biển và nước lợ thành nguồn nước sạch bền vững."
    },
    {
        icon: Activity,
        title: "Số hóa & Giám sát IoT",
        description: "Tích hợp cảm biến và phần mềm SCADA để theo dõi lưu lượng, chất lượng nước theo thời gian thực."
    },
    {
        icon: ShieldCheck,
        title: "Vận hành & Bảo trì (O&M)",
        description: "Dịch vụ bảo dưỡng định kỳ và vận hành trọn gói, đảm bảo hiệu suất tối đa cho các công trình hạ tầng."
    }
];

export default function ServicesSection() {
    return (
        <section className="py-24 bg-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6">

                {/* Phần Tiêu đề căn giữa */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <span className="text-engineering-green font-semibold uppercase tracking-wider text-sm">Giải pháp Cốt lõi</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-corporate-dark mt-4 mb-4">
                        Năng lực Kỹ thuật Toàn diện
                    </h2>
                    <p className="text-gray-600 text-lg">
                        Cung cấp chuỗi giá trị khép kín từ khâu tư vấn thiết kế, thi công EPC đến vận hành chuyển giao công nghệ cho mọi dự án hạ tầng.
                    </p>
                </div>

                {/* Lưới 4 Dịch vụ */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <div
                                key={index}
                                className="bg-gray-50 border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-all hover:-translate-y-1 group cursor-default"
                            >
                                {/* Icon có hiệu ứng đổi màu khi hover */}
                                <div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:bg-corporate-blue transition-colors">
                                    <Icon className="text-corporate-blue group-hover:text-white transition-colors" size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-corporate-dark mb-3">{service.title}</h3>
                                <p className="text-gray-600 leading-relaxed text-sm">{service.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}