var game = new Phaser.Game(1600, 1000, Phaser.AUTO,"phaser-canvas");
game.state.add("startpage", demo.startpage);
game.state.add("GameBootPage", demo.GameBootPage);
game.state.add("HomePage", demo.HomePage);
game.state.add("AxPage", demo.AxPage);
game.state.add("LoggingPage", demo.LoggingPage);
game.state.add("practiceModeLevel3", demo.practiceModeLevel3);
game.state.add("practiceModeLevel4", demo.practiceModeLevel4);
game.state.add("practiceModeLevel5", demo.practiceModeLevel5);
game.state.add("practiceModeLevel6", demo.practiceModeLevel6);
game.state.add("practiceModeLevel7", demo.practiceModeLevel7);
game.state.add("FishingPage", demo.FishingPage);

game.state.add("state5", demo.state5);
game.state.add("state6", demo.state6);
game.state.add("state7", demo.state7);
game.state.add("state8", demo.state8);
game.state.add("state9", demo.state9);
game.state.add("loadingpage", demo.loadingpage);
game.state.add("loadingMenu", demo.loadingMenu);


game.state.add("BootFishingPage", demo.BootFishingPage);
game.state.add("LoadingFishingPage", demo.LoadingFishingPage);
game.state.add("LoadingAxPage", demo.LoadingAxPage);

game.state.add("BootLoggingPage", demo.BootLoggingPage);
game.state.add("LoadingLoggingPage", demo.LoadingLoggingPage);

game.state.add("HomeMenu", demo.HomeMenu);
game.state.add("fishingLevel", demo.fishingLevel);
game.state.add("HomeInsidePage", demo.HomeInsidePage);
game.state.add("LevelMap", demo.LevelMap);


game.state.start("GameBootPage");
//game.state.start("LoadingFishingPage");
//game.state.start("LevelMap");
//game.state.start("AxPage");
//game.state.start("LoggingPage");