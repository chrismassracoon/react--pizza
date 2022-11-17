import React from 'react';
import ContentLoader from 'react-content-loader';

const PizzaSkeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <circle cx="131" cy="148" r="125" />
    <rect x="0" y="292" rx="15" ry="15" width="270" height="26" />
    <rect x="1" y="339" rx="17" ry="17" width="275" height="97" />
    <rect x="0" y="453" rx="16" ry="16" width="91" height="40" />
    <rect x="149" y="445" rx="16" ry="16" width="128" height="51" />
    <rect x="244" y="476" rx="0" ry="0" width="8" height="14" />
  </ContentLoader>
);

export default PizzaSkeleton;
