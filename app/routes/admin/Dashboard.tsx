import { Header } from "~/components";

const Dashboard = () => {
	const user = {
		name: "Adrian",
	};

	return (
		<main className="dashboard wrapper">
			<Header
				title={`Welcome back, ${user.name} 👋`}
				subtitle="Track activity, trends and popular destinations in real time"
			/>
			Dashboard page contents
		</main>
	);
};

export default Dashboard;
