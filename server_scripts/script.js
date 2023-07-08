let targetLength = global.dayLength; // in minutes
const pauseDivision = global.pauseCount || 20;
const celestialRepositionTimer = 20 * MINUTE / pauseDivision;
const skyPauseTimer = ((targetLength - 20) * MINUTE) / pauseDivision;
ServerEvents.loaded((event) => {
    if (targetLength==null) return;
    const gameRules = event.server.getOverworld().getGameRules();
  event.server.schedule(celestialRepositionTimer, (callback) => {
    if (gameRules.get("doDaylightCycle").get()) {
      gameRules.set("doDaylightCycle", false);
      callback.reschedule(skyPauseTimer);
    } else {
      gameRules.set("doDaylightCycle", true);
      callback.reschedule(celestialRepositionTimer);
    }
  });
});
