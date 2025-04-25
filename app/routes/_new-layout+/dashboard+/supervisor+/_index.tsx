import ProgramStatistics from "./ProgramStatistics";
import { RegionsStatistics } from "./regionsStatistics";
import { Skills } from "./skills";
import Supervisor from "./supervisor";



export default function Index() {
  return (
    <div className="flex flex-col gap-y-12">
      <Skills />
      <ProgramStatistics />
      <RegionsStatistics />
      <Supervisor />

    </div>
  );
}