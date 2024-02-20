import React from 'react';
import { render, screen } from '@testing-library/react';
import JsonDiff from '../src/index';

/**
 * @jest-environment jsdom
 * */

describe('JsonDiff Component', () => {
  // Sample JSON data for tests
  const sampleOldJson = { name: 'Alice', age: 30 };
  const sampleCurrentJson = { name: 'Alice', age: 32 };

  test('Renders "No changes" when oldJson and currentJson are equal', () => {
    render(<JsonDiff oldJson={sampleOldJson} currentJson={sampleOldJson} />);
    expect(screen.getByText('No changes')).toBeInTheDocument();
  });

  // test('Renders diff when oldJson and currentJson are different', () => {
  //   render(<JsonDiff oldJson={sampleOldJson} currentJson={sampleCurrentJson} />);

  //   // You'll likely need more specific assertions here to check 
  //   // the actual diff output, depending on the format from jsondiffpatch
  // });

  // test('Renders nothing when oldJson is null', () => {
  //   render(<JsonDiff oldJson={null} currentJson={sampleCurrentJson} />);
  //   // Assert that the diff container is not rendered (or renders an appropriate message)
  // });

  // test('Renders nothing when currentJson is null', () => {
  //   render(<JsonDiff oldJson={sampleOldJson} currentJson={null} />);
  //   // Assert that the diff container is not rendered (or renders an appropriate message)
  // });

  // test('Hides diff output when isHidden is true', () => {
  //   render(<JsonDiff oldJson={sampleOldJson} currentJson={sampleCurrentJson} isHidden />);
  //   // Assert that the diff container has the 'jsondiffpatch-unchanged-hidden' class 
  //   // or is not visible based on your CSS
  // });

  // test('Shows diff output when isHidden is false', () => {
  //   render(<JsonDiff oldJson={sampleOldJson} currentJson={sampleCurrentJson} isHidden={false} />);
  //   // Assert that the diff container does not have the 'jsondiffpatch-unchanged-hidden' class
  //   // or is visible based on your CSS
  // });
});