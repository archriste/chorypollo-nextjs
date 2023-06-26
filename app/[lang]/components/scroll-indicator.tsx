'use client'
import React from "react";

export default function ScrollIndicator({
  children,
}: {
  children: React.ReactNode;
}) {
  const [scroll, setScroll] = React.useState(0);

  const onScrollProgress = () => {
    const html = document.documentElement;
    const scrollPx = html.scrollTop;
    const winHeightPx = html.scrollHeight - html.clientHeight;
    const scrolled = (scrollPx / winHeightPx) * 100;

    setScroll(scrolled);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", onScrollProgress);

    return () => window.removeEventListener("scroll", onScrollProgress);
  }, []);

  const inlineStyle = {
    height: "6px",
    background: "#228546",
    width: `${scroll}%`,
  };

  return (
    <>
      <div className="fixed left-0 top-16 h-1 w-full z-10 bg-white">
        <div style={inlineStyle}></div>
      </div>
      {children}
    </>
  );
}
