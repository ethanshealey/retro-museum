import GenericEntryType from "@/types/GenericEntryType";

export default (list: GenericEntryType[]): GenericEntryType[] => {
    const sorted = [ ...list ]
    sorted.sort((a: GenericEntryType, b: GenericEntryType) => a.year - b.year)
    return sorted
}