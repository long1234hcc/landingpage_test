// src/pages/HomePage.jsx
import { useState, useEffect } from 'react'
import HeroSection from '../components/HeroSection'
import TrustSignals from '../components/TrustSignals'
import ServicesSection from '../components/ServicesSection'
import AboutSection from '../components/AboutSection'
import FeaturedProjects from '../components/FeaturedProjects'
import CTASection from '../components/CTASection'
import { getProjects } from '../services/api'

import PartnerLogos from '../components/PartnerLogos'
import Certifications from '../components/Certifications'

export default function HomePage() {
    const [projectCount, setProjectCount] = useState(0);

    useEffect(() => {
        const fetchCount = async () => {
            try {
                const data = await getProjects();
                setProjectCount(data.length);
            } catch (err) {
                console.error("Không lấy được số lượng dự án", err);
            }
        };
        fetchCount();
    }, []);

    return (
        <>
            <HeroSection />
            <TrustSignals projectCount={projectCount} />
            <ServicesSection />

            <AboutSection />

            <PartnerLogos />

            <FeaturedProjects />


            <CTASection />
        </>
    )
}