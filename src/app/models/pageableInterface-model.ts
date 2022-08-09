import { RecordInterface } from './record.model';


export interface PageableInterface{
    content: RecordInterface[]
    totalPages: number
    totalElements: number
    firts: boolean
    number: number
    size: number
    empty: boolean
}
