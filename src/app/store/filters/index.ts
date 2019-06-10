export function nameFilter(entities: { name: string }[], search: string) {
    return entities.filter(e => -1 < e.name.indexOf(search));
}

export function sortByName(a: { name: string }, b: { name: string }): number {
    return a.name.localeCompare(b.name);
}
