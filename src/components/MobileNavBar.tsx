// File: src/components/MobileNavBar.tsx

import React from "react";
import styles from "../ComparatorPage.module.css";
import { NavItem } from "../types"; // <-- Import the NavItem type

// Define the props for this component
interface MobileNavBarProps {
  navItems?: NavItem[];
  onNavigate?: (key: string) => void;
  currentTopicKey?: string;
  isOpen?: boolean;
}

// Use default parameters instead of MobileNavBar.defaultProps
function MobileNavBar({
  navItems = [],
  onNavigate = () => {},
  currentTopicKey = "",
  isOpen = false,
}: MobileNavBarProps) {
  return (
    <nav className={`${styles.mobileNavDropdown} ${isOpen ? styles.open : ""}`}>
      <ul>
        {navItems.map((item) => (
          <li key={item.key}>
            <button
              onClick={() => onNavigate(item.key)}
              className={`${styles.navButton} ${
                currentTopicKey === item.key ? styles.active : ""
              }`}
              style={{
                width: "100%",
                margin: "0",
                borderRadius: "0",
                textAlign: "center",
                padding: "15px",
              }}
            >
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MobileNavBar;