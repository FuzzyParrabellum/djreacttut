"use client";

import Select from "react-select";
import useCountries from "@/app/hooks/useCountries";

export type SelectCountryValue = {
  label: string;
  value: string;
};

interface SelectCountryProps {
  value?: SelectCountryValue;
  onChange: (value: SelectCountryValue) => void;
}

const SelectCountry: React.FC<SelectCountryProps> = ({ value, onChange }) => {
  const { getAll } = useCountries();
  return (
    <>
      <Select
        // Truc cool est que l'utilisateur peut "chercher" un pays juste grace
        // au frontend, pas encore d'appel d'api
        // isClearable permet d'avoir une petite icône à coté du champ qui
        // permet à l'utilisateur de clear le champ si il a envie
        isClearable
        placeholder="Anywhere"
        options={getAll()}
        // sachant que dans le fichier AddPropertyModal.tsx, value est passé de
        // cette manière
        //   <SelectCountry
        //           value={dataCountry}
        //           onChange={(value) => setDataCountry(value as SelectCountryValue)}
        //         />
        value={value}
        onChange={(value) => onChange(value as SelectCountryValue)}
      />
    </>
  );
};

export default SelectCountry;
