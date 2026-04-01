// src/pages/AboutPage.jsx
import AboutSection from '../components/AboutSection';
import Certifications from '../components/Certifications';
import CTASection from '../components/CTASection';
import { Target, Compass, Download } from 'lucide-react'; // Import thêm Icon

export default function AboutPage() {
    // Dữ liệu giả lập cho Lịch sử phát triển
    const timeline = [
        {
            year: "2010",
            title: "Khởi nguồn",
            desc: "HydroSys EPC được thành lập bởi đội ngũ kỹ sư nòng cốt chuyên ngành Kỹ thuật Môi trường, với khát vọng giải quyết bài toán nước sạch tại các KCN."
        },
        {
            year: "2015",
            title: "Dự án quy mô lớn đầu tiên",
            desc: "Khẳng định năng lực qua việc trúng thầu dự án Nhà máy nước sạch đô thị công suất 50.000 m³/ngày, mở ra kỷ nguyên phát triển mạnh mẽ."
        },
        {
            year: "2020",
            title: "Tiên phong Chuyển đổi số",
            desc: "Thành lập trung tâm R&D, tích hợp thành công hệ thống SCADA và IoT vào quản lý vận hành từ xa cho các trạm bơm chống ngập."
        },
        {
            year: "2026",
            title: "Khẳng định Vị thế",
            desc: "Đạt mốc 2.4 triệu m³/ngày tổng công suất lắp đặt. Trở thành đối tác chiến lược của các tập đoàn đa quốc gia tại Việt Nam."
        }
    ];

    return (
        <main className="flex-grow bg-white animate-in fade-in duration-500">
            {/* Khối 1: Banner */}
            <div className="bg-corporate-dark text-white py-24 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Về HydroSys EPC</h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Hơn một thập kỷ kiến tạo những công trình hạ tầng nước bền vững, đồng hành cùng sự phát triển của các đô thị và nền công nghiệp Việt Nam.
                    </p>
                </div>
            </div>

            {/* Khối 2: Tái sử dụng khối Giới thiệu & Chứng chỉ */}
            <AboutSection />

            {/* Khối 3: LỊCH SỬ HÌNH THÀNH (Bổ sung mới - Timeline Dọc) */}
            <section className="py-24 bg-gray-50 border-t border-gray-200">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <span className="text-engineering-green font-semibold uppercase tracking-wider text-sm">Hành trình vươn lên</span>
                        <h2 className="text-3xl font-bold text-corporate-dark mt-2 mb-4">Lịch sử Phát triển</h2>
                        <p className="text-gray-600">Những cột mốc quan trọng định hình thương hiệu HydroSys EPC trên bản đồ công nghệ môi trường.</p>
                    </div>

                    {/* Trục Timeline */}
                    <div className="relative border-l-2 border-engineering-green/30 ml-3 md:ml-6 space-y-12">
                        {timeline.map((item, index) => (
                            <div key={index} className="relative pl-10 md:pl-12 group">
                                {/* Dấu chấm (Dot) trên trục */}
                                <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-engineering-green ring-4 ring-emerald-50 group-hover:scale-125 transition-transform duration-300"></div>

                                {/* Nội dung */}
                                <h3 className="text-xl font-bold text-corporate-dark mb-2 flex flex-col md:flex-row md:items-center gap-1 md:gap-4">
                                    <span className="text-engineering-green text-2xl">{item.year}</span>
                                    <span className="text-gray-300 hidden md:inline">|</span>
                                    <span>{item.title}</span>
                                </h3>
                                <p className="text-gray-600 leading-relaxed bg-white p-4 rounded-lg shadow-sm border border-gray-100">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Certifications />

            {/* Khối 4: TẦM NHÌN, SỨ MỆNH & NÚT TẢI PDF (Được thiết kế lại ngầu hơn) */}
            <section className="py-24 bg-corporate-dark text-white relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                        {/* Tầm nhìn */}
                        <div className="bg-white/5 p-10 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                            <Compass className="text-engineering-green mb-6" size={48} strokeWidth={1.5} />
                            <h3 className="text-2xl font-bold mb-4">Tầm nhìn</h3>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                Trở thành tổng thầu EPC số 1 Đông Nam Á trong lĩnh vực công nghệ xử lý nước và môi trường vào năm 2030.
                            </p>
                        </div>

                        {/* Sứ mệnh */}
                        <div className="bg-white/5 p-10 rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
                            <Target className="text-engineering-green mb-6" size={48} strokeWidth={1.5} />
                            <h3 className="text-2xl font-bold mb-4">Sứ mệnh</h3>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                Cung cấp giải pháp tối ưu hóa tài nguyên nước, bảo vệ môi trường sinh thái và mang lại giá trị vĩnh cửu cho cộng đồng.
                            </p>
                        </div>

                        {/* Nút Call to Action (Download) */}
                        <div className="flex flex-col justify-center items-start lg:items-center text-left lg:text-center p-8 bg-corporate-blue/20 rounded-2xl border border-corporate-blue/30">
                            <h3 className="text-2xl font-bold mb-4 text-white">Hồ sơ Năng lực</h3>
                            <p className="text-gray-300 mb-8">
                                Tải xuống tài liệu PDF (5MB) để xem chi tiết các dự án và công nghệ bản quyền của chúng tôi.
                            </p>
                            <a
                                href="#"
                                onClick={(e) => {
                                    e.preventDefault();
                                    alert("Bản demo: Đang tải xuống file Profile_HydroSys_2026.pdf...");
                                }}
                                className="flex items-center gap-3 bg-engineering-green hover:bg-emerald-600 text-white px-8 py-4 rounded-lg font-bold transition-all shadow-lg hover:shadow-xl group w-full justify-center lg:w-auto"
                            >
                                <Download size={20} className="group-hover:-translate-y-1 transition-transform" />
                                Tải Profile Công ty
                            </a>
                        </div>

                    </div>
                </div>
            </section>

            <CTASection />
        </main>
    );
}