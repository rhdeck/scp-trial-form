const { execSync } = require("child_process");

const sourceFile = process.argv[2];
console.log("A");
execSync(
  `convert "${sourceFile}" -resize x512 -gravity center -extent 512x512  public/logo512.png`,
  {
    stdio: "inherit",
  }
);
console.log("B");
// execSync(
//   `convert public/logo512.png -alpha off -bordercolor white -border 1 \\( +clone -fuzz 30% -fill none -floodfill +0+0 white -alpha extract -geometry 200% -blur 0x0.5  -morphology erode square:1 -geometry 50% \\)  -compose CopyOpacity -composite -shave 1 public/logo512.png    `,
//   {
//     stdio: "inherit",
//   }
// );
console.log("C");
execSync(
  `convert public/logo512.png -resize x192 -gravity center -extent 192x192 public/logo192.png`,
  {
    stdio: "inherit",
  }
);
console.log("D");
execSync(
  `convert -background transparent public/logo512.png -define icon:auto-resize=16,24,32,48,64,72,96,128,256 public/favicon.ico`,
  { stdio: "inherit" }
);
console.log("E");
execSync(`cp "${sourceFile}" src/logo.png`, { stdio: "inherit" });
