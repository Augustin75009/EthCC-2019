const initThemesHighlight = () => {
	const themes = document.querySelectorAll(".theme");
	 themes.forEach((theme) => {
	 	theme.addEventListener("click", (event) => {
	 		theme.classList.toggle("active")
	 		const currentColors = [];
	 		themes.forEach((theme) => {
	 			if (theme.classList.contains("active")) {
	 				theme.classList.remove("disable");
	 				currentColors.push(theme.classList.item(1));

	 			}
	 			else {
	 				theme.classList.add("disable")
	 			}

	 		});
	 		if (currentColors.length > 0) {
	 			document.querySelectorAll(".break").forEach((brk) => {
	 				brk.classList.add("disable");
	 			})
	 			document.querySelectorAll(".conference").forEach((conference) => {
	 				let active = false
	 				currentColors.forEach((color) => {
	 					
	 					console.log(conference.classList.contains(color) || active)
		 				if (conference.classList.contains(color) || active) {
		 					conference.classList.remove("disable");
		 					active = true;
		 				}
		 				else {
		 					conference.classList.add("disable")
		 				}
		 			});	
	 			})
	 		}
	 		else {
	 			themes.forEach((theme) => {
	 				theme.classList.remove("disable");
	 			})
	 			document.querySelectorAll(".conference").forEach((conference) => {
	 				conference.classList.remove("disable");
	 			});
	 			document.querySelectorAll(".break").forEach((brk) => {
	 				brk.classList.remove("disable");
	 			})
	 		}
	 	});
	 });
}
initThemesHighlight()
