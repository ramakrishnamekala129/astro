import "./App.css";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import TextField from "@mui/material/TextField";
import { LocalizationProvider, DatePicker, StaticTimePicker } from "@mui/lab";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const Astronomy = require("./astronomy.js");

function App() {
  const [value, setValue] = useState(new Date());
  const [basicPicker, setBasicPicker] = useState(new Date());
  useEffect(() => {}, []);

  const getAngleBetweenBodies = (Body1, Body2) => {
    // new Date(year, month, day, hours, minutes, seconds, milliseconds)

    const angle = Astronomy.PairLongitude(Body1, Body2, value);
    return angle;
  };

  return (
    <div className="App">
      <p>{new Date(value).toString()}</p>

      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          displayStaticWrapperAs="mobile"
          value={value}
          onChange={(newValue) => {
            const m = new Date(
              newValue.getFullYear(),
              newValue.getMonth(),
              newValue.getDate(),
              0,
              0,
              0,
              0
            );
            setValue(m);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <Table striped bordered hover id="planets">
        <tbody>
          <tr>
            <td colSpan={4}></td>
            <td colSpan={4}>Sun</td>
            <td colSpan={4}>Mercury</td>
            <td colSpan={4}>Venus</td>
            <td colSpan={4}>Moon</td>
            <td colSpan={4}>EMB</td>
            <td colSpan={4}>Mars</td>
            <td colSpan={4}>Jupiter</td>
            <td colSpan={4}>Saturn</td>
            <td colSpan={4}>Uranus</td>
            <td colSpan={4}>Neptune</td>
            <td colSpan={4}>Pluto</td>
          </tr>
          <tr>
            <td colSpan={4}>Sun</td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(Astronomy.Body.Sun, Astronomy.Body.Sun)
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(
                  Astronomy.Body.Sun,
                  Astronomy.Body.Mercury
                )
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(Astronomy.Body.Sun, Astronomy.Body.Venus)
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(Astronomy.Body.Sun, Astronomy.Body.Moon)
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(Astronomy.Body.Sun, Astronomy.Body.EMB)
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(Astronomy.Body.Sun, Astronomy.Body.Mars)
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(
                  Astronomy.Body.Sun,
                  Astronomy.Body.Jupiter
                )
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(Astronomy.Body.Sun, Astronomy.Body.Saturn)
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(Astronomy.Body.Sun, Astronomy.Body.Uranus)
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(
                  Astronomy.Body.Sun,
                  Astronomy.Body.Neptune
                )
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(Astronomy.Body.Sun, Astronomy.Body.Pluto)
              ).toFixed(2)}
            </td>
          </tr>

          {/* Mercury */}
          <tr>
            <td colSpan={4}>Mercury</td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(
                  Astronomy.Body.Mercury,
                  Astronomy.Body.Sun
                )
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(
                  Astronomy.Body.Mercury,
                  Astronomy.Body.Mercury
                )
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(
                  Astronomy.Body.Mercury,
                  Astronomy.Body.Venus
                )
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(
                  Astronomy.Body.Mercury,
                  Astronomy.Body.Moon
                )
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(
                  Astronomy.Body.Mercury,
                  Astronomy.Body.EMB
                )
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(
                  Astronomy.Body.Mercury,
                  Astronomy.Body.Mars
                )
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(
                  Astronomy.Body.Mercury,
                  Astronomy.Body.Jupiter
                )
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(
                  Astronomy.Body.Mercury,
                  Astronomy.Body.Saturn
                )
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(
                  Astronomy.Body.Mercury,
                  Astronomy.Body.Uranus
                )
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(
                  Astronomy.Body.Mercury,
                  Astronomy.Body.Neptune
                )
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(
                  Astronomy.Body.Mercury,
                  Astronomy.Body.Pluto
                )
              ).toFixed(2)}
            </td>
          </tr>

          {/* Venus */}
          <tr>
            <td colSpan={4}>Venus</td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(Astronomy.Body.Venus, Astronomy.Body.Sun)
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(
                  Astronomy.Body.Venus,
                  Astronomy.Body.Mercury
                )
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(
                  Astronomy.Body.Venus,
                  Astronomy.Body.Venus
                )
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(Astronomy.Body.Venus, Astronomy.Body.Moon)
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(Astronomy.Body.Venus, Astronomy.Body.EMB)
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(Astronomy.Body.Venus, Astronomy.Body.Mars)
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(
                  Astronomy.Body.Venus,
                  Astronomy.Body.Jupiter
                )
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(
                  Astronomy.Body.Venus,
                  Astronomy.Body.Saturn
                )
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(
                  Astronomy.Body.Venus,
                  Astronomy.Body.Uranus
                )
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(
                  Astronomy.Body.Venus,
                  Astronomy.Body.Neptune
                )
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(
                  Astronomy.Body.Venus,
                  Astronomy.Body.Pluto
                )
              ).toFixed(2)}
            </td>
          </tr>

          {/* Moon */}
          <tr>
            <td colSpan={4}>Moon</td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(Astronomy.Body.Moon, Astronomy.Body.Sun)
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(
                  Astronomy.Body.Moon,
                  Astronomy.Body.Mercury
                )
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(Astronomy.Body.Moon, Astronomy.Body.Venus)
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(Astronomy.Body.Moon, Astronomy.Body.Moon)
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(Astronomy.Body.Moon, Astronomy.Body.EMB)
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(Astronomy.Body.Moon, Astronomy.Body.Mars)
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(
                  Astronomy.Body.Moon,
                  Astronomy.Body.Jupiter
                )
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(
                  Astronomy.Body.Moon,
                  Astronomy.Body.Saturn
                )
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(
                  Astronomy.Body.Moon,
                  Astronomy.Body.Uranus
                )
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(
                  Astronomy.Body.Moon,
                  Astronomy.Body.Neptune
                )
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(Astronomy.Body.Moon, Astronomy.Body.Pluto)
              ).toFixed(2)}
            </td>
          </tr>

          {/* EMB */}
          <tr>
            <td colSpan={4}>EMB</td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(Astronomy.Body.EMB, Astronomy.Body.Sun)
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(
                  Astronomy.Body.EMB,
                  Astronomy.Body.Mercury
                )
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(Astronomy.Body.EMB, Astronomy.Body.Venus)
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(Astronomy.Body.EMB, Astronomy.Body.Moon)
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(Astronomy.Body.EMB, Astronomy.Body.EMB)
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(Astronomy.Body.EMB, Astronomy.Body.Mars)
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(
                  Astronomy.Body.EMB,
                  Astronomy.Body.Jupiter
                )
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(Astronomy.Body.EMB, Astronomy.Body.Saturn)
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(Astronomy.Body.EMB, Astronomy.Body.Uranus)
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(
                  Astronomy.Body.EMB,
                  Astronomy.Body.Neptune
                )
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(Astronomy.Body.EMB, Astronomy.Body.Pluto)
              ).toFixed(2)}
            </td>
          </tr>

          {/* Mars */}
          <tr>
            <td colSpan={4}>Mars</td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(Astronomy.Body.Mars, Astronomy.Body.Sun)
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(
                  Astronomy.Body.Mars,
                  Astronomy.Body.Mercury
                )
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(Astronomy.Body.Mars, Astronomy.Body.Venus)
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(Astronomy.Body.Mars, Astronomy.Body.Moon)
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(Astronomy.Body.Mars, Astronomy.Body.EMB)
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(Astronomy.Body.Mars, Astronomy.Body.Mars)
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(
                  Astronomy.Body.Mars,
                  Astronomy.Body.Jupiter
                )
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(
                  Astronomy.Body.Mars,
                  Astronomy.Body.Saturn
                )
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(
                  Astronomy.Body.Mars,
                  Astronomy.Body.Uranus
                )
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(
                  Astronomy.Body.Mars,
                  Astronomy.Body.Neptune
                )
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(Astronomy.Body.Mars, Astronomy.Body.Pluto)
              ).toFixed(2)}
            </td>
          </tr>

          {/* Jupiter */}
          <tr>
            <td colSpan={4}>Jupiter</td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(
                  Astronomy.Body.Jupiter,
                  Astronomy.Body.Sun
                )
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(
                  Astronomy.Body.Jupiter,
                  Astronomy.Body.Mercury
                )
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(
                  Astronomy.Body.Jupiter,
                  Astronomy.Body.Venus
                )
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(
                  Astronomy.Body.Jupiter,
                  Astronomy.Body.Moon
                )
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(
                  Astronomy.Body.Jupiter,
                  Astronomy.Body.EMB
                )
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(
                  Astronomy.Body.Jupiter,
                  Astronomy.Body.Mars
                )
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(
                  Astronomy.Body.Jupiter,
                  Astronomy.Body.Jupiter
                )
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(
                  Astronomy.Body.Jupiter,
                  Astronomy.Body.Saturn
                )
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(
                  Astronomy.Body.Jupiter,
                  Astronomy.Body.Uranus
                )
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(
                  Astronomy.Body.Jupiter,
                  Astronomy.Body.Neptune
                )
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(
                  Astronomy.Body.Jupiter,
                  Astronomy.Body.Pluto
                )
              ).toFixed(2)}
            </td>
          </tr>

          {/* Saturn */}
          <tr>
            <td colSpan={4}>Saturn</td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(Astronomy.Body.Saturn, Astronomy.Body.Sun)
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(
                  Astronomy.Body.Saturn,
                  Astronomy.Body.Mercury
                )
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(
                  Astronomy.Body.Saturn,
                  Astronomy.Body.Venus
                )
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(
                  Astronomy.Body.Saturn,
                  Astronomy.Body.Moon
                )
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(Astronomy.Body.Saturn, Astronomy.Body.EMB)
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(
                  Astronomy.Body.Saturn,
                  Astronomy.Body.Mars
                )
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(
                  Astronomy.Body.Saturn,
                  Astronomy.Body.Jupiter
                )
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(
                  Astronomy.Body.Saturn,
                  Astronomy.Body.Saturn
                )
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(
                  Astronomy.Body.Saturn,
                  Astronomy.Body.Uranus
                )
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(
                  Astronomy.Body.Saturn,
                  Astronomy.Body.Neptune
                )
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(
                  Astronomy.Body.Saturn,
                  Astronomy.Body.Pluto
                )
              ).toFixed(2)}
            </td>
          </tr>

          {/* Uranus */}
          <tr>
            <td colSpan={4}>Uranus</td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(Astronomy.Body.Uranus, Astronomy.Body.Sun)
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(
                  Astronomy.Body.Uranus,
                  Astronomy.Body.Mercury
                )
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(
                  Astronomy.Body.Uranus,
                  Astronomy.Body.Venus
                )
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(
                  Astronomy.Body.Uranus,
                  Astronomy.Body.Moon
                )
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(Astronomy.Body.Uranus, Astronomy.Body.EMB)
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(
                  Astronomy.Body.Uranus,
                  Astronomy.Body.Mars
                )
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(
                  Astronomy.Body.Uranus,
                  Astronomy.Body.Jupiter
                )
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(
                  Astronomy.Body.Uranus,
                  Astronomy.Body.Saturn
                )
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(
                  Astronomy.Body.Uranus,
                  Astronomy.Body.Uranus
                )
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(
                  Astronomy.Body.Uranus,
                  Astronomy.Body.Neptune
                )
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(
                  Astronomy.Body.Uranus,
                  Astronomy.Body.Pluto
                )
              ).toFixed(2)}
            </td>
          </tr>

          {/* Neptune */}
          <tr>
            <td colSpan={4}>Neptune</td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(
                  Astronomy.Body.Neptune,
                  Astronomy.Body.Sun
                )
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(
                  Astronomy.Body.Neptune,
                  Astronomy.Body.Mercury
                )
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(
                  Astronomy.Body.Neptune,
                  Astronomy.Body.Venus
                )
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(
                  Astronomy.Body.Neptune,
                  Astronomy.Body.Moon
                )
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(
                  Astronomy.Body.Neptune,
                  Astronomy.Body.EMB
                )
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(
                  Astronomy.Body.Neptune,
                  Astronomy.Body.Mars
                )
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(
                  Astronomy.Body.Neptune,
                  Astronomy.Body.Jupiter
                )
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(
                  Astronomy.Body.Neptune,
                  Astronomy.Body.Saturn
                )
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(
                  Astronomy.Body.Neptune,
                  Astronomy.Body.Uranus
                )
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(
                  Astronomy.Body.Neptune,
                  Astronomy.Body.Neptune
                )
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(
                  Astronomy.Body.Neptune,
                  Astronomy.Body.Pluto
                )
              ).toFixed(2)}
            </td>
          </tr>

          {/* Pluto */}
          <tr>
            <td colSpan={4}>Pluto</td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(Astronomy.Body.Pluto, Astronomy.Body.Sun)
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(
                  Astronomy.Body.Pluto,
                  Astronomy.Body.Mercury
                )
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(
                  Astronomy.Body.Pluto,
                  Astronomy.Body.Venus
                )
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(Astronomy.Body.Pluto, Astronomy.Body.Moon)
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(Astronomy.Body.Pluto, Astronomy.Body.EMB)
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(Astronomy.Body.Pluto, Astronomy.Body.Mars)
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(
                  Astronomy.Body.Pluto,
                  Astronomy.Body.Jupiter
                )
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(
                  Astronomy.Body.Pluto,
                  Astronomy.Body.Saturn
                )
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(
                  Astronomy.Body.Pluto,
                  Astronomy.Body.Uranus
                )
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(
                  Astronomy.Body.Pluto,
                  Astronomy.Body.Neptune
                )
              ).toFixed(2)}
            </td>
            <td colSpan={4}>
              {parseFloat(
                getAngleBetweenBodies(
                  Astronomy.Body.Pluto,
                  Astronomy.Body.Pluto
                )
              ).toFixed(2)}
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default App;
