import { useEffect, useState } from "react";
import { ITankerkoenigResult } from "../../../../../models/ITankerkoenigResult";
import { fetchData } from "../../../../../services/api.service";
import "./TankerkoenigTable.scss";

interface ITankerkoenigTableProps {
  dist: number;
  maxEntries: number;
}

const TankerkoenigTable = (props: ITankerkoenigTableProps) => {
  const [data, setData] = useState<ITankerkoenigResult|null>(null);
  
  const formatMoney = (money: number) => {
    return Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "EUR",
    }).format(money);
  };

  const formatDistance = (distance: number) => {
    return Intl.NumberFormat("de-DE", {
      style: "decimal",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(distance);
  };

  useEffect(() => {
    fetchData(props.dist).then((data) => {
      data.json().then((jsonData: ITankerkoenigResult) => {
        setData(jsonData);
        console.log("render table");
      });
    });
  }, [props.dist, props.maxEntries]);

  return (
    <table className="tankerkoenig-table">
      <thead>
        <tr>
          <th>Tankstelle</th>
          <th>Entfernung</th>
          <th>Preis (e10)</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {data && data.stations
          .filter((s) => s.price > 0 && s.isOpen)
          .slice(0, props.maxEntries)
          .map((station) => {
            return (
              <tr key={station.id}>
                <td>
                  <p>{station.brand}</p>
                  <div className="address">
                    <p>
                      {station.street} {station.houseNumber}
                    </p>
                    <p>
                      {station.postCode} {station.place}
                    </p>
                  </div>
                </td>
                <td>{formatDistance(station.dist)} km</td>
                <td>{formatMoney(station.price)}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default TankerkoenigTable;
