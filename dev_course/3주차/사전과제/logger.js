const logger = (function () {
  let logCount = 0;

  function log(message) {
    console.log(message);
    logCount += 1;
  }

  function getLogCount() {
    return logCount;
  }

  return {
    log: log,
    getLogCount: getLogCount,
  };
})();

logger.log("hello world!");
console.log(logger.getLogCount());
