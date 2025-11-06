import { useState } from "react";
import Select, { type SingleValue } from "react-select";

interface Props {
  goSearch: (searchInput: string) => void;
}

interface OptionType {
  value: string;
  label: string;
}

const TextInput = ({ goSearch }: Props) => {
  const [searchInput, setSearchInput] = useState("");

  const subjectOptions: OptionType[] = [
    {
      value: "Aerospace Studies (AERO ST)",
      label: "Aerospace Studies (AERO ST)",
    },
    {
      value: "African American Studies (AF AMER)",
      label: "African American Studies (AF AMER)",
    },
    { value: "African Studies (AFRC ST)", label: "African Studies (AFRC ST)" },
    {
      value: "American Indian Studies (AM IND)",
      label: "American Indian Studies (AM IND)",
    },
    {
      value: "American Sign Language (ASL)",
      label: "American Sign Language (ASL)",
    },
    {
      value: "Ancient Near East (AN N EA)",
      label: "Ancient Near East (AN N EA)",
    },
    { value: "Anthropology (ANTHRO)", label: "Anthropology (ANTHRO)" },
    {
      value: "Applied Chemical Sciences (APP CHM)",
      label: "Applied Chemical Sciences (APP CHM)",
    },
    { value: "Arabic", label: "Arabic" },
    { value: "Archaeology (ARCHEOL)", label: "Archaeology (ARCHEOL)" },
    {
      value: "Architecture and Urban Design (ARCH&UD)",
      label: "Architecture and Urban Design (ARCH&UD)",
    },
    { value: "Armenian (ARMENIA)", label: "Armenian (ARMENIA)" },
    { value: "Art", label: "Art" },
    { value: "Art History (ART HIS)", label: "Art History (ART HIS)" },
    {
      value: "Arts and Architecture (ART&ARC)",
      label: "Arts and Architecture (ART&ARC)",
    },
    { value: "Arts Education (ARTS ED)", label: "Arts Education (ARTS ED)" },
    { value: "Asian", label: "Asian" },
    {
      value: "Asian American Studies (ASIA AM)",
      label: "Asian American Studies (ASIA AM)",
    },
    { value: "Astronomy (ASTR)", label: "Astronomy (ASTR)" },
    {
      value: "Atmospheric and Oceanic Sciences (A&O SCI)",
      label: "Atmospheric and Oceanic Sciences (A&O SCI)",
    },
    { value: "Bioengineering (BIOENGR)", label: "Bioengineering (BIOENGR)" },
    {
      value: "Bioinformatics (Graduate) (BIOINFO)",
      label: "Bioinformatics (Graduate) (BIOINFO)",
    },
    {
      value: "Biological Chemistry (BIOL CH)",
      label: "Biological Chemistry (BIOL CH)",
    },
    { value: "Biomathematics (BIOMATH)", label: "Biomathematics (BIOMATH)" },
    {
      value: "Biomedical Research (BMD RES)",
      label: "Biomedical Research (BMD RES)",
    },
    { value: "Biostatistics (BIOSTAT)", label: "Biostatistics (BIOSTAT)" },
    {
      value: "Chemical Engineering (CH ENGR)",
      label: "Chemical Engineering (CH ENGR)",
    },
    {
      value: "Chemistry and Biochemistry (CHEM)",
      label: "Chemistry and Biochemistry (CHEM)",
    },
    {
      value: "Chicana/o and Central American Studies (CCAS)",
      label: "Chicana/o and Central American Studies (CCAS)",
    },
    { value: "Chinese (CHIN)", label: "Chinese (CHIN)" },
    {
      value: "Civil and Environmental Engineering (C&EE)",
      label: "Civil and Environmental Engineering (C&EE)",
    },
    { value: "Classics (CLASSIC)", label: "Classics (CLASSIC)" },
    { value: "Clusters (CLUSTER)", label: "Clusters (CLUSTER)" },
    { value: "Communication (COMM)", label: "Communication (COMM)" },
    {
      value: "Community Engagement and Social Change (CESC)",
      label: "Community Engagement and Social Change (CESC)",
    },
    {
      value: "Community Health Sciences (COM HLT)",
      label: "Community Health Sciences (COM HLT)",
    },
    {
      value: "Comparative Literature (COM LIT)",
      label: "Comparative Literature (COM LIT)",
    },
    {
      value: "Computational and Systems Biology (C&S BIO)",
      label: "Computational and Systems Biology (C&S BIO)",
    },
    {
      value: "Computer Science (COM SCI)",
      label: "Computer Science (COM SCI)",
    },
    {
      value: "Conservation of Cultural Heritage (CLT HTG)",
      label: "Conservation of Cultural Heritage (CLT HTG)",
    },
    { value: "Dance", label: "Dance" },
    {
      value: "Data Science in Biomedicine (DS BMED)",
      label: "Data Science in Biomedicine (DS BMED)",
    },
    {
      value: "Design / Media Arts (DESMA)",
      label: "Design / Media Arts (DESMA)",
    },
    {
      value: "Digital Humanities (DGT HUM)",
      label: "Digital Humanities (DGT HUM)",
    },
    {
      value: "Disability Studies (DIS STD)",
      label: "Disability Studies (DIS STD)",
    },
    { value: "Dutch", label: "Dutch" },
    {
      value: "Earth, Planetary, and Space Sciences (EPS SCI)",
      label: "Earth, Planetary, and Space Sciences (EPS SCI)",
    },
    {
      value: "Ecology and Evolutionary Biology (EE BIOL)",
      label: "Ecology and Evolutionary Biology (EE BIOL)",
    },
    { value: "Economics (ECON)", label: "Economics (ECON)" },
    { value: "Education (EDUC)", label: "Education (EDUC)" },
    {
      value: "Electrical and Computer Engineering (EC ENGR)",
      label: "Electrical and Computer Engineering (EC ENGR)",
    },
    { value: "Engineering (ENGR)", label: "Engineering (ENGR)" },
    { value: "English (ENGL)", label: "English (ENGL)" },
    {
      value: "English as A Second Language (ESL)",
      label: "English as A Second Language (ESL)",
    },
    {
      value: "English Composition (ENGCOMP)",
      label: "English Composition (ENGCOMP)",
    },
    { value: "Environment (ENVIRON)", label: "Environment (ENVIRON)" },
    {
      value: "Environmental Health Sciences (ENV HLT)",
      label: "Environmental Health Sciences (ENV HLT)",
    },
    { value: "Epidemiology (EPIDEM)", label: "Epidemiology (EPIDEM)" },
    { value: "Ethnomusicology (ETHNMUS)", label: "Ethnomusicology (ETHNMUS)" },
    {
      value: "European Languages and Transcultural Studies (ELTS)",
      label: "European Languages and Transcultural Studies (ELTS)",
    },
    { value: "Fiat Lux (FIAT LX)", label: "Fiat Lux (FIAT LX)" },
    { value: "Filipino (FILIPNO)", label: "Filipino (FILIPNO)" },
    {
      value: "Film and Television (FILM TV)",
      label: "Film and Television (FILM TV)",
    },
    { value: "Food Studies (FOOD ST)", label: "Food Studies (FOOD ST)" },
    { value: "French (FRNCH)", label: "French (FRNCH)" },
    { value: "Gender Studies (GENDER)", label: "Gender Studies (GENDER)" },
    { value: "Geography (GEOG)", label: "Geography (GEOG)" },
    { value: "German", label: "German" },
    { value: "Gerontology (GRNTLGY)", label: "Gerontology (GRNTLGY)" },
    { value: "Global Health (GLB HLT)", label: "Global Health (GLB HLT)" },
    {
      value: "Global Jazz Studies (GJ STDS)",
      label: "Global Jazz Studies (GJ STDS)",
    },
    { value: "Global Studies (GLBL ST)", label: "Global Studies (GLBL ST)" },
    {
      value: "Graduate Student Professional Development (GRAD PD)",
      label: "Graduate Student Professional Development (GRAD PD)",
    },
    { value: "Greek", label: "Greek" },
    {
      value: "Health Policy and Management (HLT POL)",
      label: "Health Policy and Management (HLT POL)",
    },
    {
      value: "Healthcare Administration (HLT ADM)",
      label: "Healthcare Administration (HLT ADM)",
    },
    { value: "Hebrew", label: "Hebrew" },
    { value: "Hindi-Urdu (HIN-URD)", label: "Hindi-Urdu (HIN-URD)" },
    { value: "History (HIST)", label: "History (HIST)" },
    { value: "Honors Collegium (HNRS)", label: "Honors Collegium (HNRS)" },
    { value: "Human Genetics (HUM GEN)", label: "Human Genetics (HUM GEN)" },
    { value: "Hungarian (HNGAR)", label: "Hungarian (HNGAR)" },
    {
      value: "Indigenous Languages of the Americas (IL AMER)",
      label: "Indigenous Languages of the Americas (IL AMER)",
    },
    {
      value: "Indo-European Studies (I E STD)",
      label: "Indo-European Studies (I E STD)",
    },
    { value: "Indonesian (INDO)", label: "Indonesian (INDO)" },
    {
      value: "Information Studies (INF STD)",
      label: "Information Studies (INF STD)",
    },
    {
      value: "International and Area Studies (I A STD)",
      label: "International and Area Studies (I A STD)",
    },
    {
      value: "International Development Studies (INTL DV)",
      label: "International Development Studies (INTL DV)",
    },
    {
      value: "International Migration Studies (I M STD)",
      label: "International Migration Studies (I M STD)",
    },
    { value: "Iranian", label: "Iranian" },
    { value: "Islamic Studies (ISLM ST)", label: "Islamic Studies (ISLM ST)" },
    { value: "Italian", label: "Italian" },
    { value: "Japanese (JAPAN)", label: "Japanese (JAPAN)" },
    { value: "Jewish Studies (JEWISH)", label: "Jewish Studies (JEWISH)" },
    { value: "Korean (KOREA)", label: "Korean (KOREA)" },
    { value: "Labor Studies (LBR STD)", label: "Labor Studies (LBR STD)" },
    { value: "Latin", label: "Latin" },
    {
      value: "Latin American Studies (LATN AM)",
      label: "Latin American Studies (LATN AM)",
    },
    {
      value: "Lesbian, Gay, Bisexual, Transgender, and Queer Studies (LGBTQS)",
      label: "Lesbian, Gay, Bisexual, Transgender, and Queer Studies (LGBTQS)",
    },
    { value: "Life Sciences (LIFESCI)", label: "Life Sciences (LIFESCI)" },
    { value: "Linguistics (LING)", label: "Linguistics (LING)" },
    { value: "Management (MGMT)", label: "Management (MGMT)" },
    {
      value: "Management-Executive MBA (MGMTEX)",
      label: "Management-Executive MBA (MGMTEX)",
    },
    {
      value: "Management-Full-Time MBA (MGMTFT)",
      label: "Management-Full-Time MBA (MGMTFT)",
    },
    {
      value: "Management-Fully Employed MBA (MGMTFE)",
      label: "Management-Fully Employed MBA (MGMTFE)",
    },
    {
      value: "Management-Global Executive MBA Asia Pacific (MGMTGEX)",
      label: "Management-Global Executive MBA Asia Pacific (MGMTGEX)",
    },
    {
      value: "Management-Master of Financial Engineering (MGMTMFE)",
      label: "Management-Master of Financial Engineering (MGMTMFE)",
    },
    {
      value: "Management-Master of Science in Business Analytics (MGMTMSA)",
      label: "Management-Master of Science in Business Analytics (MGMTMSA)",
    },
    { value: "Management-PhD (MGMTPHD)", label: "Management-PhD (MGMTPHD)" },
    {
      value: "Materials Science and Engineering (MAT SCI)",
      label: "Materials Science and Engineering (MAT SCI)",
    },
    { value: "Mathematics (MATH)", label: "Mathematics (MATH)" },
    {
      value: "Mechanical and Aerospace Engineering (MECH&AE)",
      label: "Mechanical and Aerospace Engineering (MECH&AE)",
    },
    { value: "Medical History (MED HIS)", label: "Medical History (MED HIS)" },
    { value: "Medicine (MED)", label: "Medicine (MED)" },
    {
      value: "Microbiology, Immunology, and Molecular Genetics (MIMG)",
      label: "Microbiology, Immunology, and Molecular Genetics (MIMG)",
    },
    {
      value: "Middle Eastern Studies (M E STD)",
      label: "Middle Eastern Studies (M E STD)",
    },
    {
      value: "Military Science (MIL SCI)",
      label: "Military Science (MIL SCI)",
    },
    {
      value: "Molecular and Medical Pharmacology (M PHARM)",
      label: "Molecular and Medical Pharmacology (M PHARM)",
    },
    {
      value: "Molecular Biology (MOL BIO)",
      label: "Molecular Biology (MOL BIO)",
    },
    {
      value: "Molecular Toxicology (MOL TOX)",
      label: "Molecular Toxicology (MOL TOX)",
    },
    {
      value: "Molecular, Cell, and Developmental Biology (MCD BIO)",
      label: "Molecular, Cell, and Developmental Biology (MCD BIO)",
    },
    {
      value: "Molecular, Cellular, and Integrative Physiology (MC&IP)",
      label: "Molecular, Cellular, and Integrative Physiology (MC&IP)",
    },
    { value: "Music (MUSC)", label: "Music (MUSC)" },
    { value: "Music Industry (MSC IND)", label: "Music Industry (MSC IND)" },
    { value: "Musicology (MUSCLG)", label: "Musicology (MUSCLG)" },
    { value: "Naval Science (NAV SCI)", label: "Naval Science (NAV SCI)" },
    {
      value: "Near Eastern Languages (NR EAST)",
      label: "Near Eastern Languages (NR EAST)",
    },
    {
      value: "Neuroscience (Graduate) (NEURO)",
      label: "Neuroscience (Graduate) (NEURO)",
    },
    { value: "Neuroscience (NEUROSC)", label: "Neuroscience (NEUROSC)" },
    { value: "Nursing", label: "Nursing" },
    { value: "Oral Biology (ORL BIO)", label: "Oral Biology (ORL BIO)" },
    {
      value: "Pathology and Laboratory Medicine (PATH)",
      label: "Pathology and Laboratory Medicine (PATH)",
    },
    { value: "Philosophy (PHILOS)", label: "Philosophy (PHILOS)" },
    { value: "Physics", label: "Physics" },
    {
      value: "Physics and Biology in Medicine (PBMED)",
      label: "Physics and Biology in Medicine (PBMED)",
    },
    {
      value: "Physiological Science (PHYSCI)",
      label: "Physiological Science (PHYSCI)",
    },
    { value: "Physiology (PHYSIOL)", label: "Physiology (PHYSIOL)" },
    { value: "Polish (POLSH)", label: "Polish (POLSH)" },
    {
      value: "Political Science (POL SCI)",
      label: "Political Science (POL SCI)",
    },
    { value: "Portuguese (PORTGSE)", label: "Portuguese (PORTGSE)" },
    {
      value: "Program in Computing (COMPTNG)",
      label: "Program in Computing (COMPTNG)",
    },
    {
      value: "Psychiatry and Biobehavioral Sciences (PSYCTRY)",
      label: "Psychiatry and Biobehavioral Sciences (PSYCTRY)",
    },
    { value: "Psychology (PSYCH)", label: "Psychology (PSYCH)" },
    { value: "Public Affairs (PUB AFF)", label: "Public Affairs (PUB AFF)" },
    { value: "Public Health (PUB HLT)", label: "Public Health (PUB HLT)" },
    { value: "Public Policy (PUB PLC)", label: "Public Policy (PUB PLC)" },
    {
      value: "Quantum Science and Technology (QNT SCI)",
      label: "Quantum Science and Technology (QNT SCI)",
    },
    {
      value: "Religion, Study of (RELIGN)",
      label: "Religion, Study of (RELIGN)",
    },
    {
      value: "Research Practice (RES PRC)",
      label: "Research Practice (RES PRC)",
    },
    { value: "Romanian (ROMANIA)", label: "Romanian (ROMANIA)" },
    { value: "Russian (RUSSN)", label: "Russian (RUSSN)" },
    { value: "Scandinavian (SCAND)", label: "Scandinavian (SCAND)" },
    {
      value: "Science Education (SCI EDU)",
      label: "Science Education (SCI EDU)",
    },
    { value: "Semitic", label: "Semitic" },
    {
      value: "Serbian/Croatian (SRB CRO)",
      label: "Serbian/Croatian (SRB CRO)",
    },
    { value: "Slavic (SLAVC)", label: "Slavic (SLAVC)" },
    { value: "Social Science (SOC SC)", label: "Social Science (SOC SC)" },
    { value: "Social Thought (SOC THT)", label: "Social Thought (SOC THT)" },
    { value: "Social Welfare (SOC WLF)", label: "Social Welfare (SOC WLF)" },
    {
      value: "Society and Genetics (SOC GEN)",
      label: "Society and Genetics (SOC GEN)",
    },
    { value: "Sociology (SOCIOL)", label: "Sociology (SOCIOL)" },
    { value: "South Asian (S ASIAN)", label: "South Asian (S ASIAN)" },
    { value: "Southeast Asian (SEASIAN)", label: "Southeast Asian (SEASIAN)" },
    { value: "Spanish (SPAN)", label: "Spanish (SPAN)" },
    { value: "Statistics (STATS)", label: "Statistics (STATS)" },
    { value: "Swahili", label: "Swahili" },
    { value: "Thai", label: "Thai" },
    { value: "Theater", label: "Theater" },
    { value: "Turkic Languages (TURKIC)", label: "Turkic Languages (TURKIC)" },
    { value: "Ukrainian (UKRN)", label: "Ukrainian (UKRN)" },
    {
      value: "University Studies (UNIV ST)",
      label: "University Studies (UNIV ST)",
    },
    { value: "Urban Planning (URBN PL)", label: "Urban Planning (URBN PL)" },
    { value: "Vietnamese (VIETMSE)", label: "Vietnamese (VIETMSE)" },
    {
      value: "World Arts and Cultures (WL ARTS)",
      label: "World Arts and Cultures (WL ARTS)",
    },
    { value: "Yiddish (YIDDSH)", label: "Yiddish (YIDDSH)" },
  ];

  const handleChange = (option: SingleValue<OptionType>) => {
    setSearchInput(option?.label ?? "");
  };

  function goButtonClicked() {
    goSearch(searchInput);
  }

  return (
    <>
      <div className="flex">
        <div className="w-15 text-right mt-2 mr-2">Search:</div>
        <Select
          options={subjectOptions}
          onChange={handleChange}
          className="w-113"
        />
        <button
          className="bg-white p-1.5 ml-3 rounded border-gray-300 border w-10 hover:bg-gray-200 active:bg-gray-400"
          onClick={goButtonClicked}
        >
          Go
        </button>
      </div>
    </>
  );
};

export default TextInput;
