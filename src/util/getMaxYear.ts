import GenericEntryType from "@/types/GenericEntryType";
import {cloneDeep} from 'lodash';

export default (list: GenericEntryType[]): number => Math.max(...cloneDeep(list).map((item: GenericEntryType) => item.year))
