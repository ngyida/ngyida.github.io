import React from "react";

function workItem ({ workObj }) {
    const { title, company, startDate, endDate, descriptions } = workObj
    return (
        <div className="container my-5">
            <div className="row gx-4 justify-content-center text-normal">
                <h5 className="mb-1">
                    <strong>{title}</strong> @ <span className="text-heading">{company}</span>
                </h5>
                <p className="mb-0">
                    <em>{startDate} - {endDate}</em>
                </p>
                <ul class="list-disc">
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