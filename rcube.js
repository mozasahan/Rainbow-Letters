Hooks.once('diceSoNiceReady', (dice3d) => {
	dice3d.addSystem({id: "rcube", name: "Rainbow Letters"}, false);
	dice3d.addDicePreset({
		type: "d2",
		labels: "",
		modelFile: "modules/rcube/rcube_d2.glb",
		system: "wcube"
	});
	dice3d.addDicePreset({
		type: "d4",
		labels: "",
		modelFile: "modules/rcube/rcube_d4.glb",
		system: "rcube"
	});
	dice3d.addDicePreset({
		type: "d6",
		labels: "",
		modelFile: "modules/rcube/rcube_d6.glb",
		system: "rcube"
	});
	dice3d.addDicePreset({
		type: "d8",
		labels: "",
		modelFile: "modules/rcube/rcube_d8.glb",
		system: "rcube"
	});
	dice3d.addDicePreset({
		type: "d10",
		labels: "",
		modelFile: "modules/rcube/rcube_d10.glb",
		system: "rcube"
	});
	dice3d.addDicePreset({
		type: "d100",
		labels: "",
		modelFile: "modules/rcube/rcube_d100.glb",
		system: "rcube"
	});
	dice3d.addDicePreset({
		type: "d12",
		labels: "",
		modelFile: "modules/rcube/rcube_d12.glb",
		system: "rcube"
	});	
	dice3d.addDicePreset({
		type: "d20",
		labels: "",
		modelFile: "modules/rcube/rcube_d20.glb",
		system: "rcube"
	});
});
