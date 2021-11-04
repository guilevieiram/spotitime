from model.ranks_model import RanksModel, BillboardModel
from model.playlist_model import PlaylistModel, SpotifyModel
from controller.controller import Controller, TerminalController, FlaskController, FlaskDummyController


app = FlaskController(
    ranks_model=BillboardModel(),
    playlist_model=SpotifyModel()
).app

