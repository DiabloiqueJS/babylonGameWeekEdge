require.config(
	{
		baseUrl : "bin/scripts",

		paths: {
			"babylon" : "../libs/babylon.1.10.0",
		},

		shim: {
			"babylon" : 
			{
				exports : "BABYLON", 				
			}
		},

		urlArgs : "?r=" + Date.now(),
	}
);

require(["babylon", "utils/ObjectContainer", "utils/SceneManager"], function (BABYLON, OBJECT_CONTAINER, SceneManager) 
{
	var engine = OBJECT_CONTAINER.MAIN_ENGINE = new BABYLON.Engine(document.getElementById("canvas"), true);

	var sceneManager = OBJECT_CONTAINER.SCENE_MANAGER = new SceneManager(engine);

	sceneManager.loadLevel(0);

	engine.runRenderLoop(engine.renderLoop);
});