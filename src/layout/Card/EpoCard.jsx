export const EpoCard = ({bgClass, txtKo, txtEn}) => {
  return (
    <div className={`epo-card ${bgClass}`}>
      <div className="epo-card-txt">
        <div className="epo-card-txt--ko">{txtKo}</div>
        <div className="epo-card-txt--en">{txtEn}</div>
      </div>
    </div>
  );
};

