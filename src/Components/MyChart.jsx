import React, { useEffect, useState } from "react";
import ReactECharts from "echarts-for-react";
import Loading from "./Loading";

function MyChart() {
  const [metric, setMetric] = useState("lcp");
  const [device, setDevice] = useState("mobile");
  const [timeseries, setTimeseries] = useState([]);
  const [values, setValues] = useState([]);
  const [loading, setLoading] = useState(false);


  function handleMetric(e) {
    setMetric(e.target.value);
  }

  function handleDevice(e) {
    setDevice(e.target.value);
  }

  useEffect(
    function () {
      async function getChartData() {
        setLoading(true)
        try {
          const res = await fetch(
            `https://example-metrics.speedvitals.workers.dev/?metric=${metric}&device=${device}`
          );

          if (!res.ok) throw new Error("Data is not fetching...");

          const data = await res.json();
          setTimeseries(data.timeseries || []);
          setValues(data.values || []);
        } catch (error) {
          console.error(error.message);
        } finally {
            setLoading(false)
        }
      }
      getChartData();
    },
    [metric, device]
  );

  const option = {
    xAxis: {
      type: "category",
      data: timeseries,
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: values,
        type: "line",
      },
    ],
  };

  return (
    <main>
      <header className="flex justify-center gap-8">
        <div className="flex flex-col">
          <label htmlFor="input1">Metric</label>
          <select
            value={metric}
            onChange={handleMetric}
            name="input1"
            id="input1"
            className="p-2 rounded shadow-md text-sm"
          >
            <option value="lcp">Largest Contentful Paint</option>
            <option value="cls">Cumulative Layout Shift</option>
          </select>
        </div>
        <div className="flex flex-col">
          <label htmlFor="input2">Device</label>
          <select
            value={device}
            onChange={handleDevice}
            name="input2"
            id="input2"
            className="p-2 rounded shadow-md text-sm"
          >
            <option value="mobile">Mobile</option>
            <option value="desktop">Desktop</option>
          </select>
        </div>
      </header>
      <div className="lg:flex lg:justify-center">
         {loading ? <Loading /> : <ReactECharts
            className="bg-white mt-5 rounded lg:w-[50vw] text-center"
            option={option}
          /> }
      </div>
    </main>
  );
}

export default MyChart;
