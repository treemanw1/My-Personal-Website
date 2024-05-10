import React, { useState, useEffect } from "react";

const CurrentTime: React.FC = () => {
	const [currentTime, setCurrentTime] = useState<Date>(new Date());

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentTime(new Date());
		}, 1000);

		return () => {
			clearInterval(interval);
		};
	}, []);

	return <p className="text-white italic" suppressHydrationWarning>Time in Singapore {currentTime.toLocaleTimeString()}</p>;
}

export default CurrentTime;
