export const workflowSteps = [
  {
    id: "submitted",
    label: "Submitted",
    roles: [{ name: "Sarah Mitchell", role: "Client", color: "bg-[#5C6BC0]" }],
  },
  {
    id: "processing",
    label: "Processing",
    roles: [
      { name: "James Chen", role: "Offline Editor", color: "bg-[#EF5350]" },
      { name: "Alex Lopez", role: "Primary Editor", color: "bg-[#26A69A]" },
      {
        name: "Lucas Johnson",
        role: "Finishing Editor",
        color: "bg-[#AB47BC]",
      },
    ],
  },
  {
    id: "review",
    label: "Review",
    roles: [
      { name: "Admin", role: "Primary Reviewer", color: "bg-[#FFA726]" },
      { name: "Sarah Mitchell", role: "Client", color: "bg-[#5C6BC0]" },
    ],
  },
  {
    id: "revision",
    label: "Revision",
    roles: [
      { name: "Taylor Davis", role: "Finishing Editor", color: "bg-[#AB47BC]" },
    ],
  },
  {
    id: "completed",
    label: "Completed",
    roles: [
      { name: "Taylor Davis", role: "Finishing Editor", color: "bg-[#AB47BC]" },
    ],
  },
  {
    id: "published",
    label: "Published",
    roles: [{ name: "Admin", role: "Reviewer", color: "bg-[#FFA726]" }],
  },
];
