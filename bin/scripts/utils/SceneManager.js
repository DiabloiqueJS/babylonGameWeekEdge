define(["levels/level1", "levels/level2"], function (level1, level2) 
{
	function SceneManager (engine)
	{
		this.engine = engine;
		this.currentLevel = null;
		this.levels = [];
		this.pushLevel(level1);
		this.pushLevel(level2);
	}

	SceneManager.prototype.pushLevel = function (level)
	{
		level.setup(this.engine, this.levels.length);
		this.levels.push(level);
	}

	SceneManager.prototype.loadLevel = function(levelID) 
	{
		if (this.currentLevel != null && !this.currentLevel.dontDestroyOnLoad)
			this.currentLevel.onDestroy();

		var level = this.levels[levelID];
		if (!level.dontDestroyOnLoad || !level.alreadyInitialized)
			level.init(this.engine);
		
		this.engine.renderLoop = level.renderLoop;
	}

	return SceneManager
});