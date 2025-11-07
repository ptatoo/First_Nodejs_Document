import { useState } from "react";
import SingleLec from "./SingleLec";

interface Props {
  singleClassData: string[][];
  sectionPara: string[];
}

function SingleClass({ singleClassData, sectionPara }: Props) {
  let classId = singleClassData[0][0];
  let className = "";
  let firstDigit = true;
  const [toggleSections, settoggleSection] = useState(false);

  //create class name from class id
  function isStringDigits(str: string) {
    return /^\d+$/.test(str);
  }
  for (let i = 0; i < classId.length; i++) {
    if (classId.charAt(i) != "0") {
      if (isStringDigits(classId.charAt(i)) && firstDigit) {
        firstDigit = false;
        className += " ";
      }
      className += classId.charAt(i);
    }
  }

  let classDataByLec = [];
  for (let i = 0; i < singleClassData.length; i++) {
    if (singleClassData[i][1].slice(0, 3) != "Dis") {
      classDataByLec.push([singleClassData[i]]);
    } else {
      classDataByLec[classDataByLec.length - 1].push(singleClassData[i]);
    }
  }

  return (
    <>
      <div className="single class mx-5 my-3">
        <button
          className="text-lg p-1.5 bg-blue-200 w-full hover:bg-blue-300"
          onClick={() => settoggleSection(!toggleSections)}
        >
          {className}
        </button>

        <div className={`${toggleSections ? "block" : "hidden"} flex`}>
          <div className="bg-gray-100 w-8"></div>
          <div className="grid grid-cols-11 w-full text-xs bg-gray-100">
            {sectionPara.map((__, index) => (
              <div className="p-1 border-white border text-center align-middle text-wrap">
                {sectionPara[index]}
              </div>
            ))}
          </div>
        </div>

        <div
          className={`${toggleSections ? "block" : "hidden"} text-xs w-full`}
        >
          {classDataByLec.map((item) => (
            <SingleLec singleLecData={item} sectionPara={sectionPara} />
          ))}
        </div>
      </div>
    </>
  );
}

export default SingleClass;
