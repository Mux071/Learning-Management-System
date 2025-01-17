import AttendanceChart from "@/components/AttendanceChart";
import CountChart from "@/components/CountChart";
import UserCard from "@/components/UserCard";

const AdminPage = () => {
  return (
    <div className="p-4 flex gap-4 flex-col md:flex-row">
      {/* Left */}

      <div className="w-full lg:2/3 flex flex-col gap-8">
        {/* usercard */}
        <div className="flex gap-4 justify-between flex-wrap ">
          <UserCard type="student" />
          <UserCard type="parent" />
          <UserCard type="teacher" />
          <UserCard type="staff" />
        </div>
        {/* MIDDLE CHARTS */}
        <div className="flex gap-4 flex-col lg:flex-row">
          {/* COUNTCHART */}
          <div className="w-full lg:w-1/3 h-[450px] ">
            <CountChart />
          </div>
          {/* AttendanceChart */}
          <div className="w-full lg:w-2/3  h-[450px] ">
            <AttendanceChart />
          </div>
        </div>
        {/* Bottom CHARTS */}
        <div className="">
          
        </div>
      </div>
      {/* Right */}

      <div className="w-full lg:1/3">R</div>
    </div>
  );
};

export default AdminPage;
