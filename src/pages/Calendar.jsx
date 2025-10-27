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
["MS4", "M4-Transition", "Milestone", new Date(2026, 0, 1), new Date(2026, 5, 30), null, 100, null],

["MS1-Personas", "Personas", null, new Date(2025, 8, 29), new Date(2025, 9, 14), null, 100, null],
["MS1-UserStories", "User Stories", null, new Date(2025, 8, 29), new Date(2025, 9, 14), null, 100, null],
["MS1-StateOfTheArtAnalysis", "State of the Art Analysis", null, new Date(2025, 8, 29), new Date(2025, 9, 14), null, 100, null],
["MS1-Microsite", "Microsite", null, new Date(2025, 8, 29), new Date(2025, 9, 14), null, 100, null],

["MS1-FunctionalRequirements", "Functional Requirements", null, new Date(2025, 9, 14), new Date(2025, 9, 28), null, 100, null],
["MS1-InitialMockupSketch", "Initial Mockup Sketch", "Everyone", new Date(2025, 9, 14), new Date(2025, 9, 28), null, 100, null],
["MS1-CalendarPlanning", "Calendar Planning", null, new Date(2025, 9, 14), new Date(2025, 9, 28), null, 100, null],
["MS1-Presentation", "Presentation", null, new Date(2025, 9, 14), new Date(2025, 9, 28), null, 100, null],

["MS2-RefineHighLevelArchitecture", "Refine High-Level Architecture", null, new Date(2025, 9, 28), new Date(2025, 10, 8), null, 100, null],
["MS2-RefineMockupSketch", "Refine Mockup Sketch", "Everyone", new Date(2025, 9, 28), new Date(2025, 10, 8), null, 100, null],
["MS2-DefineKnowledgeDatabaseStructure", "Define Knowledge Database Structure", null, new Date(2025, 10, 8), new Date(2025, 10, 18), null, 100, null],
["MS2-LeverageLLMComplianceGuidance", "Leverage LLM to build compliance guidance from norms", null, new Date(2025, 10, 8), new Date(2025, 10, 18), null, 100, null],

["MS3-RefineKnowledgeExtractionUsingLLM", "Refine Knowledge Extraction Using LLM", null, new Date(2025, 10, 19), new Date(2025, 11, 5), null, 100, null],
["MS3-DefineChatBotAPIEndpoints", "Define ChatBot API endpoints", null, new Date(2025, 10, 19), new Date(2025, 11, 5), null, 100, null],
["MS3-DefineKnowledgeExtractionAPIEndpoints", "Define API endpoints for the Knowledge extraction service", null, new Date(2025, 10, 19), new Date(2025, 11, 5), null, 100, null],

["MS3-DevelopChatbotBackendAndUI", "Develop Chatbot Backend and UI", null, new Date(2025, 11, 5), new Date(2025, 11, 16), null, 100, null],
["MS3-DefineUsersRelationalDatabase", "Define Users Relational Database", null, new Date(2025, 11, 5), new Date(2025, 11, 16), null, 100, null],
["MS3-ChatbotHistoryFormatStorage", "Chatbot History Format / Storage", null, new Date(2025, 11, 5), new Date(2025, 11, 16), null, 100, null],

["MS4-TBD", "TBD", null, new Date(2026, 0, 1), new Date(2026, 5, 30), null, 100, null],
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