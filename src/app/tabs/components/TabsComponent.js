// 📌 Tabs 컴포넌트

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function TabsComponent() {
  return (
    <div className="flex gap-4 flex-wrap">
      <Tabs defaultValue="tab1" className="w-full">
        <TabsList>
          <TabsTrigger value="tab1">첫번째 탭</TabsTrigger>
          <TabsTrigger value="tab2">두번째 탭</TabsTrigger>
          <TabsTrigger value="tab3">세번째 탭</TabsTrigger>
          <TabsTrigger value="tab4">네번째 탭</TabsTrigger>
        </TabsList>
        <TabsContent value="tab1" className="p-5">
          첫번째 탭
        </TabsContent>
        <TabsContent value="tab2" className="p-5">
          두번째 탭
        </TabsContent>
        <TabsContent value="tab3" className="p-5">
          세번째 탭
        </TabsContent>
        <TabsContent value="tab4" className="p-5">
          네번째 탭
        </TabsContent>
      </Tabs>
    </div>
  );
}
