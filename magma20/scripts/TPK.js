Hooks.once('diceSoNiceReady', (dice3d) => {
	dice3d.addSystem({id: "tpk20", name: "TPK"}, false);
	dice3d.addDicePreset({
		type: "d2",
		labels: "",
		modelFile: "modules/magma20/models/TPK/d2.gltf",
		system: "tpk20"
	});
		dice3d.addDicePreset({
		type: "d4",
		labels: "",
		modelFile: "modules/magma20/models/TPK/d4.gltf",
		system: "tpk20"
	});
		dice3d.addDicePreset({
		type: "d6",
		labels: "",
		modelFile: "modules/magma20/models/TPK/d6.gltf",
		system: "tpk20"
	});
		dice3d.addDicePreset({
		type: "d8",
		labels: "",
		modelFile: "modules/magma20/models/TPK/d8.gltf",
		system: "tpk20"
	});
		dice3d.addDicePreset({
		type: "d10",
		labels: "",
		modelFile: "modules/magma20/models/TPK/d10.gltf",
		system: "tpk20"
	});
		dice3d.addDicePreset({
		type: "d100",
		labels: "",
		modelFile: "modules/magma20/models/TPK/d100.gltf",
		system: "tpk20"
	});
		dice3d.addDicePreset({
		type: "d12",
		labels: "",
		modelFile: "modules/magma20/models/TPK/d12.gltf",
		system: "tpk20"
	});	
		dice3d.addDicePreset({
		type: "d20",
		labels: "",
		modelFile: "modules/magma20/models/TPK/d20.gltf",
		system: "tpk20"
	});
});