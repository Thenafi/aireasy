import React from 'react';
import { Card, Col } from 'react-bootstrap';
import {
  Bar, BarChart, CartesianGrid, Label,
  LabelList, Legend, ResponsiveContainer, Tooltip, XAxis,
  YAxis
} from "recharts";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";


function RentalSetting() {
 
  const data = [
    {
      name: "Minimum Stay",
     one : Math.floor(Math.random() * 15)+3,
      three: Math.floor(Math.random() * 10)+3,
      seven: Math.floor(Math.random() * 14)+3,
      ten: Math.floor(Math.random() * 15)+3,
    }
  ];
  
    const renderCustomizedLabel = (props) => {
        const { content, ...rest } = props;
        return <Label {...rest} fontSize="12" fill="#sF3e2F" fontWeight="Bold" />;
      };

    return(
    <>
        <Col lg={12}>
            <Card border="light" className="m-1 rounded displayCard_3">
                <Card.Body>
                    <Card.Title>Rental Setting</Card.Title>
                    <Card.Text>
                    <ResponsiveContainer height={70} width={"95%"}>
      <BarChart
        layout="vertical"
        data={data}
        margin={{ left: 50, right: 50 }}
        stackOffset="expand"
      >
         <CartesianGrid strokeDasharray="3 3" />
        <XAxis hide type="number" />
        <YAxis type="category" dataKey="name" stroke="#FsdfdF" fontSize="22"  fontWeight='232' />
        <Tooltip />
        <Legend />
         
        <Bar dataKey="one" stackId="a" fill="#42C2FF">
          <LabelList
            dataKey="one"
            position="center"
            content={renderCustomizedLabel}
          />
        </Bar>
        <Bar dataKey="three" stackId="a" fill="#B8FFF9">
          <LabelList
            dataKey="three"
            position="center"
            content={renderCustomizedLabel}
          />
        </Bar>
        <Bar dataKey="seven" stackId="a" fill="#85F4FF">
          <LabelList
            dataKey="seven"
            position="center"
            content={renderCustomizedLabel}
          />
        </Bar>
        <Bar dataKey="ten" stackId="a" fill="#EFwwFD">
          <LabelList
            dataKey="ten"
            position="center"
            content={renderCustomizedLabel}
          />
        </Bar>
       
      </BarChart>
                     </ResponsiveContainer> 


                         </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    </>
    )
}
export default RentalSetting;

