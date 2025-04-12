import os

def rename_images(folder_path):
    # Check if the provided path is a directory
    if not os.path.isdir(folder_path):
        print("Error: Invalid folder path.")
        return

    # Get a list of all files in the folder
    files = os.listdir(folder_path)

    # Filter the files to include only image files
    image_files = [f for f in files if os.path.isfile(os.path.join(folder_path, f))]

    # Rename all image files
    for count, image_file in enumerate(image_files, start=1):
        old_image_path = os.path.join(folder_path, image_file)
        new_image_path = os.path.join(folder_path, f"Image (").replace("\\","/")+str(count)+").jpg"
        os.rename(old_image_path, new_image_path)
        print(f"Renamed {image_file} to {os.path.basename(new_image_path)}")

if __name__ == "__main__":
    folder_path = "Image"  # Replace with the path to your folder containing the images
    rename_images(folder_path)
