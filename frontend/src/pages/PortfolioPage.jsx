// src/pages/PortfolioPage.jsx
import { useState, useEffect, useMemo } from 'react'
import { Search, AlertCircle, CheckCircle2, X } from 'lucide-react'
import ProjectCard from '../components/ProjectCard'
import { getProjects } from '../services/api'

export default function PortfolioPage() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Filters State
    const [search, setSearch] = useState('');
    const [selectedIndustry, setSelectedIndustry] = useState('Tất cả');
    const [selectedTech, setSelectedTech] = useState('Tất cả');

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            setError(null);
            try {
                const data = await getProjects();
                setProjects(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        loadData();
    }, []);

    // Compute Facets
    const industries = useMemo(() => ['Tất cả', ...new Set(projects.map(p => p.industry))], [projects]);
    const technologies = useMemo(() => ['Tất cả', ...new Set(projects.map(p => p.technology))], [projects]);

    // Apply Faceted Search
    const filtered = useMemo(() => {
        return projects.filter(p => {
            const matchSearch = p.name.toLowerCase().includes(search.toLowerCase()) || p.location.toLowerCase().includes(search.toLowerCase());
            const matchInd = selectedIndustry === 'Tất cả' || p.industry === selectedIndustry;
            const matchTech = selectedTech === 'Tất cả' || p.technology === selectedTech;
            return matchSearch && matchInd && matchTech;
        });
    }, [projects, search, selectedIndustry, selectedTech]);

    return (
        <main className="flex-grow bg-gray-50">
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="flex flex-col md:flex-row justify-between items-end mb-10 border-b border-gray-200 pb-6 gap-6">
                    <div>
                        <h2 className="text-3xl font-bold text-corporate-dark mb-2">Hồ sơ Năng lực</h2>
                        <p className="text-gray-500">Lọc các dự án đã thực hiện theo công nghệ, ngành ứng dụng và quy mô.</p>
                    </div>

                    {/* Search */}
                    <div className="relative w-full md:w-96">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Tìm dự án theo tên, vị trí..."
                            value={search}
                            onChange={e => setSearch(e.target.value)}
                            className="w-full pl-10 pr-10 py-3 rounded-lg border border-gray-300 bg-white focus:ring-2 focus:ring-corporate-blue focus:border-transparent outline-none transition-all shadow-sm"
                        />
                        {search && (
                            <button
                                onClick={() => setSearch('')}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                            >
                                <X size={18} />
                            </button>
                        )}
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-10">
                    {/* Sidebar Filters */}
                    <aside className="w-full lg:w-72 flex-shrink-0">
                        <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm sticky top-28">
                            <div className="flex items-center gap-2 font-bold text-gray-800 mb-6 uppercase tracking-wider text-sm border-b pb-4">
                                <CheckCircle2 size={18} className="text-engineering-green" />
                                Thông số Lọc
                            </div>

                            {/* Industry Facet */}
                            <div className="mb-8">
                                <h4 className="font-semibold text-corporate-dark mb-3 text-sm">Lĩnh vực Ứng dụng</h4>
                                <div className="space-y-2">
                                    {industries.map(ind => (
                                        <label key={ind} className="flex items-center gap-3 cursor-pointer group">
                                            <div className="relative flex items-center">
                                                <input
                                                    type="radio"
                                                    name="industry"
                                                    className="peer w-4 h-4 text-corporate-blue border-gray-300 focus:ring-corporate-blue cursor-pointer"
                                                    checked={selectedIndustry === ind}
                                                    onChange={() => setSelectedIndustry(ind)}
                                                />
                                            </div>
                                            <span className={`text-sm ${selectedIndustry === ind ? 'font-semibold text-corporate-dark' : 'text-gray-600 group-hover:text-corporate-blue'}`}>
                                                {ind}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Technology Facet */}
                            <div>
                                <h4 className="font-semibold text-corporate-dark mb-3 text-sm">Công nghệ Cốt lõi</h4>
                                <div className="space-y-2">
                                    {technologies.map(tech => (
                                        <label key={tech} className="flex items-center gap-3 cursor-pointer group">
                                            <div className="relative flex items-center">
                                                <input
                                                    type="radio"
                                                    name="technology"
                                                    className="peer w-4 h-4 text-corporate-blue border-gray-300 focus:ring-corporate-blue cursor-pointer"
                                                    checked={selectedTech === tech}
                                                    onChange={() => setSelectedTech(tech)}
                                                />
                                            </div>
                                            <span className={`text-sm ${selectedTech === tech ? 'font-semibold text-corporate-dark' : 'text-gray-600 group-hover:text-corporate-blue'}`}>
                                                {tech}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Reset Filters */}
                            {(selectedIndustry !== 'Tất cả' || selectedTech !== 'Tất cả') && (
                                <button
                                    onClick={() => { setSelectedIndustry('Tất cả'); setSelectedTech('Tất cả'); }}
                                    className="mt-8 w-full py-2.5 text-sm font-semibold text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors"
                                >
                                    Xóa Bộ lọc
                                </button>
                            )}
                        </div>
                    </aside>

                    {/* Project Grid */}
                    <div className="flex-grow">
                        {/* Active Filters Summary */}
                        <div className="mb-6 flex flex-wrap gap-2 items-center">
                            <span className="text-sm font-medium text-gray-500 mr-2">Hiển thị {filtered.length} dự án</span>
                            {selectedIndustry !== 'Tất cả' && (
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-corporate-light text-corporate-blue border border-blue-200 text-sm font-medium">
                                    Ngành: {selectedIndustry}
                                    <button onClick={() => setSelectedIndustry('Tất cả')} className="hover:text-red-500"><X size={14} /></button>
                                </span>
                            )}
                            {selectedTech !== 'Tất cả' && (
                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-corporate-light text-corporate-blue border border-blue-200 text-sm font-medium">
                                    Công nghệ: {selectedTech}
                                    <button onClick={() => setSelectedTech('Tất cả')} className="hover:text-red-500"><X size={14} /></button>
                                </span>
                            )}
                        </div>

                        {loading && (
                            <div className="h-64 flex flex-col items-center justify-center border-2 border-dashed border-gray-200 rounded-xl">
                                <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-corporate-blue mb-4"></div>
                                <p className="text-gray-500 font-medium tracking-wide">Đang đồng bộ cơ sở dữ liệu...</p>
                            </div>
                        )}

                        {error && (
                            <div className="bg-red-50 border border-red-200 text-red-800 rounded-xl p-8 flex flex-col items-center text-center">
                                <AlertCircle size={48} className="mb-4 text-red-500" />
                                <h3 className="text-lg font-bold mb-2">Gián đoạn Hệ thống</h3>
                                <p>{error}</p>
                            </div>
                        )}

                        {!loading && !error && filtered.length === 0 && (
                            <div className="bg-white border text-gray-500 border-gray-200 rounded-xl p-16 flex flex-col items-center text-center shadow-sm">
                                <Search size={48} className="mb-4 text-gray-300" />
                                <h3 className="text-xl font-bold text-gray-700 mb-2">Không tìm thấy dự án nào</h3>
                                <p className="max-w-md mx-auto">Không có dự án nào khớp với tổ hợp thông số bộ lọc này. Vui lòng điều chỉnh lại công nghệ và nhóm ngành.</p>
                                <button
                                    onClick={() => { setSelectedIndustry('Tất cả'); setSelectedTech('Tất cả'); setSearch(''); }}
                                    className="mt-6 font-semibold text-corporate-blue hover:text-corporate-dark transition-colors"
                                >
                                    Đặt lại tất cả thông số lọc
                                </button>
                            </div>
                        )}

                        {!loading && !error && filtered.length > 0 && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {filtered.map(project => (
                                    <ProjectCard key={project.id} project={project} />
                                ))}
                            </div>
                        )}
                    </div>
                </div>

            </div>
        </main>
    )
}