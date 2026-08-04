from ultralytics import YOLO

model = YOLO("runs/classify/train/weights/best.pt")

def check_defect(image_path):
    result = model(image_path)[0]
    class_name = result.names[result.probs.top1]
    confidence = float(result.probs.top1conf)
    
    messages = {
        "00-ok": "✅ Koi defect nahi mila.",
        "01-minor": "⚠️ Halka defect detect hua — note kar liya gaya.",
        "02-moderate": "🔧 Moderate defect — mechanic ko dikhana zaroori hai.",
        "03-severe": "🚨 Severe defect — gaari na chalayein, foran report karein!"
    }
    
    return {
        "class": class_name,
        "confidence": round(confidence, 2),
        "message": messages.get(class_name, "Result samajh nahi aaya")
    }

if __name__ == "__main__":
    print(check_defect("test.jpg"))