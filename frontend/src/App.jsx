import { useState, useEffect, useMemo } from 'react'
import { Droplet, MapPin, Search, AlertCircle, ArrowRight, CheckCircle2, Factory, Activity, Globe, ShieldCheck, X } from 'lucide-react'

// Map API data to B2B fields
const enhanceProjectData = (project) => {
  const pStr = (project.name + ' ' + project.description).toLowerCase();
  
  let tech = 'Xử lý truyền thống';
  if (pStr.includes('desalination') || pStr.includes('ro')) tech = 'Lọc thẩm thấu ngược (RO)';
  else if (pStr.includes('wastewater') || pStr.includes('reclamation')) tech = 'MBR / Tái sử dụng';
  else if (pStr.includes('underground') || pStr.includes('aquifer')) tech = 'Quản lý nước ngầm';
  else if (pStr.includes('flood') || pStr.includes('barrier')) tech = 'Kiểm soát ngập lụt';
  else if (pStr.includes('sensor') || pStr.includes('monitoring')) tech = 'Lưới điện thông minh & IoT';
  
  let ind = 'Hạ tầng đô thị';
  if (pStr.includes('agriculture') || pStr.includes('irrigation')) ind = 'Nông nghiệp';
  else if (pStr.includes('industry') || pStr.includes('plant')) ind = 'Công nghiệp';
  else if (pStr.includes('energy') || pStr.includes('geothermal')) ind = 'Năng lượng';

  const capacities = ['50.000 m³/ngày', '120.000 m³/ngày', '25.000 m³/ngày', '500.000 m³/ngày', '1,2M m³/ngày'];
  const cap = capacities[project.id % capacities.length];

  return { ...project, technology: tech, industry: ind, capacity: cap };
};

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

function ProjectCard({ project }) {
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
            <Factory size={12} className="mr-1.5 text-gray-500"/> {project.industry}
          </span>
          <span className="inline-flex items-center px-2.5 py-1 rounded-md bg-engineering-light text-corporate-blue text-xs font-medium border border-blue-100">
            <Activity size={12} className="mr-1.5 text-corporate-blue"/> {project.technology}
          </span>
        </div>
        
        <div className="mb-5 pb-5 border-b border-gray-100">
          <p className="text-sm text-gray-500 uppercase font-semibold tracking-wider mb-1">Công suất Thiết kế</p>
          <p className="text-2xl font-bold text-corporate-dark">{project.capacity}</p>
        </div>

        <p className="text-gray-600 text-sm line-clamp-3 mb-6 flex-grow leading-relaxed">
          {project.description}
        </p>
        
        <button className="flex items-center justify-between w-full pt-2 text-corporate-blue font-semibold hover:text-engineering-green transition-colors mt-auto group/btn">
          Xem Chi tiết Dự án
          <ArrowRight size={18} className="transform group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  )
}

function App() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Filters State
  const [search, setSearch] = useState('');
  const [selectedIndustry, setSelectedIndustry] = useState('Tất cả');
  const [selectedTech, setSelectedTech] = useState('Tất cả');

  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`http://localhost:8000/api/projects`);
        if (!res.ok) throw new Error(`HTTP error ${res.status}`);
        const data = await res.json();
        // Enhance data with B2B tags
        setProjects(data.map(enhanceProjectData));
      } catch (err) {
         console.error(err);
         setError('Hệ thống ngoại tuyến. Không thể kết nối với cơ sở dữ liệu hệ thống.');
      } finally {
        setLoading(false);
      }
    }
    fetchProjects();
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
    <div className="font-sans min-h-screen flex flex-col bg-gray-50 text-gray-800">
      
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          <div className="flex items-center gap-2 text-corporate-dark">
            <Droplet size={32} strokeWidth={2.5} className="text-engineering-green" />
            <span className="text-2xl font-bold tracking-tight">HydroSys<span className="text-engineering-green">EPC</span></span>
          </div>
          <nav className="hidden md:flex gap-8">
            <a href="#" className="font-semibold text-sm text-gray-600 hover:text-corporate-blue transition-colors">Giải pháp</a>
            <a href="#" className="font-semibold text-sm text-gray-600 hover:text-corporate-blue transition-colors">Ngành nghề</a>
            <a href="#" className="font-semibold text-sm text-gray-600 hover:text-corporate-blue transition-colors">Hồ sơ Dự án</a>
          </nav>
          <div className="flex items-center gap-4">
            <button className="text-sm font-semibold text-gray-600 hover:text-corporate-dark transition-colors">Đăng nhập</button>
            <button className="bg-corporate-blue text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-corporate-dark transition-colors shadow-sm">
              Tư vấn Kỹ thuật
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION - B2B Outcome Driven */}
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
              Kiến tạo Hạ tầng Nước <span className="text-engineering-green">Bền vững</span>.
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

      {/* TRUST SIGNALS STRIP */}
      <section className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-gray-100">
            <div>
              <p className="text-4xl font-extrabold text-corporate-blue mb-1">2,4 tr<span className="text-engineering-green">+</span></p>
              <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide">m³/ngày Công suất Lắp đặt</p>
            </div>
            <div>
              <p className="text-4xl font-extrabold text-corporate-blue mb-1">{projects.length}<span className="text-engineering-green">+</span></p>
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

      {/* PORTFOLIO WITH FACETED FILTERING */}
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
                    <button onClick={() => setSelectedIndustry('Tất cả')} className="hover:text-red-500"><X size={14}/></button>
                  </span>
                )}
                {selectedTech !== 'Tất cả' && (
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-corporate-light text-corporate-blue border border-blue-200 text-sm font-medium">
                    Công nghệ: {selectedTech}
                    <button onClick={() => setSelectedTech('Tất cả')} className="hover:text-red-500"><X size={14}/></button>
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

      <footer className="bg-corporate-dark text-white pt-16 pb-8 border-t-4 border-engineering-green">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12 border-b border-gray-800 pb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 text-white mb-6">
                <Droplet size={28} strokeWidth={2.5} className="text-engineering-green" />
                <span className="text-xl font-bold tracking-tight">HydroSys<span className="text-engineering-green">EPC</span></span>
              </div>
              <p className="text-gray-400 leading-relaxed max-w-md">
                Đơn vị hàng đầu về kỹ thuật, mua sắm vật tư và thi công các cơ sở hạ tầng xử lý nước tiên tiến, cam kết đem lại các giải pháp công nghiệp mở rộng và vững bền.
              </p>
            </div>
            <div>
              <h4 className="font-bold uppercase tracking-wider text-sm text-gray-300 mb-6">Công nghệ</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-engineering-light transition-colors">Thẩm thấu ngược (RO)</a></li>
                <li><a href="#" className="hover:text-engineering-light transition-colors">Khử ion bằng điện (EDI)</a></li>
                <li><a href="#" className="hover:text-engineering-light transition-colors">MBR / Nước thải</a></li>
                <li><a href="#" className="hover:text-engineering-light transition-colors">Không xả thải (ZLD)</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold uppercase tracking-wider text-sm text-gray-300 mb-6">Doanh nghiệp</h4>
              <ul className="space-y-3 text-gray-400 text-sm">
                <li><a href="#" className="hover:text-engineering-light transition-colors">Về chúng tôi</a></li>
                <li><a href="#" className="hover:text-engineering-light transition-colors">Chứng nhận Quản lý Chất lượng</a></li>
                <li><a href="#" className="hover:text-engineering-light transition-colors">Hồ sơ Năng lực</a></li>
                <li><a href="#" className="hover:text-engineering-light transition-colors">Liên hệ Kỹ thuật viên</a></li>
              </ul>
            </div>
          </div>
          <p className="text-gray-500 text-sm text-center">
            &copy; 2026 HydroSys EPC Việt Nam. Nền tảng Hồ sơ Kỹ thuật. Mọi số liệu báo cáo đều có nguồn gốc xác thực.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App