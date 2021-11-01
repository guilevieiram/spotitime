from model.ranks_model import RanksModel, BillboardModel
from model.playlist_model import PlaylistModel, SpotifyModel
from controller.controller import Controller, MyController

def main() -> None:
    MyController(
        ranks_model=BillboardModel(),
        playlist_model=SpotifyModel()
    ).run()

if __name__ == "__main__":
    main()