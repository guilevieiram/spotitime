from abc import ABC, abstractmethod
import requests
from bs4 import BeautifulSoup

from helpers.decorators import log_json, log_text


class RanksModel(ABC):
    """Responsible for connecting and managing the webscrapping of the billboard application"""

    def fetch_songs(self, date: str) -> list[str]:
        """Method to be accessed by the controller to fetch the songs list given a date."""
        return self._parse_song_names(page_html=self._fetch_page(date=date))[:10]

    @abstractmethod
    def _fetch_page(self, date: str) -> str:
        """Fetches the billboard 100 page for a given date"""
        pass

    @abstractmethod
    def _parse_song_names(self, page_html: str) -> list[str]:
        """Given a content page, fetches all the song names and returns them in a list."""
        pass
    

class BillboardModel(RanksModel):
    """Responsible for connecting and managing the webscrapping of the billboard application"""

    def __init__(self, url: str = "https://www.billboard.com/charts/hot-100/") -> None:
        """Initializes the billboard model with the necessary endpoint url."""
        self.base_url: str = url

    def _fetch_page(self, date: str) -> str:
        """Fetches the billboard 100 page for a given date"""
        return requests.get(self.base_url + date).text

    def _parse_song_names(self, page_html: str) -> list[str]:
        """Given a content page, fetches all the song names and returns them in a list."""
        soup: BeautifulSoup = BeautifulSoup(page_html, "html.parser")
        tag_list: list = soup.select(".chart-element__information__song")
        song_names_list: list[str] = list(map(lambda tag: tag.string, tag_list))
        return song_names_list

