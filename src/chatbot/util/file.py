import os
import joblib


class File:
    __root_directory = os.path.abspath(__file__ + "r/../../")
    __rel_path = r'data/raw/'
    raw_data_directory = os.path.join(__root_directory, __rel_path)

    __rel_path = r'data/bin/'
    bin_data_directory = os.path.join(__root_directory, __rel_path)


    @staticmethod
    def save_binary(model, filename):
        """
        Uses joblib implementation over pickle for performance
        and memory. Saves content to binary format
        :param filename: String
        :param content: Object
        :return: None
        """
        file_path = os.path.join(File.bin_data_directory, filename)
        joblib.dump(model, file_path)
