// src/components/Certifications.jsx
import { Award, ShieldCheck, Leaf } from 'lucide-react';

export default function Certifications() {
    const certs = [
        {
            icon: Award,
            title: "ISO 9001:2015",
            desc: "Hệ thống Quản lý Chất lượng"
        },
        {
            icon: Leaf,
            title: "ISO 14001:2015",
            desc: "Hệ thống Quản lý Môi trường"
        },
        {
            icon: ShieldCheck,
            title: "ISO 45001:2018",
            desc: "An toàn & Sức khỏe Nghề nghiệp"
        }
    ];

    return (
        <section className="py-16 bg-gray-50 border-t border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-10">
                    <h2 className="text-2xl font-bold text-corporate-dark">Chứng nhận & Tiêu chuẩn Quốc tế</h2>
                    <p className="text-gray-600 mt-2">Cam kết chất lượng và an toàn tuyệt đối trong mọi dự án EPC</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {certs.map((cert, index) => {
                        const Icon = cert.icon;
                        return (
                            <div
                                key={index}
                                className="flex flex-col items-center text-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                            >
                                <div className="w-16 h-16 bg-emerald-50 text-engineering-green rounded-full flex items-center justify-center mb-4">
                                    <Icon size={32} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{cert.title}</h3>
                                <p className="text-sm text-gray-500">{cert.desc}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}