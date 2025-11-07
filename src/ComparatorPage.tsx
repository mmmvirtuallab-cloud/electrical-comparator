// File: src/ComparatorPage.tsx

"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import InfoPageLayout from "./InfoPageLayout";
import MobileNavBar from "./components/MobileNavBar";
import { pageContent } from "./data/content"; // <-- Now imports from .ts file
import styles from "./ComparatorPage.module.css";
import { NavItem } from "./types"; // <-- Import the NavItem type

// Define the props this component accepts
interface ComparatorPageProps {
  topic: string;
}

// Updated navItems for Electrical Comparator (now typed)
const navItems: NavItem[] = [
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

// Use the props type here
function ElectricalComparatorHomePage({ topic }: ComparatorPageProps) {
  const router = useRouter();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Use the prop 'topic' passed by the Next.js routing file
  const currentTopic = topic;

  const handleNavClick = (key: string) => {
    if (key === "Simulation") {
      router.push("/lab/electrical-comparator");
    } else {
      router.push(`/experiments/electrical-comparator/${key}`);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileNavClick = (key: string) => {
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
          {/* This component is now type-safe */}
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