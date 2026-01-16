import {
  Clock,
  DollarSign,
  FileExclamationPoint,
  MessageCircle,
} from "lucide-react";
import React from "react";

const NotificationBar = ({ notifications }) => {
  const typeToIcon = {
    project: Clock,
    billing: DollarSign,
    system: FileExclamationPoint,
    other: MessageCircle,
  };

  return (
    <div className="space-y-4 mt-4">
      {/* Desktop */}
      {notifications.map((notification) => {
        const Icon = typeToIcon[notification.type] || MessageCircle;
        return (
          <div
            key={notification.id}
            className="hidden bg-white rounded-2xl p-5 md:flex justify-between hover:bg-gray-300"
          >
            <div className="flex items-center justify-center gap-4">
              <div className="bg-primary p-3 rounded-full text-white">
                <Icon className="w-6 h6" />
              </div>

              <div className="flex flex-col gap-1">
                <h4 className="text-accent font-bold text-lg mb-1">
                  {notification.title}
                </h4>
                <p className="text-slate-700">{notification.description}</p>
              </div>
            </div>

            <span className="text-sm font-semibold text-slate-700 whitespace-nowrap">
              {notification.time}
            </span>
          </div>
        );
      })}

      {/* Mobile */}
      {notifications.map((notification) => {
        const Icon = typeToIcon[notification.type] || MessageCircle;
        return (
          <div
            key={notification.id}
            className="md:hidden bg-tertiary rounded-lg p-3 flex flex-col gap-2"
          >
            <div className="flex items-center justify-between">
              <div className="bg-primary p-2 rounded-full text-white">
                <Icon className="w-4 h-4" />
              </div>
              <span className="text-xs text-slate-600 whitespace-nowrap">
                {notification.time}
              </span>
            </div>

            <div>
              <h4 className="text-accent font-bold mb-1">
                {notification.title}
              </h4>
              <p className="text-slate-600 text-sm">
                {notification.description}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default NotificationBar;
