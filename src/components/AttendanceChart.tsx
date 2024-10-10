"use client";

import Image from "next/image";
import {
  BarChart,
  Bar,
  Rectangle,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Mon",
    present: 60,
    absent: 40,
  },
  {
    name: "Tue",
    present: 30,
    absent: 70,
  },
  {
    name: "Wed",
    present: 80,
    absent: 20,
  },
  {
    name: "Thu",
    present: 75,
    absent: 25,
  },
  {
    name: "Fri",
    present: 85,
    absent: 15,
  },
  {
    name: "Sat",
    present: 65,
    absent: 35,
  },
];

const AttendanceChart = () => {
  return (
    <div className="bg-white h-full rounded-lg p-4" > 
      <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold">Attendance</h1>
        <Image src="/moreDark.png" alt="" width={20} height={20} />
      </div>
      <ResponsiveContainer width="100%" height="90%">
        <BarChart width={500} height={300} data={data} barSize={20}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#ddd" />
          <XAxis dataKey="name" axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false} />
          <YAxis axisLine={false} tick={{fill:"#d1d5db"}} tickLine={false} />
          <Tooltip contentStyle={{borderRadius:"10px" , borderColor:"lightgray"}} />
          <Legend align="left" verticalAlign="top" wrapperStyle={{paddingTop:"20px", paddingBottom: "40px"}} />
          <Bar
            dataKey="present"
            fill="#FAE27C"
            legendType="circle"
            radius={[10,10,0,0]}
          />
          <Bar
            dataKey="absent"
            fill="#C3EBFA"
            radius={[10,10,0,0]}
            legendType="circle"
          />
          
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AttendanceChart;
