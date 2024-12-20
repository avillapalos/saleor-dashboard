import React, { useEffect, useState } from "react";

export type Option = {
  label: string;
  value: string | null;
};

type ComboboxProps = {
  value: Option | null;
  options: Option[];
  fetchOptions: (query: string) => void;
  allowCustomValues?: boolean;
  allowEmptyValue?: boolean;
  onChange: (event: { target: { value: string | null; name: string } }) => void;
  name?: string;
};

const SimpleComboboxRoot: React.FC<ComboboxProps> = ({
  value,
  options,
  fetchOptions,
  allowCustomValues = false,
  allowEmptyValue = false,
  onChange,
  name = "combobox",
}) => {
  const [currentOptions, setCurrentOptions] = useState<Option[]>(options);

  useEffect(() => {
    handleInputChange();
  }, []);

  useEffect(() => {
    setCurrentOptions([...(allowEmptyValue ? [{ label: "Ninguno", value: "" }] : []), ...options]);
  }, [options, allowEmptyValue]);

  const handleInputChange = () => {
    const query = "";

    if (allowCustomValues) {
      setCurrentOptions([{ label: query, value: query }, ...options]);
    }

    fetchOptions(query);
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = event.target.value;
    const selectedOption = currentOptions.find(option => option.value === selectedValue) || {
      label: selectedValue,
      value: selectedValue,
    };

    onChange({
      target: { value: selectedOption.value, name },
    });
  };

  return (
    <div>
      <select value={value?.value || ""} onChange={handleSelectChange}>
        {currentOptions.map(option => (
          <option key={option.value || "empty"} value={option.value || ""}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export const SimpleCombobox = Object.assign(SimpleComboboxRoot, {});
