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

// 2. Viết một hàm chuyên gọi API
export const getProjects = async () => {
    const API_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";
    try {
        const res = await fetch(`${API_URL}/projects`);
        if (!res.ok) throw new Error(`HTTP error ${res.status}`);
        const data = await res.json();

        // Gọi luôn hàm enhanceProjectData ở đây để trả về dữ liệu đã sạch
        return data.map(enhanceProjectData);
    } catch (error) {
        console.error("Lỗi khi fetch projects:", error);
        // Quăng lỗi ra ngoài để component bắt được
        throw new Error('Hệ thống ngoại tuyến. Không thể kết nối với cơ sở dữ liệu hệ thống.');
    }
};


export const getProjectById = async (id) => {
    const API_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";
    try {
        const res = await fetch(`${API_URL}/api/projects/${id}`);
        if (!res.ok) throw new Error(`HTTP error ${res.status}`);
        const data = await res.json();

        // Gọi hàm làm sạch dữ liệu cho 1 object này
        return enhanceProjectData(data);
    } catch (error) {
        console.error("Lỗi khi fetch chi tiết dự án:", error);
        throw new Error('Không thể tải dữ liệu chi tiết của dự án này.');
    }
};


// Thêm vào cuối file src/services/api.js

export const submitContactForm = async (formData) => {
    const API_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";
    try {
        const res = await fetch(`${API_URL}/api/contact`, {
            method: 'POST', // Chú ý: Đây là lệnh POST, không phải GET
            headers: {
                'Content-Type': 'application/json', // Báo cho FastAPI biết tôi gửi JSON nhé
            },
            body: JSON.stringify(formData), // Ép kiểu dữ liệu Form thành chuỗi JSON
        });

        if (!res.ok) throw new Error(`HTTP error ${res.status}`);

        return await res.json();
    } catch (error) {
        console.error("Lỗi khi gửi form liên hệ:", error);
        throw new Error('Hệ thống đang bận. Vui lòng thử lại sau.');
    }
};