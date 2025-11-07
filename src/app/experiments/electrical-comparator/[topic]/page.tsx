// File: src/app/experiments/electrical-comparator/[topic]/page.tsx

import React from 'react';
// Make sure this import path is correct
import ElectricalComparatorHomePage from '../../../../ComparatorPage'; 

// This function tells Next.js which pages to build
export async function generateStaticParams() {
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

// --- THIS IS THE FIX ---
// Define the correct props type.
// Next.js passes BOTH params and searchParams.
type DynamicPageProps = {
  params: {
    topic: string;
  };
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

// This is the main page component.
// Use the 'DynamicPageProps' type we just defined.
export default function DynamicExperimentPage({ params }: DynamicPageProps) {
  
  // Get the topic from the params prop
  const currentTopic = params.topic;

  // Render your Client Component and pass the topic to it.
  // ElectricalComparatorHomePage must be a client component ("use client")
  // because it uses state and router.
  return <ElectricalComparatorHomePage topic={currentTopic} />;
}