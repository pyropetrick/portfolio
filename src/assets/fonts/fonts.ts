import localFont from "next/font/local";

export const NT_SOMIC = localFont({
  src: [
    {
      path: "./NTSomic-Bold.woff2",
      weight: "700",
    },
    {
      path: "./NTSomic-Medium.woff2",
      weight: "500",
    },
    {
      path: "./NTSomic-Regular.woff2",
      weight: "400",
    },
  ],
  variable: "--font-somic",
});
