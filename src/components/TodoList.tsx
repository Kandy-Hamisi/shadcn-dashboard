"use client";

import React, { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

const TodoList = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="">
      <h1 className="text-lg font-medium mb-4">Todo List</h1>
      {/*    calendar */}
      <Popover>
        <PopoverTrigger asChild>
          <Button className="cursor-pointer w-full">
            <CalendarIcon />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="p-0 w-auto">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(date) => {
              setDate(date);
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>
      {/*    list*/}
      <ScrollArea className="max-h-[400px] mt-4 overflow-y-auto">
        <div className="flex flex-col gap-4">
          {/*  list item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item-1" checked />
              <label htmlFor="item-1" className="text-sm text-muted-foreground">
                Accept terms and conditions
              </label>
            </div>
          </Card>
          {/*  list item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item-1" />
              <label htmlFor="item-1" className="text-sm text-muted-foreground">
                Accept terms and conditions
              </label>
            </div>
          </Card>
          {/*  list item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item-1" checked />
              <label htmlFor="item-1" className="text-sm text-muted-foreground">
                Accept terms and conditions
              </label>
            </div>
          </Card>
          {/*  list item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item-1" />
              <label htmlFor="item-1" className="text-sm text-muted-foreground">
                Accept terms and conditions
              </label>
            </div>
          </Card>
          {/*  list item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item-1" checked />
              <label htmlFor="item-1" className="text-sm text-muted-foreground">
                Accept terms and conditions
              </label>
            </div>
          </Card>
          {/*  list item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item-1" />
              <label htmlFor="item-1" className="text-sm text-muted-foreground">
                Accept terms and conditions
              </label>
            </div>
          </Card>
          {/*  list item */}
          <Card className="p-4">
            <div className="flex items-center gap-4">
              <Checkbox id="item-1" checked />
              <label htmlFor="item-1" className="text-sm text-muted-foreground">
                Accept terms and conditions
              </label>
            </div>
          </Card>
        </div>
      </ScrollArea>
    </div>
  );
};
export default TodoList;
