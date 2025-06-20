'''
Ejercicio 1: Revisa el programa anterior de este modo: Lee y analiza las líneas “From” y extrae las direcciones de correo. Cuenta el número de mensajes de cada persona utilizando un diccionario. 

Después de que todos los datos hayan sido leídos, imprime la persona con más envíos, creando una lista de tuplas (contador, email) del diccionario.

Después ordena la lista en orden inverso e imprime la persona que tiene más envíos.

Línea de ejemplo:
From stephen.marquard@uct.ac.za Sat Jan 5 09:14:16 2008

Ingresa un nombre de archivo: mbox-short.txt
cwen@iupui.edu 5

Ingresa un nombre de archivo: mbox.txt
zqian@umich.edu 195
'''
# import os

# dictionary = {}

# try:
#   actual_route = os.path.dirname(__file__)
#   file_route = os.path.join(actual_route, 'cap7-archivos.txt')
  
#   with open(file_route, 'r', encoding='utf-8') as file:
#     for line in file:
#       line = line.rstrip()
#       if line.startswith('From '):
#         parts = line.split()
#         if len(parts) > 1:
#           email = parts[1]
#           dictionary[email] = dictionary.get(email, 0) + 1
# except FileNotFoundError:
#     print(f'El archivo {file_route} no se ha encontrado. Por favor, asegúrese que el archivo exista antes de ser leído.')

# sorted_list = sorted(dictionary.items(), key=lambda x: x[1], reverse=True)

# if sorted_list:
#     top_email, count = sorted_list[0]
#     print(f'{top_email} {count}')
# else:
#     print('No se encontraron correos.')

# ------------------------------------------------------------------------------
'''
Ejercicio 2: Este programa cuenta la distribución de la hora del día
para cada uno de los mensajes. Puedes extraer la hora de la línea
“From” buscando la cadena horaria y luego dividiendo la cadena en
partes utilizando el carácter colon. Una vez que hayas acumulado las
cuentas para cada hora, imprime las cuentas, una por línea, ordenadas
por hora tal como se muestra debajo.
'''
# import os

# dictionary = {}

# try:
#   actual_route = os.path.dirname(__file__)
#   file_route = os.path.join(actual_route, 'cap7-archivos.txt')
  
#   with open(file_route, 'r', encoding='utf-8') as file:
#     for line in file:
#       line = line.rstrip()
#       if line.startswith('From '):
#         parts = line.split()
#         if len(parts) > 1:
#           date = parts[5][0:2]
#           dictionary[date] = dictionary.get(date, 0) + 1
# except FileNotFoundError:
#     print(f'El archivo {file_route} no se ha encontrado. Por favor, asegúrese que el archivo exista antes de ser leído.')

# print(dictionary)

# for key in sorted(dictionary.keys()):
#   print(key, dictionary[key])

# ------------------------------------------------------------------------------
'''
Ejercicio 3: Escribe un programa que lee un archivo e imprime las letras en order decreciente de frecuencia. El programa debe convertir todas las entradas a minúsculas y contar solamente las letras a-z. El programa no debe contar espacios, dígitos, signos de puntuación, o cualquier cosa que no sean las letras a-z. Encuentra ejemplos de texto en idiomas diferentes, y observa cómo la frecuencia de letras es diferente en cada idioma. Compara tus resultados con las tablas en:
https://es.wikipedia.org/wiki/Frecuencia_de_aparici%C3%B3n_de_letras.
'''
# import os

# letters = {}

# try:
#   actual_route = os.path.dirname(__file__)
#   file_route = os.path.join(actual_route, 'cap7-archivos.txt')
  
#   with open(file_route, 'r', encoding='utf-8') as file:
#     for line in file:
#       line = line.lower()
#       for l in line:
#         if l.isalpha():
#           if l not in letters:
#             letters[l] = 1
#           else:
#             letters[l] += 1
# except FileNotFoundError:
#     print(f'El archivo {file_route} no se ha encontrado. Por favor, asegúrese que el archivo exista antes de ser leído.')

# print(letters)

# for key in sorted(letters.keys()):
#   print(key, letters[key])