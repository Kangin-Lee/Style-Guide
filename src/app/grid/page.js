// 📌 Style Grid 페이지

import { BasicStructureGrid } from "./components/BasicStructureGrid";
import ResponsiveGrid from "./components/ResponsiveGrid";
import RowGrid from "./components/RowGrid";


// 페이지 메타데이터
export const metadata = {
  title: "Grid - IOPS UI Library",
  description: "IOPS Style Guide - Grid",
}

export default function StyleGrid() {
  return (
    <div className="space-y-12">
      <h1 className="text-2xl font-bold mb-6">Grid Examples</h1>

      <BasicStructureGrid />
      <ResponsiveGrid/>
      <RowGrid/>
    </div>
  );
}
