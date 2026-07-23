import { Fragment } from 'react';

/** Renders text with inline **bold** support. Newlines become line breaks. */
export function RichText({ text }: { text: string }) {
  const lines = text.split('\n');
  return (
    <>
      {lines.map((line, li) => (
        <Fragment key={li}>
          {li > 0 && <br />}
          {line.split(/\*\*/).map((part, i) => (i % 2 === 1 ? <strong key={i}>{part}</strong> : <Fragment key={i}>{part}</Fragment>))}
        </Fragment>
      ))}
    </>
  );
}
