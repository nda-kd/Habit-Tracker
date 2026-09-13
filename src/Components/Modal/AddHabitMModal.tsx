import { useState, useRef, useEffect } from "react";
import EmojiPicker, { Theme, type EmojiClickData } from "emoji-picker-react";
import type { HabitFiltersTypes } from "@/types/habit.type";
import Data from "@/data/staticItems.json";
import { useTheme } from "@/hooks/useTheme";

export interface addHabit {
  onClose: () => void;
}

export const AddHabitMModal = ({ onClose }: addHabit) => {
  const { theme } = useTheme();
  const [selectedEmoji, setSelectedEmoji] = useState<string>("✨");
  const [showPicker, setShowPicker] = useState<boolean>(false);
  const pickerRef = useRef<HTMLDivElement | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<HabitFiltersTypes>({
    id: "",
    cat: "",
    icon: "",
    color: "",
  });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      if (
        pickerRef.current &&
        !pickerRef.current.contains(event.target as Node)
      ) {
        setShowPicker(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleEmojiClick = (emojiData: EmojiClickData): void => {
    setSelectedEmoji(emojiData.emoji);
    setShowPicker(false);
  };

  return (
    <div className="animate-[card-entry_0.4s_ease-out_both] add-habit-modal">
      <header className="outlet-header">
        <h2 className="font-['Kalam',cursive] font-bold text-[26px] m-0 underline decoration-wavy decoration-pen-red underline-offset-8">
          New Habit
        </h2>
        <div
          onClick={onClose}
          className="hover:animate-[pencilWobble_0.4s_ease-out_both] hover:text-white hover:bg-[#d9534f] cursor-pointer flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border-2 border-graphite bg-white/40 text-base"
        >
          ✕
        </div>
      </header>
      <div className="mb-4.5">
        <label>Habit name</label>
        <input
          type="text"
          className="w-full border-2 border-solid border-graphite rounded-[10px] px-3.5 py-2.5 text-[17px] font-['Patrick_Hand',cursive] bg-[rgba(255,255,255,.35)]"
          placeholder="e.g. Stretch before bed"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label>Icon</label>
        <div className="relative inline-block" ref={pickerRef}>
          <button
            type="button"
            onClick={() => setShowPicker((prev) => !prev)}
            className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-[10px] border-2 border-graphite bg-[rgba(255,255,255,.35)] text-2xl transition-transform active:scale-95"
            aria-label="Select icon emoji"
          >
            {selectedEmoji}
          </button>
          {showPicker && (
            <div className="absolute top-full mt-2 left-0 z-60 shadow-xl rounded-xl">
              <EmojiPicker
                width={320}
                height={400}
                theme={theme === "dark" ? Theme.DARK : Theme.LIGHT}
                previewConfig={{ showPreview: false }}
                onEmojiClick={handleEmojiClick}
              />
            </div>
          )}
        </div>
      </div>
      <div className="my-4.5">
        <label>Category</label>
        <div className="flex flex-wrap gap-2">
          {Data.habitFilters.map((cat) => (
            <div
              key={cat.id}
              onClick={() =>
                setSelectedCategory({
                  ...cat,
                })
              }
              className={`${cat.id === selectedCategory.id ? "bg-highlight border-dashed! font-['Kalam',cursive] font-bold animate-[blink-1_0.4s_ease-out_both]" : ""}
               cursor-pointer border-2 border-solid border-graphite rounded-2xl px-4 py-1.5 text-[15px] bg-[rgba(255,255,255,0.2)]`}
            >
              {cat.icon} {cat.cat}
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-3 mt-13">
        <div className="btn cancel" onClick={onClose}>
          Cancel
        </div>
        <div
          className="btn save hover:animate-[pencilWobble_0.4s_ease-out_both]"
          onClick={onClose}
        >
          Save habit
        </div>
      </div>
    </div>
  );
};
