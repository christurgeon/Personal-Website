const steps = [
  {
    number: 1,
    title: "Contribute $7,000 to a Traditional IRA",
    description: "This contribution is non-deductible since your income exceeds the limit.",
  },
  {
    number: 2,
    title: "Convert the Traditional IRA to a Roth IRA",
    description:
      "Move the funds into your Roth account. Since you already paid taxes on the contribution, there's little to no tax owed on conversion.",
  },
  {
    number: 3,
    title: "Report the conversion on Form 8606",
    description:
      "This tells the IRS the contribution was non-deductible, so you don't get taxed twice.",
  },
  {
    number: 4,
    title: "Enjoy tax-free growth forever",
    description:
      "Once in the Roth, your money grows and can be withdrawn in retirement completely tax-free.",
  },
];

export default function BackdoorRothSteps() {
  return (
    <div
      className="not-prose"
      style={{
        background: "linear-gradient(135deg, rgba(99,102,241,0.08) 0%, rgba(139,92,246,0.08) 100%)",
        border: "1px solid rgba(99,102,241,0.2)",
        borderRadius: "16px",
        padding: "1.5rem 2rem",
        margin: "2rem 0",
      }}
    >
      <div className="text-xs font-semibold uppercase tracking-wider text-indigo-400 mb-4">
        The Backdoor Roth Process
      </div>
      <ol className="list-none m-0 p-0 flex flex-col gap-3">
        {steps.map((step) => (
          <li key={step.number} className="flex items-start gap-3">
            <span className="shrink-0 w-6 h-6 rounded-full bg-indigo-500 text-white text-xs font-bold flex items-center justify-center mt-0.5">
              {step.number}
            </span>
            <div>
              <div className="font-semibold text-sm sm:text-[0.95rem] leading-snug">{step.title}</div>
              <div className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 mt-0.5 leading-snug">
                {step.description}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
}
