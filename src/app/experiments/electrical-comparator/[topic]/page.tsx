// File: src/app/experiments/electrical-comparator/[topic]/page.tsx

import React from 'react';
import ElectricalComparatorHomePage from '../../../../ComparatorPage';

// 1. This defines the props that Next.js will pass to your page
interface PageProps {
  params: { topic: string };
  // We include searchParams for full type compliance, even if you don't use it
  searchParams: { [key: string]: string | string[] | undefined };
}

// 2. This function (for static export) stays the same
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

// 3. This is your page component, now using the correct PageProps type
export default function DynamicExperimentPage({ params }: PageProps) {
  
  // Get the topic from the params prop
  const currentTopic = params.topic;

  // Render the Client Component and pass the topic as a prop
  return <ElectricalComparatorHomePage topic={currentTopic} />;
}