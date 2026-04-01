import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
    // Lấy thông tin đường dẫn hiện tại từ react-router
    const { pathname } = useLocation();

    useEffect(() => {
        // Mỗi khi pathname thay đổi (chuyển trang), cuộn về đầu trang
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    }, [pathname]);

    return null; // Component này không render ra giao diện
};

export default ScrollToTop;