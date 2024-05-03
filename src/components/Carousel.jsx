import React from "react";

export const Carousel = ({ data }) => {
    return (
        <div>
            {data.map((item, index) => {
                return (
                    <div
                        key={index}
                        className="flex flex-col border-2 rounded-xl border-teal-700 max-w-md shadow-lg"
                    >
                        <div className="p-2">
                            <div className="border-b-2 border-teal-700 text-gray-300">
                                {item.title}
                            </div>
                            <div className="border-b-2 border-teal-700 text-sm py-2">
                                {item.description}
                            </div>
                            <div className="flex pt-2">
                                {item.tools.map((item, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="rounded-lg border-2 p-1 bg-gray-300 text-sm mr-2"
                                        >
                                            {item}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
