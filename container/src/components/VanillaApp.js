import { mount } from 'mfe_vanilla/Page';
import React, { useRef, useEffect } from 'react';

export default () => {
  const ref = useRef(null);

  // render the result of `render` in the current DOM element reference only once
  useEffect(() => {
    mount(ref.current);
  });

  return <div ref={ref} />
}