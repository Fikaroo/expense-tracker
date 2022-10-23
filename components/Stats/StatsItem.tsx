import React, { FC } from "react";

type StatsItemProps = {
  title: any;
  figure?: any;
  value: any;
  desc?: any;
  action?: any;
};

const StatsItem: FC<StatsItemProps> = ({
  title,
  figure,
  value,
  desc,
  action,
}) => {
  return (
    <div className="stat">
      {title && <div className="stat-title">{title}</div>}
      {figure && <div className="stat-figure">{figure}</div>}
      {value && title == "Total Expense" ? (
        <div className="stat-value text-error">
          {value === 0 ? value : -value}
        </div>
      ) : title == "Total Income" ? (
        <div className="stat-value text-success">{value}</div>
      ) : (
        <div
          className={`stat-value ${
            Number(value) === 0
              ? ""
              : Number(value) > 0
              ? "text-success"
              : "text-error"
          }`}
        >
          {value}
        </div>
      )}
      {desc && <div className="stat-desc text-base">{desc}</div>}
      {action && <div className="stat-action">{action}</div>}
    </div>
  );
};

export default StatsItem;
