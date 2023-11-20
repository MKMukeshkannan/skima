import { useSVG } from "./hooks/interactSVG";

function App() {
  const { setSVGRef } = useSVG();

  return (
    <>
      <svg width={500} height={500} viewBox="0 0 500 500" ref={setSVGRef}>
        <g>
          <rect width={500} height={600} fill="red" />
          <text x="100" y="100">
            Hello
          </text>
        </g>
      </svg>
    </>
  );
}

export default App;
