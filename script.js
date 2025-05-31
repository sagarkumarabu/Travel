const toggleBtn = document.getElementById("darkModeToggle");
		const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
		const currentMode = localStorage.getItem("mode");

		// Set initial mode
		if (currentMode === "dark" || (!currentMode && prefersDark)) {
			document.body.classList.add("dark");
			toggleBtn.textContent = "☀️";
		}

		// Toggle handler
		toggleBtn.addEventListener("click", () => {
			document.body.classList.toggle("dark");
			const isDark = document.body.classList.contains("dark");
			toggleBtn.textContent = isDark ? "☀️" : "🌙";
			localStorage.setItem("mode", isDark ? "dark" : "light");
		});
