import streamlit as st
import pandas as pd
from pathlib import Path

from prediction import load_model

import prediction

print(prediction.__file__)
print(dir(prediction))


# --------------------------------------------------
# Page Configuration
# --------------------------------------------------

st.set_page_config(
    page_title="Athlete Fatigue Dashboard",
    page_icon="🏀",
    layout="wide"
)

# --------------------------------------------------
# Paths
# --------------------------------------------------

BASE_DIR = Path(__file__).resolve().parent.parent

DATA_PATH = (
    BASE_DIR
    / "Data"
    / "Processed"
    / "final_master_dataset_normalized.csv"
)

# --------------------------------------------------
# Load Dataset
# --------------------------------------------------

@st.cache_data
def load_data():
    return pd.read_csv(DATA_PATH)

df = load_data()

# --------------------------------------------------
# Load ML Model
# --------------------------------------------------

model = load_model()

# --------------------------------------------------
# Title
# --------------------------------------------------

st.title("🏀 Athlete Fatigue Prediction Dashboard")

st.markdown("""
Predict athlete fatigue using historical training load,
GPS metrics and wellness information.
""")

# --------------------------------------------------
# Sidebar
# --------------------------------------------------

st.sidebar.title("Navigation")

page = st.sidebar.radio(
    "Select Page",
    [
        "🏠 Home",
        "👤 Player Analysis",
        "📈 Trends",
        "🤖 Prediction",
        "📊 Model Insights"
    ]
)

# ==================================================
# HOME PAGE
# ==================================================

if page == "🏠 Home":

    st.header("Dashboard Overview")

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

    st.divider()

    st.subheader("Dataset Preview")

    st.dataframe(
        df.head(20),
        use_container_width=True
    )

# ==================================================
# PLAYER ANALYSIS
# ==================================================

elif page == "👤 Player Analysis":

    st.header("Player Analysis")

    players = sorted(df["player_name"].unique())

    selected_player = st.selectbox(
        "Select Player",
        players
    )

    player_df = df[
        df["player_name"] == selected_player
    ]

    st.write(player_df)

# ==================================================
# TRENDS
# ==================================================

elif page == "📈 Trends":

    st.header("Fatigue Trend")

    st.line_chart(
        df["fatigue"]
    )

# ==================================================
# PREDICTION
# ==================================================

elif page == "🤖 Prediction":

    st.header("Prediction")

    st.info(
        "Prediction page will be implemented in Phase 2."
    )

# ==================================================
# MODEL INSIGHTS
# ==================================================

elif page == "📊 Model Insights":

    st.header("Model Information")

    st.success(
        "Best Model : Gradient Boosting Regressor"
    )

    st.write("Target Variable : Fatigue")

    st.write("R² Score : 0.516")

    st.write("RMSE : 0.695")