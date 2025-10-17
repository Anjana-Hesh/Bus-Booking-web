import React from 'react'
import PriceRangeSlider from '../../../components/priceRange/PriceRangeSlider';

const Filter = ({className}) => {


    const [rangeValues , setRangeValues] = React.useState({
        min: 0,
        max: 100
    });

    const handleRangeChange = (values) => {
        setRangeValues({ values });
    };

    return (
        <div className={`w-full ${className}`}>
            <h1 className="text-xl text-neutral-700 font-semibold">Apply Filters ...</h1>

            {/* Price Filters */}
            <div className="w-full border border-neutral-300 round-xl p-4 space-y-1">
                <h1 className="text-lg text-neutral-600 font-medium">
                    Apply Filter
                </h1>

                <PriceRangeSlider 
                    min = {100}
                    max = {3000}
                    onChange={handleRangeChange}
                />
            </div>

            {/* Bus Types Filters*/}
            <div className="w-full border border-neutral-300 round-xl p-4 space-y-3">
                <h1 className="text-lg text-neutral-600 font-medium">
                    Bus Types
                </h1>

                <div className="space-y-2.5">
                    <div className="w-full flex items-center gap-2">
                        <input type="checkbox" id='ac' className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer" />
                        <label htmlFor="ac" className="text-sm text-neutral-600 font-normal cursor-pointer">
                            AC deluxe <span className="text-sx text-neutral-600">(10)</span>
                        </label>
                    </div>

                    <div className="w-full flex items-center gap-2">
                        <input type="checkbox" id='tourist' className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer" />
                        <label htmlFor="tourist" className="text-sm text-neutral-600 font-normal cursor-pointer">
                            Tourist AC deluxe <span className="text-sx text-neutral-600">(10)</span>
                        </label>
                    </div>

                    <div className="w-full flex items-center gap-2">
                        <input type="checkbox" id='airsusp' className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer" />
                        <label htmlFor="airsusp" className="text-sm text-neutral-600 font-normal cursor-pointer">
                            Air Suspension <span className="text-sx text-neutral-600">(10)</span>
                        </label>
                    </div>

                    <div className="w-full flex items-center gap-2">
                        <input type="checkbox" id='luxury' className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer" />
                        <label htmlFor="luxury" className="text-sm text-neutral-600 font-normal cursor-pointer">
                            Luxury AC deluxe <span className="text-sx text-neutral-600">(10)</span>
                        </label>
                    </div>


                </div>
            </div>

            {/* Amenities Filters */}
             <div className="w-full border border-neutral-300 round-xl p-4 space-y-3">
                <h1 className="text-lg text-neutral-600 font-medium">
                    Bus Amenities
                </h1>

                <div className="space-y-2.5">
                    <div className="w-full flex items-center gap-2">
                        <input type="checkbox" id='internet' className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer" />
                        <label htmlFor="internet" className="text-sm text-neutral-600 font-normal cursor-pointer">
                            Internet & Wifi <span className="text-sx text-neutral-600">(10)</span>
                        </label>
                    </div>

                    <div className="w-full flex items-center gap-2">
                        <input type="checkbox" id='water' className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer" />
                        <label htmlFor="water" className="text-sm text-neutral-600 font-normal cursor-pointer">
                            Water Bottle <span className="text-sx text-neutral-600">(10)</span>
                        </label>
                    </div>

                    <div className="w-full flex items-center gap-2">
                        <input type="checkbox" id='acairsusp' className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer" />
                        <label htmlFor="acairsusp" className="text-sm text-neutral-600 font-normal cursor-pointer">
                            Ac & Air Suspension <span className="text-sx text-neutral-600">(10)</span>
                        </label>
                    </div>

                    <div className="w-full flex items-center gap-2">
                        <input type="checkbox" id='tvmusic' className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer" />
                        <label htmlFor="tvmusic" className="text-sm text-neutral-600 font-normal cursor-pointer">
                            LED TV & Music <span className="text-sx text-neutral-600">(10)</span>
                        </label>
                    </div>

                    <div className="w-full flex items-center gap-2">
                        <input type="checkbox" id='charging' className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer" />
                        <label htmlFor="charging" className="text-sm text-neutral-600 font-normal cursor-pointer">
                            Charging <span className="text-sx text-neutral-600">(10)</span>
                        </label>
                    </div>

                    <div className="w-full flex items-center gap-2">
                        <input type="checkbox" id='fan' className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer" />
                        <label htmlFor="fan" className="text-sm text-neutral-600 font-normal cursor-pointer">
                            Fan <span className="text-sx text-neutral-600">(10)</span>
                        </label>
                    </div>

                    <div className="w-full flex items-center gap-2">
                        <input type="checkbox" id='superac' className="h-3.5 w-3.5 border border-neutral-300 text-neutral-300 cursor-pointer" />
                        <label htmlFor="superac" className="text-sm text-neutral-600 font-normal cursor-pointer">
                            Super Ac <span className="text-sx text-neutral-600">(10)</span>
                        </label>
                    </div>

                </div>
            </div>


        </div>
    )
}

export default Filter