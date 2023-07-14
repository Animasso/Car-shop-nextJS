"use client"
import { SearchManufacturer } from './'
import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

const SearchButton = ({ otherClasses }: { otherClasses: string }) =>
(<button type='submit' className={`-mt-3 z-10 ${otherClasses}`} >
    <Image src={'/magnifying-glass.svg'} alt='magnifying-glass' width={20} height={20} className=' object-contain' />
</button>)


const SearchBar = () => {
    const router = useRouter()
    const [manufacturer, setManufacturer] = useState("")
    const [model, setModel] = useState('')
    const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (manufacturer === '' && model === "") {
            return alert('Please fill in the search bar')
        }

        updateSearchParams(model.toLocaleLowerCase(), manufacturer.toLocaleLowerCase())
    }
    const updateSearchParams = (model: string, manufacturer: string) => {
        // Cette ligne crée un nouvel objet URLSearchParams à partir de la chaîne de recherche de l'URL actuelle du navigateur. Cet objet permet de manipuler facilement les paramètres de recherche dans l'URL.
        const searchParams = new URLSearchParams(window.location.search)
        if (model) {
            searchParams.set('model', model)
        } else {
            searchParams.delete('model')
        }
        if (manufacturer) {
            searchParams.set('manufacturer', manufacturer)
        } else {
            searchParams.delete('manufacturer')
        }
        const newPathName = `${window.location.pathname}?${searchParams.toString()}`
        router.push(newPathName)
    }
    return (
        <form className='searchbar' onSubmit={handleSearch}>
            <div className=' searchbar__item'>
                <SearchManufacturer manufacturer={manufacturer} setManufacturer={setManufacturer} />
                {/* serachButton */}
                <SearchButton otherClasses='sm:hidden' />
            </div>
            <div className='searchbar__item'>
                <Image src={'/model-icon.png'} alt='car model icon' width={25} height={25} className=' absolute w-[20px] h-[20px] ml-4' />
                <input type="text" name='model' value={model} onChange={(e) => setModel(e.target.value)} placeholder='Tiguan' className='searchbar__input' />
                <SearchButton otherClasses='sm:hidden' />

            </div>
            <SearchButton otherClasses='max-sm:hidden' />

        </form>
    )
}

export default SearchBar
