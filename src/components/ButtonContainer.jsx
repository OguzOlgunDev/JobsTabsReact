function ButtonContainer({ jobs, setCurrentJob, currentJob }) {
  return (
    <div className="btn-container">
      {jobs.map((job, index) => {
        return (
          <button
            key={job.id}
            onClick={() => setCurrentJob(index)}
            type="button"
            className={index === currentJob ? "job-btn active-btn" : "job-btn"}
          >
            {job.company}
          </button>
        );
      })}
    </div>
  );
}

export default ButtonContainer;
