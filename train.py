import os
from ultralytics import YOLO

def train():
    # Base classification model load
    model = YOLO("yolov8n-cls.pt")

    # Path to dataset root
    dataset_path = os.path.join(os.getcwd(), "dataset")

    # Start Training
    model.train(
        data=dataset_path,
        epochs=30,
        imgsz=224,
        batch=16,
        project="runs/classify",
        name="train",
        exist_ok=True
    )

if __name__ == "__main__":
    train()