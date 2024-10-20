
import React, { useRef } from "react";
import ScheduleCustomComponent from "./components/ScheduleCustom";
import { getBookingsData } from "@/libs/actions/bookingActions";

export default async function page() {
  const data = await getBookingsData();
  console.log("check>>", data);
  return (
    <div>
     <ScheduleCustomComponent bookingsData={data}/>
    </div>
  );
}

