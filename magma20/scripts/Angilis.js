Hooks.once('diceSoNiceReady', (dice3d) => {
	dice3d.addSystem({id: "angilis20", name: "Angilis"}, false);
	dice3d.addDicePreset({
		type: "d2",
		labels: "",
		modelFile: "modules/magma20/models/Angilis/d2.gltf",
		system: "angilis20"
	});
		dice3d.addDicePreset({
		type: "d4",
		labels: "",
		modelFile: "modules/magma20/models/Angilis/d4.gltf",
		system: "angilis20"
	});
		dice3d.addDicePreset({
		type: "d6",
		labels: "",
		modelFile: "modules/magma20/models/Angilis/d6.gltf",
		system: "angilis20"
	});
		dice3d.addDicePreset({
		type: "d8",
		labels: "",
		modelFile: "modules/magma20/models/Angilis/d8.gltf",
		system: "angilis20"
	});
		dice3d.addDicePreset({
		type: "d10",
		labels: "",
		modelFile: "modules/magma20/models/Angilis/d10.gltf",
		system: "angilis20"
	});
		dice3d.addDicePreset({
		type: "d100",
		labels: "",
		modelFile: "modules/magma20/models/Angilis/d100.gltf",
		system: "angilis20"
	});
		dice3d.addDicePreset({
		type: "d12",
		labels: "",
		modelFile: "modules/magma20/models/Angilis/d12.gltf",
		system: "angilis20"
	});	
		dice3d.addDicePreset({
		type: "d20",
		labels: "",
		modelFile: "modules/magma20/models/Angilis/d20.gltf",
		system: "angilis20"
	});
});