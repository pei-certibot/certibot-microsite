import CalendarList from "../components/CalendarList.jsx";
import calendario from "../../public/assets/calendar.json";
import BackButton from "../components/BackButton.jsx";

function Calendar() {
    return (
        <div className="px-6 md:px-12 lg:px-20 py-10">
            <div className="flex items-end gap-4 mb-10">
                <BackButton />
                <div>
                    <p className="text-primary font-semibold text-xs uppercase tracking-[0.2em] mb-1">
                        Project Timeline
                    </p>
                    <h2 className="text-left font-bold leading-none">Calendar</h2>
                </div>
            </div>

            <CalendarList data={calendario} />
        </div>
    );
}

export default Calendar;
