import { useState } from "react";
import { Title } from "@/Components/Title";
import { SectionLabel } from "@/Components/SectionLabel";
import { HabitLists } from "@/Components/AllHabits/HabitLists";
import Data from "@/data/staticItems.json";
import { Filter } from "@/Components/AllHabits/Filter";
import { useModal } from "@/Context/ModalContext";

export const AllHabitsPage = () => {
  const [searchItem, setSearchItem] = useState<string>("");
  const { setIsModalOpen } = useModal();

  const searchHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchItem(e.target.value);
  };

  return (
    <>
      <header className="outlet-header">
        <Title
          label="All habits"
          description={`${Data.habitData.length.toString()} habits, 2 active today`}
        />
        <div className="flex items-center gap-2.5">
          <input
            className="bg-[rgb(255,255,255)]/30 border-2 border-graphite rounded-[20px] text-[16px] text-graphite-soft py-2 px-6 filter-[url(#wobble2)]"
            type="text"
            value={searchItem}
            placeholder="search habits..."
            onChange={(e) => searchHandler(e)}
          />
          <div
            onClick={() => setIsModalOpen(true)}
            className="cursor-pointer border-[2.5px] border-(--graphite) rounded-[20px] px-5 py-2.25 text-[16px] font-['Kalam',cursive] font-bold bg-(--pen-red) text-(--paper) shadow-[3px_3px_0_var(--graphite)] -rotate-1 filter-[url(#wobble)] whitespace-nowrap hover:animate-[pencilWobble_0.4s_ease-out_both]"
          >
            + Add habit
          </div>
        </div>
      </header>
      <Filter />
      <SectionLabel label="Daily habits" />
      <HabitLists myData={Data.habitData} />

      <div className="absolute bottom-4 left-5 right-5 text-[13px] text-graphite-soft)] leading-normal mt-1 rotate-[-0.4deg]">
        ↖ dashed dot = missed day, filled blue dot = completed · streak flame
        turns grey at 0 · rate = completions ÷ scheduled days, last 14 days
      </div>
    </>
  );
};
