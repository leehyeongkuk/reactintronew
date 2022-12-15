function Navi(){
    const naviDb = [{
                      naviText : "Portfolio",
                      naviLink : "#portfolio"
                    },
                    {
                      naviText : "About ME",
                      naviLink : "#me"
                                    },
                    {
                      naviText : "Pre-Interview",
                      naviLink : "#preInterview"
                                    },
                    {
                      naviText : "Contact ME",
                      naviLink : "#contact"
                                    },
                    ]
    return(
      <ul className="d-flex mb-0">
        {
          naviDb.map((item, index) =>{
            return(
              <li id={ 'naivID'+index }><a href={item.naviLink} className="text-decoration-none ps-md-3 pe-md-0 px-3">{item.naviText}</a></li>
            )
          }
          )
            
        }
      </ul>
    )
  }

  export default Navi;