import { FaAngleDoubleRight } from "react-icons/fa";

import { v4 as uuidv4 } from "uuid";

function Duties({ duties }) {
  return (
    <>
      {duties.map((duty, index) => {
        return (
          <div key={uuidv4()} className="job-desc">
            <FaAngleDoubleRight className="job-icon" />
            <p>{duty}</p>
          </div>
        );
      })}
    </>
  );
}

export default Duties;
