import { motion, useAnimate } from "framer-motion";

function Component() {
	const [scope, animate] = useAnimate();
	const onScopeHover = () => {
		animate("#hover-element", { left: "0%" });
	};
	const onScopeLeft = () => {
		animate("#hover-element", { left: "-100%" });
	};
	return (
		<div
			ref={scope}
			className="relative w-full overflow-hidden max-h-[240px]"
			onMouseEnter={onScopeHover}
			onMouseLeave={onScopeLeft}
		>
			<motion.div
				id="hover-element"
				className="p-4 w-[120px] h-[120px] top-0 absolute bg-slate-900 text-slate-100"
			>
				HoverElement
			</motion.div>
			<motion.div
				id="default-element"
				className="p-6 w-full bg-info text-info-foreground"
			>
				Test
			</motion.div>
		</div>
	);
}

export default function FMTest() {
	return (
		<>
			<Component />
		</>
	);
}
