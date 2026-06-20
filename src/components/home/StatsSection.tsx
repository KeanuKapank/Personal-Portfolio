import Counter from "../Reusable/Counter";

const StatsSection = () => {
const stats = [
    { label: "Projects Completed", value: 10 },
    { label: "Happy Customers", value: 1 },
    { label: "Awards Won", value: 5 },
    { label: "Years Experience", value: 1 }
  ];

  return (
    <section className="bg-graph-paper flex flex-wrap justify-around py-6">
      {stats.map((stat, index) => (
        <div key={index} className="shrink-0">
          <div className="flex flex-col items-center justify-centerfont-bold">
            <div className="text-headline-md text-marker">
              <Counter to={stat.value} duration={1} /> +
            </div>
            <span className="text-caption text-center mt-2">
              {stat.label}
            </span>
          </div>
        </div>
      ))}
    </section>
  )
}

export default StatsSection