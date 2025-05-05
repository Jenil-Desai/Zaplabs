"use client"
import React, {useEffect} from "react";

import Hero from "@/components/section/Landing/Hero/Hero";
import Features from "@/components/section/Landing/Features/Features";
import WorkflowDemo from "@/components/section/Landing/WorkflowDemo/WorkflowDemo";
import Testimonials from "@/components/section/Landing/Testimonials/Testimonials";
import CallToAction from "@/components/section/Landing/CTA/CallToAction";

const Index = () => {
    useEffect(() => {
        // Scroll reveal functionality
        const handleScroll = () => {
            const reveals = document.querySelectorAll('.reveal');

            reveals.forEach((element) => {
                const windowHeight = window.innerHeight;
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;

                if (elementTop < windowHeight - elementVisible) {
                    element.classList.add('active');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        // Initial check on page load
        setTimeout(() => {
            handleScroll();
        }, 300);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();

                const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute('href')?.substring(1);
                if (!targetId) return;

                const target = document.getElementById(targetId);
                if (!target) return;

                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            });
        });
    }, []);

    return (
        <div className="min-h-screen overflow-x-hidden">
            <Hero/>
            <Features/>
            <WorkflowDemo/>
            <Testimonials/>
            <CallToAction/>
        </div>
    );
};

export default Index;
