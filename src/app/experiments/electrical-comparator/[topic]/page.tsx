// File: src/app/experiments/electrical-comparator/[topic]/page.tsx

import React from 'react';
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

// This is the main page component (a Server Component).
// We define the type for 'params' right here.
export default function DynamicExperimentPage({ params }: { params: { topic: string } }) {

  // Get the topic from the params prop
  const currentTopic = params.topic;

  // Render the Client Component and pass the topic as a prop
  return <ElectricalComparatorHomePage topic={currentTopic} />;
}