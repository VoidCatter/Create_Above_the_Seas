ServerEvents.recipes(event => {
    event.shaped(
        Item.of("create_new_age:magnetite_block"),
        [
            'NNN',
            'NIN',
            'NNN'
        ],
        {
            N: 'minecraft:iron_nugget',
            I: 'minecraft:cobblestone'
        }
    );
});
