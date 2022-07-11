import AppContent from "../app-content/AppContent";
import AppFooter from "../app-footer/AppFooter";
import "./PageLayout.scss";

const PageLayout = (props: any) => (
  <div className="page-layout">
    <AppContent>
      {props.children}
    </AppContent>
  </div>
)

export default PageLayout;