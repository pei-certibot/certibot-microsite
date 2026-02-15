function TaskList({ tasks = [], keyPrefix = "" }) {
  return (
    <ul> {tasks.map((task, tIdx) => { const responsibles = Array.isArray(task.responsibles) && task.responsibles.length ? ` (${task.responsibles.join(", ")})` : "";
        return ( <li key={`${keyPrefix}-t-${tIdx}`}> <span className="font-bold">- {task.description}</span> <span className="font-normal">{responsibles}</span> </li> );})}
    </ul>
  );
}


function CalendarList({ data = { milestones: [] } }) {
  return (
    <div>
      <div className="hidden md:grid grid-cols-[30%_25%_45%] font-semibold md:px-12 mb-4 mx-auto lg:w-[80%] md:w-full">
        <div className="text-left">Milestone</div>
        <div className="text-left">Date</div>
        <div className="text-left">Task List</div>
      </div>
      <hr className="hidden md:block lg:w-[80%] md:w-full mx-auto" />

      <div className="md:px-12 mx-auto lg:w-[80%] text-left">
        {data.milestones.map((milestone, mIdx) => (
          <div key={`${mIdx}-${milestone.title}`}>
            {milestone.periods.map((period, pIdx) => (
              <div key={`${mIdx}-${pIdx}`}>
                <div className="grid grid-cols-1 md:grid-cols-[30%_25%_45%] items-start py-4">
                  <div className="font-semibold underline"> {pIdx === 0 && ( <a href={milestone.url}> {milestone.title} </a> )} </div>
                  <div>{period.start} - {period.end}</div>
                  <div> <TaskList tasks={period.tasks} keyPrefix={`${mIdx}-${pIdx}`} /> </div>
                </div>
              </div>
            ))}
            <hr className="hidden md:block w-full mx-auto" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default CalendarList;