const TermType = () => {
  return (
    <>
      <div className="text-right w-full">
        Term: <br></br>
      </div>
      <select name="selectedTerm" className="bg-white text-center w-full p-1">
        <option value="wi2026 focus:bg-blue-100">Winter 2026</option>
        <option value="sp2026">Spring 2026</option>
        <option value="su2026">Summer 2026</option>
      </select>
    </>
  );
};

export default TermType;
