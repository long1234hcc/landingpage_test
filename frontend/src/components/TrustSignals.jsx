import { Globe } from 'lucide-react'

export default function TrustSignals({ projectCount }) {
    return (
        <section className="bg-white border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-6 py-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-100">
                    <div>
                        <p className="text-4xl font-extrabold text-corporate-blue mb-1">2,4 tr<span className="text-engineering-green">+</span></p>
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">m³/ngày Công suất Lắp đặt</p>
                    </div>
                    <div>
                        {/* Nhận biến số truyền từ App.jsx vào đây */}
                        <p className="text-4xl font-extrabold text-corporate-blue mb-1">{projectCount}<span className="text-engineering-green">+</span></p>
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Dự án Quy mô Lớn</p>
                    </div>
                    <div>
                        <p className="text-4xl font-extrabold text-corporate-blue mb-1">25<span className="text-engineering-green">+</span></p>
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Năm Kinh nghiệm EPC</p>
                    </div>
                    <div>
                        <p className="flex justify-center items-center gap-2 text-4xl font-extrabold text-corporate-blue mb-1">
                            <Globe size={32} className="text-corporate-blue" />
                        </p>
                        <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">Dịch vụ Toàn quốc</p>
                    </div>
                </div>
            </div>
        </section>
    )
}