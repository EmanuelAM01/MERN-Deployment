const PlayerController = require("../controllers/player.controller")

module.exports = (app) => {
    app.post("/api/players", PlayerController.create_player);
    app.get("/api/players", PlayerController.get_all);
    app.get("/api/players/:id", PlayerController.get_player);
    app.put("/api/players/:id", PlayerController.update_player);
    app.delete("/api/players/:id", PlayerController.delete_player);
}