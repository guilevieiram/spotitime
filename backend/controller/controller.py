from abc import ABC, abstractmethod
import re
import json

import time

from flask import Flask, jsonify, request
from flask_restful import Resource, Api, reqparse
from flask_cors import CORS

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

    def _fetch_song_lists(self, date: str = "YYYY-MM-DD") -> list[str]:
        """Fetches the 100 bests songs of a given date"""
        return self.ranks_model.fetch_songs(date=date)

    def _create_playlist(self, song_list: list[str], date: str) -> str: 
        """Creates the spotify playlist and returns a link"""
        return self.playlist_model.create_playlist(song_list=song_list, date=date)
        


class TerminalController(Controller):
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


class FlaskController(Controller):
    """Responsible for controlling the application via Flask RESTful API."""

    def __init__(self, ranks_model: RanksModel, playlist_model: PlaylistModel) -> None:
        """Initializes the API and its endpoints"""
        self.ranks_model = ranks_model
        self.playlist_model = playlist_model

        self.app: Flask = Flask(__name__)
        CORS(self.app)
        self.api: Api = Api(self.app)
        self.parser = reqparse.RequestParser()
        self.parser.add_argument('date')

        self.api.add_resource(self._receive_user_date(), '/')

    def run(self) -> None:
        """Runs the application."""
        self.app.run(debug=True)

    def _get_user_date(self) -> str:
        """Gets desired date from user"""
        payload_string: str = request.data.decode('utf8')
        payload: dict = json.loads(payload_string)
        user_input: str = payload["date"]
        if not re.match("^[0-9]{4}-[0-9]{2}-[0-9]{2}$", user_input):
            raise ValueError("Date in invalid format")
        return user_input

    def _receive_user_date(self) -> Resource:
        """Defines the api endpoint to receive user date as an api POST endpoint."""
        # creating pointers to the methods to be used inside the resouce class
        _get_user_date = self._get_user_date
        _fetch_song_lists = self._fetch_song_lists
        _create_playlist = self._create_playlist

        class _receive_user_date(Resource):
            def post(self):
                try:
                    user_date: str = _get_user_date()
                    song_list: list[str] = _fetch_song_lists(date=user_date)
                    playlist_link: str = _create_playlist(song_list=song_list, date=user_date)
                    return {
                        "code": 1,
                        "link": playlist_link,
                        "name": f"The best of {user_date}"
                    }
                except Exception as e:
                    print(e)
                    return {"code": -1, "message": f"The following exception occured: {e}"}
        return _receive_user_date


class FlaskDummyController(FlaskController):
    """Dummy controller to test and develop the frontend application. Not for production."""

    def _receive_user_date(self) -> Resource:
        """Rewrites this method for dummy data usage."""
        # creating pointers to the methods to be used inside the resouce class
        _get_user_date = self._get_user_date
        class _receive_user_date(Resource):
            def post(self):
                try:
                    time.sleep(2)
                    user_date: str = _get_user_date()
                    return {
                        "code": 1,
                        "link": "https://guile.ga",
                        "name": f"The best of {user_date}"
                    }
                except Exception as e:
                    print(e)
                    return {"code": -1, "message": f"The following exception occured: {e}"}
        return _receive_user_date