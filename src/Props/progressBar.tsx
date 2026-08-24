import { useTheme } from "../components/theme/ThemeProvider";

const SubjectProgressBars = ({ data } :  {
  data: Array<{
    subject: string;
    percentage: number;
  }>;
}) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const shellClass = isDark
    ? "border-[#64748B] bg-[#0F172A] text-[#F8FAFC]"
    : "border-[#64748B] bg-[#FFFFFF] text-[#0F172A]";
  const mutedText = "text-[#64748B]";
  const brandBg = isDark ? "bg-[#16A34A]" : "bg-[#0F766E]";

  return (
    <div className={`h-full w-full min-w-0 overflow-auto overscroll-contain rounded-2xl border p-5 ${shellClass}`}>
         <div className="mb-4 flex h-10 items-center justify-between gap-3">
          <h5 className="text-base font-semibold leading-none">
            Subject Progress
          </h5>
          <a href="#" className={`font-medium ${isDark ? "text-[#16A34A]" : "text-[#0F766E]"} hover:underline`}>
            View all
          </a>
         </div>

         <div className="flex w-full flex-col gap-4">
      {data.map((subjectData, index) => (
        <div key={index} className="flex flex-col gap-1.5">
          <span className={`text-sm font-medium ${mutedText}`}>
            {subjectData.subject}
          </span>
          <div className="w-full rounded-full bg-[#64748B]">
            <div 
              className={`flex h-4 items-center justify-center rounded-full p-0.5 text-center text-xs font-medium leading-none text-[#FFFFFF] ${brandBg}`} 
              style={{ width: `${subjectData.percentage}%` }}
            >
              {subjectData.percentage}%
            </div>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default SubjectProgressBars;
