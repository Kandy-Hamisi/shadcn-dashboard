import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import CardList from "@/components/CardList";
import AppAreaChart from "@/components/AppAreaChart";
import { BadgeCheck } from "lucide-react";

const SpecificUserPage = () => {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Home</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Components</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Kandy Hamisi</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      {/*  container */}
      <div className="mt-4 flex flex-col xl:flex-row gap-8">
        {/*  left*/}
        <div className="w-full xl:w-1/3 space-y-6">
          {/*  user badges container */}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <h1 className="text-xl font-semibold">User Badges</h1>
            <div className="flex gap-4 mt-4">
              <HoverCard>
                <HoverCardTrigger>
                  <BadgeCheck
                    size={36}
                    className="rounded-full bg-blue-500/30 border-1 border-blue-500/50 p-2"
                  />
                </HoverCardTrigger>
                <HoverCardContent>
                  <h1 className="font-bold mb-2">Verified User</h1>
                  <p className="text-sm text-muted-foreground">
                    This user has been verified by the admin.
                  </p>
                </HoverCardContent>
              </HoverCard>
            </div>
          </div>
          {/*  information container*/}
          <div className="bg-primary-foreground p-4 rounded-lg"></div>
          {/*  card list container*/}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <CardList title="Recent Transactions" />
          </div>
        </div>
        {/*  right*/}
        <div className="w-full xl:w-2/3 space-y-6">
          {/*  User card container*/}
          <div className="bg-primary-foreground p-4 rounded-lg"></div>
          {/*  chart container*/}
          <div className="bg-primary-foreground p-4 rounded-lg">
            <AppAreaChart />
          </div>
        </div>
      </div>
    </div>
  );
};
export default SpecificUserPage;
