import { useEffect, useRef, useState } from "react";
import { Chart as ChartJS } from "chart.js";
import {
  topojson,
  ChoroplethController,
  GeoFeature,
  ColorScale,
  ProjectionScale,
} from "chartjs-chart-geo";
import { Chart } from "react-chartjs-2";

export default function GeoChart() {
  const [data, setData] = useState();
  const [selangor, setSelangor] = useState();
  const [districts, setDistricts] = useState();

  const [config, setConfig] = useState();

  const fetchData = async () => {
    const result = await fetch("http://localhost:3000/selangor.json");
    return await result.json();
  };

  const initializeGeoValues = () => {
    setSelangor(topojson.feature(data, data.objects.state).features[0]);
    setDistricts(topojson.feature(data, data.objects.district).features);
  };

  useEffect(() => {
    fetchData().then((value) => setData(value));
  }, []);

  useEffect(() => {
    if (data) {
      initializeGeoValues();
    }
  }, [data]);

  useEffect(() => {
    if (selangor !== undefined && districts !== undefined) {
      ChartJS.register(
        ChoroplethController,
        GeoFeature,
        ColorScale,
        ProjectionScale
      );
      const huluLangat = districts.find(
        (d) => d.properties.name === "Hulu Langat"
      );
      const petaling = districts.find((d) => d.properties.name === "Petaling");
      setConfig({
        data: {
          labels: ["Hulu Langat", "Petaling"],
          datasets: [
            {
              label: "States",
              outline: selangor, // ... outline to compute bounds
              showOutline: true,
              data: [
                {
                  value: 0.6,
                  feature: huluLangat, // ... the feature to render
                },
                {
                  value: 0.3,
                  feature: petaling,
                },
              ],
            },
          ],
        },
        options: {
          plugins: {
            legend: {
              display: false,
            },
          },
          scales: {
            projection: {
              axis: "x",
              projection: "albersUsa",
            },
            color: {
              axis: "x",
              quantize: 5,
              legend: {
                position: "bottom-right",
                align: "bottom",
              },
            },
          },
        },
      });
    }
    const useRef(<Chart type="choropleth" data={config.data} options={config.options} />);
  }, [selangor, districts]);

  const renderChart = () => {
    return (
      
    );
  };

  return <div>
    <svg ref={choroplethRef}></svg>
  </div>;
}
