type PremiumLabelProps = {
  isPremium: boolean;
  classNamePrefix: 'place-card' | 'offer';
}

function PremiumLabel({isPremium, classNamePrefix}: PremiumLabelProps) {
  return (
    isPremium && (
      <div className={`${classNamePrefix}__mark`}>
        <span>Premium</span>
      </div>
    )
  );
}

export default PremiumLabel;
