'''
Dado un conjunto S de n enteros y un entero x, describe un algoritmo que en tiempo O(nlogn) determine si existen dos elementos en S cuya suma sea exactamente x.
'''
def new_array():
  quantity = int(input("Cuantos números vas a cargar al array? "))
  arr = [''] * quantity
  
  for i in range(len(arr)):
    arr[i] = int(input(f"Por favor, carga el {(i + 1)}° número: "))
  
  return arr


def merge(l, r):
  x = [''] * (len(l) + len(r))
  i = 0
  j = 0
  k = 0
  
  # Mix arrays while both have elements
  while i < len(l) and j < len(r):
    if l[i] < r[j]:
      x[k] = l[i]
      i += 1
    else:
      x[k] = r[j]
      j += 1
    k += 1
  
  # If left arrays still have elements, add
  while i < len(l):
    x[k] = l[i]
    i += 1
    k += 1
  
  # If right arrays still have elements, add
  while j < len(r):
    x[k] = r[j]
    j += 1
    k += 1
  
  return x

def merge_sort(arr):
  if len(arr) <= 1:
    return arr
  
  mid = len(arr) // 2
  
  left = merge_sort(arr[:mid])
  right = merge_sort(arr[mid:])
  
  return merge(left, right)

a = new_array()

print(f"El array que cargaste fue:\n\t{a}")

print(f"Ordenado queda:\n\t{merge_sort(a)}")
