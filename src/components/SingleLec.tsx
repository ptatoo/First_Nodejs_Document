import SingleSection from "./SingleSection";
import { useState } from "react";

interface Props {
  singleLecData: string[][];
  sectionPara: string[];
}
const SingleLec = ({ singleLecData, sectionPara }: Props) => {
  const [toggleDiscussions, setToggleDiscussions] = useState(false);
  let discussionsExist = true;
  let discussions = singleLecData.slice(1);
  if (discussions.length === 0) discussionsExist = false;

  return (
    <>
      <div>
        <div className="flex">
          <button
            className={`${
              discussionsExist ? "block" : "hidden"
            } text-center align-middle w-6 text- bg-blue-400 m-1 p-0`}
            onClick={() => setToggleDiscussions(!toggleDiscussions)}
          >
            v
          </button>
          <div
            className={`${
              discussionsExist ? "hidden" : "block"
            } text-center align-middle w-6 text- bg-white m-1 p-0`}
          ></div>
          <SingleSection data={singleLecData[0]} sectionPara={sectionPara} />
        </div>
        <div className="flex">
          <div className="w-8"></div>
          <div className={`${toggleDiscussions ? "block" : "hidden"} w-full`}>
            {discussions.map((item) => (
              <SingleSection data={item} sectionPara={sectionPara} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleLec;
