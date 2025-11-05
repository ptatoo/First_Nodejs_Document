import SearchPanel from "./components/SearchPanel";
import Classes from "./components/Classes";
import { useState } from "react";

function App() {
  const [sectionData, setSectionData] = useState([]);
  const sectionPara = [
    "classId",
    "lec_dis",
    "total_spots",
    "enrollled_spots",
    "waitlist_status",
    "days",
    "start_time",
    "end_time",
    "location",
    "units",
    "instructors",
  ];

  const retrieveGoSearch = (input: string, type: string) => {
    retrieveClassData(input, type);
  };

  //fetches data and stores it as 2D array
  async function retrieveClassData(input: string, type: string) {
    console.log("input: ", input, "\ntype: ", type);
    //fetch data from server
    try {
      const response = await fetch(
        "https://ucla-schedule-scraper.onrender.com/"
      );
      if (!response.ok) {
        throw new Error("HTTP error: ${response.status}");
      }
      const jsonData = await response.json();

      //convert data from object to 2D array
      const allSections = jsonData.map((item: any) => {
        return sectionPara.map((key) => item[key]);
      });
      setSectionData(allSections);
    } catch (error) {
      console.error("Error message: ", error);
    }
  }

  return (
    <>
      <div className="font-serif">
        <SearchPanel onGoSearch={retrieveGoSearch} />
      </div>
      <Classes data={sectionData} sectionPara={sectionPara} />
    </>
  );
}

export default App;
