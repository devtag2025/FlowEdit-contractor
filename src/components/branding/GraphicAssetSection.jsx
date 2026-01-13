import React from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../common/Button";
import { Image, Upload } from "lucide-react";

const GraphicAssetSection = () => {
  const assets = Array.from({ length: 4 });
  return (
    <Card className="bg-tertiary rounded-2xl">
      <CardContent className="flex flex-col gap-5">
        <header>
          <h3 className="text-xl md:text-2xl text-accent font-semibold mb-2">
            Graphic Assets
          </h3>

          <p className="font-medium text-slate-600 text-sm md:text-base">
            Upload images, patterns, icons, or other visual essentials used in
            your projects.
          </p>
        </header>

        <div>
          <Button className="flex items-center gap-2 bg-primary px-4 py-2 rounded-lg font-bold text-white text-xs md:text-base shadow-lg">
            <Upload size={16} />
            Upload Assets
          </Button>
        </div>

        <div className="flex gap-2 md:gap-4">
          {assets.map((_, index) => (
            <div
              key={index}
              className="w-20 md:w-35 aspect-square rounded-lg border md:border-2 border-dashed border-slate-300 bg-white/60 flex items-center justify-center hover:border-primary transition"
            >
              <Image className="text-slate-400" size={18} />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default GraphicAssetSection;
