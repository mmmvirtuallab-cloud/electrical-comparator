import ElectricalComparatorHomePage from "../ClientWrapper";

export async function generateStaticParams() {
  const topics = ["Aim","Theory","Procedure","Test1","Test2","Acknowledgement"];
  return topics.map((topic) => ({ topic }));
}

export default function DynamicExperimentPage({ params }: { params: { topic: string } }) {
  return <ElectricalComparatorHomePage topic={params.topic} />;
}
