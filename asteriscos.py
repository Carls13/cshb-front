def asteriscos(str):
    counter = 0
    for char in str:
        if char == "*":
            counter += 1
    return counter


print(asteriscos("***5555"))
