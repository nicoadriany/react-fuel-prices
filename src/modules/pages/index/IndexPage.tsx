import { useEffect, useState } from "react";
import { IStation } from "../../../models/IStation";
import { ITankerkoenigResult } from "../../../models/ITankerkoenigResult";
import { fetchData } from "../../../services/api.service";
import PageLayout from "../../app/page-layout/PageLayout";
import DashboardWidget from "./components/DashboardWidget/DashboardWidget";
import TankerkoenigTable from "./components/TankerkoenigTable/TankerkoenigTable";
import "./IndexPage.scss";

const IndexPage = () => {
  return (
    <PageLayout>
      <div className="index-page">
        {<DashboardWidget title="Benzinpreise (e10)" refreshInterval={10}><TankerkoenigTable /></DashboardWidget>}
      </div>
    </PageLayout>
  );
};

export default IndexPage;
