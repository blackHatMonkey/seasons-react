import './SeasonDisplay.css'
import React from 'react'

const seasonConfig = {
    summer: {
        text: 'Let\'s hit the bitch',
        iconName: 'sun',
    },
    winter: {
        text: 'Burr, it is chilly',
        iconName: 'snowflake',
    }
}

const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter'
    } else {
        return lat > 0 ? 'winter' : 'summer'
    }
}

const SeasonDisplay = (props) => {
    const currentMonth = new Date().getMonth()
    const season = getSeason(props.lat, currentMonth)
    const { text, iconName } = seasonConfig[season]


    return (
        <div className={`season-display ${season}`}>
            <i className={`${iconName} icon massive icon-left`} />
            <div className="text-content">{text}</div>
            <i className={`${iconName} icon massive icon-right`} />

        </div>
    )
}

export default SeasonDisplay