export const CardRenderer = ({ data, Component, className }) => (
  <div className={className}>
    {data.map((item, index) => (
      <Component key={index} product={item} />
    ))}
  </div>
);
