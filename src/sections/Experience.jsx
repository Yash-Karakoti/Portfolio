import { Timeline } from "../components/Timeline";
import { workExperience } from "../constants";

const Experience = () => {
  return (
    <div className="w-full" id="experience">
      <Timeline data={workExperience} heading="Work Experience" />
    </div>
  );
};

export default Experience;
