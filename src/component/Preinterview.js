const Preinterview = () => {
    const interviewjson = [{
      subject : '인터뷰1',
      content : '내용'
    },
    {
      subject : '인터뷰2',
      content : `내용2`
    },
    {
      subject : '인터뷰3',
      content : `내용3`
    },
    {
      subject : '인터뷰4',
      content : `내용4`
    },
    ]
    return(
      <section className="section py-5 text-center">
          <h3>틀에 얽매이지 않는 소통하는 개발자가 되겠습니다.</h3>
          <div className="py-5 container-md text-start">
            <ul>
               {
                interviewjson.map(function(value, index){
                    //this조심할것
                    return(
                      <li key={'interview'+index}>
                        <strong className='d-block border-bottom py-2 ' role="button" onClick={ e => { console.log( e.target.nextSibling.classList.toggle('d-none') ) }}>{value.subject}</strong>
                        <p className='py-5 d-none'>{value.content}</p>
                      </li>
                    )
                }
                )
               }
            </ul>
          </div>
      </section>
    )
  }

  export default Preinterview ;