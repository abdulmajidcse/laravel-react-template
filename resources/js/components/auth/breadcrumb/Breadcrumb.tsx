import type { ReactElement } from "react";

export default function Breadcrumb({
  title,
  children,
}: {
  title: ReactElement | string;
  children: ReactElement;
}) {
  return (
    <>
      <div className="md:flex md:justify-between mb-6">
        <div>
          <h1 className="text-3xl text-slate-900 tracking-tight dark:text-slate-200">
            {title}
          </h1>
        </div>
        <div className="mt-3 md:mt-0">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-3">
              {children}
            </ol>
          </nav>
        </div>
      </div>
    </>
  );
}
