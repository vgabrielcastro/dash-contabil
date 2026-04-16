import { ReactNode } from "react";

interface CardShellProps {
  title?: string;
  subtitle?: string;
  action?: ReactNode;
  children: ReactNode;
  className?: string;
}

const CardShell = ({ title, subtitle, action, children, className = "" }: CardShellProps) => {
  return (
    <div className={`mt-3 overflow-hidden rounded-3xl border border-slate-200/70 bg-white/95 shadow-[0_20px_50px_rgba(15,23,42,0.08)] transition-all duration-300 hover:shadow-[0_25px_80px_rgba(15,23,42,0.14)] ${className}`}>
      <div className="flex flex-col gap-4 p-5 sm:p-6">
        {(title || subtitle || action) && (
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div className="min-w-0">
              {title && <h2 className="text-base font-semibold tracking-wide text-slate-900">{title}</h2>}
              {subtitle && <p className="mt-1 text-sm text-slate-500">{subtitle}</p>}
            </div>
            {action && <div className="flex items-center justify-start gap-3 sm:justify-end">{action}</div>}
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

export default CardShell;
