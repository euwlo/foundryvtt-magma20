Hooks.once('diceSoNiceReady', (dice3d) => {
	dice3d.addSystem({id: "magma20", name: "Magma 20"}, false);
	dice3d.addDicePreset({
		type: "d2",
		labels: "",
		modelFile: "modules/magma20/models/magmaDice/d2.gltf",
		system: "magma20"
	});
		dice3d.addDicePreset({
		type: "d4",
		labels: "",
		modelFile: "modules/magma20/models/magmaDice/d4.gltf",
		system: "magma20"
	});
		dice3d.addDicePreset({
		type: "d6",
		labels: "",
		modelFile: "modules/magma20/models/magmaDice/d6.gltf",
		system: "magma20"
	});
		dice3d.addDicePreset({
		type: "d8",
		labels: "",
		modelFile: "modules/magma20/models/magmaDice/d8.gltf",
		system: "magma20"
	});
		dice3d.addDicePreset({
		type: "d10",
		labels: "",
		modelFile: "modules/magma20/models/magmaDice/d10.gltf",
		system: "magma20"
	});
		dice3d.addDicePreset({
		type: "d100",
		labels: "",
		modelFile: "modules/magma20/models/magmaDice/d100.gltf",
		system: "magma20"
	});
		dice3d.addDicePreset({
		type: "d12",
		labels: "",
		modelFile: "modules/magma20/models/magmaDice/d12.gltf",
		system: "magma20"
	});	
		dice3d.addDicePreset({
		type: "d20",
		labels: "",
		modelFile: "modules/magma20/models/magmaDice/d20.gltf",
		system: "magma20"
	});
});