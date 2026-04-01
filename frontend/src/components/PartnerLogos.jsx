// src/components/PartnerLogos.jsx
import { Briefcase, Home, ShieldCheck, Wifi, Heart } from 'lucide-react';

export default function PartnerLogos() {
    const partners = [
        {
            icon: Briefcase,
            name: "ABC Corp",
            sub: "INDUSTRIAL",
            type: "Công nghiệp nặng",
            bg: "bg-blue-50", border: "border-blue-200",
            iconBg: "bg-blue-100",
            iconColor: "text-blue-600", nameColor: "text-blue-900", subColor: "text-blue-600"
        },
        {
            icon: Home,
            name: "XYZ Group",
            sub: "REALTY",
            type: "Bất động sản",
            bg: "bg-purple-50", border: "border-purple-200",
            iconBg: "bg-purple-100",
            iconColor: "text-purple-600", nameColor: "text-purple-900", subColor: "text-purple-600"
        },
        {
            icon: ShieldCheck,
            name: "GlobalWater",
            sub: "TECH",
            type: "Đối tác công nghệ",
            bg: "bg-teal-50", border: "border-teal-200",
            iconBg: "bg-teal-100",
            iconColor: "text-teal-600", nameColor: "text-teal-900", subColor: "text-teal-600"
        },
        {
            icon: Wifi,
            name: "EcoTech",
            sub: "SOLUTIONS",
            type: "Đối tác thiết bị",
            bg: "bg-green-50", border: "border-green-200",
            iconBg: "bg-green-100",
            iconColor: "text-green-600", nameColor: "text-green-900", subColor: "text-green-600"
        },
        {
            icon: Heart,
            name: "MegaFood",
            sub: "F&B GROUP",
            type: "Khách hàng F&B",
            bg: "bg-amber-50", border: "border-amber-200",
            iconBg: "bg-amber-100",
            iconColor: "text-amber-600", nameColor: "text-amber-900", subColor: "text-amber-600"
        },
    ];

    return (
        <section className="py-12 bg-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-8">
                    Đối tác & Khách hàng tiêu biểu
                </p>
                <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
                    {partners.map((partner, index) => {
                        const Icon = partner.icon;
                        return (
                            <div
                                key={index}
                                className={`
                  flex flex-col items-center gap-2 cursor-pointer group
                  px-6 py-5 rounded-2xl border-2 min-w-[130px]
                  grayscale-[55%] opacity-70
                  hover:grayscale-0 hover:opacity-100 hover:-translate-y-1
                  transition-all duration-200
                  ${partner.bg} ${partner.border}
                `}
                            >
                                {/* Icon container */}
                                <div className={`w-13 h-13 rounded-xl flex items-center justify-center p-3 ${partner.iconBg}`}>
                                    <Icon
                                        size={26}
                                        className={`${partner.iconColor} transition-colors`}
                                        strokeWidth={1.8}
                                    />
                                </div>

                                {/* Text */}
                                <p className={`text-sm font-semibold leading-tight ${partner.nameColor}`}>
                                    {partner.name}
                                </p>
                                <p className={`text-[10px] font-semibold tracking-widest uppercase ${partner.subColor}`}>
                                    {partner.sub}
                                </p>
                                <p className="text-[11px] text-gray-400">
                                    {partner.type}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}