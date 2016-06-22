import React, { PropTypes } from 'react'

const LoginView = React.createClass({
  render () {
    return (
      <div className="shell-content-mb">
        <div className="login-box">
          <h1>登&nbsp;&nbsp;录</h1>
          <ul className="form-list">
            <li className="form-item">
              <div className="dt">
                <span>用户名</span>
              </div>
              <div className="input-box">
                <input type="text" />
              </div>
            </li>
            <li className="form-item">
              <div className="dt">
                <span>密码</span>
              </div>
              <div className="input-box">
                <input type="password" />
              </div>
            </li>
          </ul>
          <div className="btn-box">
            <input
              className="btn"
              type="submit"
              defaultValue="登  录" />
          </div>
        </div>
      </div>

    )
  }
})

export default LoginView
