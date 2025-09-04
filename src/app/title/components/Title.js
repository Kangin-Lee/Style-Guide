export default function Title ({title, description}) {
  return (
    <section>
      <div className="flex justify-center items-center gap-2 sm:block">
        <h1 className="text-base xs:text-lg sm:text-3xl font-bold text-center sm:text-left flex-1">{title}</h1>
      </div>
      {description && (
        <p className="pt-5 text-[var(--color-font-gray)] text-sm xs:text-base sm:text-lg text-center sm:text-left">
          {description}
        </p>
      )}
    </section>
  );
}
