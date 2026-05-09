// Odds are value out of 100% chance
let overworldOdds = 0.9;
let netherOdds = 1.5;
let endOdds = 2.25;


LootJS.modifiers((event) => {
	// Remove existing accessories
	event.removeGlobalModifiers(/(artifacts:inject\/chests\/.*|relics:.*)/);


	// Overworld Loot
	event.addTableModifier(LootType.CHEST).pool(pool => {
		pool.rolls(1);
		pool.addEntry(LootEntry
			.tag("kubejs:overworld_loot", true)
			.matchDimension("minecraft:overworld")
			.randomChance(overworldOdds / 100)
		);
	});


	// Nether Loot
	event.addTableModifier(LootType.CHEST).pool(pool => {;
		pool.rolls(1);
		pool.addEntry(LootEntry
			.tag("kubejs:nether_loot", true)
			.matchDimension("minecraft:the_nether")
			.randomChance(netherOdds / 100)
		);
	});


	// End Loot
	event.addTableModifier(LootType.CHEST).pool(pool => {;
		pool.rolls(1);
		pool.addEntry(LootEntry
			.tag("kubejs:end_loot", true)
			.matchDimension("minecraft:the_end")
			.randomChance(endOdds / 100)
		);
	});
});
