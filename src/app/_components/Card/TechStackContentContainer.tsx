export function TechStackContentContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="z-10 sm:col-span-6">{children}</div>;
}
