import { useSVG } from "./hooks/interactSVG";

function App() {
  const { setSVGRef, height, width } = useSVG();

  return (
    <>
      <svg
        width={width}
        className="bg-slate-200"
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        ref={setSVGRef}
      >
        <foreignObject x="0" y="20" width="300" height="100%">
          <div className="overflow-hidden rounded-lg border border-gray-300 shadow-md cursor-pointer">
            <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    colSpan={2}
                    scope="col"
                    className="px-3 py-2 font-medium text-gray-900"
                  >
                    Student
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 border-t border-gray-100">
                <tr>
                  <td className="px-3 py-1">Name</td>
                  <td className="px-3 py-1">VARCHAR(60)</td>
                </tr>
                <tr>
                  <td className="px-3 py-1">Id</td>
                  <td className="px-3 py-1">INT</td>
                </tr>
              </tbody>
            </table>
          </div>
        </foreignObject>
      </svg>
    </>
  );
}

export default App;
