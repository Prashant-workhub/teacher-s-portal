import {
  ChevronDown,
  CourseCard,
  LayoutGrid,
  List,
  Search,
  courseCards,
  courseFilterOptions,
  courseSortOptions,
  courseStatusOptions,
  type CourseFilterOption,
  type CourseStatusFilter,
  type CourseViewMode,
  useMemo,
  useState,
} from "../imports";

type SortOrder = (typeof courseSortOptions)[number];

const MyCourses = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDept, setSelectedDept] = useState<CourseFilterOption>(courseFilterOptions[0]);
  const [selectedStatus, setSelectedStatus] = useState<CourseStatusFilter>(courseStatusOptions[0]);
  const [sortOrder, setSortOrder] = useState<SortOrder>(courseSortOptions[0]);
  const [viewMode, setViewMode] = useState<CourseViewMode>("grid");

  const filteredCourses = useMemo(() => {
    let result = courseCards;

    if (searchQuery.trim()) {
      const lowerQuery = searchQuery.toLowerCase();
      result = result.filter(
        (course) =>
          course.title.toLowerCase().includes(lowerQuery) ||
          course.code.toLowerCase().includes(lowerQuery) ||
          course.semester.toLowerCase().includes(lowerQuery),
      );
    }

    if (selectedDept !== "All Departments") {
      result = result.filter((course) => course.department === selectedDept);
    }

    if (selectedStatus !== "All Status") {
      result = result.filter((course) => course.status === selectedStatus);
    }

    if (sortOrder === "Completion: Low to High") {
      result = [...result].sort((left, right) => left.completionPercentage - right.completionPercentage);
    } else if (sortOrder === "Completion: High to Low") {
      result = [...result].sort((left, right) => right.completionPercentage - left.completionPercentage);
    }

    return result;
  }, [searchQuery, selectedDept, selectedStatus, sortOrder]);

  return (
    <section className="space-y-5">
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold text-[var(--app-text)]">My Courses</h1>
        <p className="text-sm text-[var(--app-muted)]">
          Browse course cards, filter by teaching load, and track performance at a glance.
        </p>
      </div>

      <div className="flex flex-col gap-3 rounded-2xl border border-[var(--app-border)] bg-[var(--app-surface)] p-3 lg:flex-row lg:items-center">
        <label className="flex h-12 flex-1 items-center gap-2 rounded-xl border border-[var(--app-border)] bg-[var(--app-surface-alt)] px-3 text-sm text-[var(--app-muted)]">
          <Search size={16} />
          <input
            className="w-full bg-transparent text-[var(--app-text)] outline-none placeholder:text-[var(--app-muted)]"
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Search courses..."
            type="search"
            value={searchQuery}
          />
        </label>

        <div className="grid gap-3 sm:grid-cols-3 lg:flex lg:items-center">
          <div className="relative min-w-[12rem]">
            <select
              aria-label="Filter department"
              className="h-12 w-full appearance-none rounded-xl border border-[var(--app-border)] bg-[var(--app-surface-alt)] px-4 pr-10 text-sm font-medium text-[var(--app-text)] outline-none"
              onChange={(event) => setSelectedDept(event.target.value as CourseFilterOption)}
              value={selectedDept}
            >
              {courseFilterOptions.map((department) => (
                <option key={department} value={department}>
                  {department}
                </option>
              ))}
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[var(--app-muted)]"
              size={16}
            />
          </div>

          <div className="relative min-w-[11rem]">
            <select
              aria-label="Filter status"
              className="h-12 w-full appearance-none rounded-xl border border-[var(--app-border)] bg-[var(--app-surface-alt)] px-4 pr-10 text-sm font-medium text-[var(--app-text)] outline-none"
              onChange={(event) => setSelectedStatus(event.target.value as CourseStatusFilter)}
              value={selectedStatus}
            >
              {courseStatusOptions.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[var(--app-muted)]"
              size={16}
            />
          </div>

          <div className="relative min-w-[14rem]">
            <select
              aria-label="Sort courses"
              className="h-12 w-full appearance-none rounded-xl border border-[var(--app-border)] bg-[var(--app-surface-alt)] px-4 pr-10 text-sm font-medium text-[var(--app-text)] outline-none"
              onChange={(event) => setSortOrder(event.target.value as SortOrder)}
              value={sortOrder}
            >
              {courseSortOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
            <ChevronDown
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[var(--app-muted)]"
              size={16}
            />
          </div>

          <div className="ml-auto flex items-center rounded-xl border border-[var(--app-border)] bg-[var(--app-surface-alt)] p-1">
            <button
              aria-label="Grid view"
              className={[
                "grid h-10 w-10 place-items-center rounded-lg transition",
                viewMode === "grid"
                  ? "bg-[var(--app-brand)] text-white"
                  : "text-[var(--app-muted)] hover:text-[var(--app-text)]",
              ].join(" ")}
              onClick={() => setViewMode("grid")}
              type="button"
            >
              <LayoutGrid size={18} />
            </button>
            <button
              aria-label="List view"
              className={[
                "grid h-10 w-10 place-items-center rounded-lg transition",
                viewMode === "list"
                  ? "bg-[var(--app-brand)] text-white"
                  : "text-[var(--app-muted)] hover:text-[var(--app-text)]",
              ].join(" ")}
              onClick={() => setViewMode("list")}
              type="button"
            >
              <List size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className={viewMode === "grid" ? "grid gap-4 xl:grid-cols-3" : "grid gap-4"}>
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => <CourseCard key={course.id} course={course} viewMode={viewMode} />)
        ) : (
          <div className="rounded-2xl border border-[var(--app-border)] bg-[var(--app-surface)] p-8 text-center text-sm text-[var(--app-muted)]">
            No courses found for the selected filters.
          </div>
        )}
      </div>

      <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_18rem]">
        <div className="rounded-2xl border border-[var(--app-border)] bg-[var(--app-surface)] p-5">
          <h2 className="text-lg font-semibold text-[var(--app-text)]">Course Health Guide</h2>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--app-muted)]">
            Course health is based on completion, quiz scores, lecture progress, and pending doubts. The filter bar
            above keeps the card grid focused on the courses you want to inspect.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 p-4">
              <p className="text-sm font-semibold text-emerald-300">On Track</p>
              <p className="mt-1 text-sm text-[var(--app-muted)]">Course is progressing well</p>
            </div>
            <div className="rounded-xl border border-amber-400/20 bg-amber-400/10 p-4">
              <p className="text-sm font-semibold text-amber-300">Needs Attention</p>
              <p className="mt-1 text-sm text-[var(--app-muted)]">Some areas need improvement</p>
            </div>
            <div className="rounded-xl border border-rose-400/20 bg-rose-400/10 p-4">
              <p className="text-sm font-semibold text-rose-300">Action Required</p>
              <p className="mt-1 text-sm text-[var(--app-muted)]">Immediate attention needed</p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-[var(--app-border)] bg-[var(--app-surface)] p-5">
          <h3 className="text-base font-semibold text-[var(--app-text)]">How it works?</h3>
          <p className="mt-2 text-sm leading-6 text-[var(--app-muted)]">Use the controls to refine your course cards.</p>
          <a
            className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[var(--app-brand)] hover:underline"
            href="#"
          >
            View details
            <ChevronDown className="-rotate-90" size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default MyCourses;
