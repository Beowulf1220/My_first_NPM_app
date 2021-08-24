const log4js = require("log4js");

let logger = log4js.getLogger();

logger.level = "debug";

logger.info("La aplicación se inicio con éxito :)");
logger.warn("Cuidado falta la librería X");
logger.error("No se encontro la función \"Suma()\"");
logger.fatal("No se pudo iniciar la aplicación :(");

const suma = (x, y) => x + y;

module.exports = suma;