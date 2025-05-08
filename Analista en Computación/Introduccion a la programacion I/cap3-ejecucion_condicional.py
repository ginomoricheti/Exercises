# Ejercicio 1: Reescribe el programa del cálculo del salario para darle al empleado 1.5 veces la tarifa horaria para todas las horas trabajadas que excedan de 40.

# horas = int(input("Cuantas horas trabajaste?\n"))
# tarifa_x_hora = float(input("Cuanto cobras la hora?\n"))

# if horas > 40:
#     horas_de_mas = horas - 40
#     tarifa_extra = tarifa_x_hora * 1.5
#     salario_comun = 40 * tarifa_x_hora
#     salario_extra = horas_de_mas * tarifa_extra
    
#     salario = salario_comun + salario_extra
    
#     print(f'Por trabajar tus 40hs correspondientes se te abonó ${salario_comun} (40 horas a ${tarifa_x_hora} la hora). '
#           f'Pero las {horas_de_mas} que trabajaste extra se te pagaron a ${tarifa_extra} la hora, entonces recibiste ${salario_extra}. '
#           f'Por ende tu total este mes es de ${salario}')
# else:
#     salario = horas * tarifa_x_hora
#     print(f'Por trabajar {horas}hs se te abonó ${salario} (por hora ${tarifa_x_hora})')

#-------------------------------------------------------------------------------

# Ejercicio 2: Reescribe el programa anterior utilizando try y except.

# while True:
#   try: 
#     horas = int(input("Cuantas horas trabajaste?\n"))
#     tarifa_x_hora = float(input("Cuanto cobras la hora?\n"))
    
#     if horas > 40:
#       horas_de_mas = horas - 40
#       tarifa_extra = tarifa_x_hora * 1.5
#       salario_comun = 40 * tarifa_x_hora
#       salario_extra = horas_de_mas * tarifa_extra
      
#       salario = salario_comun + salario_extra
      
#       print(f'Por trabajar tus 40hs correspondientes se te abonó ${salario_comun} (40 horas a ${tarifa_x_hora} la hora). '
#             f'Pero las {horas_de_mas} que trabajaste extra se te pagaron a ${tarifa_extra} la hora, entonces recibiste ${salario_extra}. '
#             f'Por ende tu total este mes es de ${salario}')
#     else:
#         salario = horas * tarifa_x_hora
#         print(f'Por trabajar {horas}hs se te abonó ${salario} (por hora ${tarifa_x_hora})')
        
#     break
  
#   except ValueError:
#     print("Error, no se ha introducido un numero. Por favor, introduzca un numero\n\n\n")

#-------------------------------------------------------------------------------

# Ejercicio 3: Escribe un programa que solicite una puntuación entre 0.0 y 1.0. Si la puntuación está fuera de ese rango, muestra un mensaje de error. Si la puntuación está entre 0.0 y 1.0, muestra la calificación

# ciclos = int(input("Cuantas notas vas a cargar?\n"))

# for i in range(ciclos):
#   try:
#     puntuacion = float(input(f"[Nota {i+1}] Introduzca una puntuación entre 0.0 y 1.0 por favor:\n"))
    
#     if 0.0 <= puntuacion <= 1.0:
#       if puntuacion >= 0.9:
#         print("Sobresaliente!!")
#       elif puntuacion >= 0.8:
#         print("Notable")
#       elif puntuacion >= 0.7:
#         print("Bien")
#       elif puntuacion >= 0.6:
#         print("Suficiente")
#       else:
#         print("Insuficiente")
#     else:
#       print("No se ha introducido una puntuacion de entre 0.0 y 1.0")

#   except ValueError:
#     print("No se ha introducido un valor numerico.")

#-------------------------------------------------------------------------------

