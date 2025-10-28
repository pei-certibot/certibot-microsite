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
["MS1", "M1-Inception", "Milestone", new Date(2025, 8, 29), new Date(2025, 9, 28), null, 100, null],
["MS2", "M2-Elaboration", "Milestone", new Date(2025, 9, 28), new Date(2025, 10, 18), null, 100, null],
["MS3", "M3-Construction", "Milestone", new Date(2025, 10, 19), new Date(2025, 11, 16), null, 100, null],
["MS4", "M4-Transition", "Milestone", new Date(2025, 11, 16), new Date(2026, 5, 1), null, 100, null],

["MS1-StateOfTheArtAnalysis", "State of the Art Analysis", null, new Date(2025, 8, 29), new Date(2025, 9, 14), null, 100, null],
["MS1-Personas", "Personas", null, new Date(2025, 8, 29), new Date(2025, 9, 20), null, 100, null],
["MS1-UserStories", "User Stories", null, new Date(2025, 8, 29), new Date(2025, 9, 24), null, 100, null],
["MS1-Microsite", "Microsite", null, new Date(2025, 9, 3), new Date(2025, 9, 28), null, 100, null],

["MS1-FunctionalRequirements", "Functional Requirements", null, new Date(2025, 9, 9), new Date(2025, 9, 18), null, 100, null],
["MS1-InitialMockupSketch", "Initial Mockup Sketch", null, new Date(2025, 9, 12), new Date(2025, 9, 22), null, 100, null],
["MS1-Presentation", "Presentation", null, new Date(2025, 9, 22), new Date(2025, 9, 28), null, 100, null],
["MS1-CalendarPlanning", "Calendar Planning", null, new Date(2025, 9, 23), new Date(2025, 9, 28), null, 100, null],
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
        <div className="w-1/8 relative hidden sm:block"><div className="absolute bottom-0"><BackButton /></div></div>
        <div className="w-3/4">
            <h2 className="hidden sm:block">Calendar</h2>
            <h3 className="sm:hidden whitespace-nowrap">Calendar</h3>
        </div>
        <div className="w-1/8 relative ml-auto"><div className="absolute bottom-0 right-0"><ToggleViewButton variable={showGantt} onClick={() => setShowGantt((v) => !v)} icon1={<RiFileListLine />} icon2={<RiBarChartHorizontalFill />} title1="View as List" title2="View as Gantt Chart" /></div></div>
      </div>

      {showGantt ? ( <Chart chartType="Gantt" data={data} options={options} /> ) : ( <CalendarList data={calendario} /> )}
    </div>
  );
}

export default Calendar;