// src/components/FeaturedProjects.jsx
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import ProjectCard from './ProjectCard' // TÁI SỬ DỤNG
import { getProjects } from '../services/api' // TÁI SỬ DỤNG

export default function FeaturedProjects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Gọi API lấy toàn bộ dự án
        const loadData = async () => {
            try {
                const data = await getProjects();
                // Mẹo: Chỉ cắt lấy 3 dự án đầu tiên để làm "Tiêu biểu"
                setProjects(data.slice(0, 3));
            } catch (err) {
                console.error("Lỗi khi tải dự án tiêu biểu:", err);
            } finally {
                setLoading(false);
            }
        };
        loadData();
    }, []);

    // Nếu đang tải hoặc không có data thì ẩn luôn section này
    if (loading || projects.length === 0) return null;

    return (
        <section className="bg-gray-50 py-24">
            <div className="max-w-7xl mx-auto px-6">

                {/* Tiêu đề Khối */}
                <div className="flex justify-between items-end mb-12 gap-6">
                    <div>
                        <span className="text-engineering-green font-semibold uppercase tracking-wider text-sm">Hồ sơ năng lực</span>
                        <h2 className="text-4xl font-bold text-corporate-dark mt-2">Dự án Tiêu biểu</h2>
                        <p className="text-gray-600 mt-3 max-w-xl">
                            Khám phá các công trình hạ tầng nước quy mô lớn được HydroSys EPC triển khai thành công, khẳng định năng lực kỹ thuật và cam kết bền vững.
                        </p>
                    </div>
                    <Link
                        to="/portfolio"
                        className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-all text-corporate-dark flex-shrink-0"
                    >
                        Xem toàn bộ Hồ sơ
                        <ArrowRight size={18} />
                    </Link>
                </div>

                {/* Lưới Dự án - TÁI SỬ DỤNG ProjectCard */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map(project => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
}