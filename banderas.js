import React from "react";
import ingles from "./assets/ingles.png";
import español from "./assets/español.png";
//import aleman from "./assets/aleman.png";

function banderas() {
  const ingles = <Image source={ingles} style={styles.image} />;
  const español = <Image source={español} style={styles.image} />;
  //const aleman = <Image source={ingles} style={styles.image} />;
}

export { ingles,español};
