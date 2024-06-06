import { useEffect, useState } from "react";
import { topojson } from "chartjs-chart-geo";

export default function GeoChart() {
  const [data, setData] = useState();
  const [selangor, setSelangor] = useState();
  const [districts, setDistricts] = useState();

  const fetchData = async () => {
    const result = await fetch("http://localhost:3000/selangor.json");
    return await result.json();
  };

  useEffect(() => {
    fetchData().then(value => setData(value));
  }, []);

  console.log(data.type);
  return <div>This is a geochart</div>;
}
