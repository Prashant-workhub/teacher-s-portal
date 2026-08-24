const SubjectProgressBars = ({ data } :  {
  data: Array<{
    subject: string;
    percentage: number;
  }>;
}) => {
  return (
    <div className="max-h-80 overflow-auto scroll-auto scrollbar-thin overscroll-contain max-w-sm p-6 bg-neutral-primary-soft border border-default rounded-xl  shadow-xs">
         <div className="flex flex-col gap-4 w-full">
      {data.map((subjectData, index) => (
        <div key={index} className="flex flex-col gap-1.5">
          <span className="text-sm font-semibold text-gray-800">
            {subjectData.subject}
          </span>
          <div className="w-full bg-neutral-quaternary rounded-full">
            <div 
              className="bg-brand text-xs font-medium text-white text-center p-0.5 leading-none rounded-full h-4 flex items-center justify-center" 
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