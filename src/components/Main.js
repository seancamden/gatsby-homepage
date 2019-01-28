import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'
import pic03 from '../images/james-wirth-photography-sean-camden-122318-2.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      />
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <span className="image main">
            <img src={pic01} alt="" />
          </span>
          <p>
            Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin
            aliquam facilisis ante interdum congue. Integer mollis, nisl amet
            convallis, porttitor magna ullamcorper, amet egestas mauris. Ut
            magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas.
            By the way, check out my <a href="#work">awesome work</a>.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            dapibus rutrum facilisis. Class aptent taciti sociosqu ad litora
            torquent per conubia nostra, per inceptos himenaeos. Etiam tristique
            libero eu nibh porttitor fermentum. Nullam venenatis erat id
            vehicula viverra. Nunc ultrices eros ut ultricies condimentum.
            Mauris risus lacus, blandit sit amet venenatis non, bibendum vitae
            dolor. Nunc lorem mauris, fringilla in aliquam at, euismod in
            lectus. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas. In non lorem sit amet elit
            placerat maximus. Pellentesque aliquam maximus risus, vel sed
            vehicula.
          </p>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Work</h2>
          <span className="image main">
            <img src={pic02} alt="" />
          </span>
          <h2>Peet’s Coffee & Tea, peets.com  </h2>
          <h3>Webmaster  </h3>
          <div class="location-and-date">Emeryville, CA -- 2011–2018</div>
          <p>Responsible for daily marketing updates to peets.com, a Magento CMS running in Amazon EC2 instances. I translate the designs from the Creative Services department into HTML using SCSS, XML, PHP, and jQuery.   </p>
          <p>Was integral to two complete redesigns of peets.com and saw transition from a site built with ASP, running on Microsoft IIS to one built with PHP running on Nginx.  </p>
          <p>Worked closely with an outside agency (Interactive Accessibility) and remote developers on the peets.com ADA compliance project.  </p>
            
          <h2>Swirl Interactive, Eleven Inc, and others  </h2>
          <h3>Web Developer  </h3>
          <div class="location-and-date">San Francisco, CA -- 2010–2011  </div>
          <p>Executed landing pages, registration forms, interactive Flash ads, and HTML email campaigns for clients such as AAA, Callaway Golf, Lennar Homes, Tuck School at Dartmouth, AARP, eBay, PayPal/BillMeLater and PG&E.  </p>
            
          <h2>Wells Fargo  </h2>
          <h3>Web Consultant  </h3>
          <div class="location-and-date">San Francisco, CA -- 2009–2010  </div>
          <p>Developed, proposed, successfully implemented solution addressing the merger of the Wachovia and Wells Fargo intranets for the Wealth Management Marketing division.  </p>
            
          <h2>Hamilton Partners  </h2>
          <h3>Production Artist, Print and Web  </h3>
          <div class="location-and-date">Healdsburg, CA -- 2004–2009  </div>
          <p>Worked on packaging for RadioShack’s ZipZaps, Xmods, and VEX Robotics kits. I was promoted into the Web Department, Flash-based sites and widgets for Microsoft’s Encarta brand, and HP’s small and medium business printer division.   </p>
          <p>Wrote CSS/HTML; developed a Bash script that, with ImageMagick and Illustrator files, created a multi-panel thumbnail of a brochure, automatically, eliminating a laborious and time-consuming Photoshop procedure.  </p>
          <p>Developed blackboxwines.com: WordPress/jQuery, with client reviews, edits implemented, alpha, beta from Photoshop to completion in under three weeks, on deadline, for all major browsers (including IE6).  </p>
            
          <h2>Broderbund/Mattel Interactive/Riverdeep  </h2>
          <h3>Associate Editor/Assistant Webmaster, Print and Web Production  </h3>
          <div class="location-and-date">Novato, CA -- March 1999–April 2004  </div>
          <p>As a member of the Creative Services department, I worked with Art Directors, Designers, and Engineers in various capacities such as Production Artist, Associate Editor and Assistant Webmaster. I worked on the riverdeep.net site, and the Creative Services intranet.  </p>
          <p>Notable titles and brands I worked on include Printmaster, Calendar Creator, Print Shop, Carmen Sandiego, The Oregon Trail, Reader Rabbit, Destination Math, Destination Reading and Destination Success.  </p>
            
          <h2>All-American Printing Services  </h2>
          <h3>Production Artist Digital Pre-Press  </h3>
          <div class="location-and-date">Novato, CA -- November 1996–March 1999  </div>
          <p>Performed every aspect of pre-press and quickly became familiar with files from many different applications (PageMaker, FrameMaker, QuarkXPress, Illustrator, Freehand, Photoshop, among others) and mediums, such as film, color-keys, plates, and devices such as digital proofers, the Xerox Docutech, the Fiery color-laser printer in a turn‑key print operation.   </p>
          <p>Designed and implemented a virtual press schedule using two networked Macintosh 6100s, Adobe PageMaker and Timbuktu remote control software that allowed the press room and the prepress department to update the same schedule dynamically from different parts of the building.   </p>
            
          <h2>Education   </h2>
          <p>Mostly I've taught myself how to do this stuff. I'm easily fascinated  (distracted) and this has lead to a repertoire that is broader than it is  deep. But I'm pretty good at a few things, too.  </p>
            
          <p>I'm also pretty cheap. So, while my friends were building expensive gaming rigs, I was turning old, hand-me-down computers (a buddy once mailed me his old motherboard from Hong Kong) into Web servers and file servers and experimenting with different flavors of Linux and Web technologies. I'm very happy to be running my current (local) servers on computers about the size of a deck of playing cards (I heart Raspberry Pi).</p>
            
          <p>I have alwasy loved learning. Below are a few classes I've attended and certificates I've collected.  </p>
            
          <h2>Smashing Conference Workshop  </h2>
          <h3>Advanced CSS Layouts With Flexbox and CSS Grid with Rachel Andrew  </h3>
            
          <h2>O’Reilly School of Technology in association withThe University of Illinois at Urbana-Champaign    </h2>
          <pre>http://www.oreillyschool.com/2011–2013</pre><br /> 
          Intro to PHP    <br />
          Learn C Programming    <br />
            
          <h2>Graphic Arts Institute  </h2>
          <h3>San Francisco, CA  </h3>
          Advanced Pagination with QuarkXPress Certificate  <br />
          Advanced Illustration with Illustrator Certificate  <br />
          Advanced Editing with Photoshop Certificate  <br />
            
          <h2>College of Marin/Indian Valley College  </h2>
          <h3>Kentfield, CA/Novato, CA  </h3>
            
          <h2>Self-Taught  </h2>
          <p>Mac, Linux, Windows, CLI, Bash, Vim, Regular Expressions, HTML, CSS, Sass, Git, Apache, Nginx, MySQL, Magento, WordPress  </p>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">About</h2>
          <span className="image main">
            <img src={pic03} alt="" />
          </span>
          <p>
            My first computer was an Atari 400 with a keyboard like a fast food
            cash register, no storage media, and a loosely fitting power jack.
            The simple programs I wrote in Basic would last long enough, if I
            was lucky, to show my mom before my dog, an English Sheep
            Dog/Bearded Collie mix named Major, would lay down on the power
            cord, erasing everything.
          </p>

          <p>
            Today, many, many computers later, I am platform agnostic but prefer
            to work in OS X for the well-designed GUI and seamless terminal
            integration. Although the un-repairability of the modern MacBook Pro
            is starting to get me down.
          </p>

          <p>
            I enthusiastically enjoy using Linux and other open source software
            to work and play (and also to manage the family media). My comfort
            on the command line dates back to the years before installing
            Windows 3.1 from a dozen or so floppy disks. DOS was fun, but I
            really love Bash.
          </p>

          <p>
            I taught myself HTML in the late 90s and started using it
            professionally just a few years later at Mattel Interactive. At the
            same time I worked in Digital Pre-Press and Creative Services
            departments doing page layout, photo-manipulation and print
            production. Digital production shifted gradually to the sidelines
            over the years, and now I look to Web Development for my main
            occupation.
          </p>

          <p>
            My text-editor of choice is Vim. I enjoy the power of CSS, jQuery,
            PHP, Python, and regular expressions for accomplishing a wide
            variety of Web objectives.
          </p>

          <p>
            Aside from computers, I have many other interests, not the least of
            which is my family. Also, writing, music, literature and art. I
            enjoy cooking and eating spicy food, and I love a nice cup of tea.
          </p>

          <p>
            A lifelong resident of Marin County, I moved to Novato in 1999 and
            live there still with my wife and children and two cats.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4" />
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Reset" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a href="#" className="icon fa-twitter">
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a href="#" className="icon fa-github">
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
