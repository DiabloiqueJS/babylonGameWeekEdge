define(["babylon", "utils/ObjectContainer"], function (BABYLON, OBJECT_CONTAINER) 
{
	var LEVEL1 = new function() {
		
		this.dontDestroyOnLoad = true;
		this.alreadyInitialized = false;
		var _id;
		var _engine;
		var _scene = null;

		this.init = function ()
		{
			_scene = new BABYLON.Scene(_engine);

			OBJECT_CONTAINER.MAIN_CAMERA = new BABYLON.FreeCamera("Camera", new BABYLON.Vector3(0, 0, -10), _scene);

			new BABYLON.PointLight("Omni0", new BABYLON.Vector3(0, 100, 100), _scene);
			
			new BABYLON.Mesh.CreateSphere("Sphere", 16, 3, _scene);
			this.alreadyInitialized = true;
		}

		this.setup = function (engine, id)
		{
			_engine = engine;
			_id = id;
		}

		this.onDestroy = function()
		{
			_scene = null;
		}

		this.renderLoop = function ()
		{
			console.log("ep")
			_scene.render();
			if (ENDOFGAME) 
			{
				OBJECT_CONTAINER.SCENE_MANAGER.loadLevel(_id++);
			};
		}
	}

	return LEVEL1;
});