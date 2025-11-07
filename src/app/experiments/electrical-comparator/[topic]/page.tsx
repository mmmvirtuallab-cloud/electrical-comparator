import dynamic from "next/dynamic";
import type { ComparatorPageProps } from "../../../../types";

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

// ✅ Correct usage: use the props type itself
const ElectricalComparatorHomePage = dynamic<ComparatorPageProps>(
  () => import("../../../../ComparatorPage"),
  { ssr: false }
);

export default function DynamicExperimentPage({ params }: PageProps) {
  return <ElectricalComparatorHomePage topic={params.topic} />;
}
