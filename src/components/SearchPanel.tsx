import SearchType from "./SearchType";
import TermType from "./TermType";
import TextInput from "./TextInput";
import { useState } from "react";

interface Props {
  onGoSearch: (input: string, type: string) => void;
}

const SearchPanel = ({ onGoSearch }: Props) => {
  const [type, setType] = useState("Subject Area");

  const retrieveGoSearch = (input: string) => {
    onGoSearch(input, type);
  };

  const updateSearchType = (type: string) => {
    setType(type);
  };

  return (
    <>
      <div className="m-5 p-3 bg-blue-50">
        <div className="flex">
          <div className="w-36 pr-3 border-r">
            <TermType />
          </div>
          <div className="w-80">
            <SearchType updateSearchType={updateSearchType} />
          </div>
        </div>
        <div className="pt-3 pl-3 w-full">
          <TextInput goSearch={retrieveGoSearch} />
        </div>
      </div>
    </>
  );
};

export default SearchPanel;
