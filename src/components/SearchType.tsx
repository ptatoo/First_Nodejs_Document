interface Props {
  updateSearchType: (type: string) => void;
}

const SearchType = ({ updateSearchType }: Props) => {
  const search_type = [
    "Subject Area",
    "Class Units",
    "Class ID",
    "Instructor",
    "GE Classes",
    "Writing II Classes",
    "Diversity Classes",
    "College Honors Classes",
    "Fiat Lux Classes",
    "Community-Engaged Learning Classes",
    "USIE Seminars",
    "Law Classes",
    "Online - Classes Not Recorded",
    "Online - Classes Recorded",
    "Online - Asynchronous",
  ];

  const updateSearch = (type: string) => {
    updateSearchType(type);
  };

  return (
    <>
      <div className="pl-3">
        <label className=" w-32">
          Search By:
          <select
            name="selectedSearch"
            onChange={(event) => {
              const newValue = event.target.value;
              updateSearch(newValue);
            }}
            className="bg-white text-center w-full p-1"
          >
            {search_type.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>
      </div>
    </>
  );
};

export default SearchType;
