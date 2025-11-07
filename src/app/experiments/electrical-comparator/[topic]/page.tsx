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
// We are defining the full, correct type for its props inline.
export default function DynamicExperimentPage({
  params,
  searchParams  // <-- This was the missing piece
}: {
  params: { topic: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) {

  // Get the topic from the params prop
  const currentTopic = params.topic;

  // Render the Client Component and pass the topic as a prop
  return <ElectricalComparatorHomePage topic={currentTopic} />;
}