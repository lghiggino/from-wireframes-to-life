import { StylesProvider } from "@material-ui/styles";
import React, { useEffect } from "react"

import "./tablr.css"

export interface TablrProps {
    rows: Array<Array<string>>,
    headers: Array<string>,
    borderWidth: 'thin' | 'medium' | 'thick',
    cellPadding: 'small' | 'medium' | 'large',
    cellTextColor?: string,
    headerTextColor?: string,
    cellBorderColor?: string,
    headerBorderColor?: string,
    backgroundColor?: string,
    headerBackgroundColor?: string,
}

export const Tablr: React.FC<TablrProps> = ({
    rows,
    headers,
    borderWidth = "medium",
    cellPadding = "medium",
    cellTextColor = "black",
    headerTextColor = "white",
    cellBorderColor = "#747381",
    headerBorderColor = "#494866",
    backgroundColor = "#a6a5b8",
    headerBackgroundColor = "#65647a",
}) => {
    useEffect(() => {
        if (headers.length < 1) {
            throw Error("Must have at least one header");
        } else if (!rows.every(r => r.length === headers.length)) {
            throw Error("Row length must be equal to header length")
        }
    }, [rows, headers])

    const cellPaddingMap = {
        small: "3px",
        medium: "8px",
        large: "15px",
    }

    const borderWidthMap = {
        thin: "1px",
        medium: "2px",
        thick: "3px",
    }


    return (
        <div className={"main"}>
            {headers.map((h, columnIndex) => (
                <div key={columnIndex} className={"column"}>
                    <div
                        className={"header"}
                        style={{
                            color: headerTextColor,
                            padding: cellPaddingMap[cellPadding],
                            backgroundColor: headerBackgroundColor,
                            border: `${borderWidthMap[borderWidth]} solid ${headerBorderColor}`,
                        }}
                    >
                        {h}
                    </div>

                    <div className={"rows"}>
                        {rows.map((r, rowIndex) => (
                            <div
                                key={rowIndex}
                                className={"cell"}
                                style={{
                                    color: cellTextColor,
                                    backgroundColor: backgroundColor,
                                    padding: cellPaddingMap[cellPadding],
                                    border: `${borderWidthMap[borderWidth]} solid ${cellBorderColor}`,
                                }}
                            >
                                {r[columnIndex]}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

