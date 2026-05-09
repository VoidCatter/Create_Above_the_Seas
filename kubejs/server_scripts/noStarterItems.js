PlayerEvents.loggedIn(event => {
	const player = event.player;

	// Only on first ever join
	if (player.persistentData.getBoolean("starter_suppressed")) return;
	player.persistentData.putBoolean("starter_suppressed", true);

	// Schedule via server tick to run AFTER mods give their items
	event.server.scheduleInTicks(20, () => {
		player.inventory.clear();
	});
});
