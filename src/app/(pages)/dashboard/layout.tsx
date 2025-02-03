import { ReactNode } from "react";

export default function FindBloodLayout({ children }: { children: ReactNode }) {
    return (
      <div className="my-5 min-h-screen">
          {children}
      </div>
    );
  }