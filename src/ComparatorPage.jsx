// File: .\src/ComparatorPage.jsx

"use client"; // <-- CRITICAL: Declares this as a Client Component for Next.js

import React, { useState } from "react";
// REMOVE REACT ROUTER HOOKS: useNavigate, useParams
import { useRouter } from "next/navigation"; // <-- Use Next.js Router
import InfoPageLayout from "./InfoPageLayout"; // Corrected path
import MobileNavBar from "./components/MobileNavBar";
import { pageContent } from "./data/content";
import styles from "./ComparatorPage.module.css"; // Corrected CSS path

// Updated navItems for Electrical Comparator
const navItems = [
  { key: "Aim", path: "/experiments/electrical-comparator/Aim", label: "Aim" },
  {
    key: "Theory",
    path: "/experiments/electrical-comparator/Theory",
    label: "Theory",
  },
  {
    key: "Procedure",
    path: "/experiments/electrical-comparator/Procedure",
    label: "Procedure",
  },
  {
    key: "Test1",
    path: "/experiments/electrical-comparator/Test1",
    label: "Pretest",
  },
  {
    key: "Simulation",
    path: "/lab/electrical-comparator",
    label: "Virtual experiment",
  },
  {
    key: "Test2",
    path: "/experiments/electrical-comparator/Test2",
    label: "Posttest",
  },
  {
    key: "Acknowledgement",
    path: "/experiments/electrical-comparator/Acknowledgement",
    label: "Acknowledgement",
  },
];

// MODIFIED: Accepts 'topic' as a prop
function ElectricalComparatorHomePage({ topic }) {
  const router = useRouter(); // Initialize Next.js router

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Use the prop 'topic' passed by the Next.js routing file, defaulting to "Aim"
  const currentTopic = topic || "Aim";

  // MODIFIED: Use router.push() for navigation
  const handleNavClick = (key) => {
    if (key === "Simulation") {
      router.push("/lab/electrical-comparator");
    } else {
      // Navigates to the dynamic route: /experiments/electrical-comparator/[topic]
      router.push(`/experiments/electrical-comparator/${key}`);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileNavClick = (key) => {
    setIsMobileMenuOpen(false);
    handleNavClick(key);
  };

  const contentKey =
    navItems.find((item) => item.key === currentTopic)?.key || currentTopic;

  return (
    <div className={styles.mainWrapper}>
      <header className={styles.header}>
        <button
          className={styles.mobileMenuButton}
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
        >
          ☰
        </button>

        <h1 className={styles.headerTitle}>
          Electrical Comparator Virtual Lab
        </h1>

        {/* Assuming MobileNavBar exists and works */}
        <MobileNavBar
          navItems={navItems}
          currentTopicKey={currentTopic}
          onNavigate={handleMobileNavClick}
          isOpen={isMobileMenuOpen}
        />
      </header>

      <div className={styles.contentArea}>
        <nav className={styles.sidebar}>
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.key}>
                <button
                  onClick={() => handleNavClick(item.key)}
                  className={`${styles.navButton} ${
                    currentTopic === item.key ? styles.active : ""
                  }`}
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.mainContent}>
          <InfoPageLayout pageKey={contentKey} content={pageContent} />
        </div>
      </div>
      <footer className={styles.footer}>
        <p>
          Developed and coordinated by: Dr. S.Vijayakumar, Dr.S.Sathish
          Department of Production Technology, MIT Campus, Anna University,
          Chennai.
        </p>
      </footer>
    </div>
  );
}

export default ElectricalComparatorHomePage;
