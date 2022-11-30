import { useState } from "react";

export default function Footer() {
  const [year] = useState(new Date().getFullYear());
  return <>Counting since {year} — Currently there are no dragons.</>;
}
