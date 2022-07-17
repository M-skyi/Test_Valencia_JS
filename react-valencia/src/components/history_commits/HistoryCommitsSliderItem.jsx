import'../../styles/HistoryCommits.css'


const HistoryCommitsSliderItem = (props) =>{

    return(
       <div >
         <a className='history-slide__item' href = {props.itemUrl} target="_blank">

             <div className="history-slide__date">{props.date}</div>

              <div className="history-slide__author">

                 <img className="history-slide__img" src = {props.imgUrl} alt="" />

                 <div className="history-slide__name-email">

                     <div className="history-slide__name">{props.name}</div>

                     <div className="history-slide__email">{props.email}</div>

                 </div>

             </div>

             <div className="history-slide__text">
                 
                    {props.message}
            </div>
          </a>
      </div> 
    )
}

export default HistoryCommitsSliderItem;