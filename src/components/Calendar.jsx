import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import ReactMarkdown from "react-markdown";
import events from "/assets/calendar_events.json";

function Calendar() {
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleEventClick = (clickInfo) => {
    setSelectedEvent({
      title: clickInfo.event.title,
      date: clickInfo.event.startStr,
      description: clickInfo.event.extendedProps.description,
      notes: clickInfo.event.extendedProps.notes
    });
  };

  const closeModal = () => setSelectedEvent(null);

  return (
    <div className="py-8 sm:px-10 md:px-42">

      <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" events={events} height="auto" eventClick={handleEventClick} />

      {selectedEvent && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={closeModal}></div>
          
          <div className="bg-white p-6 rounded-2xl shadow-lg max-w-lg w-full relative z-10">
            <h3 className="text-xl font-bold mb-2">{selectedEvent.title}</h3>
            <p className="text-gray-600 mb-1">
              <strong>Date:</strong> {selectedEvent.date}
            </p>


            {selectedEvent.description && ( <p className="text-gray-700 mb-4">{selectedEvent.description}</p> )}

            {selectedEvent.notes && ( <div className="prose prose-sm max-w-none text-left"> <ReactMarkdown>{selectedEvent.notes}</ReactMarkdown> </div> )}

          </div>
        </div>
      )}
    </div>
  );
}

export default Calendar;
