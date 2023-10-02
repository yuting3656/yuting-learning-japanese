import { Grid } from "@mui/material";
import React, { useRef, useState } from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

//
// IMPORT ZONE
//

const Day15 = () => {
  const { transcript, resetTranscript } = useSpeechRecognition();
  const [isListening, setIsListening] = useState(false);
  const microphoneRef = useRef(null);

  if (!SpeechRecognition.browserSupportsSpeechRecognition()) {
    return (
      <div className="mircophone-container">
        Browser is not Support Speech Recognition.
      </div>
    );
  }

  const handleListing = () => {
    setIsListening(true);
    microphoneRef.current.classList.add("listening");
    SpeechRecognition.startListening({
      continuous: true,
    });
  };
  const stopHandle = () => {
    setIsListening(false);
    microphoneRef.current.classList.remove("listening");
    SpeechRecognition.stopListening();
  };
  const handleReset = () => {
    stopHandle();
    resetTranscript();
  };
  return (
    <Grid
      container
      spacing={{ mobile: 1, tablet: 2, laptop: 3 }}
      style={{ textAlign: "center" }}
    >
      <Grid item xs={12}>
        <Grid item xs={12} style={{ fontSize: "36px", fontWeight: "bold" }}>
          <div> 今天中秋節 </div>
          <div> 月圓人團圓 </div>
          <div> 明月幾時有 </div>
          <div> 把酒問青天 </div>
          <div> 我問好多天 </div>
          <div> 也寫好多天</div>
          <div> 廢文不可取 </div>
          <div> 但可撐一天 </div>
          <div> 還有烤肉吃 </div>
          <div> 就算好人間 </div>
          <div> 抬頭看滿月 </div>
          <div> 低頭肉翻面</div>
          <div> 拿醬塗一遍 </div>
          <div> 晚宴來相見 </div>
          <div> 可樂必選配 </div>
          <div> 冰塊也想陪 </div>
          <div> 人在都市外 </div>
          <div> 沒水也沒電</div>
          <div> 只剩手機俠 </div>
          <div> 趕緊寫一遍 </div>
          <div> 字數應到達 </div>
          <div> 時候說再見 </div>
          <div> 明月幾時有 </div>
          <div> 今日已滿月</div>
          <div> 時光飛逝啊 </div>
          <div> 鐵人過一半 </div>
          <div> 廢文在手上 </div>
          <div> 一定能過線 </div>
          <div> 明年必報名 </div>
          <div> 廢文中秋見</div>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Day15;
