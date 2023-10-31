import {BsFillPlusSquareFill} from "react-icons/bs";


export const HeaderTask = () => {
  const date = new Date()
  const dateFormat = new Intl.DateTimeFormat('en', { day:"numeric", month: "long", year:"numeric" })

  return (
    <>
      <section className="profile">
        <div id="date">{dateFormat.format(date)}</div>
        <h1> Hi, Jose Perez</h1>
        <span>Let's complete your goals!</span>
      </section>
      <div className="add-task">
        <input type="text" id="input" placeholder="add a task" />
        <button className="i" id="enter"><BsFillPlusSquareFill/></button>
      </div>
      
    </>
    )
}