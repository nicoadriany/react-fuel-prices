import PageLayout from "../../app/page-layout/PageLayout";
import ClockWidget from "./components/ClockWidget/ClockWidget";
import TankerkoenigTable from "./components/TankerkoenigTable/TankerkoenigTable";
import "./IndexPage.scss";

const IndexPage = () => {
  return (
    <PageLayout>
      <div className="index-page">
        {<TankerkoenigTable maxEntries={5} dist={10} />}
        {<ClockWidget />}
      </div>
    </PageLayout>
  );
};

export default IndexPage;
