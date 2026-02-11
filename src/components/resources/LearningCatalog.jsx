"use client";

import { useState } from "react";
import { PlayCircle, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const lessons = [
  {
    id: 1,
    title: "Navigating the Dashboard",
    duration: "3:45",
    status: "Not Started",
  },
  {
    id: 2,
    title: "Setting Up Your Profile",
    duration: "4:20",
    status: "In Progress",
  },
  {
    id: 3,
    title: "Understanding Editing Tasks",
    duration: "5:30",
    status: "Completed",
  },
];

const LearningCatalog = () => {
  const [activeLesson, setActiveLesson] = useState(lessons[0]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Left Section */}
      <div className="lg:col-span-2 space-y-4">
        <h2 className="text-xl font-semibold text-accent">Learning Catalog</h2>

        {lessons.map((lesson) => (
          <Card
            key={lesson.id}
            className="bg-tertiary cursor-pointer hover:shadow-md transition"
            onClick={() => setActiveLesson(lesson)}
          >
            <CardContent className="p-4 flex items-center justify-between">
              <div>
                <h3 className="font-medium">{lesson.title}</h3>
                <p className="text-xs text-muted-foreground">
                  {lesson.duration}
                </p>
              </div>

              {lesson.status === "Completed" ? (
                <CheckCircle className="text-green-500" />
              ) : (
                <span className="text-xs text-muted-foreground">
                  {lesson.status}
                </span>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Right Preview */}
      <Card className="bg-tertiary">
        <CardContent className="p-4 space-y-4">
          <h3 className="font-semibold">{activeLesson.title}</h3>

          <div className="h-[260px] bg-secondary rounded-lg flex items-center justify-center">
            <PlayCircle className="w-14 h-14 text-muted-foreground" />
          </div>

          <div className="space-y-2 text-sm">
            <p className="font-medium">Lesson Checklist</p>
            <ul className="list-disc pl-4 text-muted-foreground space-y-1">
              <li>Access the dashboard</li>
              <li>Review resources</li>
              <li>Customize profile settings</li>
            </ul>
          </div>

          <div className="flex justify-end gap-2">
            <Button variant="secondary">Close</Button>
            <Button>Mark as Complete</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LearningCatalog;
