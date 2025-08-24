// AuroraBackground.jsx
import React from "react";
import Aurora from "./Aurora";

const AuroraBackground = () => (
  <Aurora quantity={20} staticity={30} ease={30} className="aurora-bg" />
);

export default React.memo(AuroraBackground);
