// File: src/app/experiments/electrical-comparator/[topic]/page.tsx

import ElectricalComparatorHomePage from "../ClientWrapper";

export async function generateStaticParams() {
  const topics = [
    "Aim",
    "Theory",
    "Procedure",
    "Test1",
    "Test2",
    "Acknowledgement",
  ];

  return topics.map((topic) => ({ topic }));
}

type PageProps = {
  params: { topic: string };
};

export default function DynamicExperimentPage({ params }: PageProps) {
  return <ElectricalComparatorHomePage topic={params.topic} />;
}
