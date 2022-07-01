// import { useCoordinatesContext } from "../Context";
//   const { editViewports} = useCoordinatesContext();
import React,{ createContext, useContext, useState , useEffect} from 'react';
const SimulationContext = createContext();

export function useSimulationContext() {
  return useContext(SimulationContext);
}

export function SimulationProvider({ children }) {
  const[avgdailyData, setAvgdailyData] = useState(0);
  const[occu, setOccu] = useState(0);

  const [data, setData]= useState(null);
    const [annualRevenue ,  setAnnualRevenue] = useState( '50000' );
    const [ annualExpenses ,  setAnnualExpenses] = useState( '1000' );
    const [propertyPrice ,  setPropertyPrice] = useState( '');
    const [startupCost ,  setStartupCost] = useState( '');

    const [ cashReturn ,  setCashReturn] = useState('');
    const [ profitBeforeTax ,  setProfitBeforeTax] = useState( '' );
    const [ netRentalYield ,   setNetRentalYield] = useState( '');
    const [ netOperatingIncome ,  setNetOperatingIncome] = useState( '');

    let exT=[];
    let rev=[];
    let revv;
    let expp;

    useEffect(() => {
      console.log(avgdailyData); // returns 0;
      console.log(occu);
    }, [avgdailyData, occu]);


    //for revenue 
    const avgDailyCal=item=>{
       setAvgdailyData(item);
    }

  

    const occuCal = item=>{
      setOccu(item); 
    }
    
//   //set item to be updated!
  const allCalculation = (values) => {
    //especial part 

    values.propertyPrice = Number(values.propertyPrice);
  values.homeFurnishings = Number(values.homeFurnishings);
  values.managementFee= Number(values.managementFee);
  values.lodgningTax = Number (values.lodgningTax);
  values.mortgageFees = Number(values.mortgageFees);
  values.hqaFees = Number(values.hqaFees);
  values.maintenance = Number(values.maintenance);
  values.insurance=Number(values.insurance);
  values.electricity= Number(values.electricity);
  values.gas = Number(values.gas);
  values.other= Number(values.other);
  values.occupancyRate = Number(values.occupancyRate);
  values.nightlyRate = Number(values.nightlyRate);
  values.cleaningFees = Number(values.cleaningFees);

  

    console.log(values)
      //Annual Revenue Calculation
    const a = (values.occupancyRate * 365 * values.nightlyRate);
    const b= (values.cleaningFees * 12 * values.numberofBookings)
    const totalRevenue = (a+b+100);
    rev[0] = totalRevenue;
    setAnnualRevenue(totalRevenue);
   

    //property price calculation
    setPropertyPrice(values.propertyPrice);

      //startup cost calculation

  
   const cost = (Number(values.homeFurnishings) + Number(values.closingCost));
   setStartupCost(cost);

   //tartup cost calculation
   let e;
   if(values.propertyTax > 0) {
    e = (annualRevenue/100) * values.propertyTax;
  } else{
    e=0;
  }

  const addition = (e + values.hqaFees + values.maintenance + values.insurance + values.wifi + values.gas + values.electricity + values.other);

let management;
let property;
let lodgning;

  if(values.managementFee > 0) {
     management= (annualRevenue/100) * values.managementFee
  } else{
    management=0;
  }

  if(values.propertyTax > 0) {
    property= (annualRevenue/100) * values.propertyTax;
  } else{
    property=0;
  }

  if(values. lodgningTax> 0) {
    lodgning= (annualRevenue/100) * values.propertyTax;
  } else{
    lodgning=0;
  }

  const ans= (addition + lodgning + property + management);
  const annualExpenses = Math.ceil(ans); 
  exT[0]=annualExpenses;
  setAnnualExpenses(annualExpenses);

  //profit before tax calaculation

  const profit = (totalRevenue - annualExpenses);
  setProfitBeforeTax(profit);

  // cash Return calculation
const lll= values.homeFurnishings + values.closingCost;
  console.log(values.homeFurnishings);
  console.log(values.closingCost);
  console.log(values.propertyPrice);

  if(values.propertyPrice === 0 && lll===0){
    // console.log(`here property price is ${values.propertyPrice} and startup cost is  ${startupCost} `);
     setCashReturn('infinity');
  }else{
    console.log(` for 2nd here property price is 
    // ${values.propertyPrice} and startup cost is
    //   ${lll} and our profit before tax is ${profit} `);
    const jj = Math.ceil(profit / (lll + values.propertyPrice));
    console.log(`jj is ${jj}`);
    setCashReturn(jj)

  }

  if(values.propertyPrice === 0) {
   setNetRentalYield('infinity')
  }else {
    const jjj = Math.ceil(profit/values.propertyPrice);
    setNetRentalYield(jjj)
  }
  

  //net Rental yield
  barchartss()

  };

  const barchartss= ()=>{
   
    for (let i = 1;  i < 15 ; i++) {
      expp =  exT[i-1] + (( exT[i-1]/100)*1.5);
      exT[i] = Math.ceil(expp);
      revv = rev[i-1] + ((rev[i-1]/100)*1.5);
      rev[i] = Math.ceil(revv);
      
    }

        
const dataa = [
  {
    name: "2021",
    Expeses_and_Tax:  exT[0],
    Revenue:  rev[0]
    
  },
{
    name: "2022",
    Expeses_and_Tax:  exT[1],
    Revenue:  rev[1],
    
  },
{
    name: "2023",
    Expeses_and_Tax:  exT[2],
    Revenue:  rev[2]
    
  },
{
    name: "2024",
    Expeses_and_Tax:  exT[3],
    Revenue:  rev[3],
   
  },
{
    name: "2025",
    Expeses_and_Tax:  exT[4],
    Revenue:  rev[4]
},
{
  name: "2026",
  Expeses_and_Tax:  exT[5],
  Revenue:  rev[5]
},
{
  name: "2027",
  Expeses_and_Tax:  exT[6],
  Revenue:  rev[6]
},
{
  name: "2028",
  Expeses_and_Tax:  exT[7],
  Revenue:  rev[7]
},
{
  name: "2029",
  Expeses_and_Tax:  exT[8],
  Revenue:  rev[8]
},
{
  name: "2030",
  Expeses_and_Tax:  exT[9],
  Revenue:  rev[9]
},
{
  name: "2031",
  Expeses_and_Tax:  exT[10],
  Revenue:  rev[10]
},
{
  name: "2032",
  Expeses_and_Tax:  exT[11],
  Revenue:  rev[11]
},
{
  name: "2033",
  Expeses_and_Tax:  exT[12],
  Revenue:  rev[12]
},
{
  name: "2034",
  Expeses_and_Tax:  exT[13],
  Revenue:  rev[13]
},
{
  name: "2035",
  Expeses_and_Tax:  exT[14],
  Revenue:  rev[14]
},
]

setData(dataa)

  }

  const value = {
    data,
    annualExpenses,
    propertyPrice,
    startupCost,
    annualRevenue,
    profitBeforeTax,
    cashReturn,
    allCalculation,
    barchartss,    
    netRentalYield,
    avgDailyCal,
    occuCal,
    occu,
    avgdailyData
  };

  return (
    <SimulationContext.Provider value={value}>
      {/* value={{feedback,addFeedBack,handledelete}} amra ei vabe jodi liktam taile const value hiseb a obj toiri kora lagto nah..but oitai better mothod. */}
      {children}
    </SimulationContext.Provider>
  );
}
export default SimulationContext;
