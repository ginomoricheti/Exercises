inp = int(input("Pone un numero papito: "))
arr = [' '] * (inp * 2)

print(f'\nIntroduciste: {inp}, el array que se creó es de longitud {len(arr)}.\n')

for i in range(len(arr)):
    if i >= inp:
        arr[i] = f'{inp:02}'
        continue

    arr[i] = f'{i+1:02}'
    arr[len(arr) - (i + 1)] = f'{i+1:02}'

    # Cute print
    line = ''
    for el in arr:
        line += f'{el} ' if el != ' ' else '   '
    print(f'{i+1:02}° Iteracion - |{line.strip()}|')

# Last row shows the full array
final_line = ' '.join(str(el) for el in arr)
print('------------------------------------')
print(f'Resultado:    - |{final_line}|')

'''
--------------- A chatgpt se le ocurrio ---------------

inp = int(input("Pone un numero papito: "))
arr = [' '] * (inp * 2)

print(f'\nIntroduciste: {inp}, el array que se creó es de longitud {len(arr)}.\n')

for i in range(inp):  # solo hasta inp, no todo el array
    num_str = f'{i+1:02}'
    arr[i] = num_str
    arr[-(i + 1)] = num_str

    # Construcción de la línea con comprensión de listas
    line = ' '.join(el if el != ' ' else '  ' for el in arr)
    print(f'{i+1:02}° Iteracion - |{line}|')

# Rellenar el resto del array con el último número
last_num = f'{inp:02}'
for i in range(inp, len(arr)):
    arr[i] = last_num

final_line = ' '.join(arr)
print('------------------------------------')
print(f'Resultado:    - |{final_line}|')

-------------------------------------------------------

'''