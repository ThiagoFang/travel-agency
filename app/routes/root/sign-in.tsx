import { ButtonComponent } from "@syncfusion/ej2-react-buttons";
import { Link } from "react-router";

const SignIn = () => {
	const handleSignIn = async () => {
		// signInWithGoogle();
	};

	return (
		<main className="auth">
			<section className="size-full glassmorphism flex-center px-6">
				<div className="sign-in-card">
					<header className="header">
						<Link to="/">
							<img
								className="size-[30px]"
								src="/assets/icons/logo.svg"
								alt="Logo"
							/>
						</Link>
						<h1 className="p-28-bold font-bold text-dark-100">Tourvisto</h1>
					</header>
					<article>
						<h2 className="p-28-semibold text-dark-100 text-center">
							Start Your Travel Journey
						</h2>
						<p className="p-18-regular text-center text-gray-100 !leading-7">
							Sign in with Google to manage destinations, itineraries, and user
							activity with ease.
						</p>
					</article>
					<ButtonComponent
						className="button-class !h-11 !w-full"
						iconCss="e-search-icon"
						type="button"
						onClick={handleSignIn}
					>
						<img
							src="/assets/icons/google.svg"
							alt="google logo"
							className="size-5"
						/>
						<span className="p-18-semibold text-white">
							Sign in with Google
						</span>
					</ButtonComponent>
				</div>
			</section>
		</main>
	);
};

export default SignIn;
