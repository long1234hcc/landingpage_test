import React from 'react';
import { MapPin, Factory, Activity, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
const STATUS_STYLING = {
    'Completed': 'bg-emerald-100 text-emerald-800 border-emerald-200',
    'In Progress': 'bg-blue-100 text-blue-800 border-blue-200',
    'Planning': 'bg-amber-100 text-amber-800 border-amber-200',
}

const STATUS_VN = {
    'Completed': 'Hoàn thành',
    'In Progress': 'Đang triển khai',
    'Planning': 'Kế hoạch',
}

export default function ProjectCard({ project }) {
    const statusClass = STATUS_STYLING[project.status] || STATUS_STYLING['Planning'];
    const statusLabel = STATUS_VN[project.status] || 'Đang chờ';

    return (
        <div className="group bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-xl hover:border-corporate-blue/30 transition-all duration-300 flex flex-col overflow-hidden">
            {/* Image & Status */}
            <div className="relative h-56 overflow-hidden bg-gray-100">
                <img src={project.image_url} alt={project.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-corporate-dark/60 via-transparent to-transparent opacity-80" />
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold border backdrop-blur-sm ${statusClass}`}>
                    {statusLabel}
                </div>
                <div className="absolute bottom-4 left-4 right-4">
                    <p className="flex items-center text-white/90 text-sm font-medium uppercase tracking-wider mb-1 drop-shadow-md">
                        <MapPin size={14} className="mr-1 text-engineering-green" />
                        {project.location}
                    </p>
                    <h3 className="text-xl font-bold text-white leading-tight drop-shadow-lg">{project.name}</h3>
                </div>
            </div>

            {/* Technical Body */}
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-gray-100 text-gray-700 text-xs font-medium border border-gray-200">
                        <Factory size={12} className="mr-1.5 text-gray-500" /> {project.industry}
                    </span>
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-engineering-light text-corporate-blue text-xs font-medium border border-blue-100">
                        <Activity size={12} className="mr-1.5 text-corporate-blue" /> {project.technology}
                    </span>
                </div>

                <div className="mb-5 pb-5 border-b border-gray-100">
                    <p className="text-sm text-gray-500 uppercase font-semibold tracking-wider mb-1">Công suất Thiết kế</p>
                    <p className="text-2xl font-bold text-corporate-dark">{project.capacity}</p>
                </div>

                <p className="text-gray-600 text-sm line-clamp-3 mb-6 flex-grow leading-relaxed">
                    {project.description}
                </p>

                <Link
                    to={`/portfolio/${project.id}`}
                    className="flex items-center justify-between w-full pt-2 text-corporate-blue font-semibold hover:text-engineering-green transition-colors mt-auto group/btn"
                >
                    Xem Chi tiết Dự án
                    <ArrowRight size={18} className="transform group-hover/btn:translate-x-1 transition-transform" />
                </Link>
            </div>
        </div>
    )
}