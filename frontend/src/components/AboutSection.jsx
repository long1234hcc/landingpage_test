// src/components/AboutSection.jsx
import { CheckCircle2 } from 'lucide-react';

export default function AboutSection() {
    const highlights = [
        "Hơn 25 năm kinh nghiệm tổng thầu EPC",
        "Áp dụng tiêu chuẩn chất lượng ISO 9001:2015",
        "Đội ngũ kỹ sư chuyên môn cao, am hiểu địa phương",
        "Cam kết phát triển bền vững và bảo vệ môi trường"
    ];

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    {/* Cột Hình ảnh */}
                    <div className="w-full lg:w-1/2 relative">
                        <div className="absolute inset-0 bg-corporate-blue translate-x-4 translate-y-4 rounded-2xl -z-10 opacity-20"></div>
                        <img
                            src="https://images.pexels.com/photos/2563700/pexels-photo-2563700.jpeg?auto=compress&cs=tinysrgb&w=800"
                            alt="Kỹ sư HydroSys làm việc"
                            className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
                        />
                    </div>

                    {/* Cột Nội dung */}
                    <div className="w-full lg:w-1/2">
                        <span className="text-engineering-green font-semibold uppercase tracking-wider text-sm">Về HydroSys EPC</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-corporate-dark mt-4 mb-6">
                            Đối tác tin cậy trong định hình hạ tầng nước tương lai
                        </h2>
                        <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                            Chúng tôi không chỉ xây dựng nhà máy nước, chúng tôi kiến tạo sự sống và bảo vệ tương lai. Với tư cách là nhà thầu EPC hàng đầu, HydroSys tự hào mang đến các giải pháp công nghệ kỹ thuật cao, giải quyết triệt để các thách thức về nguồn nước đô thị và công nghiệp tại khu vực.
                        </p>

                        <div className="space-y-4">
                            {highlights.map((item, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <CheckCircle2 className="text-engineering-green flex-shrink-0" size={24} />
                                    <span className="text-gray-800 font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}