// src/components/PartnerLogos.jsx
export default function PartnerLogos() {
    // Fake slots cho logo đối tác/khách hàng
    const partners = [
        { name: "Tập đoàn ABC", type: "Công nghiệp Nặng" },
        { name: "XYZ Group", type: "Bất động sản" },
        { name: "Global Water", type: "Đối tác Công nghệ" },
        { name: "EcoTech", type: "Đối tác Thiết bị" },
        { name: "Mega Food", type: "Khách hàng F&B" }
    ];

    return (
        <section className="py-12 bg-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <p className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-8">
                    Đối tác & Khách hàng tiêu biểu
                </p>

                <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
                    {partners.map((partner, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-center opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all cursor-pointer group"
                        >
                            {/* Fake Logo Slot: Một khối xám chứa chữ viết tắt */}
                            <div className="h-14 w-32 bg-gray-100 border border-gray-200 rounded-lg flex items-center justify-center mb-2 shadow-sm group-hover:bg-white group-hover:border-corporate-blue group-hover:shadow-md transition-all">
                                <span className="font-black text-gray-400 text-2xl tracking-tighter group-hover:text-corporate-blue">
                                    {partner.name.split(' ')[0].toUpperCase()}
                                </span>
                            </div>
                            <span className="text-[11px] font-medium text-gray-400 uppercase tracking-wider">{partner.type}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}