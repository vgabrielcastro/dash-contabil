import { Skeleton } from "@mui/material";

const InfoSkeleton = () => {
  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
      {[...Array(3)].map((_, index) => (
        <div key={index} className="rounded-3xl border border-slate-200/80 bg-slate-50 p-5 shadow-sm">
          <Skeleton variant="text" width="40%" animation="pulse" sx={{ borderRadius: "12px" }} />
          <Skeleton className="mt-5" variant="rectangular" width="100%" height={96} animation="pulse" sx={{ borderRadius: "18px" }} />
        </div>
      ))}
    </div>
  );
};

export default InfoSkeleton;
