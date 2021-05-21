import * as React from "react";

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      id="prefix__Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      x={0}
      y={0}
      viewBox="0 0 720 720"
      xmlSpace="preserve"
      width="1.5em"
      height="1.5em"
      {...props}
    >
      <path
        className="prefix__st0"
        d="M458.2 28c-.1-.1-.3-.2-.4-.2.2 0 .3.1.4.2zM459.2 29l-1-1 1 1zM460.2 30l-1-1 1 1z"
      />
      <g>
        <path d="M461.1 106.5c19.7 24.5 31.5 55.7 31.5 89.6 0 79.1-64.1 143.2-143.2 143.2s-143.2-64.1-143.2-143.2c0-33.9 11.8-65.1 31.5-89.6-107.4 44-183.1 149.6-183.1 272.9 0 162.8 132 294.8 294.8 294.8s294.8-132 294.8-294.8c0-123.3-75.7-228.9-183.1-272.9zM288.9 545c-20.2 12.1-43.2 18.4-69 17.1-22.4-1.1-42.1-7.5-58.9-19-17-11.7-26.9-26-30.6-42.8-.8-3.4-.1-7-.1-10.5-.9-18.3 8-34.1 23.3-48.1 2.4-2.2 4.6-2.7 7.3-.4.6.5 1.2.9 1.8 1.4 42.3 31.7 84.5 63.4 126.9 94.9 4.4 3.3 3.3 5-.7 7.4zm248.9-1.9c-16.8 11.5-36.6 17.9-58.9 19-25.8 1.3-48.8-4.9-69-17.1-4-2.4-5.1-4.1-.6-7.4 42.4-31.5 84.6-63.3 126.9-94.9.6-.5 1.2-.9 1.8-1.4 2.7-2.3 4.9-1.8 7.3.4 15.3 14 24.2 29.7 23.3 48.1 0 3.5.6 7.1-.1 10.5-3.8 16.8-13.7 31.1-30.7 42.8z" />
      </g>
    </svg>
  );
}

export default SvgComponent;
