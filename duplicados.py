from typing import Set


def duplicar(arreglo):
    duplicados = set()
    i = 0
    while i < len(arreglo):
        j = 0
        while j < len(arreglo):
            if not i == j and arreglo[i] == arreglo[j]:
                duplicados.add(arreglo[i]*2)
            j += 1
        i += 1
    return duplicados


print(duplicar([0, 1, 2, 3, 0, 1, 5, 4, 3, 2]))
print(duplicar([0, 1, 2, 3, 5, 4, 2]))
