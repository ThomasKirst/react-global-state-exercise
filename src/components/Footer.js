import { useState } from 'react';

export default function Footer({ dragons }) {
  const [year] = useState(new Date().getFullYear());
  return (
    <>
      Counting since {year} — Currently there
      {dragons === 1 ? ` is 1 dragon` : ` are ${dragons} dragons`}.
    </>
  );
}
