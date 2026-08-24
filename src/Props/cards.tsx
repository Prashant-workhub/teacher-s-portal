import type { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

const Card = ({ students }: {
  students: Array<{
    id: Key;
    image: string;
    name: ReactNode;
    email: ReactNode;
    status: ReactNode;
  }>;
}) => {
  return (
    <div className="max-h-80 overflow-auto scroll-auto scrollbar-thin overscroll-contain max-w-sm p-6 bg-neutral-primary-soft border border-default rounded-xl  shadow-xs">

      <div className="flex items-center h-10 justify-between mb-4">
        <h5 className="text-xl font-semibold leading-none text-heading">
          Active Students
        </h5>

        <a
          href="#"
          className="font-medium text-fg-brand hover:underline"
        >
          View all
        </a>
      </div>

      <div className="flow-root">
        <ul role="list" className="divide-y divide-default">

          {students.map((student: { id: Key | null | undefined; image: string | undefined; name: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; email: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; status: string | number | bigint | boolean | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | Promise<string | number | bigint | boolean | ReactPortal | ReactElement<unknown, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | null | undefined; }) => (
            <li key={student.id} className="py-4">
              <div className="flex items-center gap-3">

                <div className="shrink-0">
                  <img
                    className="w-10 h-10 rounded-full"
                    src={student.image}
                    alt={`${student.name} profile`}
                  />
                </div>

                <div className="flex-1 min-w-0">
                  <p className="font-medium text-heading truncate">
                    {student.name}
                  </p>

                  <p className="text-sm text-body truncate">
                    {student.email}
                  </p>
                </div>

                <div className="flex items-center gap-1.5 text-sm text-green-600">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
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