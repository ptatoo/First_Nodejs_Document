import { useState } from "react";

interface Props {
  goSearch: (searchInput: string) => void;
}

const TextInput = ({ goSearch }: Props) => {
  const [searchInput, setSearchInput] = useState("");

  function goButtonClicked() {
    goSearch(searchInput);
  }

  return (
    <>
      <label>
        Text input:{" "}
        <input
          type="text"
          placeholder={"search"}
          onChange={(e) => setSearchInput(e.target.value)}
          className="bg-white p-1.5 mr-6 mb-3 w-full max-w-lg"
        />
      </label>
      <button className="bg-white p-1.5" onClick={goButtonClicked}>
        Go
      </button>
    </>
  );
};

export default TextInput;
