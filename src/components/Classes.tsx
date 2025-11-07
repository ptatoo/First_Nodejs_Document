import SingleClass from "./SingleClass";

interface Props {
  data: string[][];
  sectionPara: string[];
}

function Classes({ data, sectionPara }: Props) {
  let currentClass = "";
  try {
    currentClass = data[0][0];
  } catch (error) {}
  let singleClassData = [];
  let listofClasses = [];
  let temp = sectionPara;
  sectionPara = temp;

  //splits it into a group of classes
  for (let i = 0; i < data.length; i++) {
    if (currentClass != data[i][0]) {
      currentClass = data[i][0];
      listofClasses.push(singleClassData);
      singleClassData = [];
    }
    singleClassData.push(data[i]);
  }

  listofClasses = listofClasses.splice(1);
  return (
    <>
      <div className="class list">
        {listofClasses.map((item) => (
          <SingleClass
            sectionPara={sectionPara}
            singleClassData={item}
          ></SingleClass>
        ))}
      </div>
    </>
  );
}

export default Classes;
