import { setFilter } from "../../redux/filter/filterSlice";
import { useState } from "react";
import { FilterLabel, StyledInput } from "./filter.styled";
import { useAppDispatch } from "../../hooks";

export const Filter = () => {
  const dispatch = useAppDispatch();
  const [filterValue, setFilterValue] = useState("");

  const handleFilterChange = (e: { target: { value: any } }) => {
    const value = e.target.value;
    setFilterValue(value);

    dispatch(setFilter(value));
  };

  return (
    <FilterLabel>
      Find contacts by name
      <StyledInput
        type="text"
        value={filterValue}
        onChange={handleFilterChange}
        placeholder="Contact Name"
      />
    </FilterLabel>
  );
};
