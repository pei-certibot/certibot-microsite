import React, { useState } from "react";
import { Chart } from "react-google-charts";
import CalendarList from "../components/CalendarList.jsx";
import calendario from "../../public/assets/calendar.json";
import { RiBarChartHorizontalFill, RiFileListLine } from "react-icons/ri";
import ToggleViewButton from "../components/ToggleButton.jsx";
import BackButton from "../components/BackButton.jsx";

const data = [
  [
    { type: "string", label: "Task ID" },
    { type: "string", label: "Task Name" },
    { type: "string", label: "Responsible" },
    { type: "date", label: "Start Date" },
    { type: "date", label: "End Date" },
    { type: "number", label: "Duration" },
    { type: "number", label: "Percent Complete" },
    { type: "string", label: "Dependencies" },
  ],
  ["MS1", "Milestone 1 Preparation", "Milestone", new Date(2025, 8, 29), new Date(2025, 9, 28), null, 100, null], 
  ["MS2", "Milestone 2 Preparation", "Milestone", new Date(2025, 9, 28), new Date(2025, 10, 18), null, 100, null],
  ["MS3", "Milestone 3 Preparation", "Milestone", new Date(2025, 10, 18), new Date(2025, 11, 16), null, 100, null], 
  ["MS1-Personas", "Personas", "Paulo", new Date(2025, 9, 6), new Date(2025, 9, 28), null, 100, null], 
  ["MS1-UserStories", "User Stories", "Manel", new Date(2025, 8, 29), new Date(2025, 9, 13), null, 100, null],
  ["MS1-MicroSite", "Microsite", "Paulo", new Date(2025, 9, 6), new Date(2025, 9, 28), null, 100, null], 
  ["MS1-Calendar", "Calendar", "Paulo", new Date(2025, 9, 6), new Date(2025, 9, 28), null, 100, null], 
  ["MS1-Context", "Context / State of the Art", "Paulo", new Date(2025, 9, 6), new Date(2025, 9, 28), null, 100, null], 
  ["MS1-Arch", "Architecture", "João", new Date(2025, 9, 6), new Date(2025, 9, 28), null, 100, null], 
  ["MS1-Presentation", "Presentation", "Maria", new Date(2025, 9, 6), new Date(2025, 9, 28), null, 100, null], 
];

const options = {
  backgroundColor: "transparent",
  fontName: "Montserrat",
  height: data.length * 40 + 50,
};


function Calendar() {
  const [showGantt, setShowGantt] = useState(true);

  return (
    <div className="px-4 lg:px-20 py-6">
      <div className="flex mb-8">
        <div className="w-1/3 relative hidden sm:block"><div className="absolute bottom-0"><BackButton /></div></div>
        <div className="w-1/3">
            <h2 className="hidden sm:block">Calendar</h2>
            <h3 className="sm:hidden">Calendar</h3>
        </div>
        <div className="w-1/3 relative ml-auto"><div className="absolute bottom-0 right-0"><ToggleViewButton variable={showGantt} onClick={() => setShowGantt((v) => !v)} icon1={<RiFileListLine />} icon2={<RiBarChartHorizontalFill />} title1="View as List" title2="View as Gantt Chart" /></div></div>
      </div>

      {showGantt ? ( <Chart chartType="Gantt" data={data} options={options} /> ) : ( <CalendarList data={calendario} /> )}
    </div>
  );
}

export default Calendar;