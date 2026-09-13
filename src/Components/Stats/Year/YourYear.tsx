import { ChartTitle } from "../ChartTitle";

export const YourYear = () => {
  const today = new Date().getFullYear();
  return (
    <div className="chart-section">
      <ChartTitle title="Your Year" meta={`Highlight from ${today}`} />
      <div className="flex flex-wrap gap-3 justify-center items-center mt-15 mb-5">
        <div className="your-year-labels">
          <p>Longest streak</p>
          <p>37 days</p>
        </div>
        <div className="your-year-labels">
          <p>Habits maintained</p>
          <p>11</p>
        </div>
        <div className="your-year-labels">
          <p>Improvement</p>
          <p>+18%</p>
        </div>
        <div className="your-year-labels">
          <p>Consistency</p>
          <p>81%</p>
        </div>
      </div>
      <div className="insight">
        <div className="insight-icon">🚀</div>
        <div>
          <p className="font-bold text-[17px]">Your best month was September</p>
          <p>84% average completion</p>
        </div>
      </div>
      <div className="insight">
        <div className="insight-icon">🔥</div>
        <div>
          <p className="font-bold text-[17px]">37 day streak</p>
          <p>Your personal best this year</p>
        </div>
      </div>
    </div>
  );
};
