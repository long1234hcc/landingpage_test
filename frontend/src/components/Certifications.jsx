// src/components/Certifications.jsx
import { Award, ShieldCheck, Leaf } from 'lucide-react';

export default function Certifications() {
    const certs = [
        {
            title: "ISO 9001:2015",
            desc: "Hệ thống Quản lý Chất lượng",
            image: "https://plus.unsplash.com/premium_photo-1664475691319-488c3131ea17?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGNlcnRpZmljYXRpb25zfGVufDB8fDB8fHww"
        },
        {
            title: "ISO 14001:2015",
            desc: "Hệ thống Quản lý Môi trường",
            image: "https://media.istockphoto.com/id/2237025131/fr/photo/la-femme-daffaires-affiche-un-certificat-approuv%C3%A9-et-une-liste-de-contr%C3%B4le-en-ligne.webp?a=1&b=1&s=612x612&w=0&k=20&c=A6Q1D1gDmDW5gdkpWIZe9dhJ4QVFG7zWCPEwRYlmn1Y="
        },
        {
            title: "ISO 45001:2018",
            desc: "An toàn & Sức khỏe Nghề nghiệp",
            image: "https://media.istockphoto.com/id/1402948131/fr/photo/femme-daffaires-et-homme-daffaires-se-serrant-la-main-de-lautre-c%C3%B4t%C3%A9-de-la-table.webp?a=1&b=1&s=612x612&w=0&k=20&c=D3IZWyg5HOn_V35aec2Ydt6y9X4xaPwm81yoGYQAWoE="
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
                    {certs.map((cert, index) => (
                        <div
                            key={index}
                            className="flex flex-col bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow overflow-hidden"
                        >
                            {/* Ảnh chiếm phần trên, to và nổi bật */}
                            <div className="w-full h-48 overflow-hidden">
                                <img
                                    src={cert.image}
                                    alt={`Chứng nhận ${cert.title}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Text bên dưới */}
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{cert.title}</h3>
                                <p className="text-sm text-gray-500">{cert.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}