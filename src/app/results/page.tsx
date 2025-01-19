"use client";

import { Pie, PieChart, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, MessageCircle, Copy } from "lucide-react";

// Pie chart data
const chartData = [
  { name: "ACCA", value: 25, fill: "#FF6F61" },
  { name: "CA", value: 22.5, fill: "#FFA07A" },
  { name: "CMA IND", value: 21.5, fill: "#FF8C00" },
  { name: "CMA USA", value: 16.7, fill: "#FFD700" },
  { name: "CS", value: 16, fill: "#FFA500" },
];


const renderCustomLabel = ({ name, value }: any) => `${name}: ${value}%`;

export function ResultPage() {
  return (
    <div className="px-4 sm:px-6 lg:px-8 pb-10"> 
      <Card className="max-w-[900px] mx-auto">
       
        <CardHeader className="text-left">
          <p className="text-sm text-muted-foreground mb-1">You are most suitable for:</p>
          <CardTitle className="text-xl font-bold">
            Association of Chartered Certified Accountant{" "}
            <span className="text-orange-500">(ACCA)</span>
          </CardTitle>
        </CardHeader>

        <CardContent className="flex flex-col items-center gap-6">
          {/* Pie Chart */}
          <div className="w-full flex justify-center items-center">
            <div className="w-full max-w-[500px] h-[280px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius="80%" 
                    label={renderCustomLabel}
                  >
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Text Content */}
          <div className="text-left max-w-[700px] px-4">
            <p className="text-md text-muted-foreground leading-relaxed">
              Association of Chartered Certified Accountants are professionals who are responsible for the financial
              management of companies, financial reporting, auditing, taxation, and other financial aspects of the
              business. They have a global recognition and are highly sought after in the finance industry for their
              expertise. Join this elite group and make a global impact.
            </p>
          </div>
        </CardContent>

        {/* Footer Buttons */}
        <CardFooter className="flex flex-col md:flex-row gap-3 justify-center mt-4 w-full px-4">
          <Button className="bg-black text-white rounded-full flex items-center gap-2 px-6 py-3 w-full md:w-auto">
            <BookOpen size={18} />
            View Course Details
          </Button>
          <Button
            variant="outline"
            className="rounded-full flex items-center gap-2 px-6 py-3 w-full md:w-auto"
          >
            <MessageCircle size={18} />
            Consult Assistant
          </Button>
          <Button
            variant="outline"
            className="rounded-full flex items-center gap-2 px-6 py-3 w-full md:w-auto"
          >
            <Copy size={18} />
            Copy URL
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export default ResultPage;
