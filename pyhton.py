import requests

def get_name_gender(first_name):
    # Replace this URL with an API that provides name-gender mapping for more accurate results
    api_url = f"https://api.genderize.io/?name={first_name}"
    response = requests.get(api_url)

    if response.status_code == 200:
        data = response.json()
        if data.get('gender') is not None:
            return data['gender']
    return "unknown"

def main():
    while True:
        full_name = input("Enter a name (type 'exit' to quit): ").strip().lower()
        if full_name == "exit":
            break

        first_name = full_name.split()[0]
        gender = get_name_gender(first_name)
        if gender == "unknown":
            print(f"Gender for the name '{full_name.capitalize()}' is unknown.")
        else:
            print(f"The name '{full_name.capitalize()}' is likely of {gender} gender.")

if __name__ == "__main__":
    main()
