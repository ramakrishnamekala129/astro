import "./App.css";
import { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import TextField from "@mui/material/TextField";
import { LocalizationProvider, DatePicker } from "@mui/lab";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

const Astronomy = require("./astronomy.js");

function App() {
  const [value, setValue] = useState(new Date());
  const [basicPicker, setBasicPicker] = useState(new Date());
  useEffect(() => {}, []);

  const getAngleBetweenBodies = (Body1, Body2, time) => {
    //
    const angle = Astronomy.PairLongitude(Body1, Body2, time);
    return angle;
  };

  function addMinutes(date, minutes) {
    return new Date(date.getTime() + minutes * 60000);
  }

  const getForSun = () => {
    const rows = [];
    const time = new Date(
      value.getFullYear(),
      value.getMonth(),
      value.getDate(),
      0,
      0,
      0,
      0
    );
    for (let index = 0; index < 1000; index = index + 3) {
      rows.push(
        <tr key={index}>
          <td colSpan={2}>
            {addMinutes(time, index).toTimeString().substring(0, 5)}
          </td>
          {[
            { body1: Astronomy.Body.Sun, body2: Astronomy.Body.Mercury },
            { body1: Astronomy.Body.Sun, body2: Astronomy.Body.Venus },
            { body1: Astronomy.Body.Sun, body2: Astronomy.Body.Moon },
            { body1: Astronomy.Body.Sun, body2: Astronomy.Body.Mars },
            { body1: Astronomy.Body.Sun, body2: Astronomy.Body.Jupiter },
            { body1: Astronomy.Body.Sun, body2: Astronomy.Body.Saturn },
            { body1: Astronomy.Body.Sun, body2: Astronomy.Body.Uranus },
            { body1: Astronomy.Body.Sun, body2: Astronomy.Body.Neptune },
            { body1: Astronomy.Body.Sun, body2: Astronomy.Body.Pluto },

            { body1: Astronomy.Body.Mercury, body2: Astronomy.Body.Venus },
            { body1: Astronomy.Body.Mercury, body2: Astronomy.Body.Moon },
            { body1: Astronomy.Body.Mercury, body2: Astronomy.Body.Mars },
            { body1: Astronomy.Body.Mercury, body2: Astronomy.Body.Jupiter },
            { body1: Astronomy.Body.Mercury, body2: Astronomy.Body.Saturn },
            { body1: Astronomy.Body.Mercury, body2: Astronomy.Body.Uranus },
            { body1: Astronomy.Body.Mercury, body2: Astronomy.Body.Neptune },
            { body1: Astronomy.Body.Mercury, body2: Astronomy.Body.Pluto },

            { body1: Astronomy.Body.Venus, body2: Astronomy.Body.Moon },
            { body1: Astronomy.Body.Venus, body2: Astronomy.Body.Mars },
            { body1: Astronomy.Body.Venus, body2: Astronomy.Body.Jupiter },
            { body1: Astronomy.Body.Venus, body2: Astronomy.Body.Saturn },
            { body1: Astronomy.Body.Venus, body2: Astronomy.Body.Uranus },
            { body1: Astronomy.Body.Venus, body2: Astronomy.Body.Neptune },
            { body1: Astronomy.Body.Venus, body2: Astronomy.Body.Pluto },

            { body1: Astronomy.Body.Moon, body2: Astronomy.Body.Mars },
            { body1: Astronomy.Body.Moon, body2: Astronomy.Body.Jupiter },
            { body1: Astronomy.Body.Moon, body2: Astronomy.Body.Saturn },
            { body1: Astronomy.Body.Moon, body2: Astronomy.Body.Uranus },
            { body1: Astronomy.Body.Moon, body2: Astronomy.Body.Neptune },
            { body1: Astronomy.Body.Moon, body2: Astronomy.Body.Pluto },

            { body1: Astronomy.Body.Mars, body2: Astronomy.Body.Jupiter },
            { body1: Astronomy.Body.Mars, body2: Astronomy.Body.Saturn },
            { body1: Astronomy.Body.Mars, body2: Astronomy.Body.Uranus },
            { body1: Astronomy.Body.Mars, body2: Astronomy.Body.Neptune },
            { body1: Astronomy.Body.Mars, body2: Astronomy.Body.Pluto },

            { body1: Astronomy.Body.Jupiter, body2: Astronomy.Body.Saturn },
            { body1: Astronomy.Body.Jupiter, body2: Astronomy.Body.Uranus },
            { body1: Astronomy.Body.Jupiter, body2: Astronomy.Body.Neptune },
            { body1: Astronomy.Body.Jupiter, body2: Astronomy.Body.Pluto },

            { body1: Astronomy.Body.Saturn, body2: Astronomy.Body.Uranus },
            { body1: Astronomy.Body.Saturn, body2: Astronomy.Body.Neptune },
            { body1: Astronomy.Body.Saturn, body2: Astronomy.Body.Pluto },

            { body1: Astronomy.Body.Uranus, body2: Astronomy.Body.Neptune },
            { body1: Astronomy.Body.Uranus, body2: Astronomy.Body.Pluto },

            { body1: Astronomy.Body.Neptune, body2: Astronomy.Body.Pluto },
          ].map((item) => {
            return (
              <td colSpan={4}>
                {getAngleBetweenBodies(
                  item.body1,
                  item.body2,
                  addMinutes(time, index)
                ).toFixed(2)}
              </td>
            );
          })}
        </tr>
      );
    }
    return rows;
  };

  return (
    <div className="App">
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          displayStaticWrapperAs="mobile"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
      <Table striped bordered hover id="planets">
        <tbody>
          <tr>
            <td colSpan={2}>Time</td>
            <td colSpan={4}>Su Me</td>
            <td colSpan={4}>Su Ve</td>
            <td colSpan={4}>Su Mo</td>
            <td colSpan={4}>Su Ma</td>
            <td colSpan={4}>Su Ju</td>
            <td colSpan={4}>Su Sa</td>
            <td colSpan={4}>Su Ur</td>
            <td colSpan={4}>Su Ne</td>
            <td colSpan={4}>Su Pl</td>
            <td colSpan={4}>Me Ve</td>
            <td colSpan={4}>Me Mo</td>
            <td colSpan={4}>Me Ma</td>
            <td colSpan={4}>Me Ju</td>
            <td colSpan={4}>Me Sa</td>
            <td colSpan={4}>Me Ur</td>
            <td colSpan={4}>Me Ne</td>
            <td colSpan={4}>Me Pl</td>

            <td colSpan={4}>Ve Mo</td>
            <td colSpan={4}>Ve Ma</td>
            <td colSpan={4}>Ve Ju</td>
            <td colSpan={4}>Ve Sa</td>
            <td colSpan={4}>Ve Ur</td>
            <td colSpan={4}>Ve Ne</td>
            <td colSpan={4}>Ve Pl</td>

            <td colSpan={4}>Mo Ma</td>
            <td colSpan={4}>Mo Ju</td>
            <td colSpan={4}>Mo Sa</td>
            <td colSpan={4}>Mo Ur</td>
            <td colSpan={4}>Mo Ne</td>
            <td colSpan={4}>Mo Pl</td>

            <td colSpan={4}>Ma Ju</td>
            <td colSpan={4}>Ma Sa</td>
            <td colSpan={4}>Ma Ur</td>
            <td colSpan={4}>Ma Ne</td>
            <td colSpan={4}>Ma Pl</td>

            <td colSpan={4}>Ju Sa</td>
            <td colSpan={4}>Ju Ur</td>
            <td colSpan={4}>Ju Ne</td>
            <td colSpan={4}>Ju Pl</td>

            <td colSpan={4}>Sa Ur</td>
            <td colSpan={4}>Sa Ne</td>
            <td colSpan={4}>Sa Pl</td>

            <td colSpan={4}>Ur Ne</td>
            <td colSpan={4}>Ur Pl</td>

            <td colSpan={4}>Ne Pl</td>
          </tr>
          {getForSun()}
        </tbody>
      </Table>
    </div>
  );
}

export default App;
