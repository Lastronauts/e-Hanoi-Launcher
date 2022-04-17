export type IconOption = {
  size?: number;
  foreColor?: string;
  backColor?: string;
  fontScale?: number;
  fontFamily?: string;
};

const defaultValue: IconOption = {
  size: 100,
  foreColor: '#3c665f',
  backColor: 'aliceblue',
  fontScale: 0.6,
  fontFamily: 'sans-serif',
};

const iconMaker = async (name: string, option?: IconOption) => {
  const opt = { ...defaultValue, ...option };
  const [width, height] = [opt.size, opt.size];
  if (!width || !height) {
    throw new Error('could not get width and height from options.');
  }

  const canvas = new OffscreenCanvas(width, height);
  const context = canvas.getContext('2d');
  if (!context) {
    throw new Error('could not get context.');
  }

  const splitName = name.split(' ');
  const abbrev =
    splitName.length >= 2
      ? splitName[0].substring(0, 1) + splitName[1].substring(0, 1)
      : name.substring(0, 2);

  context.beginPath();
  context.ellipse(
    width / 2,
    height / 2,
    width / 2,
    height / 2,
    0,
    0,
    Math.PI * 2
  );
  context.closePath();
  context.clip();

  if (!opt.backColor) {
    throw new Error('could not get backColor from options.');
  }
  context.fillStyle = opt.backColor;
  context.fillRect(0, 0, width * 2, height * 2);

  if (!opt.foreColor || !opt.fontScale) {
    throw new Error('could not get foreColor and fontScale from options.');
  }
  context.fillStyle = opt.foreColor;
  context.font = `bold ${height * opt.fontScale}px ${opt.fontFamily}`;

  const mesure = context.measureText(abbrev);
  const centerX = width - mesure.width > 0 ? (width - mesure.width) / 2 : 0;
  const centerY =
    (height +
      mesure.actualBoundingBoxAscent +
      mesure.actualBoundingBoxDescent) /
    2;
  context.fillText(abbrev, centerX, centerY, width);

  const blob = await canvas.convertToBlob();
  const imageUrl = URL.createObjectURL(blob);

  return imageUrl;
};

export default iconMaker;
