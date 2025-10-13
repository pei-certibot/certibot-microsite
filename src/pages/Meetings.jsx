import { React, useEffect, useState } from "react";
import MeetingCard from "../components/MeetingCard.jsx";

function Meetings() {
  const [meetings, setMeetings] = useState([]);

  useEffect(() => {
    const loadMeetings = async () => {
      const files = import.meta.glob("/meetings/meeting*.md", { query: "?raw", import: "default" });
      const tempMeetings = [];

      for (const [path, load] of Object.entries(files)) {
        const content = await load();
        const lines = content.split(/\r?\n/).slice(0, 2);
        const firstLine = lines[0]?.replace(/^#+\s*/, "") || "";
        const secondLine = lines[1]?.replace(/^Date:\s*/, "").trim() || "";
        const id = path.match(/meeting(\d+)\.md$/)?.[1] || "";

        tempMeetings.push({ id, title: firstLine, date: secondLine });
      }
      setMeetings(tempMeetings);
    };

    loadMeetings();
  }, []);

  return (
    <div>
      <div className="p-8">
        <h2 className="my-8">Meetings</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-4">
          {meetings.map((m) => ( <MeetingCard key={m.id} id={m.id} title={m.title} date={m.date} /> ))}
        </div>
      </div>
    </div>
  );
}

export default Meetings;
