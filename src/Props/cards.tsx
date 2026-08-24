import type { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import { useTheme } from "../components/theme/ThemeProvider";

const Card = ({ students }: {
  students: Array<{
    id: Key;
    image: string;
    name: ReactNode;
    email: ReactNode;
    status: ReactNode;
  }>;
}) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const shellClass = isDark
    ? "border-[#64748B] bg-[#0F172A] text-[#F8FAFC]"
    : "border-[#64748B] bg-[#FFFFFF] text-[#0F172A]";
  const mutedText = "text-[#64748B]";

  return (
    <div className={`h-full w-full max-h-80 max-w-sm overflow-auto overscroll-contain rounded-2xl border p-5 ${shellClass}`}>

      <div className="mb-4 flex h-10 items-center justify-between gap-3">
        <h5 className="text-base font-semibold leading-none">
          Active Students
        </h5>

        <a
          href="#"
          className="font-medium text-[#2563EB] hover:underline"
        >
          View all
        </a>
      </div>

      <div className="flow-root">
        <ul role="list" className="divide-y divide-[#64748B]">

          {students.map((student: { id: Key | null | undefined; image: string | undefined; name: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; email: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; status: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }) => (
            <li key={student.id} className="py-3">
              <div className="flex items-center gap-3">

                <div className="shrink-0">
                  <img
                    className="h-10 w-10 rounded-full border border-[#64748B] object-cover"
                    src={student.image}
                    alt={`${student.name} profile`}
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <p className="truncate font-medium">
                    {student.name}
                  </p>

                  <p className={`truncate text-sm ${mutedText}`}>
                    {student.email}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-sm text-[#16A34A]">
                  <span className="h-2 w-2 rounded-full bg-[#16A34A]"></span>
                  {student.status}
                </div>

              </div>
            </li>
          ))}

        </ul>
      </div>
    </div>
  );
};

export default Card;
