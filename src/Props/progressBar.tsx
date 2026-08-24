const SubjectProgressBars = ({ data } :  {
  data: Array<{
    subject: string;
    percentage: number;
  }>;
}) => {
  const shellClass = "border-[var(--app-border)] bg-[var(--app-surface)] text-[var(--app-text)]";
  const mutedText = "text-[var(--app-muted)]";
  const brandBg = "bg-[var(--app-brand)]";

  return (
    <div className={`h-full w-full min-w-0 overflow-auto overscroll-contain rounded-2xl border p-5 ${shellClass}`}>
         <div className="mb-4 flex h-10 items-center justify-between gap-3">
          <h5 className="text-base font-semibold leading-none">
            Subject Progress
          </h5>
          <a href="#" className="font-medium text-[var(--app-brand)] hover:underline">
            View all
          </a>
         </div>

         <div className="flex w-full flex-col gap-4">
      {data.map((subjectData, index) => (
        <div key={index} className="flex flex-col gap-1.5">
          <span className={`text-sm font-medium ${mutedText}`}>
            {subjectData.subject}
          </span>
          <div className="w-full rounded-full bg-[var(--app-surface-alt)]">
            <div 
              className={`flex h-4 items-center justify-center rounded-full p-0.5 text-center text-xs font-medium leading-none text-white ${brandBg}`} 
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
