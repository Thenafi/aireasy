import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col } from "react-bootstrap";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useCoordinatesContext } from "../../Context/MapRelatedContext";

function RentalSize() {
  const [data, setData] = useState([]);
  const { city } = useCoordinatesContext();

  const url = "https://aireasymockapi.herokuapp.com/static";
  const url1 = "https://aireasymockapi.herokuapp.com/api_v2";

  const colors = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  const fetchData = async () => {
    try {
      if (city === "out") {
        const response = await axios.post(url1, { len: 30 });
        const data = response.data.rechart_friendly.number_of_bed_ls;
        setData(data);
      } else {
        const response = await axios.post(url, { area: city });
        const data = response.data.number_of_bed_ls;
        setData(data);
      }
    } catch (e) {}
  };

  useEffect(() => {
    fetchData();
  }, [city]);

  return (
    <>
      <Col lg={12}>
        <Card border="light" className="m-1 rounded displayCard_2">
          <Card.Body>
            <Card.Title>Rental Size</Card.Title>
            <ResponsiveContainer width="95%" height={300}>
              <BarChart data={data} barSize={20}>
                <XAxis dataKey="name" />
                <YAxis type="number" domain={[0, "dataMax + 10"]} />
                <Tooltip cursor={{ fill: "transparent" }} />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar dataKey="value" fill="#42C2FF" />
              </BarChart>
            </ResponsiveContainer>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}
export default RentalSize;
