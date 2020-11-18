import React, { useState, useEffect } from 'react'
import moment from 'moment'
import { withRouter } from 'react-router-dom'
import { MdAddCircle, MdModeEdit, MdDelete } from 'react-icons/md'
import { Button } from 'react-bootstrap'
import '../../../style/55.css'

function ClassData(props) {
  const sid = props.match.params.sid
  console.log(sid)
  const [myData, setMydata] = useState([])
  const [delUpdate, setDelUpdate] = useState(false)
  const getData = async () => {
    const res = await fetch('http://localhost:3000/seller/ClassData', {
      method: 'GET',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
    })
    const data = await res.json()
    console.log(data)
    setMydata(data)
  }

  const delData = async (sid) => {
    setDelUpdate(!delUpdate)
    const res = await fetch(
      'http://localhost:3000/seller/ClassData/del/' + sid,
      {
        method: 'DELETE',
        headers: new Headers({
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }),
      }
    )
    const data = [...(await res.json())]

    console.log(data)
    if (!data.sid) {
      const newClass = data.filter((v, i) => {
        return v.sid !== sid
      })

      setMydata(newClass)
      alert('刪除完成')
    }
  }
  useEffect(() => {
    getData()
  }, [delUpdate,myData])

  const display = (
    <>

<div className="container">
        <h3>課程列表</h3>
      </div> 

      <table class="table table-striped">
        <thead>
          <tr class="title">
            <th scope="col" className="text-nowrap">
              課程代號
            </th>
            <th scope="col" className="text-nowrap">
              課程名稱
            </th>
            <th scope="col" className="text-nowrap">
              開課日期
            </th>
            <th scope="col" className="text-nowrap">
              課程地區
            </th>
            <th scope="col" className="text-nowrap">
              課程地點
            </th>
            <th scope="col" className="text-nowrap">
              課程內容
            </th>
            <th scope="col" className="text-nowrap">
              課程描述{' '}
            </th>
            <th scope="col" className="text-nowrap">
              課程最多人數
            </th>
            <th scope="col" className="text-nowrap">
              圖片src
            </th>
          </tr>
        </thead>
        <tbody>
          {myData.map((v, i) => {
            return (
              <tr key={v.sid}>
                <td width="15" className="sid">
                  {v.sid}
                </td>
                <td>{v.act_title}</td>
                <td>{moment(v.date).format('YYYY-MM-DD ')}</td>
                <td>{v.city}</td>
                <td>{v.view_place}</td>
                <td>{v.title}</td>
                <td>{v.sub_title}</td>
                <td>{v.act_members}</td>

                <td>
                  <img
                    style={
                      v.pic_big
                        ? {
                          height: '160px',
                          width: '160px',
                        }
                        : {}
                    }
                    src={'http://localhost:3001/img/CourseList/' + v.pic_big}
                    alt=""
                  />
                </td>

                <td class="bu">
                  <Button
                    variant="primary block"
                    onClick={() => {
                      props.history.push('/CLassEdit/' + v.sid)
                    }}
                  >
                     {' '}
                    <MdModeEdit /> 編輯
                  </Button>{' '}
                  
                  <Button
                    variant="danger block"
                    onClick={() => {
                      delData(v.sid)
                    }}
                  >
                    {' '}
                    <MdDelete /> 刪除
                  </Button>{' '}
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
  return (
    <>
  <div>
          <div className="">{display}</div>

    </div>
    </>
  )
}
export default withRouter(ClassData)
