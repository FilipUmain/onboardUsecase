import React, { ReactNode } from "react";

interface MaxWidthWrapperProps {
  children: ReactNode;
}

const MaxWidthWrapper = ({ children }: MaxWidthWrapperProps) => {
  return (
    <section className="w-[85%] lg:w-[95%] flex flex-col items-center justify-center pt-[78px]">
      {children}
    </section>
  );
};

export default MaxWidthWrapper;
