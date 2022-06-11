var meuSet = new Set()

    meuSet.add(1)
    meuSet.add(5)
    meuSet.add(5)
    meuSet.add("texto")
    var o = {a: 1, b: 2}
    meuSet.add(o)

    for(let item of meuSet) console.log(item)