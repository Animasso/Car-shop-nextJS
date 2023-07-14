import { Combobox } from '@headlessui/react';
import { CustomFilter } from '@/components';
import { MouseEventHandler } from "react";

export interface CustomButtonProps{
    title :string;
    containerStyles?:string;
    textStyle?:string;
    rightIcon?:string;
    isDisable?: Boolean;
    type?:"button" | "submit" ;
    handleClick?:MouseEventHandler<HTMLButtonElement>
}
export interface CustomFilterProps{
    title: string;
}
export interface ManufacturerProps{
    manufacturer : string;
    setManufacturer: (manufacturer: string) => void;
}
export interface CarProps{
city_mpg:number;
class:string;
combination_mpg:number;
cylinders:number;
displacement:number;
drive:string;
fuel_type:string;
highway_mpg:number;
make:string;
model:string;
transmission:string;
year:number;
}
export interface CarDetailProps{
    isOpen:boolean;
    closeModal: ()=>void
    car:CarProps
}
