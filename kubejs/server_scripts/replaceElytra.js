EntityEvents.spawned("minecraft:item_frame", event => {
    event.server.scheduleInTicks(10, () => {
    	if (event.entity.getItem().getId() == "minecraft:elytra") {
    		event.entity.setItem(Item.of("minecraft:heavy_core"));
        }
	})
});
