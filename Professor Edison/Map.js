const contacts = new Map()

contacts.set('Jessie',{phone:"213-555-1234", address:"123 N 1st avenue"})
contacts.has('Jessie')
contacts.has('Hilary')
contacts.set('Hilary',{phone:"617-555-4321", address:"321 S 2st avenue"})
contacts.get('Jessie')
contacts.delete('Raymond')
contacts.delete('Jessie')
console.log(contacts.size)