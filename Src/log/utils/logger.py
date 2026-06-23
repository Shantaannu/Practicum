import os
import logging
from datetime import datetime


def setup_logger(name):

    # Path: Src/log/Log_Data
    log_dir = os.path.join(
        os.path.dirname(os.path.dirname(__file__)),
        "Log_Data"
    )

    os.makedirs(log_dir, exist_ok=True)

    log_file = os.path.join(
        log_dir,
        f"{name}_{datetime.now().strftime('%Y-%m-%d')}.log"
    )

    logger = logging.getLogger(name)

    if logger.hasHandlers():
        logger.handlers.clear()

    logger.setLevel(logging.INFO)

    formatter = logging.Formatter(
        "%(asctime)s | %(levelname)s | %(message)s",
        datefmt="%Y-%m-%d %H:%M:%S"
    )

    file_handler = logging.FileHandler(log_file)
    file_handler.setFormatter(formatter)

    console_handler = logging.StreamHandler()
    console_handler.setFormatter(formatter)

    logger.addHandler(file_handler)
    logger.addHandler(console_handler)

    

    return logger

print("logger.py location:", __file__)

log_dir = os.path.join(
    os.path.dirname(os.path.dirname(__file__)),
    "Log_Data"
)

print("Log directory:", log_dir)
