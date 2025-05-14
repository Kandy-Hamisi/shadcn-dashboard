import Image from "next/image";
import AppChart from "@/components/AppChart";
import AppAreaChart from "@/components/AppAreaChart";
import AppPieChart from "@/components/AppPieChart";
import CardList from "@/components/CardList";

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
      <div className="bg-primary-foreground rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppChart />
      </div>
      <div className="bg-primary-foreground rounded-lg">
        <CardList title="Popular Content" />
      </div>
      <div className="bg-primary-foreground rounded-lg">
        <AppPieChart />
      </div>
      <div className="bg-primary-foreground rounded-lg">Test</div>
      <div className="bg-primary-foreground rounded-lg lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppAreaChart />
      </div>
      <div className="bg-primary-foreground rounded-lg">
        <CardList title="Latest Transactions" />
      </div>
      <div className="bg-primary-foreground rounded-lg">Test</div>
    </div>
  );
}
