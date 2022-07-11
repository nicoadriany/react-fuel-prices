import { useEffect, useReducer, useState } from "react";

interface DashboardWidgetProps {
  title: string;
  children: React.ReactNode;
  refreshInterval: number;
}

const DashboardWidget = (props: DashboardWidgetProps) => {

  const [lastRefresh, setLastRefresh] = useState<Date>(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setLastRefresh(new Date());
    }, props.refreshInterval * 1000);
    return () => clearInterval(interval);
  }, [lastRefresh]);

  return (
    <div className="dashboard-widget">
      <h1>{props.title}</h1>
      {props.children}
    </div>
  );
}

export default DashboardWidget;