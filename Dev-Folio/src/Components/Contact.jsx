

export default function Contact({color, bgColor}) {
  const divStyle = {
    color: color,
  }
  return (
    <div className="contact-div" style={divStyle}>
      <div className="contact-body">
        <div className="contact-title top">
          <h1>&lt;div id='contact'&gt;</h1>
        </div>

        <div className="contact-title bottom">
          <h1>&lt;/div&gt;</h1>
        </div>
      </div>
    </div>
  )
}
