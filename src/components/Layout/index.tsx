"use client";
import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { FaArrowUp } from "react-icons/fa";
import { scrollToSection } from "@/lib/scrollUtils";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const [showScrollButton, setShowScrollButton] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const checkScrollTop = () => {
      if (window.scrollY > window.innerHeight) {
        setShowScrollButton(true);
      } else {
        setShowScrollButton(false);
      }
    };

    window.addEventListener("scroll", checkScrollTop);

    return () => {
      window.removeEventListener("scroll", checkScrollTop);
    };
  }, []);

  // Handle hash navigation on page load
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash;
      if (hash) {
        const elementId = hash.substring(1);
        // Longer delay to ensure DOM is fully ready, especially when navigating from other pages
        setTimeout(() => {
          scrollToSection(elementId);
        }, 300);
      }
    }
  }, []);

  return (
    <div className="flex flex-col min-h-screen relative">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
      {showScrollButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 p-3 rounded-full bg-blue-500 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out z-50"
          aria-label="Scroll to top"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default Layout;
