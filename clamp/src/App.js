import "./App.css";
import { useState } from "react";

function App() {
	const [unit, setUnit] = useState("px");
	const [relativeSize, setRelativeSize] = useState("px");
	const [minSize, setMinSize] = useState("");
	const [maxSize, setMaxSize] = useState("");
	const [minWidth, setMinWidth] = useState("");
	const [maxWidth, setMaxWidth] = useState("");
	const [clampResult, setClampResult] = useState("");

	console.log(relativeSize, unit, minSize, maxSize, minWidth, maxWidth);

	function clampCalculation() {
		return 1;
	}

	return (
		<section className="Clamp">
			<form
				className="clamp-form"
				// onChange={setClampResult(clampCalculation())}
			>
				<section className="clamp-column">
						<h4>Units:</h4>
					<article className="clamp-input units">
						<input
							type="radio"
							id="unitPx"
							name="unit"
							value="px"
							onChange={(e) => setUnit(e.target.value)}
						/>
						<label htmlFor="unitPx">px</label>
						<input
							type="radio"
							id="unitRem"
							name="unit"
							value="rem"
							onChange={(e) => setUnit(e.target.value)}
						/>
						<label htmlFor="unitRem">rem</label>
					</article>
				</section>
				<section className="clamp-column">
							<h4>Relative Size ({unit})</h4>
					<article className="clamp-input relative-size">
						<label htmlFor="relativeSize">
						</label>
						<input
							id="relativeSize"
							type="number"
							onChange={(e) => setRelativeSize(e.target.value)}
						/>
						<span className="metric">{unit}</span>
					</article>
				</section>
				<section className="clamp-column">
						<h4>Font Size:</h4>
					<article className="clamp-input">
						<label htmlFor="minSize">Min:</label>
						<input
							id="minSize"
							type="number"
							onChange={(e) => setMinSize(e.target.value)}
						/>
						<span className="metric">{unit}</span>
					</article>
					<article className="clamp-input">
						<label htmlFor="maxSize">Max:</label>
						<input
							id="maxSize"
							type="number"
							onChange={(e) => setMaxSize(e.target.value)}
						/>
						<span className="metric">{unit}</span>
					</article>
				</section>
				<section className="clamp-column">
						<h4>Screen Width:</h4>
					<article className="clamp-input">
						<label htmlFor="minWidth">Min:</label>
						<input
							id="minWidth"
							type="number"
							onChange={(e) => setMinWidth(e.target.value)}
						/>
						<span className="metric">{unit}</span>
					</article>
					<article className="clamp-input">
						<label htmlFor="maxWidth">Max:</label>
						<input
							id="maxWidth"
							type="number"
							onChange={(e) => setMaxWidth(e.target.value)}
						/>
						<span className="metric">{unit}</span>
					</article>
				</section>
			</form>
			<article className="clamp-result">
				<h2>{clampResult}</h2>
			</article>
		</section>
	);
}

export default App;
