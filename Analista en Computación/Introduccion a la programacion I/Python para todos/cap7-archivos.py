import os

# while True:
#     input_route = input('\nIngresa el nombre del archivo que querés manejar (sin ".txt"), o 0 para salir: ')
    
#     if input_route == '0':
#         break
    
#     handler_mode = input('Que queres hacer con el archivo?\n\tr: leer\n\tw: sobreescribir\n\ta: agregar lineas\n> ')

#     try:
#         actual_route = os.path.dirname(__file__)
#         file_route = os.path.join(actual_route, input_route + '.txt')

#         with open(file_route, handler_mode, encoding='utf-8') as file:
          
#           if handler_mode == 'r':
#             print(file.read())
          
#           if handler_mode == 'w':
#               print(f'\n📝 Editando "{input_route}.txt"... (escribí "0" para salir del editor)\n')
              
#               while True:
#                   linea = input('Escribí una línea para agregar: ')
#                   if linea == '0':
#                       print('Saliendo del editor...\n')
#                       break
#                   file.write(linea + '\n')

#     except FileNotFoundError:
#         print(f'\n❌ El archivo "{input_route}.txt" no existe. Probá con otro nombre.')

# ------------------------------------------------------------------------------
'''
Ejercicio 1: Escribe un programa que lea un archivo e imprima su con￾tenido (línea por línea), todo en mayúsculas. Al ejecutar el programa,
debería parecerse a esto:

python shout.py
Ingresa un nombre de archivo: mbox-short.txt
FROM STEPHEN.MARQUARD@UCT.AC.ZA SAT JAN 5 09:14:16 2008
RETURN-PATH: <POSTMASTER@COLLAB.SAKAIPROJECT.ORG>
RECEIVED: FROM MURDER (MAIL.UMICH.EDU [141.211.14.90])
BY FRANKENSTEIN.MAIL.UMICH.EDU (CYRUS V2.3.8) WITH LMTPA;
SAT, 05 JAN 2008 09:14:16 -0500

Puedes descargar el archivo desde www.py4e.com/code3/mbox-short.txt
'''

input_route = input('Cual es el archivo que queres leer? Escribilo sin el .txt\n> ')

spam_confidence = 0

if input_route == 'na na boo boo':
    print('NA NA BOO BOO PARA TI - Te he atrapado!')
    exit()

try:
  actual_route = os.path.dirname(__file__)
  file_route = os.path.join(actual_route, input_route + '.txt')
  
  with open(file_route, 'r', encoding='utf-8') as file:
      for line in file:
          line = line.rstrip()
          if line.startswith('X-DSPAM-Confidence:'):
            a = line.split(' ')
            spam_confidence += float(a[1])
      print(f'Promedio spam confidence {spam_confidence}')
except FileNotFoundError:
  print(f'El archivo {file_route} no se ha encontrado. Por favor, asegurese que el archivo exista antes de ser leido')