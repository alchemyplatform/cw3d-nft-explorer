import { ConnectButton } from "@rainbow-me/rainbowkit";
import styles from "../../styles/Navbar.module.css";
export default function Navbar() {
	return (
		<nav className={styles.navbar}>
			<a href="https://nftearth.exchange" target={"_blank"}>
				<img
					className={styles.alchemy_logo}
					src="nftearth_icon.png"
				></img>
			</a>
			<ConnectButton></ConnectButton>
		</nav>
	);
}
