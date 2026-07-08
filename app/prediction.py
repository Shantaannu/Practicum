from pathlib import Path

import joblib
import pandas as pd
import streamlit as st

BASE_DIR = Path(__file__).resolve().parent.parent

MODEL_PATH = (
    BASE_DIR
    / "model"
    / "best_regression_model.pkl"
)

@st.cache_resource
def load_model():
    return joblib.load(MODEL_PATH)

def predict_fatigue(model, input_df: pd.DataFrame):
    prediction = model.predict(input_df)
    return prediction