import { ReactNode } from "react";
export default function FindBloodLayout({ children }: { children: ReactNode }) {
    return (

      <div className="min-h-full h-auto w-auto mt-5">
          {children}
      </div>
    );
  }