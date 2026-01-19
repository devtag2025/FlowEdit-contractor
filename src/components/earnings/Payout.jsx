import { Download } from "lucide-react";
import { Button } from "../common/Button";
import { Card, CardContent } from "../ui/card";
import { earningSummary, payouts } from "@/utils/earnings";

const Payout = () => {
  return (
    <Card className="bg-tertiary pt-8 md:rounded-3xl">
      <CardContent className="flex flex-col gap-6">
        <h3 className="text-xl font-semibold md:text-2xl text-accent md:font-bold">
          Earnings Summary
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6">
          {earningSummary.map((earning) => (
            <Card
              className="bg-white border-0 md:rounded-3xl"
              key={earning.title}
            >
              <CardContent className="flex flex-col gap-6">
                <p className="uppercase text-slate-700  text-xs md:text-sm font-semibold">
                  {earning.title}
                </p>
                <h2 className="text-3xl md:text-5xl text-accent font-bold">
                  {earning.earning}
                </h2>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="w-full overflow-x-auto">
          <table className="min-w-[900px] w-full border-collapse">
            <thead>
              <tr className="text-xs font-semibold uppercase text-slate-700">
                <th className="px-6 py-5 text-left">Project</th>
                <th className="px-6 py-5 text-left">Client</th>
                <th className="px-6 py-5 text-left">Status</th>
                <th className="px-6 py-5 text-left">Amount</th>
                <th className="px-6 py-5 text-left">Date Paid</th>
                <th className="px-6 py-5 text-left">Bonuses Earned</th>
              </tr>
            </thead>

            <tbody>
              {payouts.map((payout) => (
                <tr
                  key={payout.id}
                  className="text-sm md:text-base font-bold text-accent border-t-2 border-white hover:bg-gray-200 transition"
                >
                  <td className="px-6 py-5">{payout.project}</td>
                  <td className="px-6 py-5">{payout.client}</td>

                  <td className="px-6 py-5">
                    <span
                      className={`inline-flex px-4 py-1.5 text-xs font-bold rounded-full ${
                        payout.status === "Paid"
                          ? "bg-green-300 text-green-700"
                          : "bg-orange-200 text-orange-700"
                      }`}
                    >
                      {payout.status}
                    </span>
                  </td>

                  <td className="px-6 py-5">{payout.amount}</td>
                  <td className="px-6 py-5">{payout.date}</td>
                  <td className="px-6 py-5 text-green-600">{payout.bonus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="flex justify-center md:justify-end mt-3">
          <Button className="w-full md:w-fit flex items-center justify-center gap-2 bg-primary px-4 py-3 rounded-full shadow-lg font-bold text-white hover:shadow-xl">
            <Download className="w-4 h-4" />
            Download Statement
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Payout;
