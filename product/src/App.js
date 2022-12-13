import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import General from "./routes/General/General";
import Courses from "./routes/Courses/Courses";
import Shop from "./routes/Shop/Shop";
import News from "./routes/News/News";
import Video from "./routes/Videos/Video";

function App() {
  //   // STATE
  //   const [staeData, dispatchData] = React.useReducer(ReducerData, StateData);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<General />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/news" element={<News />} />
        <Route path="/video" element={<Video />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
