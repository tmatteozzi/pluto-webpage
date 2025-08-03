import { MoneyReceiveSquareIcon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

export default function Fund() {
  return (
    <div className="min-h-screen p-2">
      <div className="w-full mx-auto pt-13">
        <div className="flex flex-col gap-2 p-4 bg-card rounded-2xl">
          <div className="flex items-center gap-2 text-sm font-medium tracking-normal">
            <HugeiconsIcon
              icon={MoneyReceiveSquareIcon}
              size={20}
              color={"var(--foreground)"}
              fill={"none"}
            />
            CVU, Alias y Pluto tag
          </div>
        </div>
      </div>
    </div>
  );
}
