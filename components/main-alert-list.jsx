import React, { PropTypes } from 'react'

const MainAlertList = React.createClass({
  componentDidMount() {
    $('.J_scroll_01').niceScroll({
        background: "#ddd",
        cursorcolor: "#aaa",
        cursoropacitymin:0.3,
        cursoropacitymax: 0.7,
        cursorwidth: "7px",
        cursorborder: "0",
        cursorborderradius: "0px",
        autohidemode: "leave"
    });
  },
  render () {
    return (
      <div className="bot-box">
        <div className="information-box">
          <div className="tab-box">
            <div className="item sel">
              <i />
              <span>实时告警</span>
            </div>
            <div className="item">
              <i />
              <span>消息栏</span>
            </div>
            <div className="item">
              <i />
              <span>属性</span>
            </div>
          </div>
          <div className="main-box">
            <div className="content-box waring-box">
              <ul className="action-box">
                <li className="model">
                  <i className="fa fa-table" />
                </li>
                <li className="filter">
                  <i className="fa fa-check" />
                  <span>紧急</span>
                </li>
                <li className="filter">
                  <i className="fa fa-check" />
                  <span>严重</span>
                </li>
                <li className="filter close">
                  <i className="fa fa-close" />
                  <span>普通</span>
                </li>
              </ul>
              <div className="table-tit">
                <table>
                  <tbody>
                    <tr>
                      <th>告警序号</th>
                      <th>告警类型</th>
                      <th>告警级别</th>
                      <th>发生时间</th>
                      <th>设备</th>
                      <th>IP</th>
                      <th>备注</th>
                      <th>操作</th>
                    </tr>
                    <tr>
                      <td>null</td>
                      <td>null</td>
                      <td>null</td>
                      <td>null</td>
                      <td>null</td>
                      <td>null</td>
                      <td>null</td>
                      <td>null</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="table-content J_scroll_01">
                <table>
                  <tbody>
                    <tr className="hide">
                      <th>告警序号</th>
                      <th>告警类型</th>
                      <th>告警级别</th>
                      <th>发生时间</th>
                      <th>设备</th>
                      <th>IP</th>
                      <th>备注</th>
                      <th>操作</th>
                    </tr>
                    <tr>
                      <td>null</td>
                      <td>null</td>
                      <td>null</td>
                      <td>null</td>
                      <td>null</td>
                      <td>null</td>
                      <td>null</td>
                      <td>null</td>
                    </tr>
                    <tr>
                      <td>null</td>
                      <td>null</td>
                      <td>null</td>
                      <td>null</td>
                      <td>null</td>
                      <td>null</td>
                      <td>null</td>
                      <td>null</td>
                    </tr>
                    <tr>
                      <td>null</td>
                      <td>null</td>
                      <td>null</td>
                      <td>null</td>
                      <td>null</td>
                      <td>null</td>
                      <td>null</td>
                      <td>null</td>
                    </tr>
                    <tr>
                      <td>null</td>
                      <td>null</td>
                      <td>null</td>
                      <td>null</td>
                      <td>null</td>
                      <td>null</td>
                      <td>null</td>
                      <td>null</td>
                    </tr>
                    <tr>
                      <td>null</td>
                      <td>null</td>
                      <td>null</td>
                      <td>null</td>
                      <td>null</td>
                      <td>null</td>
                      <td>null</td>
                      <td>null</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <div
              className="content-box message-box"
              style={{display: 'none'}}>
              <ul className="message-list J_scroll_01">
                <li>
                  <p>欢迎使用本系统：2016-12-04&nbsp;13:20:45</p>
                </li>
                <li>
                  <p>欢迎使用本系统：2016-12-04&nbsp;13:20:45</p>
                </li>
                <li>
                  <p>欢迎使用本系统：2016-12-04&nbsp;13:20:45</p>
                </li>
                <li>
                  <p>欢迎使用本系统：2016-12-04&nbsp;13:20:45</p>
                </li>
                <li>
                  <p>欢迎使用本系统：2016-12-04&nbsp;13:20:45</p>
                </li>
                <li>
                  <p>欢迎使用本系统：2016-12-04&nbsp;13:20:45</p>
                </li>
                <li>
                  <p>欢迎使用本系统：2016-12-04&nbsp;13:20:45</p>
                </li>
                <li>
                  <p>欢迎使用本系统：2016-12-04&nbsp;13:20:45</p>
                </li>
                <li>
                  <p>欢迎使用本系统：2016-12-04&nbsp;13:20:45</p>
                </li>
                <li>
                  <p>欢迎使用本系统：2016-12-04&nbsp;13:20:45</p>
                </li>
              </ul>
            </div>
            <div
              className="content-box attr-box"
              style={{display: 'none'}}>
              <div className="table-tit">
                <table>
                  <tbody>
                    <tr>
                      <th>属性</th>
                      <th>值</th>
                    </tr>
                    <tr>
                      <td>属性名称</td>
                      <td>qq</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="table-content J_scroll_01">
                <table>
                  <tbody>
                    <tr className="hide">
                      <th>属性</th>
                      <th>值</th>
                    </tr>
                    <tr>
                      <td>属性名称</td>
                      <td>qq</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
  }
})

export default MainAlertList
