export const metadata = {
  title: "Fish Mortality Prediction System",
  description: "Predict fish mortality using machine learning",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
