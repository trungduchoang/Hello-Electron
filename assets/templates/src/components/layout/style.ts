import { buildStyles } from "@/utils/css";

export const useStyles = buildStyles("AppLayout", () => ({
  root: {
    width: "100vw",
    height: "100vh",
    margin: 0,
    overflow: "auto",
    background: "#fcfcfc",
  },
}));
