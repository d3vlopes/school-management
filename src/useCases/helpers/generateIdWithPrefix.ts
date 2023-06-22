export function generateIdWithPrefix(prefix: string, name: string) {
  const randomNumber =
    Math.floor(100 + Math.random() * 900) +
    Date.now().toString().slice(2, 4)

  const initialsNameUppercase = uppercaseInitials(name)

  const id = prefix + randomNumber + initialsNameUppercase

  return id
}

function uppercaseInitials(name: string) {
  return name
    .split(' ')
    .map((name) => name[0])
    .join('')
    .toUpperCase()
}
