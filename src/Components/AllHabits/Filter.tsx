import Data from "@/data/staticItems.json";
import type { HabitFiltersTypes } from "@/types/habit";
import { useState } from "react";

export const Filter = () => {
  const [filter, setFilter] = useState({
    categorie: "",
    isActive: false,
  });

  const [allActive, setAllActive] = useState(true);

  const filterHandler = (filterInfo: HabitFiltersTypes) => {
    setAllActive(false);
    setFilter({
      categorie: filterInfo.cat,
      isActive: true,
    });
  };

  const allActiveHandler = () => {
    setAllActive(true);
    setFilter({
      categorie: "",
      isActive: false,
    });
  };

  return (
    <div className="flex flex-wrap gap-2.5 mb-6.5">
      <div
        className={`chip ${allActive && "active"} `}
        onClick={allActiveHandler}
      >
        All (8)
      </div>
      {Data.habitFilters.map((fil) => (
        <div
          key={fil.icon}
          className={`chip chip animate-[card-entry_0.4s_ease-out_both] ${filter.isActive && fil.cat === filter.categorie && "active"}`}
          onClick={() => filterHandler(fil)}
        >
          {fil.icon + fil.cat} (1)
        </div>
      ))}
    </div>
  );
};
