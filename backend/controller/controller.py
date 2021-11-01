from abc import ABC, abstractmethod
import re

from model.playlist_model import PlaylistModel
from model.ranks_model import RanksModel


class Controller(ABC):
    """Responsible for controlling the application"""

    @abstractmethod
    def run(self) -> None:
        """Runs the application."""
        pass

    @abstractmethod
    def _get_user_date(self) -> str:
        """Gets desired date from user"""
        pass

    @abstractmethod
    def _fetch_song_lists(self, date: str = "YYYY-MM-DD") -> list[str]:
        """Fetches the 100 bests songs of a given date"""
        pass

    @abstractmethod
    def _create_playlist(self, song_list: list[str]) -> str: 
        """Creates the spotify playlist and returns a link"""
        pass


class MyController(Controller):
    """Implementation of the controller class."""

    def __init__(self, ranks_model: RanksModel, playlist_model: PlaylistModel) -> None:
        """Initializes the application controller with the necessary models."""
        self.ranks_model = ranks_model
        self.playlist_model = playlist_model

    def run(self) -> None:
        """Runs the application."""
        user_date: str = self._get_user_date()
        song_list: list[str] = self._fetch_song_lists(date=user_date)
        playlist_link: str = self._create_playlist(song_list=song_list, date=user_date)
        print(f"Your desired playlist is in the following link: \n\t {playlist_link}")

    def _get_user_date(self) -> str:
        """Gets desired date from user"""
        user_input: str  = input("Please input a date in the format YYYY-MM-DD: ")

        while not re.match("^[0-9]{4}-[0-9]{2}-[0-9]{2}$", user_input):
            user_input: str  = input("Please input the date in the desired format: ")

        return user_input

    def _fetch_song_lists(self, date: str = "YYYY-MM-DD") -> list[str]:
        """Fetches the 100 bests songs of a given date"""
        return self.ranks_model.fetch_songs(date=date)

    def _create_playlist(self, song_list: list[str], date:str) -> str: 
        """Creates the playlist and returns a link"""
        return self.playlist_model.create_playlist(song_list=song_list, date=date)