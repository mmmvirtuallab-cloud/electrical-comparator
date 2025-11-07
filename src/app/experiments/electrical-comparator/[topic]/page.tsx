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

// This is a Server Component, so we do NOT put "use client" here.
// It receives 'params' as a prop.
import React from 'react';
import ElectricalComparatorHomePage from '../../../../ComparatorPage'; // Import the client component

// This structure is correct
type DynamicPageProps = {
    params: {
        topic: string;
    };
};

// This is the main page component. It's a Server Component.
export default function DynamicExperimentPage({ params }: DynamicPageProps) {
  const currentTopic = params.topic;

  // It renders the 'ElectricalComparatorHomePage' (which is a client component)
  // and passes the topic to it as a prop.
  return <ElectricalComparatorHomePage topic={currentTopic} />;
}