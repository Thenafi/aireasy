import axios from "axios";
import React, { useEffect, useState } from "react";
// import "./Amenities.css"
import { Card, Col } from "react-bootstrap";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useCoordinatesContext } from "../../Context/MapRelatedContext";

function Amenities() {
  const [data, setData] = useState("");
  const { city } = useCoordinatesContext();

  const url = "https://aireasymockapi.herokuapp.com/static";
  const url1 = "https://aireasymockapi.herokuapp.com/api_v2";

  const fetchData = async () => {
    try {
      if (city === "out") {
        const response = await axios.post(url1, { len: 30 });
        const data = response.data.rechart_friendly.amentities_ls;
        console.log(data);
        setData(data);
      } else {
        const response = await axios.post(url, { area: city });
        const data = response.data.amentities_ls;
        setData(data);
      
      }
    } catch (e) {
      console.log(e.response);
    }
  };

  useEffect(() => {
    fetchData();
  }, [city]);

  return (
    <>
      <Col lg={12}>
        <Card border="light" className="m-1 rounded displayCard_2">
          <Card.Body>
            <Card.Title>Amenities</Card.Title>
            <ResponsiveContainer width="95%" height={300}>
              <BarChart
                data={data}
                layout="vertical"
                barSize={7}
                style={{ marginLeft: "6px" }}
              >
                <XAxis type="number" domain={[0, 100]}   />
                <YAxis type="category" interval={0} dataKey="name" />
                <Tooltip cursor={{ fill: "transparent" }} />
                <Bar dataKey="value" fill="#42C2FF" />
              </BarChart>
            </ResponsiveContainer>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}
export default Amenities;
