import Duties from "./Duties";

function JobInfo({ jobs, currentJob }) {
  const { title, company, duties, date } = jobs[currentJob];

  return (
    <article className="job-info">
      <h3>{title}</h3>
      <span className="job-company">{company}</span>
      <p className="job-date">{date}</p>
      <Duties duties={duties} />
    </article>
  );
}

export default JobInfo;
