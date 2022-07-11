import { useEffect, useState } from "react";
import { IStation } from "../../../models/IStation";
import { ITankerkoenigResult } from "../../../models/ITankerkoenigResult";
import { fetchData } from "../../../services/api.service";
import PageLayout from "../../app/page-layout/PageLayout";
import TankerkoenigTable from "./components/TankerkoenigTable/TankerkoenigTable";
import "./IndexPage.scss";

const IndexPage = () => {
  const [data, setData] = useState<ITankerkoenigResult|null>(null);

  useEffect(() => {
    fetchData(10).then((data) => {
      const json = data.json().then((jsonData: ITankerkoenigResult) => {
        setData(jsonData);
      });
    });
  }, []);

  return (
    <PageLayout>
      <div className="index-page">
        {data && <TankerkoenigTable stations={data.stations} />}
      </div>
    </PageLayout>
  );
};

export default IndexPage;
