from abc import ABC, abstractmethod
import os
import spotipy
from spotipy.oauth2 import SpotifyOAuth

class PlaylistModel(ABC):
    """Responsible for connecting and managing the spotify api."""

    @abstractmethod
    def create_playlist(self, song_list: list[str]) -> str:
        """Creates a playlist given a list of songs. Returns the link for that playlist."""
        pass


class SpotifyModel(PlaylistModel):
    """Responsible for connecting and managing the spotify api."""

    def __init__(self) -> None:
        """Initializes the spotify API authorization with the given client keys."""
        self.man = spotify = spotipy.Spotify(
            auth_manager=SpotifyOAuth(
                scope="playlist-modify-public",
                redirect_uri="https://guile.ga",
                client_id=os.environ["SPOTIPY_CLIENT_ID"],
                client_secret=os.environ["SPOTIPY_CLIENT_SECRET"],
                show_dialog=True,
                cache_path="token.txt"
            ),
        )
    
    def create_playlist(self, song_list: list[str], date: str) -> [str, str]:
        """Creates a playlist given a list of songs. Returns the uri for that playlist."""
        print(song_list)
        songs_uri: list[str] = [self._get_song_link(song_name=song) for song in song_list]
        playlist_data: dict = self.man.user_playlist_create(
            user=self.man.me()["id"],
            name=f"The Best Of   {date}")
        self.man.playlist_add_items(
            playlist_id=playlist_data["id"],
            items=songs_uri
        )
        return playlist_data["uri"], playlist_data["external_urls"]["spotify"]

    def _get_song_link(self, song_name: str) -> str:
        """Returns a song link(uri) given a song name."""
        response: dict = self.man.search(q=song_name, limit=1, type="track")
        try:
            song_uri: str = response["tracks"]["items"][0]["uri"]
        except IndexError:
            song_uri: str = "spotify:track:4cOdK2wGLETKBW3PvgPWqT" 
            # this returns "never gonna give you up as exception"
        return song_uri