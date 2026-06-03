import React from 'react';

const Metrics = () => {
  const metricsData = [
    {
      value: '100+',
      label: 'Young Leaders',
    },
    {
      value: '20',
      label: 'LGAs',
    },
    {
      value: '$750K+',
      label: 'Total Prize Funding',
    },
    {
      value: '47%',
      label: 'Female-led Teams',
    },
  ];

  return (
    <section className="bg-green100 py-12 lg:py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-10 lg:px-20">
        <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4 md:gap-4">
          {metricsData.map((metric, index) => (
            <div key={index} className="flex flex-col items-center justify-center font-dmSans">
              <h3 className="text-4xl font-bold text-white sm:text-5xl">
                {metric.value}
              </h3>
              <p className="mt-2 text-sm text-slate450 sm:text-base">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Metrics;