import { ReactNode } from "react";

export default function FindBloodLayout({ children }: { children: ReactNode }) {
  return (
    <div className="h-auto min-h-full w-full">
        {children}
    </div>
  );
}