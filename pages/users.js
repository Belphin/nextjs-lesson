import Link from "next/link";
import MainContainer from "../components/MainContainer";

const Users = ({ users }) => {
	return (
		<MainContainer keywords={"users"}>
			<div>
				<h1>Users page!</h1>
				<ol>
					{users.map((user) => (
						<li key={user.id}>
							<Link href={`/users/${user.id}`}>
								<div>{user.name}</div>
							</Link>
						</li>
					))}
				</ol>
			</div>
		</MainContainer>
	);
};

export default Users;

export async function getStaticProps(context) {
	const response = await fetch("https://jsonplaceholder.typicode.com/users");
	const users = await response.json();

	return {
		props: { users },
	};
}
