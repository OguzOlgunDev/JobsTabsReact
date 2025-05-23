const url = "https://www.course-api.com/react-tabs-project";

import { useState, useEffect } from "react";

import JobInfo from "./components/JobInfo";
import ButtonContainer from "./components/ButtonContainer";
import { use } from "react";

const App = () => {
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentJob, setCurrentJob] = useState(2);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        const jobs = await response.json();
        setJobs(jobs);
      } catch (error) {
        console.log(error);
      }
      setIsLoading(false);
    };

    fetchData();
  }, []);

  if (isLoading) {
    return (
      <section className="jobs-center">
        <div className="loading"></div>
      </section>
    );
  }

  return (
    <section className="jobs-center">
      <ButtonContainer
        jobs={jobs}
        currentJob={currentJob}
        setCurrentJob={setCurrentJob}
      />
      <JobInfo jobs={jobs} currentJob={currentJob} />
    </section>
  );
};
export default App;
