import { useState, useRef, type ChangeEvent, type MouseEvent } from "react";

export const ProfileHeader = () => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>("Jane Doe");
  const [avatarUrl, setAvatarUrl] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const editHandler = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsEditing((prev) => !prev);
  };

  const handleAvatarChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const newUrl = URL.createObjectURL(file);
      setAvatarUrl(newUrl);
    }
  };

  return (
    <header className="animate-[card-entry_0.5s_ease-out_both] panel wobble-a mb-10">
      <div className="flex items-center justify-between gap-6">
        <div className="flex items-center gap-5">
          <div
            onClick={() => fileInputRef.current?.click()}
            title="Click to change avatar"
            className="group relative cursor-pointer text-graphite flex items-center justify-center shrink-0 bg-paper text-[36px] w-21 h-21 border-solid border-[3px] border-graphite rounded-full overflow-hidden transition-transform hover:scale-105"
          >
            {avatarUrl ? (
              <img
                src={avatarUrl}
                alt="Profile Avatar"
                className="w-full h-full object-cover"
              />
            ) : (
              <span>☺</span>
            )}
            <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-[14px] font-bold transition-opacity"></div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleAvatarChange}
            />
          </div>

          <div>
            {!isEditing ? (
              <div className="font-kalam text-[26px] font-bold">{userName}</div>
            ) : (
              <div className="animate-[card-entry_0.4s_ease-out_both] font-kalam text-[20px]">
                {"What is your name? ☺ "}
                <input
                  autoFocus
                  className="animate-[card-entry_0.5s_ease-out_both] font-kalam text-[20px] text-pen-red border-b-2 w-37.5 border-dashed ml-3.5 focus:outline-none focus:ring-0"
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>
            )}

            <div className="mt-0.5 text-graphite-soft text-[15px]">
              joined March 2026 · @jamietries
            </div>
            <div className="mt-2 text-graphite-soft text-[15px] max-w-85 border-l-2 border-dashed border-graphite-soft pl-2.5">
              "small steps, every day — trying to make the boring habits stick"
            </div>
          </div>
        </div>
        <button
          onClick={editHandler}
          className="cursor-pointer border-[2.5px] border-graphite rounded-[20px] px-5 py-2.25 text-[16px] font-['Kalam',cursive] font-bold bg-(--pen-red) text-(--paper) shadow-[3px_3px_0_var(--graphite)] -rotate-1 filter-[url(#wobble)] whitespace-nowrap transition-all duration-150 ease-in-out hover:rotate-0 hover:translate-x-0.75 hover:translate-y-0.75 hover:shadow-none active:translate-x-1 active:translate-y-1"
        >
          {isEditing ? "✓ Save profile" : "✎ Edit profile"}
        </button>
      </div>
    </header>
  );
};
