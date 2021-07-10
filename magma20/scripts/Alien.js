Hooks.once('diceSoNiceReady', (dice3d) => {
	dice3d.addSystem({id: "alien20", name: "Alien"}, false);
	dice3d.addDicePreset({
		type: "d2",
		labels: "",
		modelFile: "modules/magma20/models/Alien/d2.gltf",
		system: "alien20"
	});
		dice3d.addDicePreset({
		type: "d4",
		labels: "",
		modelFile: "modules/magma20/models/Alien/d4.gltf",
		system: "alien20"
	});
		dice3d.addDicePreset({
		type: "d6",
		labels: "",
		modelFile: "modules/magma20/models/Alien/d6.gltf",
		system: "alien20"
	});
		dice3d.addDicePreset({
		type: "d8",
		labels: "",
		modelFile: "modules/magma20/models/Alien/d8.gltf",
		system: "alien20"
	});
		dice3d.addDicePreset({
		type: "d10",
		labels: "",
		modelFile: "modules/magma20/models/Alien/d10.gltf",
		system: "alien20"
	});
		dice3d.addDicePreset({
		type: "d100",
		labels: "",
		modelFile: "modules/magma20/models/Alien/d100.gltf",
		system: "alien20"
	});
		dice3d.addDicePreset({
		type: "d12",
		labels: "",
		modelFile: "modules/magma20/models/Alien/d12.gltf",
		system: "alien20"
	});	
		dice3d.addDicePreset({
		type: "d20",
		labels: "",
		modelFile: "modules/magma20/models/Alien/d20.gltf",
		system: "alien20"
	});
});