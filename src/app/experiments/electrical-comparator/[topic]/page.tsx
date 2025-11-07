// File: src/app/experiments/electrical-comparator/[topic]/page.tsx

export async function generateStaticParams() {
  // These are all the topics you want to pre-build
  const topics = [
    "Aim",
    "Theory",
    "Procedure",
    "Test1",
    "Test2",
    "Acknowledgement",
  ];

  return topics.map((topic) => ({
    topic: topic,
  }));
}

"use client"; 

import React from 'react';
import { useParams } from 'next/navigation'; // <-- 1. Import the hook
import ElectricalComparatorHomePage from '../../../../ComparatorPage';

// 2. Remove props, we don't need them
export default function DynamicExperimentPage() { 
  const params = useParams(); // <-- 3. Call the hook
  
  // 4. Get the topic from the hook's result
  const currentTopic = params.topic; 

 // 5. Pass it as a string
 return <ElectricalComparatorHomePage topic={currentTopic as string} />;
}