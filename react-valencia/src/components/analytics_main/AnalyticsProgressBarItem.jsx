import '../../styles/Analytics.css';


const AnalyticsProgressBarItem = ({count,date}) =>{

    return(
        <div className={"analytics-progress-bar-item"}>
           <li className="progress-bar__item">
                    <div className="progress-bar__date">{date}</div>
                    <progress className="progress-bar__value" value={count} max="100"></progress>
                    <div className="progress-bar__counter">{count}</div>
                </li>
               
        </div>   
    )
}

export default AnalyticsProgressBarItem;