function CalendarList({ data = { milestones: [] } }) {
    return (
        <div className="space-y-5">
            {data.milestones.map((milestone, mIdx) => (
                <div key={mIdx} className="bg-base-100 border border-base-300 rounded-2xl overflow-hidden">

                    {/* Milestone header */}
                    <div className="px-6 py-4 flex items-center gap-4 border-b border-base-300"
                         style={{ background: "rgba(0,113,223,0.055)" }}>
                        <span className="text-xs font-bold text-primary/70 tracking-[0.2em] flex-shrink-0"
                              style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                            {String(mIdx + 1).padStart(2, "0")}
                        </span>
                        <a href={milestone.url}
                           className="font-bold text-base-content hover:text-primary transition-colors duration-150 text-[1.05rem]"
                           style={{ fontFamily: "'Outfit', system-ui, sans-serif" }}>
                            {milestone.title.replace(/-/g, " — ")}
                        </a>
                    </div>

                    {/* Periods */}
                    {milestone.periods.map((period, pIdx) => (
                        <div key={pIdx}
                             className="px-6 py-5 border-b border-base-300/50 last:border-0">
                            <div className="flex flex-col md:flex-row gap-5">

                                {/* Date column */}
                                <div className="flex md:flex-col items-center md:items-start gap-2 md:gap-1 md:w-40 flex-shrink-0 md:pt-0.5">
                                    <span className="text-xs font-semibold px-3 py-1 rounded-full text-primary bg-primary/10 whitespace-nowrap">
                                        {period.start}
                                    </span>
                                    <span className="text-xs text-base-content/30 hidden md:block">↓</span>
                                    <span className="text-xs font-semibold px-3 py-1 rounded-full text-base-content/50 bg-base-200 whitespace-nowrap">
                                        {period.end}
                                    </span>
                                </div>

                                {/* Tasks */}
                                <div className="flex-1 space-y-2">
                                    {period.tasks.map((task, tIdx) => (
                                        <div key={tIdx}
                                             className="flex items-center gap-3 rounded-xl px-4 py-2.5 bg-base-200/50 hover:bg-base-200 transition-colors duration-150">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary/50 flex-shrink-0" />
                                            <span className="text-sm text-base-content/80 flex-1 font-medium">
                                                {task.description}
                                            </span>
                                            {task.responsibles?.length > 0 && (
                                                <div className="flex flex-wrap gap-1 justify-end">
                                                    {task.responsibles.map((r, rIdx) => (
                                                        <span key={rIdx}
                                                              className="text-[11px] font-semibold text-primary/80 bg-primary/10 px-2.5 py-0.5 rounded-full whitespace-nowrap">
                                                            {r}
                                                        </span>
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default CalendarList;
