import axios from 'axios';
import  React,{ useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import { Legend, Line, LineChart, Tooltip, XAxis } from "recharts";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useSimulationContext } from '../../Context/ProfitSimulationContext';
import { useCoordinatesContext } from "../../Context/MapRelatedContext";


function Revenue() {
    const [data, setData] = useState('');
    // const [revenue, setRevenue]= useState(0);
    const {occu, avgdailyData} = useSimulationContext();
    //console.log(`occu is ${occu}`)
    const { city } = useCoordinatesContext();

    const url = "https://aireasymockapi.herokuapp.com/static";
    const url1='https://aireasymockapi.herokuapp.com/api_v2';
    
     const  sum=Math.ceil(Number(occu *  avgdailyData) + 50);
     
    
      const fetchData=async()=>{
        try{
          if(city === 'out') {
             const response= await axios.post(url1,{ "len": 30});
             const data=response.data.rechart_friendly.month_data_prc_ls;
             setData(data);
             console.log(data)
          }else {
            const response = await axios.post(url, {area : city});
            
            const data = response.data.month_data_prc_ls;
            setData(data);
          }
        }catch(e){
          console.log(e.response)
        }
      };
    
      useEffect(() => {
       fetchData();
      },[city])

    return(
        <Col>
            <Card border="light" className="m-1 rounded displayCard_top" >
            <Card.Body>
                    <Card.Title>Revenue</Card.Title>
                    </Card.Body>
                <Row>
                    <Col>
                  <Card.Body>
                    <Card.Text>
                        <h5 className="display-3 ">{sum}$</h5>
                    </Card.Text>
                    </Card.Body>
                    </Col>

                    <Col>
                  <Card.Body>
                  <LineChart
                   width={190}
                 height={95}
                 data={data}
    >
      <XAxis dataKey="name"  hide/>
      <Tooltip />
      <Legend/>
      <Line type="monotone" dataKey="value" fill="#42C2FF" />
                  </LineChart>
                  </Card.Body>
                    </Col>
                </Row>

                <Card.Footer>
                    <small className="text-muted text-right">demo </small>
                </Card.Footer>
            </Card>
        </Col>
    )
}
export default Revenue;




















