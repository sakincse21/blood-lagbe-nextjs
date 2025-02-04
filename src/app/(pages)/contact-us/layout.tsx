import { ReactNode } from "react";

export default function FindBloodLayout({ children }: { children: ReactNode }) {
    return (
      <div className="my-3">
          {children}
      </div>
    );
  }