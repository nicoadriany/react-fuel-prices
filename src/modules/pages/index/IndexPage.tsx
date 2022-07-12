import PageLayout from "../../app/page-layout/PageLayout";
import DashboardWidget from "./components/DashboardWidget/DashboardWidget";
import TankerkoenigTable from "./components/TankerkoenigTable/TankerkoenigTable";
import "./IndexPage.scss";

const IndexPage = () => {
  return (
    <PageLayout>
      <div className="index-page">
        {<DashboardWidget title="Benzinpreise (e10)" refreshInterval={10}><TankerkoenigTable maxEntries={5} dist={10} /></DashboardWidget>}
      </div>
    </PageLayout>
  );
};

export default IndexPage;
