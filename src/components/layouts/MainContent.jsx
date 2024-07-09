import React from 'react';
import { Outlet } from 'react-router-dom';

/**
 * Main Content Container
 */
export default function MainContent({
  outletProps = [],
  mainContentClassName = '',
}) {
  return (
    <div className={mainContentClassName}>
      <div className={'content-wrapper'}>
        <Outlet context={outletProps} />
      </div>
    </div>
  );
}
