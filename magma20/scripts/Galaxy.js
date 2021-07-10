Hooks.once('diceSoNiceReady', (dice3d) => {
	dice3d.addSystem({id: "galaxy20", name: "Galaxy"}, false);
	dice3d.addDicePreset({
		type: "d2",
		labels: "",
		modelFile: "modules/magma20/models/Galaxy/d2.gltf",
		system: "galaxy20"
	});
		dice3d.addDicePreset({
		type: "d4",
		labels: "",
		modelFile: "modules/magma20/models/Galaxy/d4.gltf",
		system: "galaxy20"
	});
		dice3d.addDicePreset({
		type: "d6",
		labels: "",
		modelFile: "modules/magma20/models/Galaxy/d6.gltf",
		system: "galaxy20"
	});
		dice3d.addDicePreset({
		type: "d8",
		labels: "",
		modelFile: "modules/magma20/models/Galaxy/d8.gltf",
		system: "galaxy20"
	});
		dice3d.addDicePreset({
		type: "d10",
		labels: "",
		modelFile: "modules/magma20/models/Galaxy/d10.gltf",
		system: "galaxy20"
	});
		dice3d.addDicePreset({
		type: "d100",
		labels: "",
		modelFile: "modules/magma20/models/Galaxy/d100.gltf",
		system: "galaxy20"
	});
		dice3d.addDicePreset({
		type: "d12",
		labels: "",
		modelFile: "modules/magma20/models/Galaxy/d12.gltf",
		system: "galaxy20"
	});	
		dice3d.addDicePreset({
		type: "d20",
		labels: "",
		modelFile: "modules/magma20/models/Galaxy/d20.gltf",
		system: "galaxy20"
	});
});