import "./AppContent.scss";

const AppContent = (props: any) => {
  return <div className="app-content">{props.children}</div>;
};

export default AppContent;