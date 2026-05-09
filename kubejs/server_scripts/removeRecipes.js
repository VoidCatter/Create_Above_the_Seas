ServerEvents.recipes(event => {
	event.remove({ output: "minecraft:elytra" });
	event.remove({ output: "silentgear:elytra" });
	event.remove({ output: "silentgear:binding" });
	event.remove({ output: "silentgear:elytra_wings" });
	event.remove({ output: "silentgear:elytra_template" });
	event.remove({ output: "silentgear:elytra_blueprint" });
	event.remove({ output: "silentgear:guide_book" });
	event.remove({ output: "silentgear:crude_knife" });
	event.remove({ output: "silentgear:crude_hammer" });
	event.remove({ output: "silentgear:crude_alloy" });
	event.remove({ output: "silentgear:crude_tool_parts" });
});
