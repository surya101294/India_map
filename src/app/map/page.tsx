"use client"
import React, { useState, useEffect } from "react";
import Highcharts, { color } from "highcharts";
import HC_map from "highcharts/modules/map";
import highchartsMap from "highcharts/modules/map";
import axios from "axios";
import HighchartsReact from "highcharts-react-official";

// Initialize Highcharts map module
if (typeof Highcharts === "object") {
  HC_map(Highcharts);
  highchartsMap(Highcharts);
}

const MapPage = () => {
  const [clickedState, setClickedState] = useState(null); // State to store clicked state
  const [mapData, setMapData] = useState(null);

  useEffect(() => {
    const fetchMapData = async () => {
      try {
        const response = await axios.get(
          "https://code.highcharts.com/mapdata/countries/in/in-all.geo.json"
        );
        setMapData(response.data);
      } catch (error) {
        console.error("Error fetching map data:", error);
      }
    };

    fetchMapData();
  }, []);

  const handleMapClick = (e: any) => {
    e = e.target
    console.log("aya", e)
    if (e.point && e.point.name) {
      const stateName = e.point.name;
      setClickedState(stateName);

      // Filter map data to include only the geometry of the clicked state
      const clickedStateData = mapData?.features?.find(
        (feature: any) => feature.properties.name === stateName
      );
      const stateMapData = {
        type: "FeatureCollection",
        features: [clickedStateData],
      };
      setMapData(stateMapData);
    }
  };

  const mapOptions = {
    title: {
      text: "India Map",
    },
    chart: {
      events: {
        click: handleMapClick,
      },
    },
    series: [
      {
        mapData: mapData,
        name: "India",
        allowPointSelect: true,
        cursor: "pointer",
        states: {
          select: {
            color: "#BADA55",
            borderColor: "black",
            dashStyle: "shortdot",
          },
        },
        dataLabels: {
          enabled: true,
          formatter: function () {
            return "●";
          },
          style: {
            fontSize: "10px",
            color: "green",
            border: '0px'
          },
        },
      },
    ],
  };

  return (
    <div>
      {clickedState ? (
        <div>
          <h2>{clickedState}</h2>
          <h6>{'Jo data dikhana h dikhao'}</h6>
          <HighchartsReact
            highcharts={Highcharts}
            options={mapOptions}
            constructorType={"mapChart"}
            allowChartUpdate={true}
          />
        </div>
      ) : (
        mapData ? (
          <HighchartsReact
            highcharts={Highcharts}
            options={mapOptions}
            constructorType={"mapChart"}
            allowChartUpdate={true}
          />
        ) : (
          <div>Loading map...</div>
        )
      )}
    </div>
  );
};

export default MapPage;
