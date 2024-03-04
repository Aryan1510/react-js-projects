import React from 'react'

export default function Card() {
    return (
        <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="/">
                <img className="p-8 rounded-t-lg" src="data:image/jpeg;base64,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" alt="product_image1" />
            </a>
            
            <div className="px-5 pb-5">
                <a href="/">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                    </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-gray-200 dark:text-gray-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                        4.0
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                    <a
                        href="/"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Add to cart
                    </a>
                </div>
                <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="/">
                <img className="p-8 rounded-t-lg" src="data:image/jpeg;base64,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" alt="product_image1" />
            </a>    
            </div>
            <div className="px-5 pb-5">
                <a href="/">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                    </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-gray-200 dark:text-gray-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                        4.0
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                    <a
                        href="/"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Add to cart
                    </a>
                </div>
                </div>
                <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="/">
                <img className="p-8 rounded-t-lg" src="data:image/jpeg;base64,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" alt="product_image1" />
            </a>    
            </div>
            <div className="px-5 pb-5">
                <a href="/">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                    </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-gray-200 dark:text-gray-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                        4.0
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                    <a
                        href="/"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Add to cart
                    </a>
                </div>
                </div>
                <div className="w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="/">
                <img className="p-8 rounded-t-lg" src="data:image/jpeg;base64,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" alt="product_image1" />
            </a>    
            </div>
            <div className="px-5 pb-5">
                <a href="/">
                    <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                        Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                    </h5>
                </a>
                <div className="flex items-center mt-2.5 mb-5">
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-yellow-300 mr-1"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <svg
                        className="w-4 h-4 text-gray-200 dark:text-gray-600"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 22 20"
                    >
                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                    </svg>
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
                        4.0
                    </span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-3xl font-bold text-gray-900 dark:text-white">$599</span>
                    <a
                        href="/"
                        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Add to cart
                    </a>
                </div>
                </div>
                
            </div>
        </div>
    );
}