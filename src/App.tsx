import SearchPanel from "./components/SearchPanel";
import Classes from "./components/Classes";
import { useState } from "react";

//app function
function App() {
  //constants
  const [sectionData, setSectionData] = useState([]);
  const sectionPara = [
    "classId",
    "lec_dis",
    "status",
    "total_spots",
    "enrolled_spots",
    "waitlist_status",
    "days",
    "start_time",
    "end_time",
    "location",
    "units",
    "instructors",
  ];

  const displayPara = [
    "section",
    "status",
    "total spots",
    "enrolled spots",
    "waitlist",
    "days",
    "start time",
    "end time",
    "location",
    "units",
    "instructors",
  ];

  //initiate search function passed to child components
  const retrieveGoSearch = (input: string, type: string) => {
    console.log("input: ", input, "\ntype: ", type);
    retrieveClassData("MATH");
  };

  //fetches data and stores it as 2D array
  async function retrieveClassData(classId: string) {
    let temp = classId;
    classId = temp;
    //fetch data from server
    try {
      const response = await fetch(
        "https://ucla-schedule-scraper-backend.onrender.com/get?filePath=MATH.csv"
      );
      if (!response.ok) {
        throw new Error("HTTP error: ${response.status}");
      }
      const jsonData = await response.json();
      console.log(JSON.stringify(jsonData));
      //convert data from object to 2D array
      const allSections = jsonData.map((item: any) => {
        return sectionPara.map((key) => item[key]);
      });
      setSectionData(allSections);
      console.log(sectionData[0]);
    } catch (error) {
      console.error("Error message: ", error);
    }
  }

  return (
    <>
      <div className="font-serif">
        <SearchPanel onGoSearch={retrieveGoSearch} />
      </div>
      <div className="font-serif">
        <Classes data={sectionData} sectionPara={displayPara} />
      </div>
    </>
  );
}

export default App;
