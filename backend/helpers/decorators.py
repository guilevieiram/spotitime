import json

def log_json(callable):
    def wrapper(*args, **kwargs):
        res: dict = callable(*args, **kwargs)
        with open(f"logs/{callable.__name__}.json", "w") as file:
            file.write(json.dumps(res))
        return res
    return wrapper

def log_text(callable):
    def wrapper(*args, **kwargs):
        res: str = callable(*args, **kwargs)
        with open(f"logs/{callable.__name__}.txt", "w") as file:
            file.write(res)
        return res
    return wrapper
