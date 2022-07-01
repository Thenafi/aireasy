// import { useCoordinatesContext } from "../Context";
//   const { editViewports} = useCoordinatesContext();
import  React,{ createContext, useContext, useState } from "react";
const CoordinatesContext = createContext();

export function useCoordinatesContext() {
  return useContext(CoordinatesContext);
}

export function CoordinateProvider({ children }) {
  const [viewports, setViewports] = useState([
    [23, 90],
    [23, 90],
  ]);
  //const [lat,setLat]=useState([ [23.9000025, -117.5091047]]);
  const [city, setCity] = useState('out')

  //get city from searchbar from and send it to all place
  function getCity(city) {
    if (city === "ChIJAVkDPzdOqEcRcDteW0YgIQQ") {
      setCity("Berlin");
    }else if(city === 'ChIJu46S-ZZhLxMROG5lkwZ3D7k'){
      setCity("Rome")
    }else if(city === 'ChIJOwg_06VPwokRYv534QaPC8g'){
      setCity("New_York")
    }else if(city === 'ChIJ7cv00DwsDogRAMDACa2m4K8'){
      setCity("Chicago")
    }else {
      setCity('out')
    }
  }

  //   //set item to be updated!
  const editViewports = (a, b, c, d) => {
    //setLat([a,c]);
    setViewports([
      [a, c],
      [b, d],
    ]);
  };

  const retuenviewpoint = () => {
    return viewports;
  };

  //  console.log(viewports);
  const value = {
    viewports,
    city,
    retuenviewpoint,
    getCity,
    editViewports,
  };

  return (
    <CoordinatesContext.Provider value={value}>
      {/* value={{feedback,addFeedBack,handledelete}} amra ei vabe jodi liktam taile const value hiseb a obj toiri kora lagto nah..but oitai better mothod. */}
      {children}
    </CoordinatesContext.Provider>
  );
}
export default CoordinatesContext;
