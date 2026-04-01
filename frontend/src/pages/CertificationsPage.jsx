// src/pages/CertificationsPage.jsx
import CTASection from '../components/CTASection';
import PartnerLogos from '../components/PartnerLogos'; // Tái sử dụng Component Đối tác
import { Download, FileText, ShieldCheck } from 'lucide-react';

export default function CertificationsPage() {
    // Dữ liệu giả lập cho các chứng chỉ (Dùng ảnh giấy tờ/văn phòng từ Unsplash)
    const certificates = [
        {
            id: 1,
            title: "Chứng nhận ISO 9001:2015",
            desc: "Hệ thống Quản lý Chất lượng đạt chuẩn quốc tế trong tư vấn, thiết kế và thi công EPC.",
            image: "https://images.unsplash.com/photo-1589330694653-ded6df03f754?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2VydGlmaWNhdGlvbnN8ZW58MHx8MHx8fDA%3D"
        },
        {
            id: 2,
            title: "Chứng nhận ISO 14001:2015",
            desc: "Hệ thống Quản lý Môi trường, cam kết giảm thiểu tác động sinh thái trong mọi dự án.",
            image: "https://images.unsplash.com/photo-1648337564744-f919c7c2fc02?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2VydGlmaWNhdGlvbnN8ZW58MHx8MHx8fDA%3D"
        },
        {
            id: 3,
            title: "Chứng nhận ISO 45001:2018",
            desc: "Hệ thống Quản lý An toàn & Sức khỏe Nghề nghiệp, đảm bảo an toàn tuyệt đối tại công trường.",
            image: "https://plus.unsplash.com/premium_photo-1664475691319-488c3131ea17?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNlcnRpZmljYXRpb25zfGVufDB8fDB8fHww"
        },
        {
            id: 4,
            title: "Giấy phép Hoạt động Xây dựng",
            desc: "Giấy phép năng lực hoạt động xây dựng Hạng I do Bộ Xây dựng cấp phát.",
            image: "https://plus.unsplash.com/premium_photo-1726729274362-7337b32ff1bb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29uc3RydWN0aW9uJTIwcGVybWl0fGVufDB8fDB8fHww"
        }
    ];

    return (
        <main className="flex-grow bg-gray-50 animate-in fade-in duration-500">
            {/* Banner */}
            <div className="bg-corporate-dark text-white py-24 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Hồ sơ & Chứng chỉ</h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                        Năng lực pháp lý minh bạch và các tiêu chuẩn quốc tế khắt khe nhất là bảo chứng cho uy tín của HydroSys EPC.
                    </p>
                </div>
            </div>

            {/* Khối Tải Profile nổi bật */}
            <section className="py-12 bg-white border-b border-gray-200">
                <div className="max-w-4xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center justify-between bg-engineering-green/10 border border-engineering-green/20 p-8 rounded-2xl">
                        <div className="flex items-start gap-4 mb-6 md:mb-0">
                            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-engineering-green shadow-sm flex-shrink-0">
                                <FileText size={24} />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-corporate-dark mb-2">Hồ sơ Năng lực (Company Profile)</h3>
                                <p className="text-gray-600">Tài liệu giới thiệu chi tiết năng lực tài chính, nhân sự và công nghệ bản quyền (PDF, 5.2MB).</p>
                            </div>
                        </div>
                        <button
                            onClick={() => alert('Demo: Bắt đầu tải Profile_HydroSys_2026.pdf')}
                            className="flex-shrink-0 flex items-center gap-2 bg-corporate-blue text-white px-6 py-3 rounded-lg font-bold hover:bg-corporate-dark transition-colors shadow-md group"
                        >
                            <Download size={20} className="group-hover:-translate-y-1 transition-transform" />
                            Tải về ngay
                        </button>
                    </div>
                </div>
            </section>

            {/* Lưới hiển thị Chứng chỉ ISO */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex items-center gap-3 mb-12 justify-center">
                        <ShieldCheck className="text-engineering-green" size={32} />
                        <h2 className="text-3xl font-bold text-corporate-dark">Chứng nhận Hệ thống Quản lý</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {certificates.map((cert) => (
                            <div key={cert.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all group">
                                <div className="h-48 overflow-hidden relative border-b border-gray-100">
                                    <img
                                        src={cert.image}
                                        alt={cert.title}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100"
                                    />
                                    {/* Dấu mộc giả lập */}
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur p-2 rounded-full text-engineering-green shadow-sm">
                                        <ShieldCheck size={20} />
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-lg font-bold text-corporate-dark mb-3 line-clamp-2 group-hover:text-corporate-blue transition-colors">{cert.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{cert.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* TÁI SỬ DỤNG: Dải Logo Đối tác làm bảo chứng */}
            <div className="bg-white pt-8 pb-16">
                <PartnerLogos />
            </div>

            <CTASection />
        </main>
    );
}