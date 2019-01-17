const colors = {
  black: "#000",
  white: "#fff",
  // Pen colors
  red: "#e81a17",
  orange: "#ff6600",
  yellow: "#ffce00",
  chocolate: "#774835",
  magenta: "#d900b5",
  green: "#00a854",
  teal: "#00a3a3",
  oxford: "#007138",
  blue: "#0066ff",
  purple: "#aa00ff",
  indigo: "#5100f5",
  midnight: "#004183",
  overcast: "#f5f5fa",
  steel: "#bdccd4",
  concrete: "#7f8c8d",
  charcoal: "#282a30",
  abyss: "#191b1f",
  deepspace: "#111214",
  galaxy: "#4c4cff",
  // Highlighter colors
  nebula: "#8A4CFC",
  rose: "#ff003c",
  mango: "#ffc200",
  sunshine: "#ffee00",
  peach: "#ffa969",
  bloodorange: "#FF6969",
  pink: "#ff9df9",
  lime: "#b2e35a",
  toxic: "#2ee689",
  ocean: "#29cccc",
  ice: "#57d3ff",
  lavender: "#a470ff",
  cosmic: "#6565ff",
  sky: "#4ca2ff",
  cloud: "#fdfdff",
  silver: "#dfeaf0",
  stone: "#b0c5c7",
  // Shadows,
  shadows: {
    3: "rgba(0,0,0,0.03)",
    9: "rgba(0,0,0,0.09)",
    18: "rgba(0,0,0,0.18)",
    27: "rgba(0,0,0,0.27)",
    36: "rgba(0,0,0,0.36)",
    54: "rgba(0,0,0,0.54)",
    81: "rgba(0,0,0,0.81)"
  },
  lights: {
    3: "rgba(255, 255, 255, 0.03)",
    9: "rgba(255, 255, 255, 0.09)",
    18: "rgba(255, 255, 255, 0.18)",
    27: "rgba(255, 255, 255, 0.27)",
    36: "rgba(255, 255, 255, 0.36)",
    54: "rgba(255, 255, 255, 0.54)",
    81: "rgba(255, 255, 255, 0.81)"
  }
};

const levels = {
  1: {
    top: "0 0 2px 0 rgba(0,0,0,0.09), 0 1px 2px 0 rgba(0,0,0,0.36)",
    bottom: "0 0 2px 0 rgba(0,0,0,0.09), 0 -1px 2px 0 rgba(0,0,0,0.36)"
  },
  2: {
    top: "0 0 4px 0 rgba(0,0,0,0.09), 0 2px 4px 0 rgba(0,0,0,0.27)",
    bottom: "0 0 4px 0 rgba(0,0,0,0.09), 0 -2px 4px 0 rgba(0,0,0,0.27)"
  },
  3: {
    top: "0 0 4px 0 rgba(0,0,0,0.09), 0 4px 9px 0 rgba(0,0,0,0.24)",
    bottom: "0 0 4px 0 rgba(0,0,0,0.09), 0 -4px 9px 0 rgba(0,0,0,0.24)"
  },
  4: {
    top: "0 0 4px 0 rgba(0,0,0,0.09), 0 9px 18px 0 rgba(0,0,0,0.18)",
    bottom: "0 0 4px 0 rgba(0,0,0,0.09), 0 -9px 18px 0 rgba(0,0,0,0.18)"
  },
  5: {
    top: "0 0 4px 0 rgba(0,0,0,0.09), 0 18px 36px 0 rgba(0,0,0,0.15)",
    bottom: "0 0 4px 0 rgba(0,0,0,0.09), 0 -6px 36px 0 rgba(0,0,0,0.15)"
  }
};

const palette = {
  main: colors.galaxy,
  accent: colors.nebula,
  background: colors.cloud
};

const theme = {
  palette,
  levels,
  colors
};

export default theme;
