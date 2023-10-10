import React, { useEffect, useState } from "react";
import { hiraganaList } from "../../shared/model/aiueoObj";
import "./wordsSpinningWheelStyle.css";
import { Tooltip } from "@mui/material";
//
// IMPORT ZONE
//

const WordsSpinningWheel = () => {
  const [wordsList, setWordsList] = useState([]);
  useEffect(() => {
    const tmpWordsList = hiraganaList.reduce((state, current) => {
      const words = current.words.filter((d) => {
        if (d) {
          return d;
        }
        return null;
      });
      state = state.concat(words);
      return state;
    }, []);
    console.log(tmpWordsList.length);
    setWordsList(tmpWordsList);
  }, []);

  const handleSpinOnClick = () => {
    let wheel = document.querySelector(".wheel");
    let value = Math.ceil(Math.random() * 3600);

    wheel.style.transform = `rotate(${value}deg)`;
  };

  return (
    <div class="main">
      <div class="container">
        <div class="spinBtn" onClick={() => handleSpinOnClick()}>
          SPIN
        </div>
        <div class="wheel">
          {wordsList.map((d, idx) => (
            <div
              key={idx}
              class="number"
              style={{
                "--i": idx + 1,
                "--clr":
                  "#" +
                  (((1 << 24) * Math.random()) | 0)
                    .toString(16)
                    .padStart(6, "0"),
              }}
            >
              <Tooltip style={{ zIndex: 999 }} title={d}>
                <span>{d}</span>
              </Tooltip>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WordsSpinningWheel;
