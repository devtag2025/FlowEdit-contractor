"use client";

export const StatusBadge = ({ status }) => {
  const styles = {
    Review: "text-primary border border-primary",
    Processing: "bg-primary text-white",
    Completed: "bg-green-100 text-green-700",
    Error: "bg-danger/10 text-danger border-danger",
  };
  return (
    <div
      className={`w-fit rounded-full px-4 py-1 text-sm font-medium ${styles[status]}`}
    >
      {status}
    </div>
  );
};

export const ActionButton = ({ icon: Icon, onClick, label }) => (
  <button
    onClick={onClick}
    className="w-9 h-9 flex items-center justify-center rounded-lg  hover:bg-white border border-accent/10 transition-colors cursor-pointer"
    aria-label={label}
  >
    <Icon className="w-4 h-4 text-slate-700" />
  </button>
);
