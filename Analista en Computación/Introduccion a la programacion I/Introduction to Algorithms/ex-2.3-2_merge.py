'''
Reescribir el procedimiento MERGE para que no utilice centinelas, en lugar de detener una vez que cualquiera de las matrices L o R ha tenido todos sus elementos copiados de nuevo en A y luego copiar el resto de la otra matriz de nuevo en A.
'''

def merge(l, r):
    x = [''] * (len(l) + len(r))
    i = 0 # iterate through the left list
    j = 0 # iterate through the right list
    k = 0 # iterate through the new list
    
    while i < len(l) and j < len(r):
        if l[i] < r[j]:
            x[k] = l[i]
            i += 1
        else:
            x[k] = r[j]
            j += 1
        k += 1
    
    while i < len(l):
        x[k] = l[i]
        i += 1
        k += 1
    while j < len(r):
        x[k] = r[j]
        j += 1
        k += 1

    return x