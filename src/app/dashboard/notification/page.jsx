"use client";

import { Button } from "@/components/common/Button";
import NotificationBar from "@/components/notification/NotificationBar";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const NotificationPage = () => {
  const btns = [
    {
      label: "All",
      type: "all",
    },
    {
      label: "Project Updates",
      type: "project",
    },
    {
      label: "System Alerts",
      type: "system",
    },
    {
      label: "Billing",
      type: "billing",
    },
  ];

  const notifications = [
    {
      id: 1,
      title: "Project Deadline approaching",
      description: "Brand Refresh Assets is due in 2 days - Submit for review",
      type: "project",
      time: "2 hours ago",
    },
    {
      id: 2,
      title: "Payment Recieved",
      description: "$2,500 deposited for Social Media Campaign project",
      type: "billing",
      time: "5 hours ago",
    },
    {
      id: 3,
      title: "New project assigned",
      description:
        "Website Redesign for Startup Labs - Review the brief and start planing",
      type: "project",
      time: "1 day ago",
    },
    {
      id: 4,
      title: "New message from client",
      description:
        "Acme Corp sent feedbak on Product Launch Video - 3 new comments",
      type: "other",
      time: "2 day ago",
    },
    {
      id: 5,
      title: "Pharetra pharetra eget enim massa et",
      description:
        "Choose the plan that best fits your content needs. All plans include professional editing and fast delivery.",
      type: "billing",
      time: "2 hours ago",
    },
    {
      id: 6,
      title: "Pharetra pharetra eget enim massa et",
      description:
        "Choose the plan that best fits your content needs. All plans include professional editing and fast delivery.",
      type: "system",
      time: "2 hours ago",
    },
    {
      id: 7,
      title: "Pharetra pharetra eget enim massa et",
      description:
        "Choose the plan that best fits your content needs. All plans include professional editing and fast delivery.",
      type: "other",
      time: "2 hours ago",
    },
  ];

  const [active, setActive] = useState("All");

  const activeBtn = btns.find((b) => b.label === active);

  const filteredNotifications =
    activeBtn?.type === "all"
      ? notifications
      : notifications.filter((n) => n.type === activeBtn?.type);

  return (
    <main className="min-h-screen px-0 md:px-8 md:py-5 pb-10 ">
      <Card className="bg-transparent shadow-none border-none md:bg-tertiary md:rounded-3xl">
        <CardContent>
          <h1 className="text-accent font-bold text-2xl md:text-3xl">
            Notifications
          </h1>

          <div className="flex flex-wrap md:gap-2  my-4 md:my-8">
            {btns.map((btn) => (
              <Button
                key={btn.label}
                onClick={() => setActive(btn.label)}
                className={`text-sm md:text-base font-bold px-3 md:px-4 py-2  rounded-full ${
                  active === btn.label
                    ? `bg-primary text-white shadow-sm`
                    : `text-primary`
                }`}
              >
                {btn.label}
              </Button>
            ))}
          </div>

          <section className="flex justify-between items-center bg-blue-200 rounded-lg md:rounded-2xl p-2 md:p-6 gap-2">
            <div className="flex flex-col">
              <h3 className="text-accent font-bold text-lg mb-2">
                Important updates
              </h3>
              <p className="text-accent text-xs md:text-base">
                New payment processing system launches February 1st — Update
                your Stripe account
              </p>
            </div>

            <div className="hidden md:block bg-white p-2 rounded-full hover:bg-primary">
              <Link href="/dashboard">
                <ArrowRight className="flex items-center text-primary w-6 h-6 md:w-6 md:h-6 hover:text-white" />
              </Link>
            </div>
          </section>

          <NotificationBar notifications={filteredNotifications} />
        </CardContent>
      </Card>
    </main>
  );
};

export default NotificationPage;
