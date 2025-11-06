import { useState } from "react";

interface Props {
  data: string[];
  sectionPara: string[];
}

function SingleSection({ data, sectionPara }: Props) {
  return (
    <>
      <div className="flex w-full">
        <div className="grid grid-cols-11 bg-blue-100 w-full">
          {sectionPara.map((___, index) => (
            <div className="p-1 border-white border text-center align-middle text-wrap">
              {data[index + 1]}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default SingleSection;
