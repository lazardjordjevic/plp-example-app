import "../styles/globals.scss";

export const metadata = {
	title: "Next.js",
	description: "Generated by Next.js",
};

export default function RootLayout({
	children,
}: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<title>Merkle</title>
			<body>{children}</body>
		</html>
	);
}
