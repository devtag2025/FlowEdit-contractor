"use client";
import { Eye, MessageSquare, EllipsisVertical } from "lucide-react";
import { stats, projects } from "@/utils/dashboard";
import StatCard from "@/components/Dashboard/StatCard";
import { StatusBadge, ActionButton } from "@/components/Dashboard/StatusBadge";
import { Card, CardContent } from "@/components/ui/card";

const Dashboard = () => {
  return (
    <div>
      <div className="min-h-screen bg-secondary p-4 md:p-8">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h1 className="text-2xl font-bold text-accent mb-1 sm:mb-2">
                Good Evening, Sarah
              </h1>
              <p className="text-base text-slate-700">
                Complete your required steps in the Resources tab to become
                Active.
              </p>
            </div>
            <div className="bg-white/50 py-2 px-3 rounded-full flex items-center gap-4 text-sm w-fit">
              <span className="text-slate-700 font-semibold">Status</span>
              <span className="bg-white text-primary rounded-full py-1 px-3 font-bold">
                Inactive
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>

          <div className="space-y-6">
            <Card className="bg-tertiary">
              <CardContent>
                <h2 className="text-xl md:text-2xl font-bold text-accent mb-8">
                  Assigned Projects
                </h2>

                <div className="w-full overflow-x-auto">
                  <table className="min-w-[900px] w-full border-collapse">
                    <thead>
                      <tr className="text-xs font-bold uppercase text-slate-700">
                        <th scope="col" className="px-7 py-4 text-left">
                          Project
                        </th>
                        <th scope="col" className="px-7 py-4 text-left">
                          Client
                        </th>
                        <th scope="col" className="px-7 py-4 text-left">
                          Status
                        </th>
                        <th scope="col" className="px-7 py-4 text-left">
                          Due Date
                        </th>
                        <th scope="col" className="px-7 py-4 text-left">
                          Actions
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      {projects.map((project) => (
                        <tr
                          key={project.id}
                          className="text-sm md:text-base text-accent border-t-2 border-white hover:bg-gray-200 transition"
                        >
                          <td className="px-6 py-4 font-bold">
                            {project.name}
                          </td>

                          <td className="px-6 py-4">{project.client}</td>

                          <td className="px-6 py-4">
                            <div className="flex items-center">
                              <StatusBadge status={project.status} />
                            </div>
                          </td>

                          <td className="px-6 py-4">{project.dueDate}</td>

                          <td className="px-6 py-4">
                            <div className="flex gap-2">
                              <ActionButton icon={Eye} label="Read" />
                              <ActionButton
                                icon={MessageSquare}
                                label="Comments"
                              />
                              <ActionButton
                                icon={EllipsisVertical}
                                label="Options"
                              />
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
