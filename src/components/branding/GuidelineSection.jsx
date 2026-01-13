import React from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../common/Button";
import { FileText } from "lucide-react";

const GuidelineSection = () => {
  return (
    <Card className="bg-tertiary rounded-2xl">
      <CardContent className="flex flex-col gap-5">
        <header>
          <h3 className="text-xl md:text-2xl text-accent font-semibold mb-2">
            Brand Guidelines
          </h3>

          <p className="font-medium text-slate-600 text-sm md:text-base ">
            Upload your existing brand book or brand guides.
          </p>
        </header>

        <div className="flex flex-col space-y-4">
          <h4 className="text-accent font-semibold">
            Brand Website or GuideURL
          </h4>
          <input
            type="text"
            placeholder="https://yourbrand.com/guidelines"
            className="w-full rounded-lg bg-white p-4 focus:outline-none text-sm md:text-base"
          />

          <h4 className="text-accent font-semibold ">Upload Brand Guide PDF</h4>

          <div>
            <Button
              type="button"
              className="flex items-center px-4 py-3 gap-2 bg-pink-200  rounded-lg font-bold text-blue-500 text-xs md:text-base"
            >
              <FileText size={18} className="text-purple-500" />
              Upload Files
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GuidelineSection;
