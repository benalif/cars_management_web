import React from "react";
import { Skeleton } from "primereact/skeleton";
import "assets/css/skeleton.css";

export const LoadingSkeleton = () => {
  return (
    <div>
      <div className="card">
        <div className="p-grid p-formgrid">
          <div className="p-field p-col-12 p-md-6">
            <Skeleton className="p-mb-2"></Skeleton>
            <Skeleton width="10rem" className="p-mb-2"></Skeleton>
            <Skeleton width="5rem" className="p-mb-2"></Skeleton>
            <Skeleton height="2rem" className="p-mb-2"></Skeleton>
            <Skeleton width="10rem" className="p-mb-2"></Skeleton>
            <Skeleton width="5rem" className="p-mb-2"></Skeleton>
            <Skeleton height="2rem" className="p-mb-2"></Skeleton>
            <Skeleton width="10rem" className="p-mb-2"></Skeleton>
            <Skeleton width="5rem" className="p-mb-2"></Skeleton>
            <Skeleton height="2rem" className="p-mb-2"></Skeleton>
            <Skeleton width="10rem" className="p-mb-2"></Skeleton>
            <Skeleton width="5rem" className="p-mb-2"></Skeleton>
            <Skeleton height="2rem" className="p-mb-2"></Skeleton>
            <Skeleton width="10rem" className="p-mb-2"></Skeleton>
            <Skeleton width="5rem" className="p-mb-2"></Skeleton>
          </div>
        </div>
      </div>
    </div>
  );
};
