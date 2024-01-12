import React from "react";

function workItem ({ workObj }) {
    const { title, company, startDate, endDate, descriptions } = workObj
    return (
        <div className="container my-5 w-full">
            <div className="row text-normal">
                <h5 className="mb-0">
                    <strong>{title}</strong> @ <span className="text-rose-600">{company}</span>
                </h5>
                <p className="mb-3">
                    <em>{startDate} - {endDate}</em>
                </p>
                <ul class="list-disc text-sm">
                    {
                        descriptions.map(description => {
                            return (
                                <li key={description}>{description}</li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}

export default workItem