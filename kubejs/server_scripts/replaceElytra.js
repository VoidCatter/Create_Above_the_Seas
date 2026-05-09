EntityEvents.spawned("minecraft:item_frame", event => {
	const frame = event.entity;

	if (frame.getItem().getId() == "minecraft:elytra") {
		frame.setItem(Item.of("minecraft:heavy_core"));
	}
});
