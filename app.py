from fastapi import FastAPI


app = FastAPI()


@app.post("/")
def health():
    

no =  [1,2,3,4,4,8]

# lambda function
# one liner fn using lambda
findModule = lambda x,y: x % y

# one liner if else ex
result= 1 if 1 == 2 else 0
print(result)

# one liner forEach fn
even = [findModule(x, 2) for x in no]
print(even)

# one liner map fn
def fn(x):
    print(x)
    return x + 1

newMap=list(map(fn, no))

print(newMap)

print(dict([("name", "acnkd")]))


def add(x, y):
    return x + y
