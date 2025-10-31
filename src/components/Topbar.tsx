import "./Topbar.css"

function Topbar({ setPage }: { setPage: any }) {
  return (
    <div className="topbar">
      <div className="left">
        <h2>My Profile</h2>
      </div>

      <div className="right">
        <ul className="tabs">
          <li>
            <button className="tab-btn" onClick={() => setPage('home')}>
              About Me
            </button>
          </li>
          <li>
            <button className="tab-btn" onClick={() => setPage('weather')}>
              My Town
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Topbar
