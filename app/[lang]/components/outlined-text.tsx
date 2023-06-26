export default function OutlinedText({
    children,
    fontsize,
}: {children: React.ReactNode, fontsize: string }) {
  const style = {
    fontSize: fontsize,
  }
  return (
    <>
    <div className="relative h-full w-full">
        <span className={`absolute h-full w-full flex align-center justify-center items-center font-londrina_solid text-white text-3xl lg:text-4xl`}>{children}</span>
        <span className={`absolute h-full w-full flex align-center justify-center items-center font-londrina_outline font-bold text-black text-3xl lg:text-4xl`}>{children}</span>
    </div>
    </>
  );
}