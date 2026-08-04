import os
import streamlit as st
from ultralytics import YOLO
from PIL import Image

# ---------------- Page Config ----------------
st.set_page_config(
    page_title="FleetSense | Daily Vehicle Inspection",
    page_icon="🚚",
    layout="centered"
)

# ---------------- Cyber Glassmorphism Modern UI CSS ----------------
st.markdown("""
    <style>
    /* Main Background & Font */
    .stApp {
        background: linear-gradient(180deg, #0b0f19 0%, #111827 100%);
        color: #f3f4f6;
        font-family: 'Plus Jakarta Sans', -apple-system, BlinkMacSystemFont, sans-serif;
    }

    /* FleetSense Glass Header */
    .brand-header {
        background: rgba(17, 24, 39, 0.7);
        backdrop-filter: blur(12px);
        border: 1px solid rgba(255, 255, 255, 0.08);
        padding: 24px;
        border-radius: 20px;
        text-align: center;
        margin-bottom: 25px;
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
    }
    .brand-title {
        font-size: 32px;
        font-weight: 800;
        background: linear-gradient(90deg, #38bdf8 0%, #818cf8 100%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        letter-spacing: -0.5px;
        margin: 0;
    }
    .brand-subtitle {
        font-size: 13px;
        color: #9ca3af;
        margin-top: 6px;
        text-transform: uppercase;
        letter-spacing: 1.5px;
        font-weight: 600;
    }

    /* Inspection Step Card */
    .inspection-card {
        background: rgba(31, 41, 55, 0.5);
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 18px;
        padding: 24px;
        margin-bottom: 20px;
        box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);
    }
    .step-badge {
        background: linear-gradient(90deg, #0284c7 0%, #2563eb 100%);
        color: #ffffff;
        font-size: 11px;
        font-weight: 700;
        padding: 6px 14px;
        border-radius: 20px;
        display: inline-block;
        margin-bottom: 12px;
        letter-spacing: 0.5px;
        box-shadow: 0 4px 12px rgba(2, 132, 199, 0.3);
    }
    .instruction-text {
        font-size: 15px;
        color: #d1d5db;
        margin-bottom: 0;
        line-height: 1.6;
    }

    /* Neon Alert Cards */
    .alert-defect {
        background: rgba(225, 29, 72, 0.12);
        border: 1px solid #f43f5e;
        color: #fecdd3;
        padding: 16px;
        border-radius: 14px;
        font-weight: 600;
        margin: 16px 0;
        box-shadow: 0 4px 15px rgba(244, 63, 94, 0.15);
    }
    .alert-ok {
        background: rgba(16, 185, 129, 0.12);
        border: 1px solid #10b981;
        color: #a7f3d0;
        padding: 16px;
        border-radius: 14px;
        font-weight: 600;
        margin: 16px 0;
        box-shadow: 0 4px 15px rgba(16, 185, 129, 0.15);
    }
    .summary-card {
        background: rgba(31, 41, 55, 0.6);
        border: 1px solid rgba(255, 255, 255, 0.08);
        padding: 18px;
        border-radius: 14px;
        margin-bottom: 12px;
    }

    /* Custom Input Fields Overrides */
    div[data-testid="stMarkdownContainer"] {
        color: #f3f4f6 !important;
    }
    .stTextArea label, .stRadio label {
        color: #f3f4f6 !important;
        font-weight: 700 !important;
    }
    .stTextArea textarea {
        background-color: #1f2937 !important;
        border: 1px solid #374151 !important;
        color: #f3f4f6 !important;
        border-radius: 12px !important;
    }

    /* Progress Bar */
    .stProgress > div > div > div > div {
        background: linear-gradient(90deg, #38bdf8 0%, #818cf8 100%) !important;
        border-radius: 10px;
    }

    /* Sleek Buttons Styling */
    .stButton>button {
        border-radius: 12px !important;
        font-weight: 700 !important;
        border: 1px solid rgba(255, 255, 255, 0.1) !important;
        background: #1f2937 !important;
        color: #f3f4f6 !important;
        transition: all 0.3s ease !important;
    }
    .stButton>button:hover {
        border-color: #38bdf8 !important;
        box-shadow: 0 0 12px rgba(56, 189, 248, 0.3) !important;
    }
    </style>
""", unsafe_allow_html=True)

# ---------------- Load YOLO Model ----------------
@st.cache_resource
def load_yolo_model():
    model_path = os.path.join("runs", "classify", "train", "weights", "best.pt")
    if not os.path.exists(model_path):
        model_path = "best.pt"
    if not os.path.exists(model_path):
        return None
    return YOLO(model_path)

model = load_yolo_model()

if model is None:
    st.error("⚠️ Trained model 'best.pt' not found. Please run train.py first to enable AI defect detection.")
    st.stop()

# ---------------- FleetSense Inspection Checklist ----------------
CHECKLIST = [
    {
        "id": 1, 
        "title": "Dashboard Mileage Verification", 
        "photo_type": "Dashboard Mileage", 
        "desc": "Capture a clear photo of the vehicle odometer showing total mileage."
    },
    {
        "id": 2, 
        "title": "Front Exterior Inspection", 
        "photo_type": "Front View", 
        "desc": "Check front bumper, headlights, grill, and windshield for scratches or damage."
    },
    {
        "id": 3, 
        "title": "Nearside (Passenger Side) Check", 
        "photo_type": "Nearside View", 
        "desc": "Inspect side panels, windows, side mirrors, and passenger side doors."
    },
    {
        "id": 4, 
        "title": "Rear Exterior Inspection", 
        "photo_type": "Rear View", 
        "desc": "Check rear bumper, taillights, trunk/cargo door, and license plate condition."
    },
    {
        "id": 5, 
        "title": "Offside (Driver Side) Check", 
        "photo_type": "Offside View", 
        "desc": "Examine driver side doors, side mirrors, and overall side bodywork."
    },
    {
        "id": 6, 
        "title": "Interior Cab Inspection", 
        "photo_type": "Interior Cab", 
        "desc": "Ensure cab cleanliness, check seatbelts, dashboard controls, and interior safety."
    },
   
    {
        "id": 13, 
        "title": "Bodywork Damage & Security Scan", 
        "photo_type": "Bodywork Scan", 
        "desc": "Scan full body frame for deep dents, structural rust, or loose fittings."
    },
    {
        "id": 32, 
        "title": "Rear AI Camera Alignment", 
        "photo_type": "Rear AI Cam", 
        "desc": "Ensure safety AI camera mounted at the back is clean, uncovered, and facing correctly."
    },
]

total_items = len(CHECKLIST)

# ---------------- Session State Setup ----------------
if "current_idx" not in st.session_state:
    st.session_state.current_idx = 0

if "results" not in st.session_state:
    st.session_state.results = {}

# ---------------- Header Banner ----------------
st.markdown("""
    <div class="brand-header">
        <h1 class="brand-title">FleetSense</h1>
        <div class="brand-subtitle">AI-Powered Daily Vehicle Safety Inspection</div>
    </div>
""", unsafe_allow_html=True)

# ---------------- Final Summary Screen ----------------
if st.session_state.current_idx >= total_items:
    st.progress(1.0)
    st.title("📋 Final Inspection Report")

    defect_found = any(r["defective"] for r in st.session_state.results.values())

    if defect_found:
        st.markdown(
            '<div class="alert-defect">🚨 <b>ACTION REQUIRED: DEFECTS DETECTED</b><br>'
            'Defects were flagged during this check. Do not operate the vehicle. Report to your fleet manager immediately.</div>', 
            unsafe_allow_html=True
        )
    else:
        st.markdown(
            '<div class="alert-ok">✅ <b>INSPECTION PASSED</b><br>'
            'No defects were identified. Vehicle is safe and approved for driving.</div>', 
            unsafe_allow_html=True
        )

    st.markdown("### Item Inspection Breakdown")
    
    for cl_item in CHECKLIST:
        res = st.session_state.results.get(cl_item["id"])
        if res:
            status_icon = "🔴 DEFECT REPORTED" if res["defective"] else "🟢 PASSED"
            with st.container():
                st.markdown(f"""
                <div class="summary-card">
                    <strong style="color: #f3f4f6;">{cl_item['title']}</strong> ({cl_item['photo_type']})<br>
                    Status: <strong>{status_icon}</strong><br>
                    <small style="color: #9ca3af;">Notes: {res['note'] if res['note'] else 'No notes added'}</small>
                </div>
                """, unsafe_allow_html=True)

    st.divider()
    if st.button("🔄 Start New Vehicle Check", use_container_width=True):
        st.session_state.current_idx = 0
        st.session_state.results = {}
        st.rerun()

    st.stop()

# ---------------- Current Inspection Step ----------------
item = CHECKLIST[st.session_state.current_idx]

# Overall Progress Bar
progress_val = (st.session_state.current_idx) / total_items
st.progress(progress_val)

# Step Card Header
st.markdown(f"""
    <div class="inspection-card">
        <span class="step-badge">STEP {st.session_state.current_idx + 1} OF {total_items}</span>
        <h2 style="margin: 5px 0 10px 0; color: #f3f4f6;">{item['title']}</h2>
        <p class="instruction-text"><b>Driver Instruction:</b> {item['desc']}</p>
    </div>
""", unsafe_allow_html=True)

# ---------------- Photo Capture & AI Analysis Card ----------------
st.markdown("### 📷 1. Upload or Capture Photo")

uploaded_file = st.file_uploader(
    f"Take a photo or select an image for: {item['photo_type']}",
    type=["jpg", "png", "jpeg"],
    key=f"uploader_{item['id']}"
)

ai_is_defective = False
auto_note = ""
predicted_label = "no-image"

if uploaded_file is not None:
    img = Image.open(uploaded_file).convert("RGB")
    
    with st.container():
        st.image(img, use_container_width=True, caption=f"Uploaded: {item['photo_type']}")

    with st.spinner("🤖 FleetSense AI analyzing image for structural defects..."):
        results = model(img)
        top1_idx = results[0].probs.top1
        label = results[0].names[top1_idx]
        conf = results[0].probs.top1conf.item() * 100
        predicted_label = label

        defect_classes = ["01-minor", "02-moderate", "03-severe", "minor", "moderate", "severe"]

        if label.lower() in defect_classes:
            ai_is_defective = True
            auto_note = f"AI Detection: [{label.upper()}] defect observed with {conf:.1f}% confidence on {item['photo_type']}."
            st.markdown(
                f'<div class="alert-defect">⚠️ <b>AI DEFECT ALERT:</b> Detected {label.upper()} defect ({conf:.1f}% confidence).</div>', 
                unsafe_allow_html=True
            )
        else:
            ai_is_defective = False
            auto_note = f"AI Detection: Clean visual check ({conf:.1f}% confidence) on {item['photo_type']}."
            st.markdown(
                f'<div class="alert-ok">✅ <b>AI CLEAR:</b> No structural defect detected ({conf:.1f}% confidence).</div>', 
                unsafe_allow_html=True
            )

st.divider()

# ---------------- Manual Verification & Notes Card ----------------
st.markdown("### ✍️ 2. Driver Verification & Notes")
st.caption("Review the AI assessment below. Adjust status manually if you notice defects uncaptured by AI.")

notes = st.text_area(
    "Inspection Remarks & Context",
    value=auto_note if uploaded_file else "",
    placeholder="Provide additional details or manual notes regarding this item...",
    height=100,
    key=f"notes_{item['id']}"
)

is_defective_choice = st.radio(
    "Final Status for this Check:",
    options=["No Defect (Pass)", "Defective (Fail)"],
    index=1 if ai_is_defective else 0,
    horizontal=True,
    key=f"radio_{item['id']}",
    help="Select 'Defective' if there is any visible damage, leak, or issue requiring repair."
)

# ---------------- Navigation Buttons ----------------
st.divider()
col_prev, col_save, col_next = st.columns([1, 2, 1])

with col_prev:
    if st.button("⬅️ Back", disabled=(st.session_state.current_idx == 0), use_container_width=True):
        st.session_state.current_idx -= 1
        st.rerun()

with col_save:
    if st.button("💾 Save & Continue", type="primary", use_container_width=True):
        is_def = (is_defective_choice == "Defective (Fail)")
        st.session_state.results[item["id"]] = {
            "defective": is_def,
            "note": notes,
            "label": predicted_label
        }
        st.session_state.current_idx += 1
        st.rerun()

with col_next:
    if st.button("Skip ➡️", use_container_width=True):
        st.session_state.current_idx += 1
        st.rerun()