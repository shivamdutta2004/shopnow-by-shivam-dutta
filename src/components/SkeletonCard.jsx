export default function SkeletonCard() {
  return (
    <div className="animate-pulse rounded-2xl bg-white dark:bg-slate-800 p-4 shadow">
      <div className="h-40 bg-gray-200 dark:bg-slate-700 rounded mb-4"></div>
      <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded w-3/4 mb-2"></div>
      <div className="h-4 bg-gray-200 dark:bg-slate-700 rounded w-1/2"></div>
      <div className="h-9 bg-gray-300 dark:bg-slate-600 rounded-full mt-4"></div>
    </div>
  );
}
