import { Fragment } from "react";
import { IStation } from "../../../../../models/IStation";
import "./TankerkoenigTable.scss";

interface TankerkoenigTableProps {
  stations: IStation[];
}

const TankerkoenigTable = (props: TankerkoenigTableProps) => {
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

  return (
    <Fragment>
      <h1>Aktuelle Benzinpreise (e10)</h1>
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
          {props.stations
            .filter((s) => s.price > 0 && s.isOpen)
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
    </Fragment>
  );
};

export default TankerkoenigTable;
