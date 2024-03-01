import { Skeleton } from "@mui/material";

const InfoSkeleton = () => {
  return (
    <div className="flex w-full h-28 gap-12">
      <div className="flex-1">
        <Skeleton
          variant="rectangular"
          width="100%"
          height={150}
          animation="pulse"
          sx={{ borderRadius: "12px" }}
        />
      </div>
      <div className="flex-1">
        <Skeleton
          variant="rectangular"
          width="100%"
          height={150}
          animation="pulse"
          sx={{ borderRadius: "12px" }}
        />
      </div>
      <div className="flex-1">
        <Skeleton
          variant="rectangular"
          width="100%"
          height={150}
          animation="pulse"
          sx={{ borderRadius: "12px" }}
        />
      </div>
    </div>
  );
};

export default InfoSkeleton;
