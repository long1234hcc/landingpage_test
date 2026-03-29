// src/pages/IndustriesPage.jsx
import CTASection from '../components/CTASection';
import { Building2, Factory, Droplets, Cpu } from 'lucide-react';

const industries = [
    {
        icon: Building2,
        title: "Hạ tầng Đô thị",
        description: "Cung cấp nước sạch và xử lý nước thải sinh hoạt cho các thành phố, khu dân cư lớn, đảm bảo chất lượng sống cho hàng triệu người dân."
    },
    {
        icon: Factory,
        title: "Công nghiệp Nặng",
        description: "Hệ thống xử lý nước thải phức tạp cho các nhà máy thép, dệt nhuộm, hóa chất, đáp ứng tiêu chuẩn xả thải khắt khe của Bộ TN&MT."
    },
    {
        icon: Cpu,
        title: "Công nghệ cao & Bán dẫn",
        description: "Hệ thống nước siêu tinh khiết (UPW) đáp ứng độ chính xác tuyệt đối cho quy trình sản xuất vi mạch điện tử và chất bán dẫn."
    },
    {
        icon: Droplets,
        title: "Thực phẩm & Đồ uống",
        description: "Lọc nước RO và tiệt trùng UV cường độ cao, đảm bảo nguồn nước đầu vào đạt chuẩn vệ sinh an toàn thực phẩm quốc tế."
    }
];

export default function IndustriesPage() {
    return (
        <main className="flex-grow bg-white animate-in fade-in duration-500">
            {/* Khối Banner Trang */}
            <div className="bg-corporate-dark text-white py-24">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Ngành nghề Ứng dụng</h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        HydroSys EPC cung cấp các giải pháp chuyên biệt, được tinh chỉnh hoàn hảo cho đặc thù của từng ngành công nghiệp và quy mô đô thị.
                    </p>
                </div>
            </div>

            {/* Khối Lưới Ngành nghề */}
            <section className="py-24 bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        {industries.map((ind, idx) => {
                            const Icon = ind.icon;
                            return (
                                <div key={idx} className="flex gap-6 p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow group">
                                    <div className="flex-shrink-0">
                                        <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center text-corporate-blue group-hover:bg-corporate-blue group-hover:text-white transition-colors">
                                            <Icon size={32} />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold text-corporate-dark mb-3">{ind.title}</h3>
                                        <p className="text-gray-600 leading-relaxed text-lg">{ind.description}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* TÁI SỬ DỤNG: Khối Gọi hành động */}
            <CTASection />
        </main>
    )
}