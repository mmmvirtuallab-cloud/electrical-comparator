"use client";

import dynamic from "next/dynamic";
import type { ComparatorPageProps } from "../../../types";

const ElectricalComparatorHomePage = dynamic<ComparatorPageProps>(
  () => import("../../../ComparatorPage"),
  { ssr: false }
);

export default ElectricalComparatorHomePage;
