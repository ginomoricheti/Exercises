'''
Ejercicio uno: escribe un programa simple que simule la operación del comando grep en Unix. Debe pedir al usuario que ingrese una expresión regular y cuente el número de líneas que coincidan con ésta:

$ python grep.py
Ingresa una expresión regular: ^Author
mbox.txt tiene 1798 líneas que coinciden con ^Author

$ python grep.py
Ingresa una expresión regular: ^X￾mbox.txt tiene 14368 líneas que coinciden con ^X-

$ python grep.py
Ingresa una expresión regular: java$
mbox.txt tiene 4175 líneas que coinciden con java$
'''
# import os
# import re

# counter = 0

# try:
#   search = input("Que expresion desea buscar?\n> ")
#   actual_route = os.path.dirname(__file__)
#   file_route = os.path.join(actual_route, 'cap7-archivos.txt')

#   with open(file_route, 'r', encoding='utf-8') as file:
#     for line in file:
#       line = line.rstrip()
#       if re.search(search, line):
#         counter += 1

# except FileNotFoundError:
#   print(f"Lo siento, la ruta {file_route} no ha sido encontrada")

# finally:
#   if counter > 0:
#     print(f"La busqueda de '{search}' en el archivo ha encontrado {counter} resultados")
#   else:
#     print(f"No se han encontrado resultados que coincidan con '{search}'.")

# ------------------------------------------------------------------------------
'''
Ejercicio 2: escribe un programa que busque líneas en la forma:
New Revision: 39772

Extrae el número de cada línea usando una expresión regular y el método findall(). Registra el promedio de esos números e imprímelo.

Ingresa nombre de archivo: mbox.txt
38444.0323119

Ingresa nombre de archivo: mbox-short.txt
39756.9259259
'''

import os
import re

quantity = 0
sum_total = 0

try:
  search = '^New Revision:'
  actual_route = os.path.dirname(__file__)
  file_route = os.path.join(actual_route, 'cap7-archivos.txt')

  with open(file_route, 'r', encoding='utf-8') as file:
    for line in file:
      line = line.rstrip()
      if re.search(search, line):
        sum_total += float(re.findall('([0-9.]+)', line)[0])        
        quantity += 1

except FileNotFoundError:
  print(f"Lo siento, la ruta {file_route} no ha sido encontrada")

finally:
  if quantity > 0:
    prom = sum_total / quantity
    print(f"{prom}")
  else:
    print(f"No se han encontrado resultados.")
