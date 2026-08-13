from ultralytics import YOLO

# Load the trained YOLO classification model
model = YOLO("runs/classify/train/weights/best.pt")

def check_defect(image_path):
    # Run inference on the provided image
    result = model(image_path)[0]
    
    # Extract the top predicted class name and confidence score
    class_name = result.names[result.probs.top1]
    confidence = float(result.probs.top1conf)
    
    # Map class labels to English status messages
    messages = {
        "00-ok": "✅ No defects detected.",
        "01-minor": "⚠️ Minor defect detected — logged for review.",
        "02-moderate": "🔧 Moderate defect — mechanic inspection required.",
        "03-severe": "🚨 Severe defect — do not drive, report immediately!"
    }
    
    return {
        "class": class_name,
        "confidence": round(confidence, 2),
        "message": messages.get(class_name, "Unknown classification result.")
    }

if __name__ == "__main__":
    # Test the defect checker with an example image
    print(check_defect("test.jpg"))