import React from "react";

function Footer() {
	const year = new Date().getFullYear();
	return (
		<footer>
			<p>
				Copyright ⓒ {year} <br />
				<a href="https://www.instagram.com/sumit_walmiki/">Sumit Walmiki</a>
			</p>
		</footer>
	);
}

export default Footer;
