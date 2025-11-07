"use client";

import React from 'react';
import { useRouter } from 'next/navigation'; // <-- 1. Import the router
import ElectricalComparator from '../../../../src/ElectricalComparator'; 
import '../../../../src/ElectricalComparator.css';

export default function SimulationPage() {
  const router = useRouter(); // <-- 2. Initialize the router

  return (
    // 3. Use the existing wrapper
    <div className="simulation-page-wrapper">
      
      {/* 4. Add your new back button */}
      <button 
        onClick={() => router.back()} 
        className="lab-back-button"
      >
        &larr; Back
      </button>

      <ElectricalComparator />
    </div>
  );
}