"use client";
import { TrendingUp } from "lucide-react";
const StatCard = ({ title, percentage, subtitle, time, trend }) => (
  <div className="bg-tertiary rounded-2xl p-6 space-y-4">
    <div className="flex items-center justify-between">
      <p className="text-sm text-accent font-bold mb-1">{title}</p>
      <span className="bg-white text-slate-700 text-xs rounded-full px-2 py-1">
        {time}
      </span>
    </div>

    <h3 className="text-3xl md:text-4xl font-bold text-accent">{percentage}</h3>
    <p className="text-sm text-slate-700 mt-1">{subtitle}</p>

    <div className="flex items-center justify-between">
      {trend && (
        <div className="flex items-center gap-1 text-sm font-bold text-green-500 rounded-full">
          <TrendingUp className="w-4 h-4" />
          {trend}
        </div>
      )}
    </div>
  </div>
);
export default StatCard;
