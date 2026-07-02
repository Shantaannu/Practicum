import streamlit as st
from prediction import load_model

st.set_page_config(
    page_title="Athlete Fatigue Dashboard",
    page_icon="🏀",
    layout="wide"
)

st.title("🏀 Athlete Fatigue Prediction Dashboard")

st.write(
    """
    Welcome to the Athlete Fatigue Prediction Dashboard.

    This application predicts player fatigue using
    training load and wellness data.
    """
)

import pandas as pd

@st.cache_data
def load_data():
    return pd.read_csv(
        "Data/Processed/final_master_dataset_normalized.csv"
    )

df = load_data()

import joblib

@st.cache_resource
def load_model():
    return joblib.load(
        "/model/best_regression_model.pkl"
    )

from prediction import load_model

model = load_model()

st.sidebar.title("Navigation")

page = st.sidebar.radio(

    "Go To",

    [

        "🏠 Home",
        "👤 Player Analysis",
        "📈 Trends",
        "🤖 Prediction",
        "📊 Model Insights"

    ]

)

if page == "🏠 Home":

    st.header("Dashboard Overview")

    st.write("Welcome to the Athlete Fatigue Prediction System.")

    col1, col2, col3 = st.columns(3)

with col1:
    st.metric(
        "Total Records",
        len(df)
    )

with col2:
    st.metric(
        "Players",
        df["player_name"].nunique()
    )

with col3:
    st.metric(
        "Model",
        "Gradient Boosting"
    )

    st.subheader("Dataset Preview")

st.dataframe(
    df.head(10),
    use_container_width=True
)

