from backend.model.ranks_model import RanksModel, BillboardModel
from backend.model.playlist_model import PlaylistModel, SpotifyModel
from backend.controller.controller import Controller, TerminalController, FlaskController, FlaskDummyController, FlaskSimpleController

app = FlaskController(
    ranks_model=BillboardModel(),
    playlist_model=SpotifyModel()
).app