Hooks.once('diceSoNiceReady', (dice3d) => {
	dice3d.addSystem({id: "kthanid20", name: "Kthanid"}, false);
	dice3d.addDicePreset({
		type: "d2",
		labels: "",
		modelFile: "modules/magma20/models/Kthanid/d2.gltf",
		system: "kthanid20"
	});
		dice3d.addDicePreset({
		type: "d4",
		labels: "",
		modelFile: "modules/magma20/models/Kthanid/d4.gltf",
		system: "kthanid20"
	});
		dice3d.addDicePreset({
		type: "d6",
		labels: "",
		modelFile: "modules/magma20/models/Kthanid/d6.gltf",
		system: "kthanid20"
	});
		dice3d.addDicePreset({
		type: "d8",
		labels: "",
		modelFile: "modules/magma20/models/Kthanid/d8.gltf",
		system: "kthanid20"
	});
		dice3d.addDicePreset({
		type: "d10",
		labels: "",
		modelFile: "modules/magma20/models/Kthanid/d10.gltf",
		system: "kthanid20"
	});
		dice3d.addDicePreset({
		type: "d100",
		labels: "",
		modelFile: "modules/magma20/models/Kthanid/d100.gltf",
		system: "kthanid20"
	});
		dice3d.addDicePreset({
		type: "d12",
		labels: "",
		modelFile: "modules/magma20/models/Kthanid/d12.gltf",
		system: "kthanid20"
	});	
		dice3d.addDicePreset({
		type: "d20",
		labels: "",
		modelFile: "modules/magma20/models/Kthanid/d20.gltf",
		system: "kthanid20"
	});
});