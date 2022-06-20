import { MouseEventHandler } from "react"

export type SelectProps = {
    options?:{value:string,label:string,isDisabled?: true}[]|{}[],
    selectOptions?: MouseEventHandler,
    defaultValue?:string
    scrollable ?:boolean
    width?:string
}