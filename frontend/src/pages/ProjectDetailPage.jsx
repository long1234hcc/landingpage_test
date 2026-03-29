// src/pages/ProjectDetailPage.jsx
import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft, MapPin, Factory, Activity } from 'lucide-react'
import { getProjectById } from '../services/api'

export default function ProjectDetailPage() {
    // Lấy cái ID từ thanh địa chỉ URL (ví dụ: /portfolio/3 -> id = 3)
    const { id } = useParams();

    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadProject = async () => {
            setLoading(true);
            try {
                const data = await getProjectById(id);
                setProject(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        loadProject();
    }, [id]);

    if (loading) return <div className="min-h-screen flex items-center justify-center text-corporate-blue font-bold">Đang tải dữ liệu dự án...</div>;
    if (error) return <div className="min-h-screen flex items-center justify-center text-red-500">{error}</div>;
    if (!project) return <div className="min-h-screen flex items-center justify-center">Không tìm thấy dự án</div>;

    return (
        <main className="flex-grow bg-white">
            {/* Khối Banner Chi tiết */}
            <div className="bg-corporate-dark text-white py-16">
                <div className="max-w-7xl mx-auto px-6">
                    <Link to="/portfolio" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
                        <ArrowLeft size={20} className="mr-2" /> Quay lại Hồ sơ Năng lực
                    </Link>
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.name}</h1>
                    <p className="text-xl text-gray-300 flex items-center gap-2">
                        <MapPin className="text-engineering-green" /> {project.location}
                    </p>
                </div>
            </div>

            {/* Khối Nội dung & Thông số */}
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-2">
                        <img src={project.image_url} alt={project.name} className="w-full h-auto rounded-xl shadow-lg mb-8 object-cover max-h-[500px]" />
                        <h2 className="text-2xl font-bold text-corporate-dark mb-4">Tổng quan dự án</h2>
                        <p className="text-gray-600 leading-relaxed text-lg">{project.description}</p>
                    </div>

                    {/* Cột thông số kỹ thuật (Sidebar) */}
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 h-fit">
                        <h3 className="text-xl font-bold text-corporate-dark mb-6 border-b pb-4">Thông số Kỹ thuật</h3>
                        <div className="space-y-6">
                            <div>
                                <p className="text-sm text-gray-500 uppercase font-semibold mb-1">Công suất Thiết kế</p>
                                <p className="text-2xl font-bold text-corporate-blue">{project.capacity}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 uppercase font-semibold mb-1">Ngành ứng dụng</p>
                                <p className="font-medium flex items-center gap-2 text-gray-800"><Factory size={18} className="text-gray-400" /> {project.industry}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 uppercase font-semibold mb-1">Công nghệ</p>
                                <p className="font-medium flex items-center gap-2 text-gray-800"><Activity size={18} className="text-gray-400" /> {project.technology}</p>
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 uppercase font-semibold mb-1">Trạng thái</p>
                                <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm font-semibold border border-emerald-200">
                                    {project.status === 'Completed' ? 'Hoàn thành' : project.status === 'In Progress' ? 'Đang triển khai' : 'Kế hoạch'}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}