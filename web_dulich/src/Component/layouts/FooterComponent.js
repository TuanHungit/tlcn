import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class FooterComponent extends Component {
    render() {
        return (
            <footer className="footer  pt-2 mt-10">
                <div style={{color:'white'}} className="row">
                    <div className="col col-4">
                        <h5>Về chúng tôi</h5>
                        <p></p>
                        <p>Tuấn Hùng - Ngọc Tuyền</p>
                    </div>
                    <div className="col col-3">
                      <h5>Du lịch</h5>
                     <p><Link>Bắc</Link> - <Link>Trung</Link> - <Link>Nam</Link></p> 
                     <Link>Quốc tế</Link>
                    </div>
                    <div className="col col-lg-2">
                      <h5>Theo dõi</h5> 
                      <a className=" text-primary btn-floating btn-lg btn-fb" type="button" role="button"><i class="fab fa-facebook-f"></i></a>
                      <a className=" text-danger btn-floating btn-lg btn-ins" type="button" role="button"><i class="fab fa-instagram"></i></a>
                    </div>
                    <div className="col col-2">
                        <h5>Địa chỉ</h5>
                    </div>

                </div>
                <span className="text-muted">All Right Reserved 2020 @NT_TH</span>
            </footer>
        )
    }
}
export default FooterComponent