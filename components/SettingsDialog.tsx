import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  DashboardSquareAddIcon,
  Settings01Icon,
  UserCircle02Icon,
} from "@hugeicons/core-free-icons";
import { useTheme } from "next-themes";

interface SettingsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const sidebarOptions = [
  {
    icon: <HugeiconsIcon icon={Settings01Icon} size={20} />,
    label: "General",
  },
  {
    icon: <HugeiconsIcon icon={DashboardSquareAddIcon} size={20} />,
    label: "Connected apps",
  },
  {
    icon: <HugeiconsIcon icon={UserCircle02Icon} size={20} />,
    label: "Account",
  },
];

const SettingsDialog: React.FC<SettingsDialogProps> = ({
  open,
  onOpenChange,
}) => {
  const [selected, setSelected] = React.useState(0);
  const { theme, setTheme } = useTheme();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="w-3xl h-[600px] p-0 rounded-2xl overflow-hidden flex flex-col sm:flex-row"
        showCloseButton={false}
      >
        {/* Sidebar */}
        <div className="bg-background border-r border-border min-w-[220px] max-w-[240px] flex flex-col py-1 px-1 focus:outline-none">
          <div className="flex-1">
            {sidebarOptions.map((opt, i) => (
              <button
                key={opt.label}
                className={`cursor-pointer w-full flex items-center gap-2 px-2 py-2 text-left text-[15px] font-medium rounded-lg transition-colors mb-1 ${
                  selected === i
                    ? "bg-muted text-foreground"
                    : "hover:bg-muted text-muted-foreground"
                }`}
                onClick={() => setSelected(i)}
              >
                {opt.icon}
                {opt.label}
              </button>
            ))}
          </div>
        </div>
        {/* Main Content */}
        <div className="flex-1 bg-background p-8 min-w-[340px] relative">
          <DialogClose className="absolute top-6 right-6 z-10">
            <span className="text-2xl text-muted-foreground">×</span>
          </DialogClose>
          <DialogTitle className="text-2xl font-semibold mb-6">
            Settings
          </DialogTitle>
          {selected === 0 && (
            <div className="divide-y divide-border">
              <div className="py-4 flex items-center justify-between">
                <span>Theme</span>
                <select
                  className="bg-muted rounded px-2 py-1 border border-border"
                  value={theme}
                  onChange={(e) => setTheme(e.target.value)}
                >
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                  <option value="system">System</option>
                </select>
              </div>
              <div className="py-4 flex items-center justify-between">
                <span>Language</span>
                <select className="bg-muted rounded px-2 py-1 border border-border">
                  <option>Auto-detect</option>
                  <option>Español</option>
                  <option>English</option>
                </select>
              </div>
              <div className="py-4 flex flex-col gap-1 justify-between">
                <div className="flex items-center justify-between">
                  <span>Spoken language</span>
                  <select className="bg-muted rounded px-2 py-1 border border-border">
                    <option>Auto-detect</option>
                    <option>Español</option>
                    <option>English</option>
                  </select>
                </div>
                <span className="text-xs text-muted-foreground mt-1">
                  For best results, select the language you mainly speak. If
                  it's not listed, it may still be supported via auto-detection.
                </span>
              </div>
              <div className="py-4 flex items-center justify-between">
                <span>Voice</span>
                <div className="flex items-center gap-2">
                  <button className="bg-muted rounded px-2 py-1 border border-border text-sm">
                    ▶ Play
                  </button>
                  <select className="bg-muted rounded px-2 py-1 border border-border">
                    <option>Juniper</option>
                    <option>Aria</option>
                  </select>
                </div>
              </div>
              <div className="py-4 flex items-center justify-between">
                <span>Show follow up suggestions in chats</span>
                <input
                  type="checkbox"
                  className="accent-primary w-5 h-5 rounded"
                  defaultChecked
                />
              </div>
            </div>
          )}
          {/* Aquí puedes agregar el contenido de las otras secciones si lo necesitas */}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SettingsDialog;
