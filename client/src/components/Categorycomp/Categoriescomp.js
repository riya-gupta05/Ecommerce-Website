import React from 'react';
import './Categoriescomp.scss';
import {Link} from 'react-router-dom';
const Categoriescomp = () => {
  return (
    <div className='categories'>
        <div className='cold'>
            <div className="rowd">
                <img src='https://images.pexels.com/photos/818992/pexels-photo-818992.jpeg?auto=compress&cs=tinysrgb&w=1600' alt=''/>
                <button><Link className='link' to='/category/sale'>Sale</Link></button>
            </div>
            <div className="rowd">
            <img
            src="https://images.pexels.com/photos/2036646/pexels-photo-2036646.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <button>
            <Link to='/category/women' className="link">
              Women
            </Link>
          </button>
            </div>
        </div>
        <div className='cold'>
            <div className="rowd">
            <img
            src="https://images.pexels.com/photos/1813947/pexels-photo-1813947.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <button>
            <Link to="/category/newseason" className="link">
              New Season
            </Link>
          </button>
            </div>
        </div>
        <div className='cold col-l'>
            <div className="rowd">
                <div className="cold">
                    <div className="rowd">
                    <img
                src="https://images.pexels.com/photos/1192609/pexels-photo-1192609.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <button>
                <Link to="/category/mens" className="link">
                  Men
                </Link>
              </button>
                    </div>
                </div>
                <div className="cold">
                    <div className="rowd">
                    <img
                src="https://images.pexels.com/photos/2703202/pexels-photo-2703202.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <button>
                <Link to="/category/accessories" className="link">
                  Accessories
                </Link>
              </button>
                    </div>
                </div>
            </div>
            <div className="rowd">
            <img
            src="https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=1600"
            alt=""
          />
          <button>
            <Link to="/category/kids" className="link">
              Kids
            </Link>
          </button>
            </div>
        </div>
      
    </div>
  )
}

export default Categoriescomp
