import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom' // BẮT BUỘC PHẢI THÊM DÒNG NÀY
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* Bọc BrowserRouter ôm lấy App */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)