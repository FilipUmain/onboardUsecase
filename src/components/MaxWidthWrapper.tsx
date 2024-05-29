import React, { ReactNode } from "react";

interface MaxWidthWrapperProps {
  children: ReactNode;
}

const MaxWidthWrapper = ({ children }: MaxWidthWrapperProps) => {
  return (
    <section className="w-[95%] lg:w-[80%] flex items-center justify-center">
      {children}
    </section>
  );
};

export default MaxWidthWrapper;
