import { ShieldCheck, ArrowRight } from 'lucide-react'

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-corporate-dark xl:min-h-[600px] flex items-center">
            {/* Background Image & Overlays */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1542261625-72847c2b4d1b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                    alt="Large scale water infrastructure"
                    className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-corporate-dark via-corporate-dark/90 to-transparent"></div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10 py-20 lg:py-0 w-full">
                <div className="max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-engineering-steel/20 border border-engineering-steel/30 text-engineering-light text-xs font-semibold uppercase tracking-widest mb-8">
                        <ShieldCheck size={14} className="text-engineering-green" />
                        Chứng nhận ISO 9001:2015
                    </div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
                        Kiến tạo Hạ tầng Nước <span className="text-engineering-green">Bền Vững</span>
                    </h1>

                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl">
                        Cung cấp các hệ thống xử lý và quản lý nước công suất lớn, chuyên biệt cho ứng dụng đô thị và công nghiệp tại Việt Nam. Khẳng định năng lực kỹ thuật thông qua hồ sơ dự án thực tế.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <button className="bg-engineering-green text-white px-8 py-4 rounded-lg font-bold hover:bg-emerald-600 transition-colors shadow-lg flex items-center gap-2 text-lg">
                            Xem Tài liệu Dự án <ArrowRight size={20} />
                        </button>
                        <button className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-lg font-bold hover:bg-white/20 transition-colors backdrop-blur-sm text-lg">
                            Thông số Kỹ thuật
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}