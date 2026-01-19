"use client";

import { Button } from "@/components/common/Button";
import NotificationBar from "@/components/notification/NotificationBar";
import { Card, CardContent } from "@/components/ui/card";
import { btns, notifications } from "@/utils/notification";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const NotificationPage = () => {
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
