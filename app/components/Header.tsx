import { useLocation } from "react-router";
import { cn } from "~/lib/utils";

interface HeaderProps {
	title: string;
	subtitle?: string;
}

export const Header = ({ title, subtitle }: HeaderProps) => {
	const location = useLocation();
	const isHome = location.pathname === "/";

	return (
		<div className="header">
			<article>
				<h1
					className={cn(
						"text-dark-100",
						isHome
							? "text-2xl md:text-4xl font-bold"
							: "text-xl md:text-2xl font-semibold",
					)}
				>
					{title}
				</h1>
				<p
					className={cn(
						"text-gray-100",
						isHome ? "text-base md:text-lg " : "text-sm md:text-lg",
					)}
				>
					{subtitle}
				</p>
			</article>
		</div>
	);
};
