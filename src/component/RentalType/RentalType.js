import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Col } from "react-bootstrap";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useCoordinatesContext } from "../../Context/MapRelatedContext";
function RentalType() {
  const [data, setData] = useState([]);
  const { city } = useCoordinatesContext();

  const url = "https://aireasymockapi.herokuapp.com/static";
  const url1 = "https://aireasymockapi.herokuapp.com/api_final";

  const fetchData = async () => {
    try {
      if (city === "out") {
        const response = await axios.post(url1, {
          len: Math.trunc(Math.random() * 300) + 1,
        });
        const data = response.data.type_of_room_ls;
        setData(data);
      } else {
        const response = await axios.post(url, { area: city });
        const data = response.data.type_of_room_ls;
        setData(data);
        console.log(data);
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
            <Card.Title>Rental type</Card.Title>
            <Card.Title> </Card.Title>
            <ResponsiveContainer width="95%" height={300}>
              <BarChart
                style={{ marginTop: "1px" }}
                data={data}
                layout="vertical"
                barSize={16}
              >
                <XAxis type="number" domain={[0, "dataMax + 20"]} />
                <YAxis type="category" dataKey="name" />
                <Tooltip cursor={{ fill: "transparent" }} />
                <Legend />
                <CartesianGrid strokeDasharray="3 3" />
                <Bar dataKey="value" fill="#8884d8">
                  {data.map((entry, index) => {
                    if (index === 0) {
                      return <Cell fill={"#42C2FF"} />;
                    }
                    if (index === 1) {
                      return <Cell fill={"#85F4FF"} />;
                    }
                    if (index === 2) {
                      return <Cell fill={"#B8FFF9"} />;
                    }
                  })}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
}
export default RentalType;
