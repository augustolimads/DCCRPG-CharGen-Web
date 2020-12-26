import React from "react";

export default function Section({children, title, className}) {
	return (
		<section className={`p-2 space-y-2 ${className}`}>
			<p>{title}</p>
			{children}
		</section>
	);
}
