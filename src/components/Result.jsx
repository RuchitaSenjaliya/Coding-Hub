/* eslint-disable react/prop-types */
export default function Result({ srcCode }) {
  return (
    <div>
      <div className="bg-[#282c34] p-4 shadow mt-4 rounded-lg">
        <h2 className="text-lg text-white font-semibold mb-2">Result</h2>
        <iframe
          src=""
          className="w-full h-60 border border-gray-700 rounded-md"
          srcDoc={srcCode}
          title="Output"
          sandbox="allow-scripts"
          width="100%"
          height="100%"></iframe>
      </div>
    </div>
  );
}
