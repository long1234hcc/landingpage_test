// src/pages/IndustriesPage.jsx
import CTASection from '../components/CTASection';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const industries = [
    {
        title: "Hạ tầng Đô thị",
        description: "Giải pháp toàn diện cung cấp nước sạch và xử lý nước thải sinh hoạt cho các siêu đô thị, đảm bảo chất lượng sống cho hàng triệu người dân và đáp ứng quy hoạch phát triển dài hạn.",
        points: ["Nhà máy xử lý nước mặt/nước ngầm", "Mạng lưới đường ống phân phối", "Trạm bơm tăng áp thông minh", "Nhà máy xử lý nước thải tập trung"],
        image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        reverse: false // Ảnh bên Trái, Text bên Phải
    },
    {
        title: "Công nghiệp Nặng",
        description: "Hệ thống xử lý nước thải phức tạp cho các nhà máy thép, hóa chất, xi mạ. Chúng tôi cam kết chất lượng nước đầu ra luôn tuân thủ các tiêu chuẩn xả thải khắt khe nhất của Bộ TN&MT.",
        points: ["Xử lý nước thải chứa kim loại nặng", "Hệ thống không xả thải (ZLD)", "Thu hồi và tái sử dụng hóa chất", "Kiểm soát mùi và khí thải độc hại"],
        image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        reverse: true // Text bên Trái, Ảnh bên Phải
    },
    {
        title: "Công nghệ cao & Bán dẫn",
        description: "Chuyên cung cấp hệ thống nước siêu tinh khiết (Ultra-Pure Water - UPW) đáp ứng độ chính xác tuyệt đối, loại bỏ các hạt vi phân mức Nano phục vụ quy trình sản xuất vi mạch điện tử.",
        points: ["Hệ thống màng lọc RO/DI/EDI", "Tiệt trùng UV tia cực tím", "Hệ thống đường ống vi sinh (Sanitary)", "Giám sát chất lượng nước Real-time"],
        image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        reverse: false // Ảnh bên Trái, Text bên Phải
    },
    {
        title: "Thực phẩm & Đồ uống (F&B)",
        description: "Công nghệ màng lọc và tiệt trùng tiên tiến, đảm bảo nguồn nước đầu vào đạt chuẩn vệ sinh an toàn thực phẩm quốc tế (FDA, ISO 22000), giữ nguyên hương vị và chất lượng sản phẩm.",
        points: ["Lọc nước cấp cho dây chuyền F&B", "Hệ thống CIP (Clean-in-Place)", "Xử lý nước thải hữu cơ BOD/COD cao", "Thu hồi năng lượng sinh khối (Biogas)"],
        image: "https://images.unsplash.com/photo-1615810145229-eeb5fcb1f1df?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
        reverse: true // Text bên Trái, Ảnh bên Phải
    }
];

export default function IndustriesPage() {
    return (
        <main className="flex-grow bg-white animate-in fade-in duration-500">
            {/* Banner Mở đầu */}
            <div className="bg-corporate-dark text-white py-24 relative overflow-hidden">
                <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] bg-cover bg-center mix-blend-overlay"></div>
                <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Ngành nghề Ứng dụng</h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Mỗi ngành công nghiệp mang một đặc thù riêng. HydroSys EPC thiết kế và tinh chỉnh công nghệ để giải quyết chính xác bài toán của từng khách hàng.
                    </p>
                </div>
            </div>

            {/* Z-PATTERN SECTIONS */}
            <section className="bg-white">
                {industries.map((ind, idx) => (
                    // Mỗi khối sẽ luân phiên màu nền Trắng - Xám nhạt
                    <div key={idx} className={`py-20 md:py-32 ${idx % 2 !== 0 ? 'bg-gray-50' : 'bg-white'}`}>
                        <div className="max-w-7xl mx-auto px-6">

                            {/* Khối Grid 2 cột: Đảo chiều dựa trên biến 'reverse' */}
                            <div className={`flex flex-col gap-12 lg:gap-20 items-center ${ind.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>

                                {/* Cột Ảnh (Chiếm 5 phần) */}
                                <div className="w-full lg:w-5/12 group perspective">
                                    <div className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-100 group-hover:shadow-2xl transition-all duration-500">
                                        <img
                                            src={ind.image}
                                            alt={ind.title}
                                            className="w-full h-[350px] md:h-[450px] object-cover hover:scale-105 transition-transform duration-700"
                                        />
                                        {/* Overlay viền xanh chìm */}
                                        <div className="absolute inset-0 border-4 border-transparent group-hover:border-engineering-green/30 rounded-2xl transition-colors duration-500 pointer-events-none"></div>
                                    </div>
                                </div>

                                {/* Cột Nội dung (Chiếm 7 phần) */}
                                <div className="w-full lg:w-7/12">
                                    <div className="flex items-center gap-3 mb-4">
                                        <span className="w-10 h-1 bg-engineering-green inline-block"></span>
                                        <span className="text-sm font-bold text-gray-400 uppercase tracking-widest">Ngành mũi nhọn {idx + 1}</span>
                                    </div>

                                    <h2 className="text-3xl md:text-4xl font-bold text-corporate-dark mb-6 leading-tight">
                                        {ind.title}
                                    </h2>

                                    <p className="text-xl text-gray-600 leading-relaxed mb-8">
                                        {ind.description}
                                    </p>

                                    {/* Bullet Points */}
                                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                                        {ind.points.map((point, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <CheckCircle2 className="text-engineering-green flex-shrink-0 mt-1" size={20} />
                                                <span className="text-gray-700 font-medium">{point}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    {/* Nút Xem Dự Án (Link về Portfolio) */}
                                    <Link
                                        to="/portfolio"
                                        className="inline-flex items-center gap-2 text-corporate-blue font-bold hover:text-engineering-green transition-colors group"
                                    >
                                        Xem các dự án {ind.title} đã triển khai
                                        <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                                    </Link>
                                </div>

                            </div>
                        </div>
                    </div>
                ))}
            </section>

            <CTASection />
        </main>
    )
}