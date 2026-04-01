// src/pages/NewsPage.jsx
import CTASection from '../components/CTASection';
import { Calendar, ArrowRight } from 'lucide-react';

export default function NewsPage() {
    // Dữ liệu tin tức giả lập
    const newsItems = [
        {
            id: 1,
            title: "HydroSys ký kết hợp đồng EPC Nhà máy xử lý nước thải KCN Nam Tiền Phong",
            date: "15/03/2026",
            desc: "Dự án có công suất thiết kế 20.000 m3/ngày đêm, áp dụng công nghệ MBR tiên tiến nhất hiện nay...",
            image: "https://media.istockphoto.com/id/2224111954/fr/photo/homme-signant-un-acte-lors-de-lachat-dune-maison.webp?a=1&b=1&s=612x612&w=0&k=20&c=wC39TCISIhkUt8jW4h0MS_SgYV9KthoZ0oMdm7qmcQo="
        },
        {
            id: 2,
            title: "Lễ khánh thành Trạm bơm tăng áp và bể chứa nước sạch thông minh",
            date: "02/03/2026",
            desc: "Hệ thống tích hợp hoàn toàn SCADA cho phép điều khiển tự động 100%, giảm 15% điện năng tiêu thụ...",
            image: "https://images.unsplash.com/photo-1671718589773-7a1477371748?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d2F0ZXIlMjBmYWN0b3J5fGVufDB8fDB8fHww"
        },
        {
            id: 3,
            title: "Ban Lãnh đạo HydroSys tham dự Triển lãm Nước Quốc tế VietWater 2026",
            date: "18/02/2026",
            desc: "Tại triển lãm, HydroSys đã giới thiệu giải pháp lọc màng RO thế hệ mới chống cáu cặn vượt trội...",
            image: "https://images.unsplash.com/photo-1551818255-e6e10975bc17?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
        }
    ];

    return (
        <main className="flex-grow bg-gray-50 animate-in fade-in duration-500">
            <div className="bg-corporate-dark text-white py-24">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Tin tức & Sự kiện</h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">Cập nhật những hoạt động, dự án và công nghệ mới nhất từ HydroSys EPC.</p>
                </div>
            </div>

            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
                    {newsItems.map(item => (
                        <div key={item.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg transition-all group cursor-pointer flex flex-col">
                            <div className="h-56 overflow-hidden">
                                <img src={item.image} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center gap-2 text-engineering-green text-sm font-semibold mb-3">
                                    <Calendar size={16} />
                                    <span>{item.date}</span>
                                </div>
                                <h3 className="text-xl font-bold text-corporate-dark mb-3 line-clamp-2 group-hover:text-corporate-blue transition-colors">{item.title}</h3>
                                <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-grow">{item.desc}</p>
                                <div className="flex items-center gap-1 text-corporate-blue font-semibold text-sm">
                                    Đọc tiếp <ArrowRight size={16} />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            <CTASection />
        </main>
    );
}