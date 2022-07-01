import React from "react";
import { Button, Form, FormControl } from "react-bootstrap";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import { useNavigate } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useCoordinatesContext } from "./Context/MapRelatedContext";
import "./searchbar.css";

export default function SearchBar() {
  let navigate = useNavigate();
  const { editViewports , getCity} = useCoordinatesContext();
  const [address, setAddress] = React.useState("");
  const [coordinates, setCoordinates] = React.useState({
    lat: null,
    lng: null,
  });
  // const [viewport,setViewport]=React.useState({});

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latLng);
    const geo = results[Object.keys(results)[0]];
    getCity(geo.place_id)
    console.log(geo)

    // setViewport([[geo.geometry.viewport.Ta.h,geo.geometry.viewport.yb.h],[geo.geometry.viewport.Ta.j,geo.geometry.viewport.yb.j]]);
    // <Test outerBounds={viewport}/>;
    // const  c =geo.geometry.viewport.Ra.hi;
    // const d =geo.geometry.viewport.Ra.lo;
    // const a =geo.geometry.viewport.ub.hi;
    // const  b=geo.geometry.viewport.ub.lo;
    const c = geo.geometry.viewport.Ra.hi;
    const d = geo.geometry.viewport.Ra.lo;
    const a = geo.geometry.viewport.wb.hi;
    const b = geo.geometry.viewport.wb.lo;
    // console.log(`value of a b c d
    //      ${a}  ${b} ${c} ${d}`);
    editViewports(a, b, c, d);
  };

  function goPurchase() {
    navigate("/purchase");
  }

  return (
    <>
      <div>
        <PlacesAutocomplete
          className="abc"
          value={address}
          onChange={setAddress}
          onSelect={handleSelect}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => (
            <div style={{ maxHeight: "50px" }} className="ab">
              <Form className="d-flex">
                <FormControl
                  {...getInputProps()}
                  type="search"
                  placeholder="Search location"
                  className="me-1"
                  aria-label="Purchase"
                />
                <Button
                  className="m-1 btn btn-dark col-4 ms-4 " style={{ borderRadius: '11px'}}
                  onClick={goPurchase}
                >
                  Purchase
                </Button>
              </Form>
              <div>
                {loading ? <div>...loading</div> : null}

                {suggestions.map((suggestion) => {
                  const style = {
                    backgroundColor: suggestion.active ? "#41b6e6" : "#fff",
                  };

                  return (
                    <div {...getSuggestionItemProps(suggestion, { style })}>
                      {suggestion.description}
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
      </div>
    </>
  );
}
