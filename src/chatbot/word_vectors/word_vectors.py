from chatbot.util.file import File
from gensim.models.keyedvectors import KeyedVectors
import os


class WordVectors:
    word_vectors = None

    def __init__(self):
        pass

    @staticmethod
    def load_french_vector_text():
        file = os.path.join(File.bin_data_directory, r"glove.6B.300d.txt")
        WordVectors.word_vectors = KeyedVectors.load_word2vec_format(file, binary=False)

    @staticmethod
    def load_french_vector_bin():
        file = os.path.join(File.bin_data_directory, r"glove.6B.300d.bin")
        WordVectors.word_vectors = KeyedVectors.load_word2vec_format(file, binary=True)

    @staticmethod
    def save_word_vector():
        File.save_binary(WordVectors.word_vectors, r"glove.6B.300d.bin")
