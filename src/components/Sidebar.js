export default function Sidebar({ counts }) {
  const averageCount = (counts) => {
    let allCount = 0;

    Object.values(counts).forEach((count) => (allCount += count)); // 6

    return allCount / Object.keys(counts).length;
  };

  const averageCountValue = averageCount(counts);

  return (
    <>
      <h2>Counter Stats</h2>
      <p>
        Our counters currently have an average count of{' '}
        <strong>{averageCountValue}</strong>.
      </p>
      <h2>Definitions</h2>
      <dl>
        <dt>Counter</dt>
        <dd>A counter is a thing that can count up or down.</dd>
        <dd>A counter is also a piece of furniture.</dd>
      </dl>
    </>
  );
}
